## v0.2.0 - 2026-06-04

### New Content

**Karpathy's CLAUDE.md: Four Rules, 65 Lines, 220k Stars (Chapter 03, section 03.2.5)**
Andrej Karpathy's minimal CLAUDE.md hit number one on GitHub trending with 220,000 stars. This section analyzes why a 65-line file with four rules outperforms comprehensive but unfocused harnesses, and maps each rule to design-specific agent behavior: think before generating, simplicity first, surgical changes, and goal-oriented execution.

**Beautiful Feishu Whiteboard (Chapter 03, section 03.4-feishu)**
A skill that generates editable SVG diagrams inside Feishu/Lark documents with 35 curated color palettes. Serves as a case study in platform-specific constraint handling: the agent must respect Feishu's renderer limitations (no opacity, no gradients, no blur) and work around known export bugs, producing living documentation rather than static screenshots.

**SkillSpector: Security Scanning for Agent Skills (Chapter 03, section 03.5)**
NVIDIA's security scanner for agent skills checks 64 vulnerability patterns across 16 categories. Covers risk scoring (0-100 scale), installation, and integration with Claude Code (pre-install hooks), OpenCode (validation scripts), and Codex (CI workflows). Includes three real-world use cases: scanning community skills before install, auditing existing team skill libraries, and enforcing team security thresholds in CI.

**anydesign: Extracting Design Tokens from Visual Sources (Chapter 04, section 04.4a)**
A design skill that extracts structured design tokens from screenshots, live websites via MCP, and Figma files. Produces CSS custom properties, Tailwind config, and JSON token files with confidence levels for each extracted value. Includes companion scripts for drift detection and cross-source verification.

**frame.md: Design System Templates for Video (Chapter 09, section 09.5a)**
A Hyperframes feature that bridges design systems and video output. Ships 8 templates, skeleton layouts, animation patterns, and shader transitions as markdown files. The agent reads the design spec, the frame.md template translates it, and Hyperframes renders the result.

**From Reference Video to Animation (Chapter 09, section 09.6)**
A new section covering the video-to-animation pipeline: how agents analyze reference video using ffmpeg frame extraction and LLM motion understanding, AnimSpec's video-to-prompt extraction service (16 output formats), MagicPath's agent-to-canvas handoff for editable designs, and how all three fit into the Remotion/Hyperframes rendering stack. Includes a practical workflow for recreating a competitor's onboarding animation.

**Web Access: Firecrawl and Exa MCP (Chapter 10, section 10.8)**
Two MCP servers that give agents live web access. Firecrawl provides structured web extraction (search, scrape, crawl, interact, monitor) at scale. Exa provides quick ad-hoc web searches inside agent sessions. Covers when to use which, six practical workflows (competitive audit, design cloning, multi-state UI capture, documentation verification, competitor monitoring, reference collection), and security considerations.

**McKinsey 24-Hour Sprint Framework (Chapter 14, section 14.2)**
McKinsey's framework for agentic software delivery at organizational scale. Covers the daily cadence (agent-written code by morning, human review by afternoon), eliminating handoffs through shared context, and building knowledge infrastructure (living docs, searchable context, ADRs). Includes a prediction for the 2027-2028 timeline.

### Updated Content

**Dynamic Workflows (Chapter 11, section 11.6)**
Updated the trigger word from "workflow" to "ultracode" with explanation of the May 2026 change that eliminated false triggers. Added new subsection "Workflow Patterns from the Field" covering fan-out, adversarial verification, tournament, and loop-until-done patterns.

### Infrastructure

- Updated publication date from May 2026 to June 2026 across all outputs.
- Bumped book version from 0.1.1 to 0.2.0.
- Generated new diagrams: SkillSpector pipeline (ch03-fig-new02), video-to-animation pipeline (ch09-fig-new02).
- Regenerated all output artifacts: HTML, paged HTML, PDF (317 pages), and EPUB.
