/* -------------------------------------------------------------------------- */
/*  app/demo/DemoProjectPage.tsx                                              */
/*  A single self-contained demo page that renders every section of a         */
/*  “Project” using hard-coded sample data.                                   */
/*  - Built with React / Next 13 “use client” + Tailwind + Framer-motion.     */
/* -------------------------------------------------------------------------- */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ═════════════════════════════════ DEMO DATA ══════════════════════════════ */

const demo = {
    /* ── meta ─────────────────────────────────────────────────────────────── */
    title: "Smart Sales CRM",
    tagline: "Close more deals — automatically",
    previewImage: "/upload/1750441396915-26.jpg",
    category: "CRM",
    isActive: true,
  
    /* ── sections ──────────────────────────────────────────────────────────── */
    problemSolution: {
      heading: "The Problem & Our Solution",
      problemTitle: "Manual data entry is killing productivity",
      problemDescription:
        "Reps spend over 30 % of their day logging calls, updating fields and hunting for information.",
      problemImage: "/upload/1750441399595-26.jpg", // first element of problemImages[]
      idealFor: ["B2B SaaS", "Inside sales", "Start-ups"],
      solutionTitle: "Automation that works out-of-the-box",
      solutionDescription:
        "Smart Sales captures every interaction automatically and recommends the next step so your pipeline never stalls.",
      features: [
        {
          title: "Auto-capture emails & calls",
          description:
            "Every customer touchpoint is logged without lifting a finger.",
          image: "/upload/1750441403821-26.jpg",
        },
        {
          title: "AI next-step coach",
          description:
            "Dynamic suggestions boost conversion rates by 18 %.",
          image: "/upload/1750441404918-26.jpg",
        },
      ],
    },
  
    proofOfConcept: {
      heading: "Proof of Concept",
      description:
        "See the prototype in action and explore how quickly it delivers value.",
      samples: [
        {
          title: "Live dashboard preview",
          description: "Interactive Figma prototype",
          image: "/upload/1750441409986-26.jpg",
          href: "https://figma.com/proto/demo",
        },
        {
          title: "Workflow builder",
          description: "Drag-and-drop automation flow",
          image: "/upload/1750441409249-26.jpg",
          href: "https://www.google.com",
        },
      ],
    },
  
    experienceSection: {
      heading: "Our experince",
      description:
        "10+ years building revenue-driving tools for high-growth teams.",
      highlightedText: "120+ CRM roll-outs • 3 M daily active reps",
      bullets: [
        "HubSpot & Salesforce certified",
        "24/7 enterprise support",
        "Security & compliance baked in",
      ],
      image: "/upload/1750441413062-26.jpg",
    },
  
    modulesSection: {
      heading: "Key Modules",
      description:
        "Choose just the pieces you need today and add more later.",
      modules: [
        { icon: "💻", text: "Lead Capture" },
        { icon: "🤖", text: "AI Scoring" },
        { icon: "📊", text: "Revenue Forecasting" },
        { icon: "🔒", text: "Role-based Security" },
      ],
    },
  
    processSection: {
      heading: "Our Process",
      description:
        "From discovery to launch in under 6 weeks — here’s how.",
      image: "/upload/1750441415649-26.jpg",
    },
  
    ctaSection: {
      heading: "Ready to super-charge your pipeline?",
      text: "Book a 30-minute strategy call and get a custom ROI projection.",
      buttonText: "Book a demo",
      buttonHref: "https://calendly.com/demo",
      cost: "$99 / mo",
    },
  
    impactSection: {
      heading: "Impact & Results",
      description:
        "From day-one automation to measurable ROI, here’s what you’ll get.",
      impacts: [
        {
          /* row 0 → bullets LEFT, image RIGHT */
          bullets: [
            { icon: "🚀", bullet: "↑ 32 % More deals / rep" },
            { icon: "🔥", bullet: "↓ 28 % Manual data entry" },
            { icon: "⚡", bullet: "↓ 28 % Manual data coding" },
          ],
          statImage: "/upload/1750441420443-26.jpg",
        },
        {
          /* row 1 → image LEFT, bullets RIGHT */
          bullets: [
            { icon: "🚀", bullet: "99.9 % Uptime SLA" },
            { icon: "🔒", bullet: "GDPR & SOC-2 compliant" },
          ],
          statImage: "/upload/1750441420824-26.jpg",
        },
      ],
    },
  
    statisticsSection: {
      heading: "Statistics",
      statistics: [
        { statLabel: "Active users", value: "12 k+" },
        { statLabel: "Integrations", value: "50+" },
        { statLabel: "Countries served", value: "42" },
      ],
    },
  
    testimonialsSection: {
      heading: "What Customers Say",
      testimonials: [
        {
          quote:
            "We shaved hours off every rep’s week and grew ARR by 40 % in six months.",
          author: "Alex Kim",
          role: "VP Sales, GrowthHub",
        },
      ],
    },
  
    techStackSection: {
      heading: "Built on Modern Tech",
      description:
        "Scalable, secure and battle-tested technologies.",
      technologies: [
        { name: "Next.js", icon: "⚡" },
        { name: "PostgreSQL", icon: "💾" },
        { name: "AWS", icon: "☁️" },
        { name: "LangChain", icon: "🧠" },
      ],
    },
  };

/* ══════════════════════════════ HELPERS / UI BLOCKS ═══════════════════════ */

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-extrabold text-center mb-10"
    >
      {title}
    </motion.h2>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center px-6 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">{demo.title}</h1>
        <p className="text-xl opacity-90">{demo.tagline}</p>
        {demo.previewImage && (
          <div className="mx-auto max-w-xl">
            <Image
              src={demo.previewImage}
              alt={demo.title}
              width={800}
              height={450}
              className="rounded-xl shadow-lg mt-10"
            />
          </div>
        )}
      </motion.div>
    </header>
  );
}

function ProblemSolution() {
  const ps = demo.problemSolution;
  return (
    <section className="py-20">
      <SectionHeading title={ps.heading} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h3 className="text-2xl font-bold mb-3">{ps.problemTitle}</h3>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {ps.problemDescription}
          </p>
          <ul className="list-disc ml-5 mb-6 space-y-1">
            {ps.idealFor.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          {ps.problemImage && (
            <Image
              src={ps.problemImage}
              alt="Problem"
              width={600}
              height={350}
              className="rounded-lg shadow"
            />
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-2xl font-bold mb-3">{ps.solutionTitle}</h3>
          <p className="mb-8 text-gray-700 dark:text-gray-300">
            {ps.solutionDescription}
          </p>

          <div className="space-y-6">
            {ps.features.map((f, idx) => (
              <div key={idx} className="flex gap-4">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover shrink-0"
                />
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProofOfConcept() {
  const pc = demo.proofOfConcept;
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
      <SectionHeading title={pc.heading} />
      <p className="max-w-3xl mx-auto text-center mb-14 text-gray-700 dark:text-gray-300 px-6">
        {pc.description}
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {pc.samples.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="block group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800/70"
          >
            <Image
              src={s.image}
              alt={s.title}
              width={600}
              height={400}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4 space-y-2">
              <h4 className="font-bold">{s.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {s.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function ExperienceBlock() {
  const ex = demo.experienceSection;
  return (
    <section className="py-20">
      <SectionHeading title={ex.heading} />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="flex-1 space-y-6"
        >
          <p className="text-gray-700 dark:text-gray-300">{ex.description}</p>
          <p className="text-lg font-semibold">{ex.highlightedText}</p>
          <ul className="list-disc ml-5 space-y-1">
            {ex.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </motion.div>

        {ex.image && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <Image
              src={ex.image}
              alt="Experience"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ModulesBlock() {
  const m = demo.modulesSection;
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
      <SectionHeading title={m.heading} />

      <p className="max-w-2xl mx-auto text-center mb-12 text-gray-700 dark:text-gray-300 px-6">
        {m.description}
      </p>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
        {m.modules.map((mod, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
          >
            <span className="text-3xl">{mod.icon}</span>
            <span className="font-medium">{mod.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProcessBlock() {
  const p = demo.processSection;
  return (
    <section className="py-20">
      <SectionHeading title={p.heading} />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
        <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
        {p.image && (
          <Image
            src={p.image}
            alt="Process"
            width={900}
            height={500}
            className="mx-auto rounded-lg shadow-lg"
          />
        )}
      </div>
    </section>
  );
}

function CTA() {
  const c = demo.ctaSection;
  return (
    <section className="py-24 bg-blue-600 text-white text-center px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold">{c.heading}</h2>
        <p className="opacity-90">{c.text}</p>
        <p className="text-xl font-semibold">{c.cost}</p>
        <Link
          href={c.buttonHref}
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          {c.buttonText}
        </Link>
      </motion.div>
    </section>
  );
}

function ImpactBlock() {
    const im = demo.impactSection;                // rename if desired
  
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
        <SectionHeading title={im.heading} />
  
        <p className="max-w-3xl mx-auto text-center mb-14 text-gray-700 dark:text-gray-300 px-6">
          {im.description}
        </p>
  
        {/* ─────────────────────────────────────────────── */}
        {/* each element in `impacts` is a ROW (bullets + Image) */}
        {/* ─────────────────────────────────────────────── */}
        <div className="space-y-24">
          {im.impacts.map((row, idx) => {
            const bulletsSide = (
              <div className="flex flex-col gap-6 max-w-md mx-auto">
                {row.bullets.map((b, bi) => (
                  <motion.div
                    key={bi}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: bi * 0.06 }}
                    className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
                  >
                    <span className="text-3xl">{b.icon}</span>
                    <span className="font-medium">{b.bullet}</span>
                  </motion.div>
                ))}
              </div>
            );
  
            const imageSide = (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={row.statImage}
                  alt="Impact statistics illustration"
                  width={640}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            );
  
            const even = idx % 2 === 0; // 0-based
  
            return (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-12 items-center px-6"
              >
                {even ? (
                  <>
                    {bulletsSide}
                    {imageSide}
                  </>
                ) : (
                  <>
                    {imageSide}
                    {bulletsSide}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

function StatsBlock() {
  const s = demo.statisticsSection;
  return (
    <section className="py-20">
      <SectionHeading title={s.heading} />
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 px-6">
        {s.statistics.map((st, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center"
          >
            <div className="text-5xl font-extrabold text-blue-600 mb-2">
              {st.value}
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              {st.statLabel}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsBlock() {
  const t = demo.testimonialsSection;
  if (!t.testimonials.length) return null;
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/40">
      <SectionHeading title={t.heading} />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {t.testimonials.map((testi, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow"
          >
            <p className="italic mb-4 text-gray-700 dark:text-gray-300">
              “{testi.quote}”
            </p>
            <div className="font-semibold">{testi.author}</div>
            <div className="text-sm text-gray-500">{testi.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TechStackBlock() {
  const ts = demo.techStackSection;
  return (
    <section className="py-20">
      <SectionHeading title={ts.heading} />
      <p className="max-w-2xl mx-auto text-center mb-12 text-gray-700 dark:text-gray-300 px-6">
        {ts.description}
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {ts.technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-32"
          >
            <span className="text-3xl mb-2">{tech.icon}</span>
            <span className="text-sm font-medium text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═════════════════════════════ MAIN PAGE ══════════════════════════════════ */

export default function DemoProjectPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero />
      <ProblemSolution />
      <ProofOfConcept />
      <ExperienceBlock />
      <ModulesBlock />
      <ProcessBlock />
      <CTA />
      <ImpactBlock />
      <StatsBlock />
      <TestimonialsBlock />
      <TechStackBlock />
    </main>
  );
}