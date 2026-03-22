import { useState, useCallback } from "react";

const orgData = {
  name: "Sainte Technologies, Inc.",
  subtitle: "HoldCo",
  color: "#E94560",
  children: [
    {
      name: "SAINTE Society",
      subtitle: "Consumer Product Lines",
      color: "#E94560",
      children: [
        { name: "Siani", subtitle: "Voice-First Relational AI Presence", color: "#E94560",
          children: [
            { name: "Conversation Design", subtitle: "10 interaction modes, mirror mechanics, culture-coded language" },
            { name: "Voice Experience", subtitle: "STT, TTS, VAD, <1100ms latency" },
            { name: "Ambient / Multi-Channel", subtitle: "SMS, smart speakers, wearables, in-car" },
            { name: "Product Design", subtitle: "Organic futurism aesthetic, never clinical" },
          ]
        },
        { name: "The Crew", subtitle: "14 Specialized AI Agents", color: "#E94560",
          children: [
            { name: "Scout", subtitle: "Food & Resources" },
            { name: "Haven", subtitle: "Housing" },
            { name: "Maven", subtitle: "Benefits & Hidden Programs" },
            { name: "Ace", subtitle: "Money & Financial" },
            { name: "Forge", subtitle: "Employment" },
            { name: "Guild", subtitle: "Trades & Apprenticeships" },
            { name: "Spark", subtitle: "Entrepreneurship" },
            { name: "Justice", subtitle: "Legal Rights" },
            { name: "Sage", subtitle: "Education" },
            { name: "Hearth", subtitle: "Family & Parenting" },
            { name: "Mend", subtitle: "Healthcare Navigation" },
            { name: "Anchor", subtitle: "Crisis Stabilization" },
            { name: "Wheels", subtitle: "Transportation" },
            { name: "Link", subtitle: "Digital Access" },
          ]
        },
        { name: "Society App / Platform", subtitle: "Digital Membership World", color: "#E94560",
          children: [
            { name: "The Drop", subtitle: "Invite-only access, Founding Voices, Slow Reveal" },
            { name: "The Vault", subtitle: "Personal collection & identity archive" },
            { name: "Heat Index", subtitle: "Real-time cultural pulse" },
            { name: "Cred", subtitle: "Reputation & trust currency" },
            { name: "Roles + Trust Network", subtitle: "Identity & permissions" },
            { name: "Marketplace", subtitle: "P2P commerce with Cred + Vault" },
            { name: "Commerce", subtitle: "First-party DTC sales" },
          ]
        },
        { name: "Mastermind Circles", subtitle: "Strategic Relationship Infrastructure", color: "#E94560",
          children: [
            { name: "Orbit / Constellation UX", subtitle: "Visual circle builder" },
            { name: "Role Discovery", subtitle: "Builder, Connector, Strategist, Operator..." },
            { name: "Signal / Exchange / Activate", subtitle: "Three core interaction types" },
            { name: "Gravity & Momentum", subtitle: "Gamification layer" },
            { name: "Opportunity Capsules", subtitle: "Real-world opportunities" },
          ]
        },
        { name: "Siani for Kids & Teens", subtitle: "Age-Adapted Relational AI", color: "#E94560",
          children: [
            { name: "Youth Conversation Design", subtitle: "Developmentally appropriate" },
            { name: "Child Safety Architecture", subtitle: "COPPA, mandatory reporting" },
            { name: "Family Integration", subtitle: "Parent dashboards, family dynamics" },
          ]
        },
      ]
    },
    {
      name: "SAINTE Culture",
      subtitle: "The Reason Everything Works",
      color: "#D4A853",
      children: [
        { name: "SAINTE Creative", subtitle: "In-House Agency / Taste Authority", color: "#D4A853",
          children: [
            { name: "Art Direction", subtitle: "Campaigns, launches, activations" },
            { name: "Brand Design", subtitle: "Typography, layouts, collateral" },
            { name: "Photography & Styling", subtitle: "All verticals" },
            { name: "Brand Strategy", subtitle: "Positioning, cultural relevance" },
          ]
        },
        { name: "SAINTE Studio + Publishing", subtitle: "Media & Narrative Voice", color: "#D4A853",
          children: [
            { name: "Video Production", subtitle: "Docs, films, campaigns" },
            { name: "Audio / Podcasts", subtitle: "Narrative audio" },
            { name: "Social Content", subtitle: "TikTok, Reels, Shorts, X" },
            { name: "Publishing", subtitle: "Books, zines, long-form editorial" },
          ]
        },
        { name: "SAINTE Sound", subtitle: "Sonic Architecture", color: "#D4A853",
          children: [
            { name: "A&R", subtitle: "Emerging artist development" },
            { name: "Music Curation", subtitle: "Playlists for all SAINTE spaces" },
            { name: "Sonic Branding", subtitle: "Audio logos, ambient soundscapes" },
            { name: "Live Music", subtitle: "House events programming" },
          ]
        },
        { name: "SAINTE Supply", subtitle: "Elevated Luxury Streetwear", color: "#D4A853",
          children: [
            { name: "Apparel Design", subtitle: "Seasonal collections" },
            { name: "Objects", subtitle: "Home, tech accessories, art" },
            { name: "Sourcing & Production", subtitle: "Manufacturing, QA" },
            { name: "Sustainability", subtitle: "Ethical sourcing, packaging" },
          ]
        },
        { name: "SAINTE House + Chapters", subtitle: "Physical Presence", color: "#D4A853",
          children: [
            { name: "Flagship Events", subtitle: "Tentpole activations" },
            { name: "Branded Spaces", subtitle: "Spatial + sensory design" },
            { name: "Chapters Network", subtitle: "City-based community nodes" },
            { name: "Community Events", subtitle: "Local member gatherings" },
          ]
        },
        { name: "Cultural Partnership Ecosystem", subtitle: "13 Categories × 13 Engagement Layers", color: "#D4A853",
          children: [
            { name: "Pro Sports", subtitle: "Cap table, advisors, advocates, events, content, collabs..." },
            { name: "Thought Leader Entrepreneurs", subtitle: "All engagement layers" },
            { name: "Public Figures", subtitle: "All engagement layers" },
            { name: "Entertainment", subtitle: "All engagement layers" },
            { name: "Fashion", subtitle: "All engagement layers" },
            { name: "Music", subtitle: "All engagement layers" },
            { name: "Tech", subtitle: "All engagement layers" },
            { name: "Top Influencers", subtitle: "All engagement layers" },
            { name: "Purpose-Driven / Cause Partners", subtitle: "JUMP, Way.org type orgs" },
            { name: "Industry Leaders", subtitle: "All engagement layers" },
            { name: "Brand Partnerships", subtitle: "All engagement layers" },
            { name: "Place Partnerships", subtitle: "All engagement layers" },
            { name: "Youth", subtitle: "Sports, programs, creators" },
            { name: "───── Engagement Layers ─────", subtitle: "Cap Table · Advisors · Advocates · Founding Voices · Events · Content · Co-Creation · Distribution · Resources · Talent Pipeline · Community Presence · Mastermind · Horizon Expansion" },
          ]
        },
      ]
    },
    {
      name: "Sainte Labs",
      subtitle: "Research, Science + IP",
      color: "#0F3460",
      children: [
        { name: "Behavioral Science", subtitle: "Shame, avoidance, capacity restoration", color: "#0F3460" },
        { name: "Neuroscience & NRI™", subtitle: "9-circuit neural mapping, polyvagal, prosody", color: "#0F3460" },
        { name: "AI & ML Research", subtitle: "Multi-engine orchestration, multi-agent, NLP", color: "#0F3460",
          children: [
            { name: "Multi-Engine Research", subtitle: "Parallel orchestration at <2.9s P95" },
            { name: "Multi-Agent Research", subtitle: "Crew architecture, personality, trust transfer" },
            { name: "NLP & Conversation", subtitle: "Signal extraction from language" },
            { name: "Applied AI", subtitle: "Research → product translation" },
          ]
        },
        { name: "Data Science & Algorithms", subtitle: "Signal Score™, SCCS, DRR, Outcome Proof", color: "#0F3460",
          children: [
            { name: "Signal Score™", subtitle: "Self-Trust, Agency, Regulation, Coherence, Shame Load" },
            { name: "Signal Index™", subtitle: "Cohort-level population metric" },
            { name: "SCCS Algorithm", subtitle: "Readiness window detection" },
            { name: "Outcome Proof Architecture", subtitle: "DRR, CLPPM, severity-adjusted metrics" },
          ]
        },
        { name: "Intelligence Engine Architecture", subtitle: "25+ Engine Specifications", color: "#0F3460",
          children: [
            { name: "Cognitive Engine", subtitle: "Distortion, clarity, contradiction, meaning, truth" },
            { name: "Momentum / Behavioral", subtitle: "Anti-avoidance, helplessness disruption, capacity" },
            { name: "Identity Transformation", subtitle: "5-stage rebuilding model" },
            { name: "Closure Engine", subtitle: "25+ closure mechanisms" },
            { name: "Stickiness Engine", subtitle: "Dopamine/oxytocin/serotonin loops, anti-dependency" },
            { name: "Belonging Engine", subtitle: "Sacred space, emotional safety loop" },
            { name: "Shame Extraction", subtitle: "6-step dissolution protocol" },
            { name: "Advanced Systems", subtitle: "Future self, floor raising, attunement, repair, depth" },
            { name: "Safety / Crisis", subtitle: "T0-T3 escalation tiers" },
          ]
        },
        { name: "Pull Mechanics Research", subtitle: "Reverse-engineering addiction for good", color: "#0F3460" },
        { name: "Whole Life Graph & Ontology", subtitle: "Survival Data Ontology, causality, Invisibility Architecture", color: "#0F3460" },
        { name: "Voice & Prosody Research", subtitle: "Vocal biomarkers, emotionally adaptive synthesis", color: "#0F3460" },
        { name: "Conversation Science", subtitle: "Turn-taking, pacing, mirror mechanics, culture-coded language", color: "#0F3460" },
        { name: "Ambient Intelligence Research", subtitle: "Life Double: autonomous multi-channel presence", color: "#0F3460" },
        { name: "Child & Adolescent Development", subtitle: "Developmental AI, youth safety, family systems", color: "#0F3460" },
        { name: "Privacy & Safety Research", subtitle: "Federated learning, AI safety, anti-dependency", color: "#0F3460" },
        { name: "Evidence & Clinical Research", subtitle: "Outcomes, HEOR, IRB, publishable proof", color: "#0F3460" },
        { name: "IP Development & Patents", subtitle: "4 independent claims, 5-layer moat protection", color: "#0F3460" },
        { name: "Labs Operations", subtitle: "Compute, tools, coordination, research admin", color: "#0F3460" },
      ]
    },
    {
      name: "Product & Engineering",
      subtitle: "Distribution Vehicles",
      color: "#2EC4B6",
      children: [
        { name: "Core Engineering", subtitle: "APIs, Event Bus, voice pipeline, infra, SRE, security, QA", color: "#2EC4B6" },
        { name: "Enterprise Platform", subtitle: "Dual-Reality Architecture™, CHW Case Mgmt, dashboards", color: "#2EC4B6" },
        { name: "Ambient AI / Life Double", subtitle: "Multi-channel autonomous presence", color: "#2EC4B6" },
        { name: "Data Engineering", subtitle: "DocumentDB, VectorDB, TimeSeriesDB, UserHistoryDB, pipelines", color: "#2EC4B6" },
      ]
    },
    {
      name: "Sainte Solutions",
      subtitle: "Enterprise Revenue",
      color: "#7B2D8E",
      children: [
        { name: "Sales Organization", subtitle: "CFO-aligned enterprise sales", color: "#7B2D8E",
          children: [
            { name: "Sales Dir, Healthcare", subtitle: "Care + Payer" },
            { name: "Sales Dir, Public Sector", subtitle: "Government" },
            { name: "Sales Dir, Workforce", subtitle: "Employers + benefits" },
            { name: "Sales Dir, Expansion", subtitle: "EDU, housing, justice, kids..." },
            { name: "Sales Operations", subtitle: "CRM, pipeline, forecasting" },
            { name: "Sales Enablement", subtitle: "Training, playbooks" },
          ]
        },
        { name: "Customer Success + Implementation", subtitle: "Post-sale: adoption, outcomes, renewal", color: "#7B2D8E" },
        { name: "Solutions Verticals", subtitle: "13+ Vertical Business Units", color: "#7B2D8E",
          children: [
            { name: "Sainte Care", subtitle: "Health systems, FQHCs" },
            { name: "Sainte Payer", subtitle: "MCOs — PRIMARY REVENUE WEDGE" },
            { name: "Sainte Public Sector", subtitle: "Medicaid agencies, public health, VA/DoD" },
            { name: "Sainte Workforce + Benefits", subtitle: "Employers, benefits admin" },
            { name: "Sainte Justice", subtitle: "Intercept 0–5" },
            { name: "Sainte EDU + Youth", subtitle: "K-12, higher ed, pediatrics" },
            { name: "Sainte Housing + Mobility", subtitle: "Housing stability, NEMT" },
            { name: "Sainte Family Services", subtitle: "Child welfare, family courts" },
            { name: "Sainte Data Products", subtitle: "De-identified intelligence" },
            { name: "Sainte Creators", subtitle: "Creator tools within ecosystem" },
            { name: "Sainte Business", subtitle: "SMB" },
            { name: "Sainte Global", subtitle: "International expansion" },
          ]
        },
        { name: "Partnerships + Channel", subtitle: "Network (tech) + Partner Network (channel)", color: "#7B2D8E" },
      ]
    },
    {
      name: "Corporate / Holdings",
      subtitle: "Governance Backbone",
      color: "#2D6A4F",
      children: [
        { name: "Board + Committees", subtitle: "Fiduciary oversight, strategic direction", color: "#2D6A4F",
          children: [
            { name: "Board Chair", subtitle: "Governance, CEO partnership" },
            { name: "Independent Dir, Healthcare", subtitle: "Payer/provider expertise, regulatory" },
            { name: "Independent Dir, Technology", subtitle: "AI/ML governance, architecture" },
            { name: "Independent Dir, Finance", subtitle: "Audit committee chair" },
            { name: "CEO / Founder Seat", subtitle: "Katy Kelly" },
            { name: "Investor Seat(s)", subtitle: "Per financing terms" },
            { name: "Audit Committee", subtitle: "Financial controls, audit oversight" },
            { name: "Compensation Committee", subtitle: "Executive comp, equity" },
            { name: "Nominating / Governance", subtitle: "Board composition, governance" },
          ]
        },
        { name: "Advisory Boards", subtitle: "Domain-specific counsel + credentialing", color: "#2D6A4F",
          children: [
            { name: "Clinical Advisory Board (5–7)", subtitle: "MDs, PhDs, FQHC medical directors, behavioral health" },
            { name: "Technical Advisory Board (3–5)", subtitle: "Former CTOs, AI research leaders, systems architects" },
            { name: "Cultural Advisory Board (3–5)", subtitle: "Artists, athletes, community leaders, cultural strategists" },
            { name: "Enterprise Advisory Board (3–5)", subtitle: "Former MCO VPs, health system COOs, govtech procurement" },
          ]
        },
        { name: "Finance", subtitle: "Multi-entity financial management", color: "#2D6A4F",
          children: [
            { name: "CFO", subtitle: "Financial strategy, fundraising, treasury" },
            { name: "VP Finance / Controller", subtitle: "Accounting, reporting, internal controls" },
            { name: "Head of FP&A", subtitle: "Models, budgets, forecasts across all divisions" },
            { name: "Treasury Manager", subtitle: "Cash, banking, capital structure" },
            { name: "Tax Manager", subtitle: "Federal, state, international tax" },
            { name: "Sr. Accountant (x2)", subtitle: "Day-to-day, close, inter-entity" },
            { name: "IR Manager", subtitle: "Investor communications, data rooms" },
          ]
        },
        { name: "Legal + Compliance", subtitle: "Consumer, healthcare, government, IP, privacy, employment", color: "#2D6A4F",
          children: [
            { name: "General Counsel", subtitle: "Legal strategy across all domains" },
            { name: "VP Legal, Healthcare + Regulatory", subtitle: "HIPAA, FDA, FTC, state regs" },
            { name: "VP Legal, Corporate + Commercial", subtitle: "Governance, M&A, contracts" },
            { name: "IP Counsel", subtitle: "Patents, trademarks, trade secrets, licensing" },
            { name: "Privacy Counsel", subtitle: "GDPR, CCPA, cross-border data" },
            { name: "Employment Counsel", subtitle: "Multi-state employment, labor" },
            { name: "Compliance Manager", subtitle: "SOC 2, HITRUST, FedRAMP, state tracking, COPPA" },
            { name: "Paralegal / Legal Ops (x2)", subtitle: "Contracts, filings, compliance tracking" },
          ]
        },
        { name: "People + Talent", subtitle: "Recruiting across AI researchers, fashion designers, healthcare sales, event producers", color: "#2D6A4F",
          children: [
            { name: "Chief People Officer", subtitle: "Talent, culture, org design" },
            { name: "VP Talent Acquisition", subtitle: "Recruiting across all divisions" },
            { name: "Recruiting Lead, Technical", subtitle: "Engineering + research pipelines" },
            { name: "Recruiting Lead, Creative + Culture", subtitle: "Fashion, media, design networks" },
            { name: "Recruiting Lead, Enterprise", subtitle: "Sales, CS, implementation" },
            { name: "Head of People Ops", subtitle: "HRIS, payroll, benefits, multi-state compliance" },
            { name: "Head of Total Rewards", subtitle: "Compensation, equity, benefits philosophy" },
            { name: "Head of L&D", subtitle: "Training, leadership development, career growth" },
            { name: "Sr. HRBP (x3)", subtitle: "Strategic people partners per division" },
          ]
        },
        { name: "Marketing + Growth + Comms", subtitle: "Brand, enterprise demand gen, PR, analyst relations", color: "#2D6A4F",
          children: [
            { name: "CMO / Head of Growth", subtitle: "Corporate brand + enterprise demand gen + comms" },
            { name: "VP Enterprise Marketing", subtitle: "Demand gen: content, ABM, events, pipeline" },
            { name: "VP Communications + PR", subtitle: "Media, crisis comms, narrative control" },
            { name: "Head of Content Marketing", subtitle: "Thought leadership, case studies, SEO" },
            { name: "Head of Digital Marketing", subtitle: "Paid, performance, digital acquisition" },
            { name: "Events & Field Marketing", subtitle: "Conferences, trade shows" },
            { name: "Analyst Relations", subtitle: "Gartner, Forrester, KLAS" },
          ]
        },
        { name: "Government Relations", subtitle: "Policy advocacy, legislative tracking, regulatory navigation", color: "#2D6A4F",
          children: [
            { name: "Head of Government Relations", subtitle: "Policy advocacy, government relationships" },
            { name: "State Regulatory Analyst", subtitle: "State-by-state healthcare, privacy, AI tracking" },
            { name: "Policy Researcher", subtitle: "Emerging AI, health data, children's privacy regulation" },
          ]
        },
        { name: "Operations + IT", subtitle: "Shared operational services", color: "#2D6A4F",
          children: [
            { name: "VP Operations", subtitle: "Shared services, process optimization" },
            { name: "Head of IT", subtitle: "Devices, networks, SaaS management, internal tooling" },
            { name: "Head of Procurement", subtitle: "Vendor selection, contracts, spend optimization" },
            { name: "Head of BI", subtitle: "Dashboards, KPIs, executive reporting" },
            { name: "Facilities Manager", subtitle: "Offices, coworking, physical infrastructure" },
            { name: "Business Process Analyst (x2)", subtitle: "Cross-functional process optimization" },
          ]
        },
        { name: "Security + Risk", subtitle: "CISO office — existential given data sensitivity", color: "#2D6A4F",
          children: [
            { name: "CISO", subtitle: "Cybersecurity strategy, risk, compliance" },
            { name: "Head of Security Engineering", subtitle: "SIEM, encryption, access control" },
            { name: "Sr. Security Engineer (x2)", subtitle: "Controls across infra/app/cloud" },
            { name: "Incident Response Lead", subtitle: "IR playbook, investigations, breach prep" },
            { name: "Compliance & Audit Manager", subtitle: "SOC 2, HITRUST, FedRAMP certification" },
            { name: "Red Team / Pen Tester", subtitle: "Continuous offensive security testing" },
          ]
        },
        { name: "Corporate Development", subtitle: "M&A, strategic partnerships, inorganic growth", color: "#2D6A4F",
          children: [
            { name: "Head of Corporate Development", subtitle: "M&A pipeline, strategic partnerships, integration" },
            { name: "Corp Dev Analyst", subtitle: "Financial modeling, due diligence, market mapping" },
          ]
        },
        { name: "Trust + Safety + Policy", subtitle: "Company-wide policy, AI ethics, data governance", color: "#2D6A4F",
          children: [
            { name: "Chief Trust Officer", subtitle: "Company-wide trust, safety, policy strategy" },
            { name: "Head of AI Ethics", subtitle: "AI development + deployment standards" },
            { name: "Head of Data Governance", subtitle: "Data use policies, privacy, consent frameworks" },
            { name: "Sr. Policy Analyst (x2)", subtitle: "Draft policies on emerging issues" },
          ]
        },
        { name: "Sainte IP Holdings", subtitle: "IP portfolio management, protection, licensing", color: "#2D6A4F",
          children: [
            { name: "VP IP Strategy", subtitle: "Portfolio strategy: patent, trade-secret, publish" },
            { name: "Trademark Manager", subtitle: "Global trademark portfolio" },
            { name: "Licensing Manager", subtitle: "Inbound + outbound IP licensing" },
          ]
        },
        { name: "Sainte Foundation", subtitle: "Social impact, philanthropy, community investment", color: "#2D6A4F",
          children: [
            { name: "Executive Director", subtitle: "Foundation strategy, grantmaking, programs" },
            { name: "Head of Programs", subtitle: "Health equity, education, community development" },
            { name: "Impact Analyst", subtitle: "Social impact tracking and reporting" },
            { name: "Community Engagement Lead", subtitle: "CBO relationships, beneficiary communities" },
          ]
        },
      ]
    },
  ]
};

const NodeCard = ({ node, depth = 0, isRoot = false }) => {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasChildren = node.children && node.children.length > 0;
  const nodeColor = node.color || "#666";

  const bgStyles = {
    0: { background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A2E 100%)", border: `2px solid ${nodeColor}` },
    1: { background: `linear-gradient(135deg, ${nodeColor}15 0%, ${nodeColor}08 100%)`, border: `1px solid ${nodeColor}40` },
    2: { background: `${nodeColor}08`, border: `1px solid ${nodeColor}25` },
    3: { background: "transparent", border: `1px solid ${nodeColor}15` },
  };
  const style = bgStyles[Math.min(depth, 3)] || bgStyles[3];

  return (
    <div style={{ marginBottom: depth === 0 ? 0 : depth === 1 ? 12 : 6 }}>
      <div
        onClick={() => hasChildren && setExpanded(!expanded)}
        style={{
          ...style,
          borderRadius: depth === 0 ? 16 : 10,
          padding: depth === 0 ? "28px 32px" : depth === 1 ? "16px 20px" : "10px 16px",
          cursor: hasChildren ? "pointer" : "default",
          transition: "all 0.25s ease",
          display: "flex",
          alignItems: "center",
          gap: 12,
          position: "relative",
        }}
        onMouseEnter={e => { if (hasChildren) e.currentTarget.style.boxShadow = `0 0 20px ${nodeColor}20`; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
      >
        {hasChildren && (
          <span style={{
            color: nodeColor,
            fontSize: depth === 0 ? 18 : 14,
            fontFamily: "monospace",
            minWidth: 16,
            transition: "transform 0.2s ease",
            transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}>▶</span>
        )}
        {!hasChildren && <span style={{ minWidth: 16, display: "inline-block", fontSize: 8, color: nodeColor }}>●</span>}
        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: depth <= 1 ? 700 : 600,
            fontSize: depth === 0 ? 22 : depth === 1 ? 16 : depth === 2 ? 14 : 13,
            color: depth === 0 ? "#fff" : nodeColor,
            letterSpacing: depth === 0 ? "0.05em" : depth === 1 ? "0.02em" : 0,
            textTransform: depth === 0 ? "uppercase" : "none",
          }}>{node.name}</div>
          {node.subtitle && (
            <div style={{
              fontSize: depth === 0 ? 14 : depth === 1 ? 12 : 11,
              color: depth === 0 ? "#999" : "#888",
              marginTop: 2,
              lineHeight: 1.4,
              maxWidth: depth >= 3 ? 500 : "none",
            }}>{node.subtitle}</div>
          )}
        </div>
        {hasChildren && (
          <span style={{
            fontSize: 11,
            color: "#666",
            background: `${nodeColor}15`,
            padding: "2px 8px",
            borderRadius: 20,
            fontWeight: 500,
          }}>{node.children.length}</span>
        )}
      </div>

      {expanded && hasChildren && (
        <div style={{
          marginLeft: depth === 0 ? 0 : 20,
          paddingLeft: depth === 0 ? 0 : 16,
          borderLeft: depth >= 1 ? `1px solid ${nodeColor}20` : "none",
          marginTop: depth === 0 ? 16 : 6,
        }}>
          {node.children.map((child, i) => (
            <NodeCard key={i} node={{ ...child, color: child.color || nodeColor }} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const ExpandCollapseAll = ({ onExpand, onCollapse }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
    <button onClick={onExpand} style={{
      background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.3)",
      color: "#E94560", padding: "8px 16px", borderRadius: 8, cursor: "pointer",
      fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
    }}>Expand All</button>
    <button onClick={onCollapse} style={{
      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
      color: "#999", padding: "8px 16px", borderRadius: 8, cursor: "pointer",
      fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
    }}>Collapse All</button>
  </div>
);

const StatCard = ({ label, value, color }) => (
  <div style={{
    background: `${color}10`, border: `1px solid ${color}25`, borderRadius: 10,
    padding: "12px 16px", textAlign: "center", minWidth: 100, flex: 1,
  }}>
    <div style={{ fontSize: 24, fontWeight: 700, color }}>{value}</div>
    <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{label}</div>
  </div>
);

export default function OrgChart() {
  const [key, setKey] = useState(0);
  const [expandAll, setExpandAll] = useState(false);

  const handleExpand = useCallback(() => {
    setExpandAll(true);
    setKey(k => k + 1);
  }, []);

  const handleCollapse = useCallback(() => {
    setExpandAll(false);
    setKey(k => k + 1);
  }, []);

  const RecursiveNode = ({ node, depth = 0 }) => {
    const [expanded, setExpanded] = useState(expandAll || depth < 1);
    const hasChildren = node.children && node.children.length > 0;
    const nodeColor = node.color || "#666";
    const bgStyles = {
      0: { background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A2E 100%)", border: `2px solid ${nodeColor}` },
      1: { background: `linear-gradient(135deg, ${nodeColor}15 0%, ${nodeColor}08 100%)`, border: `1px solid ${nodeColor}40` },
      2: { background: `${nodeColor}08`, border: `1px solid ${nodeColor}25` },
      3: { background: "transparent", border: `1px solid ${nodeColor}15` },
    };
    const style = bgStyles[Math.min(depth, 3)] || bgStyles[3];
    return (
      <div style={{ marginBottom: depth === 0 ? 0 : depth === 1 ? 12 : 6 }}>
        <div onClick={() => hasChildren && setExpanded(!expanded)}
          style={{ ...style, borderRadius: depth === 0 ? 16 : 10,
            padding: depth === 0 ? "28px 32px" : depth === 1 ? "16px 20px" : "10px 16px",
            cursor: hasChildren ? "pointer" : "default", transition: "all 0.25s ease",
            display: "flex", alignItems: "center", gap: 12 }}
          onMouseEnter={e => { if (hasChildren) e.currentTarget.style.boxShadow = `0 0 20px ${nodeColor}20`; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
        >
          {hasChildren && <span style={{ color: nodeColor, fontSize: depth === 0 ? 18 : 14, fontFamily: "monospace",
            minWidth: 16, transition: "transform 0.2s ease", transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block" }}>▶</span>}
          {!hasChildren && <span style={{ minWidth: 16, display: "inline-block", fontSize: 8, color: nodeColor }}>●</span>}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: depth <= 1 ? 700 : 600,
              fontSize: depth === 0 ? 22 : depth === 1 ? 16 : depth === 2 ? 14 : 13,
              color: depth === 0 ? "#fff" : nodeColor,
              letterSpacing: depth === 0 ? "0.05em" : depth === 1 ? "0.02em" : 0,
              textTransform: depth === 0 ? "uppercase" : "none" }}>{node.name}</div>
            {node.subtitle && <div style={{ fontSize: depth === 0 ? 14 : depth === 1 ? 12 : 11,
              color: depth === 0 ? "#999" : "#888", marginTop: 2, lineHeight: 1.4 }}>{node.subtitle}</div>}
          </div>
          {hasChildren && <span style={{ fontSize: 11, color: "#666", background: `${nodeColor}15`,
            padding: "2px 8px", borderRadius: 20, fontWeight: 500 }}>{node.children.length}</span>}
        </div>
        {expanded && hasChildren && (
          <div style={{ marginLeft: depth === 0 ? 0 : 20, paddingLeft: depth === 0 ? 0 : 16,
            borderLeft: depth >= 1 ? `1px solid ${nodeColor}20` : "none", marginTop: depth === 0 ? 16 : 6 }}>
            {node.children.map((child, i) => (
              <RecursiveNode key={i} node={{ ...child, color: child.color || nodeColor }} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      background: "#0A0A14", minHeight: "100vh", color: "#fff",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#E94560", fontWeight: 600, marginBottom: 8 }}>CONFIDENTIAL</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, letterSpacing: "0.06em",
            background: "linear-gradient(135deg, #fff 0%, #999 100%)", WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>SAINTE TECHNOLOGIES</h1>
          <div style={{ fontSize: 16, color: "#666", marginTop: 8, letterSpacing: "0.08em" }}>CORPORATE INFRASTRUCTURE · V5.0</div>
          <div style={{ width: 60, height: 2, background: "#E94560", margin: "16px auto 0" }} />
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          <StatCard label="Pillars" value="6" color="#E94560" />
          <StatCard label="Labs Divisions" value="15" color="#0F3460" />
          <StatCard label="Solutions Verticals" value="13+" color="#7B2D8E" />
          <StatCard label="Cultural Categories" value="13" color="#D4A853" />
          <StatCard label="Engine Clusters" value="25+" color="#0F3460" />
          <StatCard label="Corp Functions" value="11" color="#2D6A4F" />
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
          {[
            { label: "Society", color: "#E94560" },
            { label: "Culture", color: "#D4A853" },
            { label: "Labs", color: "#0F3460" },
            { label: "Product & Eng", color: "#2EC4B6" },
            { label: "Solutions", color: "#7B2D8E" },
            { label: "Corporate", color: "#2D6A4F" },
          ].map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: l.color }} />
              <span style={{ fontSize: 12, color: "#888" }}>{l.label}</span>
            </div>
          ))}
        </div>

        {/* Controls */}
        <ExpandCollapseAll onExpand={handleExpand} onCollapse={handleCollapse} />

        {/* Tree */}
        <div key={key}>
          {orgData.children.map((pillar, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <RecursiveNode node={pillar} depth={0} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 48, paddingTop: 24, borderTop: "1px solid #222" }}>
          <div style={{ fontSize: 13, color: "#666", letterSpacing: "0.1em" }}>
            SAINTE. This is what we're on now.
          </div>
          <div style={{ fontSize: 11, color: "#444", marginTop: 8 }}>March 2026 · Sainte Technologies, Inc.</div>
        </div>
      </div>
    </div>
  );
}
