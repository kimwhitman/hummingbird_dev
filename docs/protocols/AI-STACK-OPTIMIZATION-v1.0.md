# AI Stack Optimization Protocol

**Version:** 1.0
**Date:** 2025-01-23
**Status:** Active
**Purpose:** Guidelines for selecting technologies that maximize AI agent code generation success rates

---

## Core Principle

**AI agents excel at pattern-based code generation. Choose technologies with maximum training corpus coverage and declarative patterns.**

---

## Technology Selection Criteria

### 1. Training Corpus Density
- **High Priority:** Frameworks with >100k GitHub examples
- **Preferred:** Well-documented in official docs + Stack Overflow
- **Avoid:** Technologies released <6 months ago

### 2. Declarative vs. Imperative
- **Prefer:** Schemas, configs, component patterns
- **Avoid:** Complex imperative logic, state machines (unless well-documented)

### 3. Type Safety
- **Required:** TypeScript end-to-end
- **Preferred:** Type inference (AI doesn't specify types, they flow)
- **Avoid:** Runtime-only validation

### 4. Error Message Quality
- **Required:** Clear, actionable error messages
- **Preferred:** "Did you mean...?" suggestions
- **Avoid:** Cryptic stack traces without context

---

## Approved Stack (Hummingbird)

### Frontend
- **Framework:** Next.js 15 App Router
- **Reason:** Massive training corpus, file-based routing (low context), excellent docs
- **AI Success Rate:** ~95%

### Backend
- **Database:** Convex
- **Reason:** Declarative schema, no migrations, type-safe functions, real-time built-in
- **AI Success Rate:** ~90%

### Auth
- **Provider:** Clerk
- **Reason:** Pre-built components, standard patterns, good docs
- **AI Success Rate:** ~95%

### UI
- **System:** shadcn/ui + Radix + Tailwind
- **Reason:** Copy-paste components, utility classes, huge training corpus
- **AI Success Rate:** ~98%

### Forms
- **Library:** React Hook Form + Zod
- **Reason:** Standard pattern, type-safe validation, excellent docs
- **AI Success Rate:** ~95%

### State
- **Library:** Zustand (simple) or React Context
- **Reason:** Simple API, high example density
- **AI Success Rate:** ~90%

### AI
- **SDK:** Vercel AI SDK
- **Reason:** Simpler than Agent SDK, more training data, standard streaming
- **AI Success Rate:** ~85%

---

## Technologies to Avoid (for MVP)

| Technology | Why Avoid | Alternative |
|-----------|-----------|-------------|
| TanStack Start | Too new (<15% training corpus) | Next.js 15 |
| XState | Complex state machines (~30% corpus) | Zustand |
| Inngest/Temporal | Complex orchestration | Vercel Cron |
| MCP Protocol | Too new (~5% corpus) | Standard function calls |
| Claude Agent SDK | Too new (~10% corpus) | Vercel AI SDK |
| React Native | Platform-specific complexity | Next.js PWA |
| BetterAuth | Too new, less examples | Clerk |

---

## MVC Integration

When creating MVC slices for AI agents:

### Good Slice Example
```
Brief: Add reactions to posts
Reading List:
  - packages/convex/convex/schema.ts (posts table)
  - Standard React Hook Form patterns
Guardrails:
  - Only edit: packages/convex/convex/reactions.ts, apps/web/src/components/reactions/
Task:
  1. Add reactions table to schema
  2. Create mutation: addReaction
  3. Create UI component: ReactionButton
Verification:
  - Schema compiles
  - Mutation works in Convex dashboard
  - Button renders and calls mutation
```

**AI Success:** ~95% (standard patterns, clear scope)

### Bad Slice Example
```
Brief: Add XState machine for post approval workflow
Reading List:
  - (agent must understand full state graph)
Guardrails:
  - Edit: machines/postApproval.ts
Task:
  1. Create state machine with draft → pending → approved states
  2. Add guards for director approval
  3. Connect to UI
```

**AI Success:** ~60% (complex, requires full context, easy to hallucinate)

---

## Version History

- **v1.0** (2025-01-23): Initial protocol for Hummingbird AI-optimized stack
