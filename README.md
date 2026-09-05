<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:17212B,100:3E8E7E&height=180&section=header&text=Raiyan%20Ahmed&fontSize=40&fontColor=F5F5F5&fontAlignY=35&animation=fadeIn&desc=AI%20Systems%20Engineer%20%C2%B7%20LLM%20Infrastructure%20%C2%B7%20Agentic%20AI&descAlignY=62&descSize=16&descColor=F5F5F5" width="100%" alt="Raiyan Ahmed" />

**Director of Engineering · Senior AI Lead** at [The Data Island](https://www.thedataisland.com/) · graduate of [North South University](https://www.northsouth.edu/), Dhaka

<img src="https://readme-typing-svg.demolab.com/?font=JetBrains+Mono&size=15&pause=1400&color=3E8E7E&center=true&vCenter=true&width=680&lines=Building+AI+systems+end+to+end+%E2%80%94+GPU+to+production;Long-context+inference+%C2%B7+agentic+tooling+%C2%B7+computer+vision;Bangla+speech+%26+language+AI+%C2%B7+published+researcher" alt="what I work on" />

[![Email](https://img.shields.io/badge/Email-17212B?style=flat-square&logo=gmail&logoColor=3E8E7E)](mailto:raiyan2025@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-17212B?style=flat-square&logo=linkedin&logoColor=3E8E7E)](https://www.linkedin.com/in/raiyan-ahmed-20488b120/)
[![GitHub](https://img.shields.io/badge/GitHub-17212B?style=flat-square&logo=github&logoColor=3E8E7E)](https://github.com/Raiyan007-gb)
[![Google Scholar](https://img.shields.io/badge/Google_Scholar-17212B?style=flat-square&logo=googlescholar&logoColor=3E8E7E)](https://scholar.google.com/citations?hl=en&user=NjO557sAAAAJ)
[![arXiv](https://img.shields.io/badge/arXiv-2606.17506-17212B?style=flat-square&logo=arxiv&logoColor=3E8E7E)](https://arxiv.org/abs/2606.17506)

</div>

I build AI systems end to end — GPU-level inference, agent infrastructure, computer-vision platforms, and the production applications wrapped around them. Models are the easy part. The work I actually care about starts after: serving, latency, memory, tool use, integration, reliability — the parts that decide whether something survives contact with real traffic.

<div align="center">

[<img src="assets/chat-preview.png" width="640" alt="Live AI interface preview" />](https://raiyan007-gb.github.io/Raiyan007-gb/chat.html)

*Open the live AI interface to ask about the work below — it reads this repo's public data on request, no API key needed.*

</div>

> **Everything after the model works is the actual job.**

## Currently

- Tuning 256K-context serving for Qwen3.8-27B across Slurm-managed GPU nodes
- Building shared infrastructure for coding agents — message bus, config store, skills — across Claude Code and OpenCode
- Fine-tuning Whisper and building Bangla–English RAG for Bangla speech and language AI
- Running CV analytics on live RTSP camera networks for enterprise deployments
- Co-author on an EMNLP 2026 paper on second-order bias in LLM epistemic judgments

## Flagship systems

**Long-context LLM inference.** Qwen3.8-27B served at 256K context on Slurm-managed GPU nodes, tuned for concurrent batching and memory headroom.
`agent / client → OpenAI-compatible API → vLLM / SGLang → Qwen3.8-27B → GPU cluster (Slurm)`
32 concurrent sequences · BF16 · 90% GPU utilization

**Agentic dev environment.** Infrastructure that lets coding agents operate software directly instead of just suggesting code: a shared message bus, one canonical config store, and a skill library wired into every harness.
`developer → coding agent → MCP / LSP → tools + codebase → test → deploy`
[agentmesh](https://github.com/Raiyan007-gb/agentmesh) · [relays](https://github.com/Raiyan007-gb/relays) · [skills](https://github.com/Raiyan007-gb/skills) · [opensrc](https://github.com/Raiyan007-gb/opensrc)

**Camera-to-dashboard.** Real-time video analytics — RTSP camera networks over PoE, local GPU inference, and a web dashboard — with published CV research behind the vision work.
`IP cameras (RTSP) → PoE network → local GPU → CV inference → analytics → dashboard`
[LTIC-Herb, IJCNN 2025](https://github.com/Raiyan007-gb/LTIC-Herb)

## Systems I build and run

| System | What it does | Stack | Status |
|---|---|---|---|
| U-Lens / UBL Admin Platform | Production admin portal for dashboards, attendance, POSM inventory, and SKU reporting on live databases | MongoDB · AWS S3 · WAF · Firebase | 🟢 Active |
| Bangla AI & speech | Smart-home assistant, Whisper fine-tuning, Bangla–English RAG with evaluation | Whisper · FAISS · LangChain · Flask | 🟢 Active · [repo](https://github.com/Raiyan007-gb/multilingual_rag_system_md._shoaib_ahmed) |
| AI Photodrive | AI-assisted photo/drive platform: API, frontends, Runpod pipelines | Python · TypeScript | 🔵 Stable |
| LTIC-Herb | Three-stage CLIP-ViT classifier, state of the art on Herbarium 2021/2022 | PyTorch · CLIP-ViT | 🔵 Stable · [repo](https://github.com/Raiyan007-gb/LTIC-Herb) · [paper](https://ieeexplore.ieee.org/abstract/document/11228538/) |
| SSH Transfer Pro | DevOps desktop app: SSH/SFTP browser, transfer engines, signed installers | Electron · ssh2 · NSIS | ⚪ Shipped · [repo](https://github.com/Raiyan007-gb/SSH-Transfer-Pro) · [download](https://github.com/Raiyan007-gb/SSH-Transfer-Pro/releases/tag/v2.8.4) |

## Research

> **Evaluating Second-Order Bias of LLMs Through Epistemic Entitlement** — accepted, EMNLP 2026
> Ramaravind Kommiya Mothilal, Terry Jingchen Zhang, **Raiyan Ahmed**, Zhijing Jin, Shion Guha, Syed Ishtiaque Ahmed
> [arXiv:2606.17506](https://arxiv.org/abs/2606.17506)

| Work | Area | Links |
|---|---|---|
| LTIC-Herb — long-tail herbarium classification (IJCNN 2025) | Vision · transformers | [repo](https://github.com/Raiyan007-gb/LTIC-Herb) · [IEEE](https://ieeexplore.ieee.org/abstract/document/11228538/) |
| HAF — faithfulness of toxicity explanations in LLMs | LLM evaluation | [repo](https://github.com/Raiyan007-gb/HAF) |
| AmbiGuard — sandbox for reflective evaluation of AI safety guardrails | AI safety | [repo](https://github.com/Raiyan007-gb/ambiguard) · [demo](https://uofthcdslab.github.io/ambiguard/) |

<details>
<summary>Research interests</summary>
<br>

Large language models, model architecture, efficient inference, AI systems, quantum computing and AI, large-scale deployment, multimodal AI, speech AI.

</details>

## Stack

**AI / ML**
![PyTorch](https://img.shields.io/badge/PyTorch-17212B?style=flat-square&logo=pytorch&logoColor=3E8E7E) ![Transformers](https://img.shields.io/badge/Transformers-17212B?style=flat-square&logo=huggingface&logoColor=3E8E7E) ![ONNX](https://img.shields.io/badge/ONNX-17212B?style=flat-square&logo=onnx&logoColor=3E8E7E) ![Whisper](https://img.shields.io/badge/Whisper-17212B?style=flat-square) ![vLLM](https://img.shields.io/badge/vLLM-17212B?style=flat-square) ![SGLang](https://img.shields.io/badge/SGLang-17212B?style=flat-square) ![Qwen](https://img.shields.io/badge/Qwen-17212B?style=flat-square) ![OpenRouter](https://img.shields.io/badge/OpenRouter-17212B?style=flat-square)

**Agents & tooling**
![Claude Code](https://img.shields.io/badge/Claude_Code-17212B?style=flat-square) ![Cursor](https://img.shields.io/badge/Cursor-17212B?style=flat-square) ![OpenCode](https://img.shields.io/badge/OpenCode-17212B?style=flat-square) ![MCP](https://img.shields.io/badge/MCP-17212B?style=flat-square) ![LSP](https://img.shields.io/badge/LSP-17212B?style=flat-square)

**Backend & data**
![Python](https://img.shields.io/badge/Python-17212B?style=flat-square&logo=python&logoColor=3E8E7E) ![FastAPI](https://img.shields.io/badge/FastAPI-17212B?style=flat-square&logo=fastapi&logoColor=3E8E7E) ![Flask](https://img.shields.io/badge/Flask-17212B?style=flat-square&logo=flask&logoColor=3E8E7E) ![Node.js](https://img.shields.io/badge/Node.js-17212B?style=flat-square&logo=nodedotjs&logoColor=3E8E7E) ![MongoDB](https://img.shields.io/badge/MongoDB-17212B?style=flat-square&logo=mongodb&logoColor=3E8E7E)

**Frontend & mobile**
![Next.js](https://img.shields.io/badge/Next.js-17212B?style=flat-square&logo=nextdotjs&logoColor=3E8E7E) ![React](https://img.shields.io/badge/React-17212B?style=flat-square&logo=react&logoColor=3E8E7E) ![TypeScript](https://img.shields.io/badge/TypeScript-17212B?style=flat-square&logo=typescript&logoColor=3E8E7E) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-17212B?style=flat-square&logo=tailwindcss&logoColor=3E8E7E) ![Flutter](https://img.shields.io/badge/Flutter-17212B?style=flat-square&logo=flutter&logoColor=3E8E7E)

**Infra & cloud**
![Docker](https://img.shields.io/badge/Docker-17212B?style=flat-square&logo=docker&logoColor=3E8E7E) ![Nginx](https://img.shields.io/badge/Nginx-17212B?style=flat-square&logo=nginx&logoColor=3E8E7E) ![AWS](https://img.shields.io/badge/AWS-17212B?style=flat-square&logo=amazonaws&logoColor=3E8E7E) ![Vercel](https://img.shields.io/badge/Vercel-17212B?style=flat-square&logo=vercel&logoColor=3E8E7E) ![Firebase](https://img.shields.io/badge/Firebase-17212B?style=flat-square&logo=firebase&logoColor=3E8E7E) ![Slurm](https://img.shields.io/badge/Slurm-17212B?style=flat-square) ![Linux](https://img.shields.io/badge/Linux-17212B?style=flat-square&logo=linux&logoColor=3E8E7E)

**Computer vision** — YOLO · RTSP · real-time video pipelines · local GPU inference

## GitHub activity

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Raiyan007-gb&show_icons=true&hide_border=true&title_color=3E8E7E&icon_color=3E8E7E&text_color=F5F5F5&bg_color=17212B" alt="GitHub stats" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raiyan007-gb&layout=compact&hide_border=true&title_color=3E8E7E&text_color=F5F5F5&bg_color=17212B" alt="Top languages" />

</div>

<!-- lowlighter/metrics renders (isocalendar + achievements) live in
     .github/workflows/metrics.yml — add a METRICS_TOKEN repo secret and run
     the Metrics workflow, then uncomment:
![Isometric commit calendar](metrics-isocalendar.svg)
![Achievements](metrics-achievements.svg)
-->

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:17212B,100:3E8E7E&height=120&section=footer" width="100%" alt="" />

Building at the intersection of AI systems, LLM infrastructure, agentic tooling, computer vision, and production engineering.

</div>
