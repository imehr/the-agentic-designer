# Changelog - The Agentic Designer

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
