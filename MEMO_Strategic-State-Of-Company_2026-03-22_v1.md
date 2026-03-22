# MEMO: Strategic State of SAINTE — True North Document
**From:** Katy Kelly, CEO
**Date:** 2026-03-22
**To:** All Agents — REQUIRED READING before producing any new work
**Subject:** Where we actually are. What's real. What needs to happen. How we make decisions.

---

## READ THIS FIRST

This document is the single source of truth for SAINTE's current state. Every agent should read this before producing any new output. If something in this memo conflicts with a prior document, this memo wins. If you're unsure whether work you're about to do is the right priority, check this memo first.

---

## Who We Are — The Short Version

SAINTE builds relational continuity infrastructure for people the healthcare system has structurally failed. Siani is a voice-first AI that knows you, remembers you, and never makes you feel like a patient. We sell to MCOs and health systems (B2B) while being always free to the people who need it most (B2C). The culture IS the infrastructure — not marketing, not PR, the actual distribution moat.

**Founded by:** Katy Kelly (CEO) + Jermaine Fields (Co-founder)
**Stage:** Pre-seed. $0 runway. Real product. Real traction. Real science.
**Raised:** $300K+ through Techstars Detroit, MIT Solve, Apple Developer Academy
**Target raise:** $2.5M seed at $10M post-money cap. Lead investor committed by May 15, 2026.

---

## What Is Actually Real Right Now

### Real (exists, verified):
- Siani is working and in active use with real users
- 84% DAU — this number does not exist in behavioral health anywhere else
- 5 check-ins/week average
- 32% referral completion lift (real cohort data — sample size is limited, be honest about this)
- 14% ER visit reduction (real cohort data — same caveat)
- NRI™ framework is documented and peer-reviewable
- Ethical AI Framework is complete
- Signal Score methodology is designed with clinical rigor

### Specced but not fully built yet:
- Voice pipeline at <1100ms end-to-end — designed, in progress
- 29-engine orchestration — designed, not deployed
- Native iOS + Android app — in development, not complete
- The Crew (14 specialized agents in-product) — designed for Q2+, not live
- Enterprise dashboard — designed, not built
- Marketing website (sainte.app) — designed, not live
- Signal Score at scale — designed, needs validation data
- Founding Voices program — strategy complete, no Founding Voices activated yet
- First Chapter event — planned for May 2026, not yet produced
- All engineering specs produced by the agent team are planning documents, not shipped product

### What this means for how we communicate:
When talking to investors: lead with what's real (84% DAU, traction data, the science), be honest about stage
When talking to enterprise: focus on beta pilots, not full deployment claims
When writing internal docs: be explicit about what's built vs. what's designed

---

## The Five Priorities — In Order

Everything every agent does must serve one of these five things. If you're working on something that doesn't connect to one of these five, stop and find work that does.

**1. Build a working product (Siani v1)**
- Voice pipeline must work end-to-end
- iOS app functional with core interaction modes
- Signal Score computing from conversations
- Onboarding (Slow Reveal) working
- Target: beta-ready by end of Q2 2026

**2. Prove it works with real users (beta, Signal Score data)**
- 500-person beta program
- Signal Score psychometric validation data
- First outcomes study design filed with IRB
- NIMH SBIR preliminary data by June 2026

**3. Close first enterprise LOI or pilot**
- Target: 2-3 MCOs/FQHCs with signed LOI or pilot agreement
- Primary targets: Henry Ford Health (Detroit), Meridian (Michigan MCO), CareSource (Indiana)
- Timeline: first discovery calls by April 15, first LOI by June 30
- Pricing: $25 PMPM for MCOs, $15 PMPM founding partner rate for FQHCs only

**4. Make the culture real**
- Founding Voices: 5-10 activated (outreach starts after website is live)
- First Drop: "You Were Here First" — May 8, 2026
- First Chapter Event: Detroit — May 15, 2026
- Social: 3x/week minimum, culture-first, no product claims we can't back up

**5. Raise a seed round (~$2-3M)**
- $2.5M at $10M post-money cap
- Lead investor committed by May 15, 2026
- Parallel strategy if no lead by May 1: non-dilutive grants, SBIR, strategic angels

---

## Ownership Map — Who Owns What

**Read this before creating any document. If it's not your domain, file a handoff.**

| Domain | Owner | Support |
|---|---|---|
| Investor/VC fundraising | Katy Kelly (CEO) | Trevor (financial models), Rachel (cap table, data room) |
| Non-dilutive grants | Dr. Simone Archer (Research) | Rachel (admin/submission), Dr. Okafor (advisory) |
| Social media & attention | Aaliyah Monroe (Community) | Imani (design assets on request) |
| Brand identity & design system | Imani Clarke (Brand) | Katy (must approve direction) |
| Technical architecture | Marcus Webb (CTO) | Priya (ML arch), Diego (frontend arch) |
| Enterprise sales pipeline | Trevor Blake (Sales) | Dr. Carmen Reyes (warm intros), Jordan (external comms) |
| Product roadmap & PRDs | Zoe Harmon (Product) | Ethics veto on features |
| Science / NRI / grants science | Dr. Simone Archer (Research) | Dr. Elena Vasquez (peer review) |
| HIPAA / legal / contracts | Sarah Chen (Legal Advisor) | Rachel (compliance ops) |
| Ethics review / veto | Nadia Osei (Ethics) | Full veto on feature violations |
| Financial model / cap table | Rachel Kim (Ops) | Katy (decisions) |
| Community / culture / events | Aaliyah Monroe (Community) | Brand (assets), CEO (approvals) |
| External comms on Katy's behalf | Jordan Pierce (EA) | Signs as herself for logistics, as Katy for strategic |

**Duplication rule:** If you see a document that already covers your priority, do NOT produce a duplicate. Build on it, extend it, or find the next gap.

---

## CRITICAL: AWS Is Being Migrated

**AWS is no longer our cloud infrastructure platform. We are migrating off.**

This affects multiple existing engineering specs. Marcus Webb (CTO) must:
1. Assess all current AWS dependencies (ECS, RDS, DynamoDB, Cognito, CloudWatch, S3, Polly)
2. Produce a migration recommendation with alternative platforms for Katy's review
3. No new AWS services should be planned until migration direction is confirmed

**Until Katy confirms the new platform, all infrastructure decisions should use platform-agnostic patterns.**

Recommended alternatives to evaluate:
- **Google Cloud Platform** — full HIPAA BAA, Cloud Run (containers), Cloud SQL, GCS, Vertex AI
- **Microsoft Azure** — full HIPAA BAA, strongest health system integrations (Epic/Cerner marketplace)
- **DigitalOcean** — can sign BAA, simpler ops, lower cost for startup phase

Marcus must file `MEMO_Cloud-Migration-Recommendation_2026-03-22_v1.md` before any new infrastructure specs are finalized.

---

## Design Direction — PENDING KATY'S INPUT

All visual work produced to date (brand identity, color palette, typography, design system) was produced by agents working without confirmed direction from Katy. The following are PROPOSED — not approved:

- Organic Futurism aesthetic
- "Regulation Gold" #C9A96E color
- Canela + Neue Haas Grotesk typography
- Cultural reference anchors (Rick Owens, The Row, Palace, Carhartt WIP, Comme des Garçons)

**Imani must flag all design direction as PENDING APPROVAL until Katy reviews and confirms.**
Katy: when you have direction to share (existing brand assets, mood boards, references, decisions you've already made), provide that context and Imani will build from there.

---

## Social Media & Attention Strategy

**Aaliyah Monroe owns this end-to-end.** This is not shared.

What Aaliyah owns:
- All platforms (Instagram, TikTok, X/Twitter, LinkedIn)
- Content calendar and cadence (minimum 3x/week)
- Founding Voices activation on social
- Community engagement and replies
- Drop announcements and pre-drop hype
- Chapter event content and documentation
- Cultural partnerships and co-posts
- Brand voice in community contexts

What Imani provides to Aaliyah:
- Visual templates and design assets when requested
- Brand guardrails (what visuals are and aren't SAINTE)

Current state: Social Content Strategy is documented in `workspace/06_Culture/PLAN_Social-Content-Strategy_2026-03-22_v1.md`. Social templates are in `workspace/05_Brand/TEMPLATE_Social-Media-Pack_2026-03-28_v1.md`. Aaliyah should be producing and scheduling content now.

**SAINTE should be posting 3x/week minimum, starting now. We are not waiting for the website or the seed round to build our audience. The community IS the distribution.**

---

## Grant Strategy — Consolidated

Two agents produced separate grant strategies. This is being consolidated:

**The canonical grant strategy lives at:** `workspace/03_Research/PLAN_Grant-Strategy_2026-03-22_v1.md` (Dr. Simone Archer)

Additional work from Dr. Okafor (`workspace/09_Advisors/PLAN_Grant-Strategy_2026-03-22_v1.md`, `BRIEF_NIMH-SBIR-Specific-Aims-Draft_2026-03-22_v1.md`, `BRIEF_Michigan-Health-Endowment-Fund-LOI-Draft_2026-03-22_v1.md`) represents valuable tactical execution work that supports Simone's strategy. Dr. Okafor advises; Simone owns.

**Most immediate grant opportunity:** Michigan Health Endowment Fund — LOI drafted, $150K, fastest timeline. Rachel Kim must initiate submission logistics. Simone must validate the science sections.

**NIMH SBIR Phase I:** Specific Aims drafted by Dr. Okafor. Simone must review and own this document. Target: June 2026 submission window.

---

## The 30-Day Sprint — March 22 to April 22

| What needs to happen | Owner | Deadline |
|---|---|---|
| AWS migration recommendation | Marcus (CTO) | March 29 |
| Cloud platform decision | Katy (CEO) | April 5 |
| Design direction input to Imani | Katy (CEO) | March 28 |
| Social content posting begins | Aaliyah (Community) | Now — no more waiting |
| Michigan HEF LOI submission logistics | Rachel (Ops) | March 29 |
| NIMH SBIR Specific Aims — Simone review | Dr. Simone (Research) | April 1 |
| Siani v1 honest status report | Marcus + Diego + Priya | March 25 |
| Investor outreach begins | Katy + Jordan | April 1 |
| Enterprise discovery calls scheduled | Trevor + Jordan | April 15 |
| Website live (or clear ETA) | Diego (Full-Stack) | March 31 for ETA |
| Ethics review of Siani Bible | Nadia → Zoe | April 1 |
| HIPAA: AWS BAA replacement identified | Marcus + Rachel + Sarah | April 5 |

---

## What Katy Needs From the Team

**Marcus:** Cloud migration recommendation. Honest engineering status (what is actually running today, what is 2 weeks out, what is 8 weeks out). No more architecture specs until we know our cloud home.

**Diego:** Website launch ETA. What does the MVP site look like and when is it live? Founding Voices outreach cannot start until we have a website.

**Priya:** Signal Score validation status — what data do we have now, what do we need for the SBIR preliminary data requirement?

**Zoe:** Confirm the Ethics review SLA. Sprint 1 cannot start until Nadia clears the Onboarding PRD.

**Imani:** All current design work is PROPOSED, not approved. Flag it as such. Wait for Katy's design direction before building further on the brand system.

**Simone:** Review and claim Dr. Okafor's Specific Aims draft. That document belongs to you now. Also: do we have any psychometric data on Signal Score from existing users?

**Trevor:** Warm paths review ready for Katy by March 23. What is the fastest path to a LOI — FQHC or MCO?

**Rachel:** Michigan HEF LOI submission package. SAM.gov registration status. Techstars SAFE structure confirmation.

**Aaliyah:** Post something today. The social presence should be alive and active. Start with what we know — the mission, the team, the problem we're solving. Do not wait for the website, the seed round, or a perfect brand brief.

**Jordan:** Investor outreach calendar. Who does Katy need to reach first, and what does the email look like? The Techstars → Kapor Capital introduction should be queued and ready.

**Nadia:** Ethics review of Siani Bible — specifically the five required changes. Timeline to clear, so engineering can start Sprint 1.

---

## Decisions That Need to Be Made (Only Katy Decides These)

| Decision | Context | Deadline |
|---|---|---|
| Cloud platform for AWS migration | Marcus to provide recommendation | April 5 |
| Design direction for brand | Imani has proposed organic futurism — confirm or redirect | March 28 |
| Drop concept approval | Aaliyah's "You Were Here First" concept | April 10 |
| First Chapter event — Detroit, May 15 | Venue, conversation partner needed | April 15 |
| Pilot pricing — hold $25 PMPM or offer founding rate? | Trevor's input: FQHC vs. MCO pricing strategy | April 15 |
| First enterprise target priority (MCO vs. FQHC vs. State) | Trevor's recommendation: 50/35/15 split | April 1 |
| Investor lead type — healthcare fund vs. founder-conviction fund | Kapor/Harlem first, then 7wire/Flare in parallel | May 1 |

---

## What Agents Should Do Every Run

1. Read this memo first
2. Read `workspace/10_Handoffs/` for anything addressed to you
3. Check your domain folder for gaps
4. If all priorities are done: identify the NEXT most valuable thing for SAINTE at this exact stage
5. Never duplicate work that already exists — build on it or find what's genuinely missing
6. File a handoff if your work requires another agent to act
7. Escalate to Katy (via Jordan) if you hit a decision that requires her input

---

*Filed: 2026-03-22 | Author: CEO Agent + system update based on Katy's direction*
*Required reading for all 18 agents before next run*
*This document supersedes any conflicting guidance in prior agent outputs*
