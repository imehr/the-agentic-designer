# Changelog - The Agentic Designer

## v0.3.0 - June 2026

### Release Summary

This release applies the 2026-06-11 clip-update round: ten new field-note sections drawn from the week's agentic-design bookmarks, placed across six chapters (03, 04, 09, 11, 12, 14). All public artifacts are rebuilt and republished: self-contained HTML, paged HTML, PDF (320 pages), EPUB, and cover image.

### Content Changes

**Prompt-template discipline: role / output / constraints / stop (Chapter 03).** A reusable four-block prompt skeleton — role, output, constraints, stop — that turns ad-hoc prompting into a repeatable discipline, with five ready-to-run design templates (component spec, heuristic UX audit, task-flow/IA, token mapping, microcopy) and guidance for folding the skeleton into a skill you already run.

**Visual prompting: point, draw, or talk on the live UI (Chapter 12).** Cursor's Design Mode as an evolution of the review-and-iterate loop: annotate the rendered UI and the agent maps the mark back to source code rather than a throwaway DOM patch. Links to the official [Design Mode announcement](https://cursor.com/blog/design-mode).

**Generating ideas directly in HTML instead of walls of text (Chapter 04).** HTML as a divergent-ideation surface — having the agent lay out the option space as a scannable page of variations rather than a prose list, with a worked prompt that forces breadth and layout.

**html-video: a CapCut-style editing layer on Hyperframes (Chapter 09).** An open-source editing layer on the [Hyperframes](https://github.com/heygen-com/hyperframes) runtime that adds paginated preview, frame-level text editing, six auto-detected agent CLIs, and MiniMax-generated narration and music.

**TypeUI: one markdown file per component (Chapter 03).** A design-skill platform whose transferable lesson is the storage format: one markdown file per concern (brand, buttons, typography, cards), served to multiple agents through one MCP endpoint, because agents read prose more fluently than schema blobs.

**Multica: agents as assignable teammates on a task board (Chapter 11).** A persistent-infrastructure orchestration model — agents become first-class entries on a task board with squad routing, compounding skills, and cron autopilots — contrasted against the in-session orchestrator/subagent pattern.

**Generative UI frameworks: when the agent renders the interface at runtime (Chapter 14).** A future-direction note on AG-UI / runtime generative UI, weighing the reviewability cost: runtime-only interfaces trade diffability and versioning for immediacy, which suits ephemeral surfaces more than durable product UI.

**Self-healing `/goal` commands and the limits of autonomous plans (Chapter 11).** A community `/goal` upgrade that tries to detect when an autonomous run has gone off-plan and repair the plan, not just the code — flagged as a direction to watch and test rather than a recommendation.

**Xiaohei illustration skill: a single-character explainer-graphic capability (Chapter 03).** A skill that turns text into hand-drawn explainer graphics narrated by one recurring character, used to make the larger point that a skill freezes a complete visual fingerprint into a reusable instruction. Includes a figure generated live in the Xiaohei style for this edition.

**SkillVault: a marketplace for discovering and distributing agent skills (Chapter 03).** A cross-tool marketplace for skills, agents, hooks, and rules — framed as a discovery layer ahead of the install-and-review gate, not a substitute for reading a skill's source before trusting it with your brand.

### Artifacts

- HTML: `the-agentic-designer.html`
- Paged HTML Preview: `the-agentic-designer-paged.html`
- PDF: `the-agentic-designer.pdf`
- ePub: `the-agentic-designer.epub`

### Validation

- Content applied across chapters 03, 04, 09, 11, 12, 14; version bumped from 0.2.0 to 0.3.0.
- PDF (320 pages, 200 embedded figures) and EPUB (25/25 package checks) rebuilt from the same updated draft source.
- HTML and paged HTML re-published as self-contained single files (figures embedded as data URIs).
- Inline `[text](url)` link rendering added to the clip-apply pipeline so source references resolve as real links; covered by tests.

### Known Issues

- None affecting content. The paged-media chapter-opener running-header CSS contract is mid-revision in the source repo and was overridden for this export; it does not affect the PDF, EPUB, or content.

## v0.2.0 - 2026-06-04

### Release Summary

This release adds eight new sections and one chapter update across chapters 03, 04, 09, 10, 11, and 14, then republishes all public artifacts: HTML, paged HTML, PDF (317 pages), EPUB, and cover image.

### Content Changes

**Karpathy's CLAUDE.md: four rules, 65 lines (Chapter 03).** Why a minimal 65-line CLAUDE.md outperforms comprehensive but unfocused harnesses, mapped to design-specific agent behavior.

**Beautiful Feishu Whiteboard (Chapter 03).** A skill generating editable SVG diagrams inside Feishu/Lark docs, as a case study in platform-specific constraint handling.

**SkillSpector: security scanning for agent skills (Chapter 03).** NVIDIA's scanner checking 64 vulnerability patterns across 16 categories, with Claude Code / OpenCode / Codex integration and three real-world use cases.

**anydesign: extracting design tokens from visual sources (Chapter 04).** A skill extracting structured tokens from screenshots, live sites, and Figma, producing CSS variables, Tailwind config, and JSON with confidence levels.

**frame.md: design-system templates for video (Chapter 09).** A Hyperframes feature bridging design systems and video output via markdown templates, skeleton layouts, and shader transitions.

**From reference video to animation (Chapter 09).** The video-to-animation pipeline: ffmpeg frame extraction, LLM motion understanding, AnimSpec, and MagicPath in the Remotion/Hyperframes stack.

**Web access: Firecrawl and Exa MCP (Chapter 10).** Two MCP servers for live web access, with six practical workflows and security considerations.

**McKinsey 24-hour sprint framework (Chapter 14).** A framework for agentic software delivery at organizational scale, with a 2027-2028 timeline prediction.

**Dynamic Workflows update (Chapter 11).** Updated the trigger word to "ultracode" and added a "Workflow Patterns from the Field" subsection (fan-out, adversarial verification, tournament, loop-until-done).

### Artifacts

- HTML: `the-agentic-designer.html`
- Paged HTML Preview: `the-agentic-designer-paged.html`
- PDF: `the-agentic-designer.pdf`
- ePub: `the-agentic-designer.epub`

### Known Issues

- None known.

## v0.1.1 - May 2026

### Release Summary

This release adds the Dynamic Workflows chapter update and a set of bookmark-style agentic design field notes, then republishes all public artifacts: HTML, paged HTML, PDF, EPUB, and cover image.

### Content Changes

**Dynamic Workflows as orchestration for design work.** Expanded Chapter 11 with a full Dynamic Workflows treatment that frames workflow scripts as repeatable design operating artifacts. The update covers when to use workflows instead of live chat, how workflow scripts fan out agents and verify findings, a component-library audit example, reusable design-team workflow prompts, detailed design use cases, model/cost guidance, and the official Claude Code Dynamic Workflows documentation as the implementation reference.

**TasteSkill as reusable taste context.** Added a bookmark explaining TasteSkill-style repositories as reusable containers for taste, standards, and constraints in agentic front-end work. The note frames skills as guardrails that help agents preserve visual judgment across sessions, with a footer link to the actual TasteSkill repository/resource rather than the social post that surfaced it.

**Generated motion for concept slides.** Added a bookmark on using video-generation models to animate static concept slides without destroying their visual language. The note keeps the original experiment intact: preserve the slide composition, animate existing illustrations subtly, guide attention from one element to the next, and avoid turning the artifact into generic 3D or live-action output.

**Markdown comments as agent review infrastructure.** Added a bookmark on markdown-native comments and suggested changes as a practical review layer for agent-assisted work. The note connects tools such as Roughdraft-style review surfaces to the book's larger argument: feedback should live where the next agent and the next version of the author can find it, not only inside a chat transcript.

**Claude settings as design environment.** Added a bookmark that treats Claude configuration as part of the design interface rather than hidden administration. The note explains why memory, project instructions, extended thinking, search, plugins, hooks, and permission settings affect the quality of agentic design output before the first artifact is generated.

**Taste skills from design references.** Added a bookmark on turning design references into operational skill files. The note explains how reference analysis can become concrete agent rules around spacing, hierarchy, rhythm, density, typography, composition, and failure modes, so the agent receives design judgment rather than vague adjectives.

**Anti-slop skills as design guardrails.** Added a bookmark on anti-slop skills as reusable safeguards against generic AI interface patterns. The note frames anti-slop work as a design-stack decision: keep the skill only when it improves context, judgment, and revision speed, and leave it as a reference when it only adds novelty.

**Figma export as agent context.** Added a bookmark on treating Figma export as structured context for agents instead of a static handoff. The note explains how exported frames, component names, tokens, and layout information can reduce translation loss when moving from design artifact to implementation.

**Anchored feedback for agentic design review.** Added a bookmark on attaching feedback directly to the artifact under review. The note argues that agentic critique works better when comments are anchored to UI elements, files, or sections, because the next revision can preserve the location and intent of the feedback.

**Opening prompts set the design ceiling.** Added a bookmark on first prompts as the ceiling of an agentic design session. The note explains how the opening brief sets audience, visual standard, constraints, and failure modes before the agent creates the first artifact, making later refinement less dependent on correcting wrong assumptions.

### Artifacts

- HTML: `the-agentic-designer.html`
- Paged HTML Preview: `the-agentic-designer-paged.html`
- PDF: `the-agentic-designer.pdf`
- ePub: `the-agentic-designer.epub`

### Validation

- Export validation passed: 69/69 checks.
- Public package sync used `publish-repo --skip-preflight` after the same export artifacts passed 69/69 checks; duplicate publish preflight was skipped because the local verifier process hung during the public sync.
- PDF and EPUB were regenerated from the same updated draft source.

### Known Issues

- None known.
