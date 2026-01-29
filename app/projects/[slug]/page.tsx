import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Play, Zap, DollarSign, Bot } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";
import CaseStudyLoader from "@/components/CaseStudyLoader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    "⚡": <Zap className="w-6 h-6" />,
    "💰": <DollarSign className="w-6 h-6" />,
    "🤖": <Bot className="w-6 h-6" />,
    "📊": <Bot className="w-6 h-6" />,
    "👥": <Bot className="w-6 h-6" />,
  };

  const linkIconMap = {
    github: Github,
    live: ExternalLink,
    demo: Play,
  };

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyLoader />
      <Navbar />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            name: caseStudy.title,
            description: caseStudy.oneLiner,
            author: {
              "@type": "Person",
              name: "Ahmed Afzal",
              url: "https://ahmedafzal.dev",
            },
            datePublished: "2024-01-01",
            keywords: "document automation, OCR solution, legal document processing, medical law firm automation, AI document extraction, UK, Europe, Gulf",
          }),
        }}
      />

      {/* Hero Section - The Hook */}
      <article className="relative pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-electric-600 transition-colors duration-300 mb-8 group"
            aria-label="Back to projects"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>

          {/* Title & One-Liner */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal-900 mb-4 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-electric-600 font-semibold mb-6 sm:mb-8">
            {caseStudy.oneLiner}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {caseStudy.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-charcoal-900">
                      {stat.value}
                    </div>
                    <div className="text-base sm:text-lg text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Main Content - Single Column Layout */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20" itemScope itemType="https://schema.org/Article">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Problem */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4 sm:mb-6">
              {caseStudy.problem.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
                {caseStudy.problem.description}
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4 sm:mb-6">
              {caseStudy.solution.title}
            </h2>
            <div className="prose prose-lg max-w-none mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-4 sm:mb-6">
                {caseStudy.solution.description}
              </p>
            </div>

            {/* Architecture Description */}
            <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 border border-electric-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-900 mb-4 sm:mb-6">
                Architecture Overview
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                {caseStudy.solution.architecture}
              </p>
            </div>

            {/* Technical Challenges */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal-900">
                Technical Challenges & Solutions
              </h3>
              {caseStudy.solution.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-electric-600 mb-2 sm:mb-3">
                      Challenge {index + 1}:
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                      {challenge.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold text-teal-600 mb-2 sm:mb-3">
                      My Solution:
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6 sm:mb-8">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {caseStudy.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-100 text-slate-700 rounded-full text-sm sm:text-base md:text-lg font-mono border border-gray-200 hover:bg-electric-50 hover:border-electric-200 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & CTA */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {caseStudy.links.map((link, index) => {
                const Icon = linkIconMap[link.type];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-600 text-white rounded-lg text-base font-semibold hover:bg-electric-700 transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </a>
                );
              })}
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-electric-600 text-electric-600 rounded-lg text-base font-semibold hover:bg-electric-50 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  // SEO-optimized metadata with keywords for UK, Europe, and Gulf clients
  let seoKeywords: string[] = [];
  
  if (slug === "intelligent-document-processing") {
    seoKeywords = [
      "document automation",
      "OCR solution",
      "legal document processing",
      "medical law firm automation",
      "data extraction UK",
      "document AI Europe",
      "legal tech Gulf",
      "fuzzy matching algorithm",
      "document processing software",
      "legal automation consultant",
      "AI document extraction",
      "legal document management",
      "medical record processing",
      "client data matching",
      "legal tech developer",
    ];
  } else if (slug === "enterprise-attendance-system") {
    seoKeywords = [
      "attendance management system",
      "employee attendance tracking",
      "HR management software",
      "attendance app UK",
      "leave management system",
      "employee tracking software",
      "HR automation Europe",
      "attendance system Gulf",
      "startup HR software",
      "mobile attendance app",
      "IP-based attendance",
      "check-in check-out system",
      "late detection system",
      "attendance analytics",
      "HR tech developer",
    ];
  } else if (slug === "pickleball-store-ecommerce") {
    seoKeywords = [
      "e-commerce platform",
      "affiliate marketing system",
      "eBay affiliate integration",
      "Amazon affiliate tracking",
      "inventory management system",
      "e-commerce developer UK",
      "affiliate commission tracking",
      "real-time inventory sync",
      "MERN stack e-commerce",
      "online store development",
    ];
  }

  return {
    title: `${caseStudy.title} | Ahmed Afzal - Full Stack & AI Engineer`,
    description: `${caseStudy.oneLiner} Professional document automation solution for medical law firms in UK, Europe, and Gulf regions. AI-powered OCR, data extraction, and intelligent matching system.`,
    keywords: seoKeywords.join(", "),
    openGraph: {
      title: `${caseStudy.title} | Ahmed Afzal`,
      description: caseStudy.oneLiner,
      type: "article",
      url: `https://ahmedafzal.dev/projects/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Ahmed Afzal`,
      description: caseStudy.oneLiner,
    },
  };
}

