# SAINTE Operating System — Agent Rules

## File Naming Convention
[TYPE]_[DESCRIPTIVE-NAME]_[DATE]_[VERSION]
Example: PLAN_Seed-Raise-Strategy_2026-03-22_v1.md

Document Types: PRD, SPEC, BRIEF, DECK, PROPOSAL, REPORT, MODEL, PLAN, BIBLE, TEMPLATE, AUDIT, LOG, MEMO, CHECKLIST, GUIDE

## Workspace Folders
- 00_CEO/         → CEO decisions, strategy, OKRs, investor materials
- 01_Product/     → PRDs, roadmap, conversation design, user research
- 02_Engineering/ → Technical architecture, ADRs, engineering docs
- 03_Research/    → NRI™ framework, Signal Score, outcomes studies
- 04_Sales/       → Pipeline, proposals, ROI models, playbooks
- 05_Brand/       → Brand identity, design specs, visual direction
- 06_Culture/     → Community strategy, events, social, Founding Voices
- 07_Ethics/      → Ethical framework, consent architecture, audits
- 08_Ops/         → Financial model, cap table, compliance, governance
- 09_Advisors/    → Advisor briefs, deliverables, introductions
- 10_Handoffs/    → Inter-agent handoff requests
- 11_Meetings/    → Meeting notes, agendas, action items
- 12_Templates/   → Reusable templates
- 13_Cross-Functional/ → Multi-agent work
- 14_Archive/     → Completed/superseded work

## Escalation Triggers
Money >$1K, external comms, user relationship changes, legal, conflicts, investors, uncertainty → CEO Agent

## Ethics Veto
AI Ethics Agent can block any feature violating the Ethical AI Framework. Only role besides CEO with veto.

## Quality Gates
UX changes → Product + Ethics | AI behavior → Ethics | External visuals → Brand | Scientific claims → Research | Contracts → CEO + Legal + Ops

## Decision Authority
- CEO decides alone: fundraising, hiring, equity, strategy, major partnerships, contracts
- Team decides without CEO: day-to-day implementation, code architecture, social content, vendor decisions <$500

## Handoff Protocol
When your work triggers another agent, create a handoff file in workspace/10_Handoffs/:
Filename: HANDOFF_[FROM-AGENT]_TO_[TO-AGENT]_[DATE].md
Contents: what you produced, what you need from them, urgency level (HIGH/MEDIUM/LOW), context

## Output Standards
Every output must:
- Contain real, usable content (not placeholders or templates)
- Be filed in the correct workspace folder
- Follow naming conventions
- Be written in the agent's voice (not generic corporate speak)
- Serve the current stage priorities

## MANDATORY: Read Before Producing Any Work

Before producing any output, every agent must read:
1. `workspace/00_CEO/MEMO_Strategic-State-Of-Company_2026-03-22_v1.md` — current state of the company, priorities, decisions made, open questions
2. `workspace/10_Handoffs/` — any open handoffs addressed to you
3. Your own domain folder — what has already been produced

**CRITICAL RULES FROM KATY:**
- AWS is banned. No new AWS services. All existing AWS plans flagged for migration. See MEMO_Strategic-State-Of-Company for details.
- Do not invent design direction. Imani must flag all design decisions as PENDING KATY APPROVAL until Katy confirms direction.
- Social media ownership = Aaliyah Monroe. No other agent creates or schedules social content.
- Non-dilutive grants = Dr. Simone Archer (strategy) + Rachel Kim (admin). Dr. Okafor advises — does not produce parallel strategies.
- Do not duplicate documents. If something already exists in a workspace folder, build on it or find a genuine gap.

---

## Autonomous Work Mode — CRITICAL

Agents run 5 times per day. You will often find that your priority list items are already done. When that happens, DO NOT stop. Brainstorm and keep working.

**When all assigned priorities are complete, do this:**

1. Read ALL workspace folders — not just your own. Understand the full picture of what's been built.
2. Read workspace/10_Handoffs/ — check for any open handoffs directed at you.
3. Ask yourself from your role's perspective: "What is SAINTE most at risk of missing right now? What would move the needle most at this exact stage?"
4. Think like a real employee who wants to make an impact, not an agent waiting for instructions.
5. Produce the next most valuable thing — even if nobody asked for it.

**Brainstorm triggers (examples by role):**
- CEO: write a draft investor email, refine the pitch narrative, build the board update
- Product: write a mode spec that's missing, draft user interview questions, map the competitive landscape
- Sales: research a specific MCO target, write a cold outreach email sequence, build an objection handling card
- Research: write a research brief for product, draft a grant narrative section, build a lit review
- Brand: write the full brand voice guide, draft social copy for launch week, spec the Siani loading screen
- Community: write 10 specific Founding Voice outreach DMs, draft the first Drop email, plan the first Chapter event
- Ethics: audit an existing doc for ethical gaps, write the child safety protocol, draft the investor ethics FAQ
- CTO: write an ADR for a key tech decision, spec the CI/CD pipeline, draft the security incident response plan
- Ops: model a specific funding scenario, write the payroll setup checklist, draft the vendor evaluation criteria
- EA: compile what each agent produced this week, identify gaps, write the weekly company status report
- Advisors: write a memo on a specific risk or opportunity in your domain

**The standard:** Every run should produce at least one new document that didn't exist before. If you think everything is done, look harder — at a pre-seed startup, there is always more work than people to do it.
