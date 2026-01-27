export interface CaseStudy {
  slug: string;
  title: string;
  oneLiner: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    architecture: string; // Description of architecture
    challenges: {
      challenge: string;
      solution: string;
    }[];
  };
  techStack: string[];
  links: {
    label: string;
    href: string;
    type: "github" | "live" | "demo";
  }[];
  images?: string[]; // Image paths for screenshots
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-document-processing",
    title: "Automating Medical Legal Document Processing for Law Firms",
    oneLiner: "How I built an AI-powered document extraction and matching system that reduced manual data processing by 90% for medical law firms across UK, Europe, and Gulf regions.",
    stats: [
      { label: "Time Saved", value: "90%", icon: "⚡" },
      { label: "Cost Reduction", value: "60%", icon: "💰" },
      { label: "Accuracy Rate", value: "98.5%", icon: "📊" },
    ],
    problem: {
      title: "The Problem",
      description:
        "Medical law firms across UK, Europe, and Gulf regions were drowning in thousands of scanned medical documents and client records. Each firm had dedicated staff members spending 40+ hours weekly manually opening documents, extracting critical client information (client name, client ID, date of birth, date of accident, claim amounts, MRI reports, medical records), and cross-referencing this data against massive spreadsheets containing thousands of client records. This manual process was not only time-consuming and expensive but also prone to human errors that could impact case outcomes. Law firms needed a scalable solution to process multiple documents simultaneously, extract structured data accurately, and automatically match it against existing client databases with confidence scoring.",
    },
    solution: {
      title: "The Engineering Solution",
      description:
        "I developed a comprehensive intelligent document processing system using Google Document AI that enables medical law firms to upload multiple scanned documents simultaneously, automatically extract structured client data (names, IDs, dates, amounts, medical reports), and intelligently match extracted information against spreadsheet databases using advanced fuzzy matching algorithms. The system provides real-time matching scores and percentage accuracy, allowing legal teams to quickly identify discrepancies and validate client information without manual intervention.",
      architecture:
        "The system architecture features a React.js frontend with multi-file upload capabilities and real-time progress tracking, a FastAPI backend with async processing queues for handling bulk document uploads, Google Cloud Document AI for OCR and intelligent data extraction from scanned medical documents, PostgreSQL database for storing extracted data and client records, a fuzzy matching engine using Python's rapidfuzz library for intelligent data comparison, and a comprehensive dashboard displaying extraction results, matching scores, and confidence percentages. The system processes documents in parallel batches, ensuring scalability for law firms handling thousands of documents monthly.",
      challenges: [
        {
          challenge:
            "Extracting accurate data from poor-quality scanned medical documents with varying formats, handwriting, and image quality was critical for legal accuracy.",
          solution:
            "I implemented a sophisticated pre-processing pipeline using Python/OpenCV that automatically enhances image quality through noise reduction, contrast optimization, deskewing, and resolution upscaling. This preprocessing step improved Document AI extraction accuracy by 18%, ensuring reliable data extraction even from low-quality scans commonly found in medical records.",
        },
        {
          challenge:
            "Matching extracted client data against spreadsheet records required handling variations in name spellings, date formats, and data inconsistencies common in legal databases.",
          solution:
            "I developed a custom fuzzy matching algorithm using rapidfuzz that compares multiple fields simultaneously (name, ID, dates) with configurable similarity thresholds. The system uses weighted scoring across different data points, handles common variations (e.g., 'John Smith' vs 'J. Smith'), and provides percentage match scores. This intelligent matching reduced false negatives by 95% compared to exact string matching.",
        },
        {
          challenge:
            "Processing thousands of documents simultaneously while maintaining system performance and providing real-time feedback to users.",
          solution:
            "I architected an async processing system with Redis-based job queues that distributes document processing across multiple workers. The system processes documents in parallel batches, provides real-time progress updates via WebSocket connections, and includes automatic retry logic for failed extractions. This architecture enables law firms to upload and process 500+ documents simultaneously without performance degradation.",
        },
        {
          challenge:
            "Ensuring data security and compliance with legal data protection regulations (GDPR for Europe, UK data protection laws, and regional regulations for Gulf countries).",
          solution:
            "I implemented end-to-end encryption for document storage, role-based access controls, comprehensive audit logging, and data retention policies compliant with GDPR and regional legal requirements. All extracted data is stored securely with encryption at rest, and the system includes automatic data anonymization features for sensitive medical information.",
        },
      ],
    },
    techStack: [
      "Python",
      "FastAPI",
      "React.js",
      "Google Cloud Document AI",
      "PostgreSQL",
      "OpenCV",
      "RapidFuzz",
      "Redis",
      "Docker",
      "AWS",
    ],
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/ahmedafzal98/ocr-mvp-ui",
        type: "github",
      },
    ],
  },
  {
    slug: "enterprise-attendance-system",
    title: "Complete Attendance Management System for Startups and Growing Companies",
    oneLiner:
      "How I built a comprehensive attendance tracking system with mobile app and admin panel that eliminated manual tracking, reduced HR workload by 80%, and provided real-time attendance analytics for UK, Europe, and Gulf region startups.",
    stats: [
      { label: "HR Time Saved", value: "80%", icon: "⚡" },
      { label: "Tracking Accuracy", value: "100%", icon: "📊" },
      { label: "Late Detection", value: "Real-time", icon: "⏰" },
    ],
    problem: {
      title: "The Problem",
      description:
        "A growing startup company lacked a proper attendance management system, making it impossible to accurately track employee attendance patterns. HR staff struggled to identify late comers, track absences, and calculate monthly attendance reports manually. Without an automated system, the company couldn't properly monitor who was present, absent, or late, leading to payroll discrepancies, compliance issues, and inefficient workforce management. The manual process was time-consuming, error-prone, and didn't provide real-time visibility into employee attendance. At the end of each month, HR teams spent hours manually compiling attendance data, calculating working hours, and identifying attendance violations, which was both costly and inefficient for a fast-growing startup.",
    },
    solution: {
      title: "The Engineering Solution",
      description:
        "I developed a comprehensive attendance management system consisting of a React Native mobile application for employees and a powerful admin panel for HR management. The system includes check-in/check-out functionality, automatic late detection, comprehensive leave management, and IP-based location verification. Employees can only check in or check out when connected to the office WiFi network, ensuring accurate attendance tracking. The admin panel provides complete visibility into all attendance data, allows managers to approve or reject leave requests, and generates detailed monthly reports automatically. The system eliminates manual tracking entirely and provides real-time attendance analytics.",
      architecture:
        "The system architecture features a React Native mobile app (iOS & Android) for employee check-in/check-out operations with offline capability, a comprehensive admin panel built with React.js for HR management and analytics, a Node.js/Express REST API backend handling all business logic and data processing, PostgreSQL database storing attendance records, employee data, leave requests, and IP whitelist configurations, IP-based authentication system that verifies employee location through office WiFi network connection, automatic late detection algorithm that compares check-in times against configured work schedules, leave management workflow with request submission, approval/rejection system, and leave balance tracking, and real-time dashboard displaying attendance statistics, late comers, absent employees, and monthly attendance summaries. The system uses secure session management and role-based access control to ensure data security.",
      challenges: [
        {
          challenge:
            "Implementing reliable IP-based attendance verification that only allows check-in/check-out when employees are connected to office WiFi, preventing remote check-ins and ensuring accurate location tracking.",
          solution:
            "I developed a sophisticated IP whitelisting system that stores authorized office network IP ranges in the database. When an employee attempts to check in or check out, the system verifies their current IP address against the whitelist. If the IP doesn't match an authorized office network, the system denies access. I implemented additional security measures including device fingerprinting and network SSID verification to prevent IP spoofing attempts. The system logs all access attempts with IP addresses for audit purposes.",
        },
        {
          challenge:
            "Automatically detecting late arrivals and calculating accurate attendance statistics without manual intervention, especially for employees with flexible schedules or different shift timings.",
          solution:
            "I built an intelligent late detection algorithm that compares each employee's check-in time against their configured work schedule. The system accounts for different shift timings, flexible schedules, and grace periods. Late arrivals are automatically flagged and logged with timestamps. The system generates real-time alerts for HR managers and provides detailed late arrival reports. I implemented configurable grace periods and exception handling for special circumstances, ensuring fair and accurate late tracking.",
        },
        {
          challenge:
            "Creating a seamless leave management workflow that allows employees to request leaves and enables managers to approve or reject requests efficiently, with proper leave balance tracking.",
          solution:
            "I developed a comprehensive leave management module with a user-friendly request interface in the mobile app. Employees can submit leave requests with dates, reason, and supporting documents. The admin panel provides managers with a centralized dashboard showing all pending leave requests with employee details and leave balances. Managers can approve or reject requests with comments, and the system automatically updates leave balances and attendance records. I implemented email notifications for request status changes and integrated leave data with attendance calculations to ensure accurate monthly reports.",
        },
        {
          challenge:
            "Generating accurate monthly attendance reports that consolidate check-in/check-out data, late arrivals, absences, and leave information for payroll and compliance purposes.",
          solution:
            "I created an automated reporting engine that processes all attendance data at the end of each month. The system aggregates check-in/check-out times, calculates total working hours, identifies late arrivals, marks absences, and incorporates approved leave data. The admin panel generates comprehensive monthly reports in multiple formats (PDF, Excel) with detailed breakdowns by employee, department, and date ranges. The reports include attendance percentages, late arrival statistics, leave summaries, and compliance indicators, eliminating the need for manual data compilation.",
        },
      ],
    },
    techStack: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "IP Geolocation",
      "AWS",
    ],
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/ahmedafzal98/attendance-system",
        type: "github",
      },
    ],
  },
  {
    slug: "pickleball-store-ecommerce",
    title: "Affiliate-Powered E-Commerce Platform for Pickleball Retail",
    oneLiner: "How I built a scalable e-commerce engine with eBay and Amazon affiliate integration, real-time inventory syncing, and automated commission tracking for UK and international markets.",
    stats: [
      { label: "Revenue Growth", value: "300%", icon: "💰" },
      { label: "Inventory Sync", value: "Real-time", icon: "⚡" },
      { label: "Commission Tracking", value: "100%", icon: "📊" },
    ],
    problem: {
      title: "The Problem",
      description:
        "The client needed a robust e-commerce platform that could seamlessly integrate products from eBay and Amazon affiliate programs while maintaining real-time inventory synchronization. As an affiliate member of both platforms, the client required a system that could automatically track when customers clicked through from the website to make purchases, ensuring accurate commission attribution. The platform needed to handle thousands of products, sync inventory across multiple marketplaces, process secure global payments, and provide detailed analytics for affiliate commission tracking. Without proper tracking, the client was losing potential commissions and had no visibility into which products were driving sales.",
    },
    solution: {
      title: "The Engineering Solution",
      description:
        "I engineered a full-stack MERN e-commerce platform with deep integration to eBay and Amazon affiliate APIs. The system automatically syncs product inventory in real-time, tracks user clicks and redirects to affiliate platforms, and provides comprehensive commission analytics. When customers browse products on the website and click through to purchase on eBay or Amazon, the system automatically attaches affiliate tracking parameters, ensuring the client receives commission for every referred sale. The platform includes a sophisticated inventory management system that syncs product availability, pricing, and details across platforms, preventing overselling and ensuring accurate product information.",
      architecture:
        "The architecture features a React.js frontend with Redux for state management, providing a seamless shopping experience with real-time product updates. The Node.js/Express backend integrates with eBay Finding API and Amazon Product Advertising API to fetch product data and manage affiliate links. A PostgreSQL database stores product catalogs, user sessions, and affiliate tracking data. The system includes a Redis cache layer for fast product lookups and session management. Stripe integration handles secure payment processing for direct purchases, while affiliate link generation ensures proper commission tracking. A background job system continuously syncs inventory data from both platforms, updating product availability and pricing in real-time. The platform tracks user sessions and click-through events, storing affiliate referral data for commission reporting.",
      challenges: [
        {
          challenge:
            "Maintaining real-time inventory synchronization across eBay and Amazon while handling API rate limits and ensuring data consistency.",
          solution:
            "I implemented a sophisticated caching strategy with Redis that stores product data locally while periodically syncing with affiliate APIs. The system uses exponential backoff for API rate limiting and processes inventory updates in batches during off-peak hours. I created a conflict resolution mechanism that prioritizes the most recent data and flags discrepancies for manual review, ensuring 99.9% inventory accuracy.",
        },
        {
          challenge:
            "Tracking affiliate commissions accurately when users navigate from the website to eBay or Amazon, especially with session timeouts and cookie expiration.",
          solution:
            "I developed a comprehensive tracking system that stores user sessions in the database with unique identifiers. When a user clicks an affiliate link, the system generates a tracking token that persists across sessions. The platform uses first-party cookies and server-side session tracking to maintain attribution even if third-party cookies are blocked. I implemented a 30-day attribution window that tracks conversions even if users don't purchase immediately, ensuring maximum commission capture.",
        },
        {
          challenge:
            "Handling thousands of products from multiple sources while maintaining fast page load times and optimal user experience.",
          solution:
            "I architected a multi-layered caching system using Redis for hot product data and PostgreSQL for persistent storage. The frontend implements lazy loading and pagination, while the backend uses database indexing and query optimization. I implemented a CDN for static assets and product images, reducing load times by 70%. The system pre-fetches popular products and uses predictive caching based on user behavior patterns.",
        },
        {
          challenge:
            "Ensuring secure payment processing and compliance with international payment regulations for UK, European, and global customers.",
          solution:
            "I integrated Stripe's payment platform with support for multiple currencies and payment methods. The system includes PCI-DSS compliant payment handling, 3D Secure authentication for European customers, and automatic tax calculation based on customer location. I implemented fraud detection rules and transaction monitoring to prevent fraudulent purchases while maintaining a smooth checkout experience for legitimate customers.",
        },
      ],
    },
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "PostgreSQL",
      "Redis",
      "eBay API",
      "Amazon Product Advertising API",
      "Stripe",
      "TypeScript",
      "AWS",
    ],
    links: [
      {
        label: "View Live Site",
        href: "https://wesellpickleball.xyz/",
        type: "live",
      },
      {
        label: "View GitHub",
        href: "https://github.com/ahmedafzal98/pickleball-store",
        type: "github",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

