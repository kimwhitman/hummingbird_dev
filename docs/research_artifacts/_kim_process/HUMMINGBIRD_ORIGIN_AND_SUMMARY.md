# Hummingbird – Product Origin Story (Clean Summary for Outside PM Agent)

**Version:** Concise + Contextual + Ready for Research Agents

## 1. How It Started (Summer 2024)

The idea for Hummingbird emerged informally in Summer 2024 during a backyard BBQ between Kim Whitman and Jenn Duffield (owner of Dancing Moose Montessori Schools, 3 schools, ~950 students).

Kim had just returned from an AI Mastermind in Hawaii and was excited to apply practical AI concepts to real-world problems. Jenn shared long-standing frustrations with ClassDojo and the entire parent-teacher communication stack (emails, flyers, inconsistent updates, missed notices, overloaded teachers).

They aligned around a simple question:

> “What would a modern, AI-forward parent engagement platform look like if built from scratch for Montessori and early childhood?”

## 2. Foundational Research (Summer–Fall 2024)

Before building anything, Kim ran a deep discovery phase:

**Teacher & Admin Interviews (3 school campuses)**
Kim conducted extensive contextual inquiries at Dancing Moose’s three campuses.
These interviews revealed:
*   teachers drowning in documentation requirements
*   parents frustrated with fragmented communication
*   admins needing consistency, visibility, and ROI
These were condensed into early insights used to shape the first prototypes.

**Parent–Teacher Communication Survey (Fall 2024)**
Dancing Moose circulated a large community survey.
> ⚡ Results linked separately
Key themes: desire for clarity, reliability, connection, timeliness, and transparency.

**External Bullseye Interviews (Google Ventures Method)**
We hired an outside researcher (Connor) to run Bullseye Customer Interviews following Michael Margolis' GV methodology.
We secured 3 strong bullseye interviews that clarified core pains and expectations.

**Marketing / ICP Work**
Kim leveraged prompts and frameworks from Joe Stolte’s Mastermind to refine early ICPs and messaging foundations.

## 3. Early Product Attempts – And a Sudden Gap (July 2025)

We initially onboarded a design/UX lead, Matt in March, who worked entirely in frontend code (skipping Figma).
We ideated for hours, but:
*   No single source of truth
*   No Figma map
*   No unified product direction
*   No durable architecture

When Matt quit suddenly, it left us mid-ocean with no map.
He did leave:
*   a few rough Figma flows
*   early frontend components

Our CTO, Brett, brought in Kelly (frontend dev) to connect that work to the backend he’d started.
But we were missing:
 ✔ clear UX
 ✔ a cohesive product direction
 ✔ a single place to prototype major flows
This gap is what drove the next decision.

## 4. Discovering Lovable – Rapid Prototyping Begins (Sept 2025–now)

While trying to find and prep to onboard a new designer, Kim discovered Lovable, a tool that allows rapid “vibe-coded” prototyping through natural language prompts.
This became our fastest path to:
*   clarify UX
*   test assumptions
*   demo to parents/teachers/admins
*   gather reactions before writing “real code”

We structured Lovable prototypes around user states rather than full-system builds.

## 5. Prototyping by User State (Parent → Teacher → Admin)

### A. Parent User State (First Build)
Kim started here because she is a parent and designed for her own pains:
*   feeling disconnected from her child’s day
*   missing key updates
*   fragmented communication channels
*   no calendar sync
*   mixed PDFs, flyers, Dojo messages
*   no meaningful narrative or connection prompts

The Parent prototype became the north star of what “delight” should feel like.

### B. Teacher User State
Next, Kim focused on teachers — the most overloaded user group.
Key constraints uncovered:
*   Teachers should not be on their devices all day
*   But parents expect beautiful, varied, daily content
*   One teacher usually becomes the “designated poster” and gets crushed by work, especially if they’re the “perfectionist” persona.
*   Content quality varies drastically across staff (teacher survey results did not make sense to Jenn, the “underachiever minimalist reporters” who were the most present with the kids constituted Jenn’s best teachers, but they would receive the lowest parent satisfaction scores. The ones who did a great job posting in Dojo, but were maybe less present with the kids received higher marks. The incongruency was noticeable between the three campuses and Jenn’s colleagues at other multisite private preschools across the country had the same complaint.
*   Early career teachers churn because of documentation burdens

Kim explored designs and workflows that:
*   reduce teacher cognitive load
*   rely heavily on automation
*   use AI to auto-tag, auto-caption, and batch-process media
*   gamify content creation in subtle, uplifting ways
*   support “review → edit → approve,” not “create everything from scratch”

This became the first place to insert an AI agent in the system (per Justin’s guidance).

### C. Admin User State
At first, Kim lightly prototyped admin features “just to get started.”
Then she conducted admin interviews, recorded them, and used Poppy.ai to synthesize insights.
She fed those insights into ChatGPT-5 with all earlier artifacts, which produced an aspirational admin-side system — highly advanced, far beyond MVP.
This turned into a full second Lovable project with ~13 user states (too complex, too future-forward for MVP).
It demonstrated the full long-range vision, but needed to be scaled back significantly.

## 6. Re-Simplification into MVP (Fall 2025)

After exploring the long-range vision, Kim began creating simpler Lovable projects that stripped features down to:
*   what parents actually need
*   what teachers can realistically do
*   what admins must have for operational viability and to meet state-by-state regulations

This produced several smaller prototypes representing different slices of the experience.

## 7. Current Challenge – Unifying Everything

We now have:
*   multiple Lovable prototypes
*   several user-state explorations
*   research artifacts
*   interview summaries
*   admin long-range concepts
*   parent UX concepts
*   teacher workflows + agent interactions

The task now is to:
 Merge everything into one unified product direction, then peel it back into:
*   A clean MVP
*   Phase 1–2–3 roadmap
*   Agent-augmented workflows
*   AI-first development approach (no human-coded engineering)

## Why You’re Here (Outside PM Agent)

Your role is to help us:
*   Synthesize all artifacts across all Lovable projects
*   Extract complete feature inventories per user state
*   Identify core jobs-to-be-done for each persona
*   Distill into a unified PRD
*   Define a crisp MVP and phased roadmap
*   Ensure the UX and data model supports future AI automation

You will be given:
 📎 Links to Lovable projects
 📎 PDFs and docs (interviews, surveys, research)
 📎 ChatGPT project archives
 📎 Poppy syntheses
 📎 ICP / persona work
 📎 Teacher content gamification concepts
 📎 Aspirational admin prototype
Your first task will be to summarize everything, create feature matrices, and produce the unified product requirements document.

## Project Links and Details

### 📎 Links to Lovable projects
*   **Chickakee-connect (parent - teacher):** [https://lovable.dev/projects/ac19cd4b-f34f-4d05-aa67-62251f943d2c?magic_link=mc_6dfc1c95-3c01-4bec-a464-70d37ae871a6](https://lovable.dev/projects/ac19cd4b-f34f-4d05-aa67-62251f943d2c?magic_link=mc_6dfc1c95-3c01-4bec-a464-70d37ae871a6)
*   **Hummingbird-reverse-engineer (Admin aspirational):** [https://lovable.dev/projects/81e2dfd3-404a-4244-8b45-7e61a6900f7c?magic_link=mc_320805d9-49a0-46f9-8abb-4cc1f664c4a7](https://lovable.dev/projects/81e2dfd3-404a-4244-8b45-7e61a6900f7c?magic_link=mc_320805d9-49a0-46f9-8abb-4cc1f664c4a7)
*   **Hummingbird-mvp-school-pilot (teacher agent plus reduced admin state):** [https://lovable.dev/projects/00ac0af3-ad32-4989-a598-e78e7d6b1aa4?magic_link=mc_38fb2b40-95d4-407d-a66c-701a00f8ec73](https://lovable.dev/projects/00ac0af3-ad32-4989-a598-e78e7d6b1aa4?magic_link=mc_38fb2b40-95d4-407d-a66c-701a00f8ec73)
*   **Hummingbird-mvp-garden-campus (teacher agent plus reduced admin state):** [https://lovable.dev/projects/20c8976d-efcd-4ed5-a9ea-8af5c7c4ab33?magic_link=mc_d3dab963-108b-484d-be85-140bcca2cf83](https://lovable.dev/projects/20c8976d-efcd-4ed5-a9ea-8af5c7c4ab33?magic_link=mc_d3dab963-108b-484d-be85-140bcca2cf83)
*   **Little-moose-connect (closest to MVP):** [https://lovable.dev/projects/b1f62755-3257-4fd5-843a-e5532ac45ea4?magic_link=mc_5ba942a5-9a07-4d5e-9850-3b711d3a7b35](https://lovable.dev/projects/b1f62755-3257-4fd5-843a-e5532ac45ea4?magic_link=mc_5ba942a5-9a07-4d5e-9850-3b711d3a7b35)

### Project Details:

*   **chickakee-connect** was our first Lovable rapid prototype. It focused on the Parent UX ideal state (beyond MVP) and the minimum teacher UX needed to satisfy the parent's desire for connection. Admin UX was barely addressed here.
*   **hummingbird-reverse-engineer** was created after presenting chickadee-connect to admins. ~6hrs of admin feedback interviews were synthesized in Poppy.ai, then fed to Chat GPT5 Agent mode to create a metaprompt for Lovable, which naturally started with the admin state. This actually created ~13 user states, with role and permission definition that is an aspirational prototype (not MVP.)
*   **Hummingbird-mvp-school-pilot** - Back in chickadee-connect, I’d hit a wall with teacher UX… too many clicks to log a diaper change and so on. We were creating more work not less, it became obvious the teachers needed an agent. That’s why this project came about. I forked the hummingbird-reverse-engineer project and worked on a chat feature for teachers. (navigate to teacher in demo controls and click on Chat) Here a teacher can make a quick post (or batch upload photos/videos), upload a photo or batch of photos of daily tracking chart (toddler potty charts, attendance, etc) from a white board that they use to internally communicate as a teaching team throughout the day and inform parents in a way that makes sense to them via a YAML file ingestion of this info. See some examples below of the types of charts that could be ingested. The teacher could also message a parent, create an incident report digitally that could then be forwarded to an administrator for approval (not immediately sent to parents until admin signature is obtained) or put in a supply request to a parent. They could also create a calendar event or make an observation, all within the same chat input box. The voice memo button could make it so easy for them to just speak into the chat bot and have it log for them. Ex. “changed tommy’s diaper” would mark that in Tommy’s diaper log. Or “message class 5 parents and remind them to bring a swimsuit and towel on wednesday for water day.” etc. The agent initially is there to ask, “what is this?” “is it a post? A daily chart? A message? A report or supply request? A calendar event?” - then the teacher just has to review/ edit/ schedule or send. The idea is to help reduce cognitive load, get the teachers off their phones as quickly as possible, make their documentation burden feel like a breeze compared to Class Dojo.
The other thing I was trying to work on in this project was to slim down the admin dashboard to just the minimum for MVP - so monitoring post activity and quotas across classrooms, and let the admin step in and post on behalf of teachers falling behind in their quotas, along with the basics of setting up classes and messaging etc. (see mvp doc)
*   **Hummingbird-mvp-garden-campus** here i was really focused on the toddler daily chart section. It’s important for infant/toddler teachers in particular, that the 3-teacher teaching teams can communicate non-verbally in the classroom about things like diaper changes/potty attempts, meals, naps, moods and supply requests on a whiteboard on the bathroom door. They like being able to see this, and hand it off in shifts. When inputting into Dojo, they’re currently just taking 25 pics and manually posting them to each child’s portfolio and it looks like this when it comes through to the parent:
Instead, we’d like them to be able to take a pic of multiple charts at a time and have the ai ingest for batch review/reporting to parents more like this:
One off:
Batch ingest and review:
But neither of these are perfect, it’s tricky on mobile… we need AI to help us further wiith great UX here.
*   **Little-moose-connect** - stripped way down and closest to MVP. [https://lovable.dev/projects/b1f62755-3257-4fd5-843a-e5532ac45ea4?magic_link=mc_5ba942a5-9a07-4d5e-9850-3b711d3a7b35](https://lovable.dev/projects/b1f62755-3257-4fd5-843a-e5532ac45ea4?magic_link=mc_5ba942a5-9a07-4d5e-9850-3b711d3a7b35)

### Other Documents
📎 PDFs and docs (interviews, surveys, research)
📎 ChatGPT project archives
📎 Poppy syntheses
📎 ICP / persona work
📎 Teacher content gamification concepts
📎 Aspirational admin prototype
📎 Deep Research: Parent-Teacher Alignment Improves Outcomes.pdf
