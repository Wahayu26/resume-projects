export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: "ShieldAlert" | "KeyRound" | "Ban" | "FileCheck2" | "CheckCircle2" | "Building2";
}

export interface SkillGroup {
  id: string;
  domain: string;
  shortName: string;
  iconName: "Radar" | "KeyRound" | "Network" | "MailCheck" | "Database" | "Wrench";
  skills: string[];
  proficiencyScore: number; // 0-100 for radar visual
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent: boolean;
  tags: string[];
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  impactMetric: string;
  techStack: string[];
  architectureHighlights: string[];
  repoUrl?: string;
  repoLabel?: string;
}

export interface GithubRepoItem {
  id: string;
  name: string;
  fullName: string;
  url: string;
  description: string;
  techStack: string[];
  category: "Security Operations" | "Enterprise Web & CMS" | "Backend & Systems";
  featured?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export interface SimulatedAlert {
  id: string;
  timestamp: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "INFO";
  source: "CrowdStrikeEDR" | "FortiGate-FW" | "PaloAlto-PA" | "CyberArk-PSM" | "MS-Defender";
  srcIp: string;
  host: string;
  message: string;
  action: "CONTAINED" | "BLOCKED" | "ROTATED" | "QUARANTINED" | "LOGGED" | "TUNED";
}

export const profileData = {
  name: "Wahyu Satria Aji",
  photoUrl: "/wahyu-photo.jpg",
  title: "IT Security Engineer | SOC Analyst | PAM / IAM Specialist",
  typingRoles: [
    "Threat investigation",
    "Privileged access management",
    "Firewall security",
    "Incident response",
  ],
  location: "Jakarta, Indonesia",
  openToRoles: "IT Security / SOC Analyst / PAM-IAM roles",
  statusIndicator: "SOC SHIFT READY // OPEN TO OPPORTUNITIES",
  contact: {
    location: "Jakarta, Indonesia",
    phone: "+62 812-8461-7604",
    phoneHref: "tel:+6281284617604",
    email: "wahyusatria2616@gmail.com",
    linkedin: "https://www.linkedin.com/in/wahyu-aji-287454150/",
    linkedinHandle: "linkedin.com/in/wahyu-aji-287454150",
    github: "https://github.com/Wahayu26",
    githubHandle: "github.com/Wahayu26",
    cvUrl: "/cv.pdf",
  },
  summary:
    "Security Operations Engineer with 5+ years in financial services IT, now specializing in endpoint detection and response, privileged access management, and firewall security. Investigates, contains, and escalates threats using CrowdStrike Falcon, secures privileged credentials in CyberArk PAM, and enforces perimeter controls on Fortigate and Palo Alto. Brings a production-support and SQL background that speeds up root cause analysis and incident resolution.",

  impactStats: [
    {
      id: "edr-alerts",
      value: 100,
      suffix: "+",
      label: "EDR alerts triaged per month",
      sublabel: "CrowdStrike Falcon IOC validation & containment",
      iconName: "ShieldAlert",
    },
    {
      id: "pam-accounts",
      value: 100,
      suffix: "+",
      label: "Privileged accounts secured (CyberArk)",
      sublabel: "Across 15+ Safes in CyberArk Privilege Cloud",
      iconName: "KeyRound",
    },
    {
      id: "ioc-ips",
      value: 50,
      suffix: "+",
      label: "Malicious IOC IPs blocked",
      sublabel: "Enforced on Fortigate & Palo Alto perimeters",
      iconName: "Ban",
    },
    {
      id: "audit-controls",
      value: 13,
      suffix: "",
      label: "Audit control requests supported",
      sublabel: "CyberArk controls CA.01-CA.13 evidence compiled",
      iconName: "FileCheck2",
    },
    {
      id: "tickets-resolved",
      value: 300,
      suffix: "+",
      label: "Tickets resolved per month",
      sublabel: "95%+ SLA compliance across 100+ partner outlets",
      iconName: "CheckCircle2",
    },
    {
      id: "years-exp",
      value: 5,
      suffix: "+",
      label: "Years in financial services IT",
      sublabel: "Security Operations, PAM/IAM & Production Support",
      iconName: "Building2",
    },
  ] satisfies ImpactStat[],

  skills: [
    {
      id: "secops",
      domain: "Security Operations",
      shortName: "SecOps / EDR",
      iconName: "Radar",
      proficiencyScore: 95,
      skills: [
        "CrowdStrike Falcon EDR",
        "IOC Analysis",
        "Incident Response",
        "Security Monitoring",
        "Phishing and Malware Investigation",
        "Root Cause Analysis",
      ],
    },
    {
      id: "pam-iam",
      domain: "Identity and Access (PAM)",
      shortName: "PAM / IAM",
      iconName: "KeyRound",
      proficiencyScore: 92,
      skills: [
        "CyberArk PAM / Privilege Cloud",
        "Safe Management",
        "PSM",
        "Password Rotation and Reconciliation",
        "Account Onboarding",
      ],
    },
    {
      id: "network",
      domain: "Network and Perimeter",
      shortName: "Network & FW",
      iconName: "Network",
      proficiencyScore: 90,
      skills: [
        "Fortigate",
        "Palo Alto",
        "Firewall Policy and NAT",
        "Traffic Log Analysis",
        "Cloudflare WAF / DNS / SSL-TLS",
        "TCP/IP",
        "DNS",
        "VLAN",
        "IPSec VPN",
      ],
    },
    {
      id: "email-sec",
      domain: "Email Security",
      shortName: "Email Sec",
      iconName: "MailCheck",
      proficiencyScore: 86,
      skills: ["Microsoft Security Portal"],
    },
    {
      id: "data-auto",
      domain: "Data and Automation",
      shortName: "Data & Code",
      iconName: "Database",
      proficiencyScore: 88,
      skills: [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Oracle PL/SQL (basic)",
        "Python",
        "PHP/Laravel",
        "REST API",
        "Git",
        "Linux (basic)",
      ],
    },
    {
      id: "tools",
      domain: "Tools",
      shortName: "Ops Tools",
      iconName: "Wrench",
      proficiencyScore: 90,
      skills: ["Jira", "Postman", "PuTTY", "WinSCP", "FileZilla"],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      id: "clipan-secops",
      role: "IT Security Staff / Security Operations Engineer",
      company: "PT Clipan Finance Indonesia Tbk",
      period: "Mar 2026 - Present",
      location: "Jakarta, Indonesia",
      isCurrent: true,
      tags: [
        "CrowdStrike Falcon EDR",
        "CyberArk Privilege Cloud",
        "Fortigate & FortiManager",
        "Palo Alto",
        "Cloudflare WAF",
        "Microsoft Security Portal",
      ],
      highlights: [
        "Triaged and investigated 100+ CrowdStrike Falcon EDR alerts per month, validating IOCs (malicious IPs, suspicious processes, abnormal endpoint behavior) and containing and escalating confirmed malicious activity; closed 6+ documented false-positive cases and built custom IOA exclusions, reducing alert noise from overly broad detection rules.",
        "Secured 100+ privileged accounts across 15+ Safes in CyberArk Privilege Cloud through onboarding, password rotation, reconciliation, and PSM session monitoring; piloted a one-way (inbound-only) clipboard control for PSM sessions to reduce data-exfiltration risk.",
        "Hardened Fortigate and Palo Alto firewalls by implementing 50+ policy, NAT, and address-object changes (including a standardized branch-access policy rolled out across ~12 branches via FortiManager) and blocking 50+ malicious IOC IPs.",
        "Resolved 30+ connectivity incidents by analyzing firewall traffic logs, restoring service within 4 hours on average.",
        "Neutralized 50+ spam, phishing, and malware emails via the Microsoft Security portal and coordinated remediation to prevent repeat incidents.",
        "Strengthened web protection by configuring Cloudflare DNS, SSL/TLS, WAF rules, and access restrictions across 5+ domains/applications.",
        "Delivered daily security monitoring, incident documentation, and root cause analysis, and compiled evidence for 13 CyberArk control requests (CA.01-CA.13) for an external audit.",
      ],
    },
    {
      id: "mandala-l2",
      role: "IT Service Desk Administrator L2 / Middle Application Support",
      company: "PT Mandala Multifinance",
      period: "Feb 2021 - Feb 2026",
      location: "Jakarta, Indonesia",
      isCurrent: false,
      tags: [
        "SQL",
        "Root Cause Analysis",
        "Data Integrity",
        "SLA 95%+",
        "L2 Application Support",
        "Qontak / IS / Estim",
      ],
      highlights: [
        "Monitored production transactions across 100+ partner outlets and delivered L2 operational support for branch and central teams, resolving 300+ incidents and service requests per month with 95%+ SLA compliance and faster L1 escalation triage.",
        "Engineered SQL scripts for transaction validation, anomaly detection, data cleansing, and reconciliation—saving 10+ hours per month and surfacing 50+ discrepancies before affecting financial operations.",
        "Reduced recurring application and data issues by ~25% through deep log investigation, root cause analysis, and database checks; partnered with the IT Platform team to safeguard Branch Cash Management and Engine Journal data integrity.",
        "Collaborated with IT Platform, Product Owners, Operations, Finance, Accounting, and Human Capital teams to streamline data workflows, deliver system enhancements, and report technical malfunctions with actionable diagnostics.",
        "Produced comprehensive monthly IT Service reports from ticketing systems (Qontak, IS, and Estim) summarizing incident volumes, recurring problem trends, and SLA performance.",
        "Recognized with an Outstanding Performance award (Semester 1, 2024) for operational reliability and cross-departmental impact.",
      ],
    },
    {
      id: "ruangguru-itga",
      role: "ITGA Officer (Internship)",
      company: "PT Ruang Raya (Ruangguru)",
      period: "Feb 2020 - Jun 2020",
      location: "Jakarta, Indonesia",
      isCurrent: false,
      tags: ["Endpoint Setup", "IT Asset Management", "Network Troubleshooting", "Backup"],
      highlights: [
        "Managed IT assets, software inventory, and endpoint setup for 100+ users; troubleshot hardware, software, network, and backup issues.",
      ],
    },
    {
      id: "wahyu-arta-backend",
      role: "Backend Developer (Internship)",
      company: "PT Wahyu Arta Digital",
      period: "Nov 2019 - Dec 2019",
      location: "Jakarta, Indonesia",
      isCurrent: false,
      tags: ["PHP Native", "MySQL", "cPanel Deployment"],
      highlights: [
        "Built backend web apps in PHP Native and MySQL; deployed websites on cPanel.",
      ],
    },
  ] satisfies ExperienceItem[],

  projects: [
    {
      id: "security-alert-automation",
      title: "Security Alert Automation",
      category: "SOAR & Alerting Pipeline",
      shortDescription:
        "Parses EDR alerts, classifies severity, generates a daily summary, and sends Telegram notifications; about 50% less manual alert review, high-severity alerts within 5 minutes.",
      fullDescription:
        "An automated security alert ingestion and triage pipeline built with Python and REST APIs. It parses incoming EDR detections, enriches and classifies alert severity, generates structured daily operational summaries, and dispatches real-time Telegram Bot notifications to on-call analysts. Reduced manual alert review overhead by approximately 50% and ensured high-severity alerts are surfaced within 5 minutes.",
      impactMetric: "~50% less manual review | <5m high-severity alert SLA",
      techStack: ["Python", "REST API", "Telegram Bot", "JSON"],
      architectureHighlights: [
        "Automated JSON payload parsing & normalization from EDR API endpoints",
        "Rule-based severity classification (Critical / High / Medium / Low)",
        "Instant Telegram Bot webhook dispatch for High/Critical detections (<5 min)",
        "Automated daily digest report generation for shift handover",
      ],
    },
    {
      id: "firewall-ioc-blocking",
      title: "Firewall IOC Blocking and Traffic Analysis",
      category: "Perimeter Defense & Network Security",
      shortDescription:
        "IOC-based blocking approach, NAT validation, traffic log analysis; 50+ malicious IPs blocked.",
      fullDescription:
        "Structured perimeter defense workflow across Fortigate (with FortiManager) and Palo Alto firewalls. Combines threat intelligence IOC feeds and EDR investigation outputs to enforce address-object blocklists, validate NAT translations, standardize multi-branch access policies, and perform deep traffic log analysis to resolve connectivity incidents.",
      impactMetric: "50+ malicious IPs blocked | ~12 branches standardized",
      techStack: ["Fortigate", "Palo Alto", "TCP/IP"],
      architectureHighlights: [
        "IOC-based IP & address-object blocklist enforcement across perimeter firewalls",
        "Standardized branch-access firewall policies rolled out via FortiManager",
        "NAT policy validation & rapid traffic log root-cause analysis (<4h MTTR)",
        "Cross-correlation between EDR endpoint connections and firewall session logs",
      ],
    },
    {
      id: "cyberark-pam-admin",
      title: "CyberArk PAM Administration",
      category: "Privileged Access Management (PAM / IAM)",
      shortDescription:
        "Standardized privileged account management, Safe structure, password reconciliation and rotation, and PSM connectivity across 20+ managed systems.",
      fullDescription:
        "Enterprise Privileged Access Management implementation and administration using CyberArk PAM / Privilege Cloud. Standardized Safe architecture, onboarded privileged credentials, enforced automated password rotation and reconciliation policies, configured Privileged Session Manager (PSM) connectivity across 20+ critical systems, and piloted one-way clipboard controls alongside external audit compliance (CA.01–CA.13).",
      impactMetric: "20+ managed systems | 100+ accounts across 15+ Safes",
      techStack: ["CyberArk PAM", "PSM", "Safe", "Password Vault"],
      architectureHighlights: [
        "Standardized Safe structure & granular RBAC across 15+ Safes",
        "Automated CPM password rotation & reconciliation across 20+ target systems",
        "Hardened PSM session monitoring with piloted one-way (inbound-only) clipboard control",
        "Complete audit evidence packaging for 13 CyberArk control requests (CA.01-CA.13)",
      ],
    },
    {
      id: "soc-dashboard",
      title: "SOC Dashboard",
      category: "Unified Security Monitoring Platform",
      shortDescription:
        "One view consolidating monitoring of Fortigate, Palo Alto, CrowdStrike, CyberArk, and database health for daily monitoring and reporting.",
      fullDescription:
        "A centralized Security Operations Command Center web platform that consolidates telemetry from Fortigate, Palo Alto, CrowdStrike Falcon EDR, CyberArk PAM, and core database health into a single operational pane of glass. Built to streamline daily security posture checks, alert correlation, and executive reporting.",
      impactMetric: "5 security & infra pillars unified in 1 dashboard",
      techStack: ["Laravel", "Chart.js", "Next.js", "REST API"],
      architectureHighlights: [
        "Consolidated multi-vendor security posture view (Fortigate, Palo Alto, CrowdStrike, CyberArk)",
        "Real-time database health & transaction anomaly status indicators",
        "Interactive Chart.js / time-series visualizations for daily SOC shift reporting",
        "Full-stack architecture with headless Laravel REST API + modern dashboard UI",
      ],
      repoUrl: "https://github.com/Wahayu26/soc-dashboard-monitoring",
      repoLabel: "Wahayu26/soc-dashboard-monitoring",
    },
  ] satisfies ProjectItem[],

  githubRepos: [
    {
      id: "repo-soc-dashboard",
      name: "soc-dashboard-monitoring",
      fullName: "Wahayu26/soc-dashboard-monitoring",
      url: "https://github.com/Wahayu26/soc-dashboard-monitoring",
      description:
        "Enterprise SOC Command Center Monitoring Platform consolidating Fortigate, Palo Alto, CrowdStrike, CyberArk, and database health with a Laravel 11 API backend and Next.js dashboard.",
      techStack: ["Laravel 11", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      category: "Security Operations",
      featured: true,
    },
    {
      id: "repo-scs-cms",
      name: "scs-company-profile-cms",
      fullName: "Wahayu26/scs-company-profile-cms",
      url: "https://github.com/Wahayu26/scs-company-profile-cms",
      description:
        "Headless Payload CMS & editorial REST API with strict RBAC, signed preview URLs, webhook cache invalidation, and transactional consultation inbox backed by PostgreSQL.",
      techStack: ["Payload CMS", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
      category: "Enterprise Web & CMS",
      featured: true,
    },
    {
      id: "repo-sigma-core-web",
      name: "landing-page-projects-sigma-core",
      fullName: "Wahayu26/landing-page-projects-sigma-core",
      url: "https://github.com/Wahayu26/landing-page-projects-sigma-core",
      description:
        "Standalone Next.js public web platform for PT Sigma Core Solusindo featuring rate-limited consultation endpoints, isolated backend network architecture, and signed ISR revalidation.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Docker"],
      category: "Enterprise Web & CMS",
      featured: true,
    },
    {
      id: "repo-clipan-portal-dashboard",
      name: "clipan-portal-dashboard",
      fullName: "Wahayu26/clipan-portal-dashboard",
      url: "https://github.com/Wahayu26/clipan-portal-dashboard",
      description:
        "Enterprise portal dashboard frontend built for operational visibility, role-based access workflows, and centralized reporting.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      category: "Enterprise Web & CMS",
      featured: true,
    },
    {
      id: "repo-clipan-portal-backend",
      name: "clipan-portal-dashboard-backend",
      fullName: "Wahayu26/clipan-portal-dashboard-backend",
      url: "https://github.com/Wahayu26/clipan-portal-dashboard-backend",
      description:
        "Backend API service powering the Clipan Portal Dashboard with structured endpoints, authentication, and database integration.",
      techStack: ["Backend API", "REST API", "SQL", "Git"],
      category: "Backend & Systems",
      featured: true,
    },
  ] satisfies GithubRepoItem[],

  education: {
    degree: "Bachelor of Informatics Engineering",
    institution: "Universitas Trilogi",
    period: "2016 - 2021",
    location: "Jakarta, Indonesia",
  },

  certifications: [
    {
      id: "cert-dqlab-challenge",
      title: "Data Engineer Challenge with SQL",
      issuer: "DQLab",
      year: "2025",
      category: "Data & SQL",
    },
    {
      id: "cert-dqlab-dbm",
      title: "SQL Database Management",
      issuer: "DQLab",
      year: "2025",
      category: "Data & SQL",
    },
    {
      id: "cert-dqlab-join",
      title: "Fundamental SQL Using INNER JOIN and UNION",
      issuer: "DQLab",
      year: "2025",
      category: "Data & SQL",
    },
    {
      id: "cert-revou-pm",
      title: "Introduction to Product Management",
      issuer: "RevoU",
      year: "2023",
      category: "Product & Strategy",
    },
    {
      id: "cert-dicoding-android",
      title: "Android Mobile Development for Beginner",
      issuer: "Dicoding",
      year: "Verified",
      category: "Software Engineering",
    },
  ] satisfies CertificationItem[],

  languages: [
    {
      language: "Bahasa Indonesia",
      proficiency: "Native",
      code: "ID",
    },
    {
      language: "English",
      proficiency: "Professional working proficiency",
      code: "EN",
    },
  ],

  /**
   * 100% FAKE / SIMULATED log lines for the decorative AlertFeed component.
   * Uses strictly RFC 5737 reserved documentation IP ranges:
   * - 192.0.2.0/24 (TEST-NET-1)
   * - 198.51.100.0/24 (TEST-NET-2)
   * - 203.0.113.0/24 (TEST-NET-3)
   * and generic lab hostnames.
   */
  simulatedAlerts: [
    {
      id: "SIM-901",
      timestamp: "08:14:02 UTC",
      severity: "HIGH",
      source: "CrowdStrikeEDR",
      srcIp: "198.51.100.42",
      host: "wkstn-lab-014.example.internal",
      message: "Suspicious PowerShell encoded command execution blocked by IOA policy",
      action: "CONTAINED",
    },
    {
      id: "SIM-902",
      timestamp: "08:14:19 UTC",
      severity: "MEDIUM",
      source: "FortiGate-FW",
      srcIp: "203.0.113.88",
      host: "fw-edge-demo-01.example.net",
      message: "Outbound connection to known C2 IOC IP dropped via ThreatFeed_Blocklist",
      action: "BLOCKED",
    },
    {
      id: "SIM-903",
      timestamp: "08:14:35 UTC",
      severity: "INFO",
      source: "CyberArk-PSM",
      srcIp: "192.0.2.15",
      host: "psm-gw-sim01.example.internal",
      message: "CPM scheduled password reconciliation succeeded for Safe [SIM-DB-PROD] (One-way clipboard active)",
      action: "ROTATED",
    },
    {
      id: "SIM-904",
      timestamp: "08:14:51 UTC",
      severity: "MEDIUM",
      source: "MS-Defender",
      srcIp: "198.51.100.219",
      host: "mx-relay-sim.example.org",
      message: "Phishing campaign attachment (HTML smuggling) quarantined across 4 demo mailboxes",
      action: "QUARANTINED",
    },
    {
      id: "SIM-905",
      timestamp: "08:15:08 UTC",
      severity: "LOW",
      source: "PaloAlto-PA",
      srcIp: "203.0.113.14",
      host: "pa-core-sim02.example.net",
      message: "NAT policy translation verified for branch tunnel IPSec-SIM-BRANCH-07",
      action: "LOGGED",
    },
    {
      id: "SIM-906",
      timestamp: "08:15:24 UTC",
      severity: "INFO",
      source: "CrowdStrikeEDR",
      srcIp: "192.0.2.108",
      host: "srv-app-demo03.example.internal",
      message: "Custom IOA exclusion rule matched signed backup binary — false positive suppressed",
      action: "TUNED",
    },
    {
      id: "SIM-907",
      timestamp: "08:15:40 UTC",
      severity: "HIGH",
      source: "FortiGate-FW",
      srcIp: "198.51.100.177",
      host: "fw-edge-demo-01.example.net",
      message: "Repeated brute-force SSH probing detected from TEST-NET-2 range; source added to IOC block group",
      action: "BLOCKED",
    },
  ] satisfies SimulatedAlert[],
} as const;

export type ProfileData = typeof profileData;

