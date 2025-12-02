import { ExperienceItem, Service, WorkSample, Testimonial, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "John Gu",
  title: "VP Finance & Strategic CFO",
  tagline: "Scaling SaaS & Tech Companies through Operational Excellence",
  about: "Finance executive with 12+ years building and scaling finance functions at high-growth SaaS and technology companies. Proven track record establishing financial infrastructure from the ground up, implementing automated systems, and partnering with CEOs to drive operational excellence.",
  location: "Torrance, California USA",
  email: "jtgu04@gmail.com",
  phone: "540-471-2277",
  linkedin: "linkedin.com/in/johngu" // Placeholder, update if you have the specific link
};

// This context is fed to the Gemini AI to answer questions about you
export const RESUME_CONTEXT = `
Name: John Gu
Contact: 540-471-2277 | jtgu04@gmail.com | Torrance, CA
Profile: Finance executive with 12+ years building and scaling finance functions at high-growth SaaS and technology companies. Expert at partnering with CEOs, PE-backed environments, and scaling organizations.

Skills:
- Financial Operations: Monthly Close, AP Mgmt, GAAP, Internal Controls, Audit Mgmt.
- Strategic Finance: Advanced Modeling, Cost Optimization, Budgeting/Forecasting, Scenario Analysis.
- Data/Tech: SaaS Metrics, Unit Economics, Tech Spend Optimization, ROI Analysis.
- Systems: NetSuite, QuickBooks, SQL, Advanced Excel, ERP Implementation.

Experience:
1. GrowthDay (2021-2025) - VP of Finance: Built finance function from ground up. Implemented automated systems. Led comprehensive reporting. Set company-wide targets with CEO. Partnered with engineering on capitalization.
2. PAWZ.com/Nano (2020-2021) - CFO: Direct-to-consumer e-commerce. Scaled finance ops for 9000+ SKUs. Managed global team. Built 13-week cash flow forecast (95% accuracy). Standardized vendor agreements ($500k+ cash flow improvement).
3. AN Direct/MDHearing Aid (2019-2020) - CFO: PE-funded DTC ($30M+ revenue). Managed 3-person team. Delivered institutional-grade reporting. Led 4 software implementations.
4. Alta Springs Ventures (2017-2018) - Principal: Performed 10-year financial analysis ($200M+). Executed $15M valuation model.
5. Fidelity Investments (2012-2017) - Finance Director: Led P&L oversight ($100M+ expense). Executed financial analysis on $50M+ deals annually. Drove multi-year cost reduction ($90M+/year).

Education:
- MBA, University of North Carolina - Chapel Hill (2010-2012)
- BS Chemistry, University of Virginia (2000-2004)
`;

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: 'VP of Finance | Head of Finance',
    company: 'GrowthDay',
    period: '2021 - 2025',
    description: 'Head of Finance for rapidly scaling SaaS technology startup.',
    achievements: [
      'Built scalable finance infrastructure from the ground up, implementing automated systems to support hyper-growth.',
      'Identified cost-cutting opportunities and revenue optimization targets, driving strategic decisions that delivered significant profit increase.',
      'Set company-wide annual targets alongside CEO; built financial models that guided strategic decisions.',
      'Partnered with engineering on software capitalization accounting and established GAAP-compliant practices.',
      'Implemented scalable finance systems (new AP platform) delivering substantial operational savings.'
    ]
  },
  {
    id: '2',
    role: 'CFO',
    company: 'PAWZ.com / Nano',
    period: '2020 - 2021',
    description: 'CFO for direct-to-consumer e-commerce companies.',
    achievements: [
      'Scaled finance operations for high-volume business (9,000+ SKUs, 100K+ annual orders, $8M+ purchases).',
      'Built comprehensive cash flow management: Developed 13-week rolling cash flow forecasting with ~95% accuracy.',
      'Standardized vendor agreements and payment terms, improving cash flow by $500K+.',
      'Managed global team executing financials, monthly close, and audit preparations.'
    ]
  },
  {
    id: '3',
    role: 'CFO',
    company: 'AN Direct / MDHearing Aid',
    period: '2019 - 2020',
    description: 'CFO for PE-funded DTC hearing aid company; $30M+ revenue.',
    achievements: [
      'Managed 3-person team handling full financial spectrum (Accounting, AP/AR, FP&A, Tax, Treasury).',
      'Delivered institutional-grade financial reporting for publicly listed PE firm and managed quarterly board presentations.',
      'Led 4 software implementations: Consolidated entities to single accounting system, automated T&E and AP processes.',
      'Led Big 4 audits receiving unqualified opinions from PwC.'
    ]
  },
  {
    id: '4',
    role: 'Principal | Business & Financial Consultant',
    company: 'Alta Springs Ventures',
    period: '2017 - 2018',
    description: 'Provided strategic financial consulting for major enterprises.',
    achievements: [
      'Performed 10-year financial analysis ($200M+) for Fortune 200 company strategies.',
      'Executed $15M valuation: Built 3-statement model and sensitivity analysis for international water plant acquisition.',
      'Created comprehensive 3-statement financial model helping facilitate multi-million dollar equity raise.'
    ]
  },
  {
    id: '5',
    role: 'Finance Director',
    company: 'Fidelity Investments',
    period: '2012 - 2017',
    description: 'Decision Support for Technology Enterprise Infrastructure.',
    achievements: [
      'Led P&L oversight and management for technology divisions representing $100M+ expense.',
      'Executed financial analysis on $50M+ deals annually, delivering $5-15M in annual savings.',
      'Drove multi-year cost reduction initiatives reducing planned infrastructure spend by $90M+/year.',
      'Led quarterly technology reviews with CIOs presenting financials and trends for $900M spend.'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Financial Operations",
    skills: ["Monthly Close", "GAAP Accounting", "Internal Controls", "Audit Management", "Multi-entity Consolidation"]
  },
  {
    title: "Strategic Finance",
    skills: ["Advanced Financial Modeling", "Budgeting & Forecasting", "Scenario Analysis", "P&L Management", "Cost Optimization"]
  },
  {
    title: "Data & Tech Management",
    skills: ["SaaS Metrics & Unit Economics", "ROI Analysis", "Vendor Management", "Technology Spend Optimization"]
  },
  {
    title: "Systems & Analytics",
    skills: ["NetSuite", "QuickBooks", "SQL", "Advanced Excel", "Financial Dashboards", "ERP Implementation"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "John possesses a deep understanding of the complexity of financial modeling. He's thorough, diligent, professional, and a good communicator.",
    author: "Confidential",
    role: "CEO, AI Software Company"
  },
  {
    id: 't2',
    quote: "What separates John from others is his ability to distill complex financial concepts into digestible & prescriptive insights. It is this ability to bring focus to the critical elements of the big picture that highlight his exceptional data mining and financial modeling skills. A strong project manager, polished presenter, and value added team member, it was a pleasure to work with John.",
    author: "Michael Olson",
    role: "Finance Director, Fidelity Investments"
  },
  {
    id: 't3',
    quote: "John Gu is highly professional and a very talented financial analyst. Not only was it a pleasure working with him, the financial modeling and projections he delivered for me allowed me to learn so much more about my business. He is very easy to communicate with and you can tell that he is passionate about what he does and prides himself in providing quality work.",
    author: "Confidential",
    role: "CEO, FinTech Startup"
  },
  {
    id: 't4',
    quote: "I worked with John at Fidelity, where he provided Financial support, analysis and insight for the product I managed. He provided detailed analysis for several large deals presented to upper management, as well as scenario modeling and ongoing TCO and budget analysis. John was able to break down complex financial scenarios into easy-to-consume visuals that helped us make important decisions about strategy and partnerships. John always had a lot on his plate, but you’d never know it - he always made time and produced top quality work!",
    author: "Samantha Ieva",
    role: "VP Technology Management, Fidelity Investments"
  },
  {
    id: 't5',
    quote: "It was great working with John. His finance/Excel acumen were just what we needed. Further, John easily slipped into a collaborative role with both our team and our clients. I would recommend John especially when both finance expertise and good people skills are need. ",
    author: "Confidential",
    role: "Senior Consultant, Data Center Consultancy"
  }
];

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: 's1',
    title: 'Financial Model Software Company',
    description: 'Comprehensive financial model built for a software company including revenue projections and expense scaling.',
    type: 'EXCEL',
    downloadUrl: './public/assets/Financial%20Model_Software%20Company.xlsx',
    tags: ['Financial Modeling', 'Software', 'Excel']
  },
  {
    id: 's2',
    title: 'Market Sizing Model',
    description: 'Macro-enabled market sizing analysis to estimate Total Addressable Market (TAM) and serviceability.',
    type: 'EXCEL', 
    downloadUrl: './public/assets/Sample%20Market%20Sizing%20Model.xlsm',
    tags: ['Market Analysis', 'TAM', 'Strategy']
  },
  {
    id: 's3',
    title: 'Pre-IPO DCF Valuation',
    description: 'Discounted Cash Flow (DCF) valuation model prepared for a healthcare company prior to IPO.',
    type: 'PDF',
    downloadUrl: './public/assets/Pre-IPO%20DCF%20Valuation_Healthcare%20Company.pdf',
    tags: ['Valuation', 'Healthcare', 'IPO']
  },
  {
    id: 's4',
    title: 'SaaS Financial Model',
    description: 'Detailed SaaS financial model focusing on recurring revenue, churn, and key unit economics.',
    type: 'EXCEL',
    downloadUrl: './public/assets/SaaS_FInancial%20Model.xlsx',
    tags: ['SaaS', 'Metrics', 'Growth']
  },
  {
    id: 's5',
    title: 'Valuation Manufacturing Company',
    description: 'Valuation report and analysis for a manufacturing entity, covering asset depreciation and inventory.',
    type: 'PDF',
    downloadUrl: './public/assets/Valuation%20Manufacturing%20Company.pdf',
    tags: ['Manufacturing', 'Valuation', 'Assets']
  }
];

export const SERVICES: Service[] = [
  {
    title: "Fractional CFO",
    description: "Strategic leadership for Series A-B startups. I bridge the gap between accounting data and executive decision-making.",
    icon: "chart"
  },
  {
    title: "Financial Infrastructure",
    description: "Building the 'Finance Stack': ERP implementation, AP automation, and closing processes that scale.",
    icon: "users"
  },
  {
    title: "Strategic Modeling",
    description: "Deep-dive modeling for M&A, fundraising, or complex operational scenarios.",
    icon: "document"
  }
];