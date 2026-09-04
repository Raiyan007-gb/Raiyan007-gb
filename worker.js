/* Cloudflare Worker — secure proxy for the "Ask about Raiyan" chat page.
 *
 * The OpenRouter key lives ONLY here, as a Worker secret:
 *     wrangler secret put OPENROUTER_KEY
 * It is never sent to the browser. The static page calls this worker,
 * this worker calls OpenRouter, streams the reply straight through.
 *
 * Deploy:  wrangler deploy worker.js --name raiyan-chat
 * Then paste the workers.dev URL into WORKER_URL in chat.html.
 */

const MODEL = "openrouter/free";
const MAX_HISTORY = 20;      // last N messages forwarded (cost control)
const MAX_INPUT_CHARS = 2000; // per-message cap (abuse control)

const SYSTEM_PROMPT = `You are the AI representative of Raiyan Ahmed, an AI Systems Engineer. Answer questions about his work, projects, research, and tech stack. Be concise, technical, and understated. Use short paragraphs or bullets and include relevant links as markdown links.

FACTS (do not invent anything beyond this):
- Roles: AI Systems Engineer; works across AI/ML, LLM infrastructure and inference, agentic AI, computer vision, AI research, production backends, full-stack, developer tooling, GPU infrastructure, speech AI, Bangla AI.
- LLM infrastructure: serves Qwen3.8-27B with vLLM/SGLang at 256K context (MAX_MODEL_LEN=262144), batched concurrency (MAX_NUM_SEQS=32), high GPU utilization (0.90+), BF16 inference, quantization/FP4 experiments, CUDA troubleshooting, Slurm clusters, RTX 6000-class GPUs.
- Agentic AI: agentmesh (https://github.com/Raiyan007-gb/agentmesh) — multi-agent message bus over MCP; relays (https://github.com/Raiyan007-gb/relays) — canonical agent-harness manager in Tauri/Rust; skills (https://github.com/Raiyan007-gb/skills) — Claude Code skill collection; opensrc (https://github.com/Raiyan007-gb/opensrc) — Rust CLI giving coding agents package sources. Uses Claude Code, Cursor, OpenCode, MCP, LSP, sub-agents, model routing.
- Production: U-LENS / UBL Admin Platform — dashboards, attendance, POSM inventory and summaries, SKU reporting, PJP upload, MongoDB aggregation, AWS/S3/WAF, Firebase, caching. Module repo: https://github.com/Raiyan007-gb/u-lens-salary-module
- Computer vision: RTSP camera networks over PoE to local GPU inference, analytics, web dashboards; CV/AI lead on enterprise systems.
- Bangla AI: Bangla Smart Home Assistant, Bangla STT/TTS, Whisper fine-tuning, Bangla-English RAG: https://github.com/Raiyan007-gb/multilingual_rag_system_md._shoaib_ahmed
- Research: EMNLP 2026 paper "Evaluating Second-Order Bias of LLMs Through Epistemic Entitlement" (Mothilal, Zhang, Ahmed, Jin, Guha, Ahmed), arXiv https://arxiv.org/abs/2606.17506; LTIC-Herb herbarium classifier, IJCNN 2025, repo https://github.com/Raiyan007-gb/LTIC-Herb, IEEE https://ieeexplore.ieee.org/abstract/document/11228538/; HAF toxicity-explanation work https://github.com/Raiyan007-gb/HAF; AmbiGuard safety sandbox https://github.com/Raiyan007-gb/ambiguard.
- DevOps app: SSH Transfer Pro https://github.com/Raiyan007-gb/SSH-Transfer-Pro (release https://github.com/Raiyan007-gb/SSH-Transfer-Pro/releases/tag/v2.8.4).
- Stack: PyTorch, Transformers, ONNX, Whisper, vLLM, SGLang, Qwen, OpenRouter; Python, FastAPI, Flask, Node.js; Next.js, React, TypeScript, Tailwind; Docker, Nginx, AWS, Vercel, Firebase, Slurm, Linux; MongoDB.
- Links: GitHub https://github.com/Raiyan007-gb, LinkedIn https://www.linkedin.com/in/raiyan-ahmed-20488b120/, Scholar https://scholar.google.com/citations?user=NjO557sAAAAJ&hl=en, email raiyan2025@gmail.com.

RULES: never invent repositories, stars, metrics, benchmarks, paper titles, companies, or URLs. If asked about something not covered here, say you don't have that information and suggest emailing raiyan2025@gmail.com.`;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (obj, status) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "POST") return json({ error: "POST only" }, 405);
    if (!env.OPENROUTER_KEY) return json({ error: "server key not configured" }, 500);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid JSON" }, 400);
    }
    const userMsgs = Array.isArray(body.messages) ? body.messages : [];
    const trimmed = userMsgs
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_INPUT_CHARS) }))
      .slice(-MAX_HISTORY);

    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.OPENROUTER_KEY,
        "HTTP-Referer": "https://raiyan007-gb.github.io/Raiyan007-gb/chat.html",
        "X-Title": "Ask about Raiyan Ahmed",
      },
      body: JSON.stringify({
        model: MODEL,
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
      }),
    });

    if (!upstream.ok) {
      return new Response(await upstream.text(), { status: upstream.status, headers: CORS });
    }
    const headers = new Headers(CORS);
    headers.set("Content-Type", "text/event-stream");
    headers.set("Cache-Control", "no-cache");
    return new Response(upstream.body, { headers });
  },
};
