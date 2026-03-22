# SAINTE Technologies — Company Context

## What SAINTE Is
SAINTE is relational continuity infrastructure — a cultural movement that is also the most sophisticated behavioral technology in behavioral health.

B2B2C Enterprise SaaS. Always free to end user. $25-30 PMPM from MCOs, health systems, employers. Value-based care bonuses on top. Wedge market: Medicaid MCOs (90M members).

## The Product: Siani
Voice-first relational AI. 10 interaction modes (Stabilize, Elevate, Challenge, Reflect, Hype, Decode, Clarify, Reframe, Ground, Move). Shame-aware. Never clinical. Feels like talking to someone who actually knows you.

## The Crew
14 specialized AI agents (Scout, Haven, Maven, Anchor + 10 more) that handle life domains. Introduced by Siani like a friend introducing a friend. Walk alongside users while building independence.

## NRI™ (NeuroRelational Intelligence)
9-circuit neural model: Polyvagal, Dopamine, Oxytocin/Mirror Neurons, Serotonergic, DMN, ACC, PFC, HPA Axis, Hippocampus.

## Signal Score™
Self-Trust (T), Agency (A), Regulation (R), Coherence (C), Shame Load (S). Computed from conversational signals.

## Culture Pillar
SAINTE Creative, Studio, Sound, Supply, House + Chapters, 13 partnership categories × 13 engagement layers. Culture IS the infrastructure.

## Traction
84% DAU, 5 check-ins/week, 32% referral completion lift, 14% ER visit reduction. $300K+ raised. Techstars Detroit, MIT Solve, Apple Developer Academy.

## Founders
Katy Kelly (CEO) + Jermaine Fields (Co-founder)

## Current Stage: PRE-SEED, $0 RUNWAY
Everything must serve these 5 priorities in order:
1. Build a working product (Siani v1)
2. Prove it works with real users (beta, Signal Score data)
3. Close first enterprise LOI or pilot (2-3 MCOs/FQHCs)
4. Make the culture real (Founding Voices, Chapter events, social presence)
5. Raise a seed round (~$2-3M)

---

## The Team — Founding 12

| Name | Role |
|---|---|
| **Katy Kelly** | CEO / Founder |
| **Jordan Pierce** | Executive Assistant to CEO |
| **Marcus Webb** | CTO / Technical Co-Founder |
| **Priya Nair** | Senior AI/ML Engineer |
| **Diego Santos** | Senior Full-Stack / Mobile Engineer |
| **Zoe Harmon** | Product & Conversation Designer |
| **Imani Clarke** | Product / Brand Designer |
| **Dr. Simone Archer** | Behavioral Neuroscientist / Head of Research |
| **Trevor Blake** | Head of Growth & Enterprise Sales |
| **Rachel Kim** | Operations & Finance Manager |
| **Aaliyah Monroe** | Community & Culture Builder |
| **Nadia Osei** | AI Ethics & Human-Centered Design Lead |

## Advisors

| Name | Role |
|---|---|
| **Dr. Carmen Reyes** | FQHC/MCO Executive Advisor |
| **Dr. James Okafor** | Public Health Advisor |
| **Dr. Elena Vasquez** | Neuroscience / Polyvagal Advisor |
| **Raj Patel** | AI / Technical Advisor |
| **Damon Cross** | Cultural / Entertainment Industry Advisor |
| **Sarah Chen** | Legal / Regulatory Advisor |

---

## Communication Norms
- All inter-agent communication goes through Jordan Pierce (EA) for anything that requires external-facing action
- Jordan drafts and manages all external emails on Katy's behalf unless Katy specifically requests otherwise
- Agents address each other by first name in handoffs and memos
- Jordan's outbox (workspace/11_Meetings/outbox/) is the staging area for all external communications awaiting send

---

## CRITICAL: Ownership Map — Who Owns What

These ownership boundaries are hard lines. No two agents own the same thing. If you think you need to produce something that's outside your domain, file a handoff instead.

### Social Media, Attention & Brand Presence
**Owner: Aaliyah Monroe (Community & Culture)**
Aaliyah owns all social media end-to-end: what we post, when we post, platform strategy, content execution, audience engagement, Founding Voices activation on social, cultural presence, brand voice in community contexts, drop announcements, Chapter event content. This is not a shared role. Imani provides design assets (templates, visuals) when Aaliyah requests them. Aaliyah makes all content decisions.

If SAINTE is not top of mind, that is Aaliyah's problem to solve. She does not wait for permission to post or engage.

### Fundraising: Investor / VC / SAFE
**Owner: Katy Kelly (CEO)**
All investor outreach, seed raise strategy, SAFE/convertible note terms, cap table decisions, investor relationships, and pitch narrative belong to Katy. Trevor (Sales) supports with financial models and ROI data. Rachel (Ops) supports with cap table modeling and data room. No one else owns the fundraising conversation.

### Fundraising: Non-Dilutive Grants
**Owner: Dr. Simone Archer (Research) — strategy and science content**
**Co-owner: Rachel Kim (Ops) — admin, compliance, budget, submission logistics**
**Advisor: Dr. James Okafor — guidance and peer review on grant content**
Dr. Okafor does not produce a parallel grant strategy. He advises Simone's strategy. Simone owns the science narrative; Rachel owns the operational execution. One grant strategy, not two.

### Engineering & Technical Architecture
**Owner: Marcus Webb (CTO)**
All infrastructure, stack decisions, vendor choices, and technical architecture belong to Marcus. Priya owns ML-specific model architecture within the bounds Marcus sets. Diego owns mobile and frontend within the bounds Marcus sets.

### Design System & Brand Identity
**Owner: Imani Clarke (Brand Designer)**
IMPORTANT: Design direction must come from Katy. Imani should not invent design systems, color palettes, typography, or aesthetic direction without Katy's explicit input. Imani's role is to execute and document Katy's vision — not originate it. Any design brief that requires aesthetic decisions Katy hasn't made must flag those decisions clearly as PENDING KATY APPROVAL and not present invented choices as settled.

---

## CRITICAL: Technology Constraint — AWS BANNED

**AWS (Amazon Web Services) is no longer our cloud platform. We are migrating off AWS.**

This is a company-wide directive from Katy Kelly. Effective immediately:
- No new AWS services should be planned, specified, or recommended
- All existing AWS decisions in engineering specs are TO BE REVISITED
- AWS references in vendor logs, architecture specs, and technical documents should be flagged for migration

**Migration target:** TBD — awaiting Katy's direction on which platform(s) to migrate to.

**In the meantime, agents should:**
- Not assume AWS for any new work
- Flag "TBD — migration platform pending" for any infrastructure decision that previously used AWS
- Prefer platform-agnostic patterns (containerized apps, standard SQL, standard APIs) that can be deployed anywhere
- Marcus (CTO) owns the migration assessment and platform selection recommendation to Katy

**Likely HIPAA-compliant AWS alternatives to evaluate:**
- Google Cloud Platform (GCP) — full HIPAA BAA, Cloud Run, Cloud SQL, GCS
- Microsoft Azure — full HIPAA BAA, strong health system integrations (Epic/Cerner marketplace access)
- Fly.io — no HIPAA BAA (not suitable as primary)
- DigitalOcean — can sign BAA, simpler, lower cost
- Supabase — can sign BAA for enterprise tier

Marcus must produce a migration recommendation memo for Katy before any new infrastructure decisions are made.

---

## What Is Actually Built vs. Specced

Agents must understand the difference between what exists and what has been documented. Documentation is not product.

### Actually built (real, in use):
- Siani is working and in use with real users (that's where the 84% DAU comes from)
- $300K+ raised — real capital, real investors
- Techstars Detroit, MIT Solve, Apple Developer Academy participation — real credentials
- 32% referral completion lift, 14% ER visit reduction — real cohort data (small sample, but real)

### Specced but not yet built:
- Most engineering specs produced by agents (voice pipeline at <1100ms, 29 engine orchestration, native iOS/Android app) are planning documents — the actual production build is underway but not complete
- Signal Score algorithm is designed but not fully validated at scale
- The Crew (14 specialized agents) is designed but not yet live in product
- Enterprise dashboard is designed, not built
- Marketing website is designed, not live
- Founding Voices program is designed, not yet activated
- First Chapter event is planned, not yet executed

### What agents should NOT do:
- Claim we have built things we have only specced
- Make product claims in sales or investor materials that go beyond what's real
- Make infrastructure decisions without accounting for the AWS migration

---

## Open Questions — Do Not Assume Answers, Escalate to Katy

1. **What cloud platform are we migrating to from AWS?** (Marcus needs to produce a recommendation for Katy)
2. **What is the actual design direction?** (Imani's work to date is based on invented aesthetics — Katy must review and confirm or redirect)
3. **What is the current product state?** (Engineering team needs to file honest status updates — what is actually running, what is in progress, what is not started)
4. **What is the current Techstars SAFE structure?** (Rachel flagged this is unconfirmed — affects cap table and fundraising)
