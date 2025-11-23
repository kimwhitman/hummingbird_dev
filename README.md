# Hummingbird 🐦

**AI-Powered Early Childhood Education Platform**

Built with 100% AI-generated code following the MVC (Minimum Viable Context) protocol.

---

## 🎯 Project Overview

Hummingbird is a modern communication platform connecting teachers, parents, and schools in early childhood education. Teachers share photos and updates, parents stay connected to their children's day, and administrators manage complex multi-campus operations.

**Key Features:**
- 📸 Teacher story feed (photos, videos, daily activities)
- 👨‍👩‍👧‍👦 Family access (parents, grandparents, caregivers)
- 🔐 35+ role permission system (teachers, directors, specialists)
- 🤖 AI-powered features (auto-captions, translations, moderation)
- ⚡ Real-time updates (parents see posts instantly)
- 📱 PWA mobile support (install to home screen)

---

## 🚀 Quick Start

### Prerequisites

- **Bun** 1.0+ ([install](https://bun.sh))
- **Node.js** 20+ (for Vercel deployment)
- **Convex** account ([signup](https://convex.dev))
- **Clerk** account ([signup](https://clerk.com))

### Installation

```bash
# Clone repository
git clone https://github.com/kimwhitman/hummingbird_dev.git
cd hummingbird_dev

# Install dependencies (using Bun)
bun install

# Set up environment variables
cp apps/web/.env.local.example apps/web/.env.local
# Edit apps/web/.env.local with your API keys

# Start development servers
bun run dev
```

Visit:
- **Web app:** http://localhost:3000
- **Convex dashboard:** https://dashboard.convex.dev

---

## 🏗️ Tech Stack (AI-Optimized)

This stack is optimized for **100% AI-generated code** following the **MVC (Minimum Viable Context)** protocol.

### Why These Technologies?

Each technology was chosen for **maximum AI agent success rate** based on:
1. **Training corpus density** (more examples = better AI code)
2. **Declarative patterns** (schemas > imperative logic)
3. **Type safety** (TypeScript catches AI errors)
4. **Error message quality** (AI self-corrects faster)

See `docs/protocols/AI-STACK-OPTIMIZATION-v1.0.md` for detailed rationale.

### Stack

| Layer | Technology | AI Success Rate | Why |
|-------|-----------|-----------------|-----|
| **Frontend** | Next.js 15 (App Router) | ~95% | Massive training corpus, file-based routing |
| **Backend** | Convex | ~90% | Declarative schema, no migrations, type-safe |
| **Auth** | Clerk | ~95% | Pre-built components, standard patterns |
| **UI** | shadcn/ui + Tailwind | ~98% | Copy-paste components, utility classes |
| **Forms** | React Hook Form + Zod | ~95% | Type-safe validation, standard pattern |
| **State** | Zustand | ~90% | Simple API, high example density |
| **AI** | Vercel AI SDK | ~85% | Simpler than Agent SDK, more training data |
| **Monorepo** | Turborepo + Bun | ~90% | Standard patterns, fast |

---

## 📁 Project Structure

```
hummingbird/
├── apps/
│   └── web/                    # Next.js 15 app (web + PWA)
│       ├── src/
│       │   ├── app/           # App Router pages
│       │   ├── components/    # React components
│       │   └── lib/           # Utilities
│       └── public/            # Static assets, PWA manifest
│
├── packages/
│   ├── convex/                # Convex backend
│   │   └── convex/
│   │       ├── schema.ts      # Database schema (declarative)
│   │       ├── posts.ts       # Posts API
│   │       └── assignments.ts # Permissions (35+ roles)
│   │
│   ├── ui/                    # Shared UI components (shadcn/ui)
│   └── types/                 # Shared TypeScript types
│
├── docs/
│   └── protocols/             # PSA protocols
│       ├── MVC-METHOD-v1.0.md
│       └── AI-STACK-OPTIMIZATION-v1.0.md
│
├── AGENTS.md                  # AI agent guidelines
└── README.md                  # This file
```

---

## 🤖 For AI Agents

**This codebase is built 100% by AI agents following the MVC protocol.**

If you're an AI agent working on this project:

1. **Read AGENTS.md first** - Comprehensive guidelines
2. **Follow MVC protocol** - Work in narrow slices, strict guardrails
3. **Use standard patterns** - Don't invent novel abstractions
4. **Types guide you** - Read schema first, let types flow
5. **Self-document** - Next agent won't have your context

**Common MVC Slices:**
- Add database table → Edit `packages/convex/convex/schema.ts`
- Add Convex mutation → Edit `packages/convex/convex/<resource>.ts`
- Add Next.js page → Edit `apps/web/src/app/<path>/page.tsx`
- Add React component → Edit `apps/web/src/components/<name>/`

**See:** `AGENTS.md` for detailed guidelines and examples.

---

## 🔐 Complex Permission System

Hummingbird supports **35+ distinct roles** with fine-grained permissions:

**Role Categories:**
- **Platform** (internal): `platform_admin`, `platform_support`
- **School Leadership**: `owner`, `regional_director`, `director`
- **Teachers**: `lead_teacher`, `assistant_teacher`, `substitute_teacher`
- **Parents/Guardians**: `primary_guardian`, `secondary_guardian`, `grandparent`
- **Specialists**: `behavioral_specialist`, `nurse`, `curriculum_coordinator`

**How It Works:**
- **Authentication:** Clerk (who you are)
- **Authorization:** Convex `assignments` table (what you can do)
- **Scopes:** organization → campus → classroom → child

**Example:**
```typescript
// User "sarah_johnson" has assignments:
{
  role: "primary_guardian",
  scopeType: "child",
  scopeId: "child_emma_johnson"
}
{
  role: "primary_guardian",
  scopeType: "child",
  scopeId: "child_alex_johnson"
}
```

Sarah can view posts that tag Emma or Alex, but not other children.

**See:** `packages/types/src/index.ts` for all role definitions.

---

## 🎨 UI Components (shadcn/ui)

This project uses **shadcn/ui** - a collection of copy-paste components built on Radix UI + Tailwind.

**Why shadcn/ui?**
- ✅ Copy-paste (not installed as dependency)
- ✅ Highly customizable
- ✅ Accessible by default (Radix UI)
- ✅ Type-safe
- ✅ **AI agents know these patterns well** (~98% success rate)

**Available Components:**
- Button, Dialog, Dropdown Menu, Toast, Avatar, Label, Select, etc.

**See:** `packages/ui/src/components/` for shared components.

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy

# Set environment variables in Vercel dashboard:
# - NEXT_PUBLIC_CONVEX_URL
# - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# - CLERK_SECRET_KEY
# - ANTHROPIC_API_KEY
```

### Backend (Convex)

```bash
# Deploy Convex functions
bun --filter @hummingbird/convex deploy

# Convex handles schema migrations automatically
```

---

## 📊 Development Workflow

### For Human Developers

```bash
# Start all apps in development
bun run dev

# Run type checking
bun run typecheck

# Run tests
bun run test

# Format code
bun run format

# Build for production
bun run build
```

### For AI Agents (MVC Protocol)

1. **Receive MVC Brief** - Narrow scope, clear guardrails
2. **Read Context** - Schema, types, referenced files only
3. **Execute Slice** - Edit specified files, run verification
4. **Provide Evidence** - Test outputs, coverage, artifacts
5. **Reset Context** - Move to next slice (no accumulated memory)

**See:** `docs/protocols/MVC-METHOD-v1.0.md`

---

## 🎯 Product Roadmap

### MVP (Months 0-3)
- [x] Project initialization (AI-optimized stack)
- [ ] Teacher post creation (photos, captions, tagging)
- [ ] Parent feed view (real-time updates)
- [ ] Basic permissions (teachers, parents, directors)
- [ ] PWA mobile app (install to home screen)
- [ ] Clerk authentication (email, phone, social)

### Phase 2 (Months 3-6)
- [ ] AI auto-captions (Claude Sonnet)
- [ ] Multi-lingual translations
- [ ] Content moderation (safety)
- [ ] Daily summary emails
- [ ] Advanced permissions (35+ roles)
- [ ] Multi-campus support

### Phase 3 (Months 6-12)
- [ ] Curriculum gap analysis (semantic search)
- [ ] Scheduled AI summaries
- [ ] Smart child tagging
- [ ] Analytics dashboard
- [ ] Mobile optimizations

---

## 🤝 Contributing

This project uses **100% AI-generated code** following the **MVC protocol**.

**For AI Agents:**
1. Read `AGENTS.md` for comprehensive guidelines
2. Follow MVC protocol (`docs/protocols/MVC-METHOD-v1.0.md`)
3. Use standard patterns (don't invent abstractions)
4. Provide evidence bundles (tests, coverage, artifacts)

**For Humans:**
1. Create MVC briefs for AI agents
2. Review AI-generated code
3. Run verification commands
4. Merge completed slices

---

## 📄 License

[Add license here]

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org) - React framework
- [Convex](https://convex.dev) - Serverless backend
- [Clerk](https://clerk.com) - Authentication
- [Vercel](https://vercel.com) - Hosting
- [Anthropic Claude](https://anthropic.com) - AI features
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling

**Special Thanks:**
- PSA (Protocol for Software Agents) community
- AI coding agent teams (Claude Code, Cursor, etc.)

---

**Built with ❤️ and 🤖 (100% AI-generated code)**
