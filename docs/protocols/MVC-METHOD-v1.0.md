# Minimum Viable Context (MVC) Method

**Purpose:** Provide a lightweight intervention to keep specialized agents aligned on high-risk tasks without flooding them with the entire project history.

This protocol was born from repeated failures on complex stories (Convex auth, AI spec) where agents either (a) went off-course in the codebase or (b) deleted unrelated files (the PROVE-FIRST incident). "MVC" gives us a scaffolding that makes narrowly scoped, high-value tasks solvable by a fresh agent while protecting the rest of the power plant.

**Key Idea:** Deliver the minimum context required for the next slice and nothing more, enforce strict guardrails, and encode verification expectations up front. The agent never holds the entire project in working memory—just the relevant files, doc references, and success criteria.

## When to Use

- Critical hot spots where work keeps regressing (auth, billing, AI schema).
- High-risk collaborators (new agents, different models) who don't know our repo/standards.
- Incremental story progressions that can be solved in isolated chunks.

## Summary

1. Context only for the current slice.
2. Guardrails locking file scope + forbidden commands.
3. Explicit instructions (step-by-step) with references.
4. Acceptance criteria tied to tests, lint, evidence logs.
5. Mandatory post-task verification by PM3.

"Minimum viable context" keeps the agent focused and prevents collateral damage.

---

_See full protocol in original file for complete implementation details._
