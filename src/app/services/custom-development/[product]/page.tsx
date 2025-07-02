/* -------------------------------------------------------------------------- */
/*  app/services/custom-development/[product]/page.tsx                        */
/*  Full detail page – pulls one Project by slug and shows every section      */
/* -------------------------------------------------------------------------- */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState,useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  StarIcon,
  PlayIcon,
  SparklesIcon,
  
} from "@heroicons/react/24/solid";

/* ═════════════════════════ TYPE DEFINITIONS ══════════════════════════════ */

interface Highlight { bullet: string; icon: string }
interface ImpactRow {
  highlight: Highlight[];
  statImage: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  previewImage: string;
  slug: string;
  category: string;
  isActive: boolean;

  problemSolution: {
    heading: string;
    problemTitle: string;
    problemDescription: string;
    problemImage: string;
    problemImages?: string[]
    idealFor: string[];
    solutionTitle: string;
    solutionDescription: string;
    features: { title: string; description: string; image: string }[];
  };

  proofOfConcept: {
    heading: string;
    description: string;
    samples: { title: string; description: string; image: string; href: string }[];
  };

  experienceSection: {
    heading: string;
    description: string;
    highlightedText: string;
    bullets: string[];
    image: string;
  };

  modulesSection: {
    heading: string;
    description: string;
    modules: { icon: string; text: string }[];
  };

  processSection: { heading: string; description: string; image: string };

  ctaSection: {
    heading: string;
    text: string;
    buttonText: string;
    buttonHref: string;
    cost: string;
  };

  impactSection: {
    heading: string;
    description: string;
    impacts: ImpactRow[];
  };

  statisticsSection: {
    heading: string;
    statistics: { statLabel: string; value: string }[];
  };

  testimonialsSection: {
    heading: string;
    testimonials: { quote: string; author: string; role: string }[];
  };

  techStackSection: {
    heading: string;
    description: string;
    technologies: { name: string; icon: string }[];
  };
}

/* ═══════════════════════ ANIMATION VARIANTS ═══════════════════════════ */
const fadeUp = { 
  hidden: { opacity: 0, y: 30 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ═════════════════════════════ COMPONENTS ════════════════════════════════ */


function Hero({ p }: { p: Project }) {
  return (
    <header
      className="
        relative overflow-hidden text-white
        bg-white
        dark:from-blue-900 dark:via-blue-800 dark:to-indigo-900
      "
    >
      
      {/* ✨ animated dots – keep exactly as before */}
    <AnimatedBackdrop />
      {/* static big–dots pattern */}
     
     

      {/* static tiny–dots pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fill-opacity=%220.12%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative py-24 lg:py-32 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* ─────── Copy column ─────── */}
          <div className="space-y-8 max-w-xl">
          <motion.div
  variants={fadeUp}
  className="
    inline-flex items-center gap-2 px-3 py-1 rounded-full
  
    dark:bg-white/90 text-gray-900      
      bg-white/30  shadow
  "
>
  <SparklesIcon className="w-4 h-4" />
  <span className="text-sm font-medium">{p.category}</span>
</motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
            >
              {p.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl font-light text-gray-700 dark:text-blue-200"
            >
              {p.tagline}
            </motion.p>

            {/* ↳ NEW : rich (HTML) description right below tagline */}
            {p.description && (
              <motion.div
                variants={fadeUp}
                className="prose prose-lg max-w-none text-gray-600 dark:prose-invert dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: p.description }}
              />
            )}

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Link
  href="#contact"
  className="
    group px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors
    bg-blue-400 text-white hover:bg-blue-300        /* ☀️ light */
    dark:bg-white dark:text-blue-900 dark:hover:bg-blue-50
  "
  
>
  Get&nbsp;Started
  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Link>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-white/30 dark:text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
                <PlayIcon className="w-4 h-4" />
                Watch demo
              </button>
            </motion.div>
          </div>

          {/* ─────── Image column ─────── */}
          <motion.div variants={scale} className="mx-auto w-full max-w-md">
            <img
              src={p.previewImage}
              alt={p.title}
              width={800}
              height={600}
              priority
              className="rounded-2xl shadow-2xl border border-white/10 dark:border-white/20 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

/* ───────────────────────── helper component for glowing dots ──────────── */
function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2.5 w-2.5 bg-blue-400/60 dark:bg-blue-300 rounded-full shadow-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}


function ProblemSolution({ ps }: { ps: Project["problemSolution"] }) {
  // try the first picture in problemImages; if absent, fall back to problemImage
  const heroImage =
    (ps.problemImages && ps.problemImages[0]) || ps.problemImage || null;

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br
    from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <AnimatedBackdrop />

      <div className="relative mx-auto w-[90vw] max-w-7xl px-6">
        <SectionHeading
          title={ps.heading}
          subtitle="Understanding the challenge and delivering the perfect solution"
        />

        <div className="grid items-stretch gap-16 lg:grid-cols-2">
          {/* ─────────── Problem column ─────────── */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex h-full flex-col gap-6"
          >
            {/* main card */}
            <div className="relative flex-1 overflow-hidden rounded-3xl p-8 bg-white ring-1 ring-red-200/70 shadow-md dark:bg-gray-800 dark:ring-red-700/40 dark:shadow-lg">
              <span className="absolute inset-y-0 left-0 w-1 rounded-l-3xl bg-red-500/90 dark:bg-red-500" />

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white">
                  ⚠️
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-red-200">
                  {ps.problemTitle}
                </h3>
              </div>

              <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                {ps.problemDescription}
              </p>

              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Perfect for:
              </h4>
              <div className="mb-2 flex flex-wrap gap-2">
                {ps.idealFor.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-600/10  px-3 py-1 text-xs font-medium text-green-500 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* supporting image (only if defined) */}
            {heroImage && (
              <img
                src={heroImage}
                alt="Problem illustration"
                width={800}
                height={450}
                className="h-48 w-full rounded-2xl object-cover shadow md:h-60 lg:h-72"
              />
            )}
          </motion.div>

          {/* ─────────── Solution column ─────────── */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="h-full"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl p-8 bg-white ring-1 ring-green-200/70 shadow-md dark:bg-gray-800 dark:ring-green-700/40 dark:shadow-lg">
              <span className="absolute inset-y-0 left-0 w-1 rounded-l-3xl bg-green-500/90 dark:bg-green-500" />

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-green-200">
                  {ps.solutionTitle}
                </h3>
              </div>

              <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                {ps.solutionDescription}
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {ps.features.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group flex gap-4 rounded-xl bg-gray-50/60 p-4 ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md dark:bg-gray-700/50 dark:ring-gray-600/40"
                  >
                    <img
                      src={f.image}
                      alt={f.title}
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                        {f.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


const CARD_GAP = 24; // px -— must match `gap-6`

function ProofOfConcept({ pc }: { pc: Project["proofOfConcept"] }) {
  /* ─────────────── calculate how many slides fit viewport ─────────────── */
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640)        setVisible(1);
      else if (window.innerWidth < 1024)  setVisible(2);
      else                                setVisible(3);
    }
    update();                 // initial
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ─────────────── auto-advance every 5 seconds ─────────────── */
  const [idx, setIdx] = useState(0);
  const maxIdx = Math.max(pc.samples.length - visible, 0);
  useEffect(() => {
    if (pc.samples.length <= visible) return;          // nothing to scroll
    const id = setInterval(
      () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
      5_000
    );
    return () => clearInterval(id);
  }, [maxIdx, pc.samples.length, visible]);

  /* width of a single card (% of container) – e.g. 33.333 for 3-per-view */
  const slidePct = useMemo(() => 100 / visible, [visible]);

  return (
   
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
       <AnimatePresence>
     <AnimatedBackdrop/>
      {/* dots background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%23000000%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading title={pc.heading} subtitle={pc.description} />

        {/* ─────────────── carousel viewport ─────────────── */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(${-idx * slidePct}% - ${idx * CARD_GAP}px)` }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
          >
            {pc.samples.map((s) => (
              <motion.a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex-shrink-0 w-full sm:w-1/2 lg:w-1/3
                  bg-gradient-to-br from-white to-gray-50
                  dark:from-gray-800 dark:to-gray-900
                  rounded-2xl overflow-hidden shadow-lg border
                  border-gray-100 dark:border-gray-700
                  hover:shadow-2xl transition-shadow
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={640}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                    <SparklesIcon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {s.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ─────────────── dots indicator ─────────────── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pc.samples.length - visible + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`
                h-2.5 w-2.5 rounded-full
                ${i === idx
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600/60"}
              `}
            />
          ))}
        </div>
      </div>
      </AnimatePresence>
    </section>
  );
}

function Experience({ ex }: { ex: Project["experienceSection"] }) {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br
                        from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      {/* pastel blobs */}
      <AnimatedBackdrop />
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full 
                        bg-purple-400/20 blur-[150px]" />
        <div className="absolute -right-20 bottom-10 w-72 h-72 rounded-full 
                        bg-blue-400/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* ─────────── TEXT SIDE ─────────── */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-10 order-2 lg:order-1"
        >
          {/* heading + copy */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight
                           bg-gradient-to-r from-blue-600 to-purple-600
                           bg-clip-text text-transparent">
              {ex.heading}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {ex.description}
            </p>

            {/* highlight bar */}
            <div className="rounded-2xl p-5 shadow-lg ring-1 ring-black/5
                            bg-gradient-to-r from-blue-300 to-purple-600 text-white">
              <p className="font-semibold">{ex.highlightedText}</p>
            </div>
          </div>

          {/* bullets */}
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {ex.bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl p-4
                          whitespace-normal bg-white/20 
                           shadow-sm ring-1 ring-gray-900 
                           backdrop-blur-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-9 h-9 flex-none
                                rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {b}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ─────────── IMAGE SIDE ─────────── */}
        <motion.div
          variants={scale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            {/* “lift” on hover */}
            <img
              src={ex.image}
              alt="Experience"
              width={800}
              height={530}
              className="w-full object-cover transition-transform duration-700
                         group-hover:scale-105"
            />
            {/* top vignette so white text never clashes, optional */}
            <div className="pointer-events-none absolute inset-0
                            bg-gradient-to-t from-black/30 to-transparent" />
            {/* rim-light */}
            <div className="absolute -inset-1 rounded-3xl
                            bg-gradient-to-r from-purple-500 to-blue-500
                            opacity-10 group-hover:opacity-20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Modules({ m }: { m: Project["modulesSection"] }) {
  /* colour pairs for the tiny icon-tiles (feel free to tweak) */
  const iconGrads = [
    "from-indigo-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-yellow-500",
    "from-purple-500 to-fuchsia-500",
    "from-sky-500 to-cyan-500",
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br
    from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      {/* faint dotted pattern */}
     <AnimatedBackdrop />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] 
                      bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=7 cy=7 r=1 fill=%23000 /%3E%3C/svg%3E')]
                      dark:bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=7 cy=7 r=1 fill=%23fff /%3E%3C/svg%3E')" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={m.heading} subtitle={m.description} />

        {/* grid auto-fills from 2-4 columns depending on screen width */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8
                     sm:grid-cols-2
                     md:grid-cols-3
                     xl:grid-cols-4
                     2xl:grid-cols-5"
        >
          {m.modules.map((mod, i) => (
            <motion.li
              key={mod.text}
              variants={scale}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 12px 28px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
              }}
              className="group relative rounded-2xl ring-1 ring-gray-200/30
                         dark:ring-gray-700/60
                         bg-white/60 dark:bg-gray-800/10
                         backdrop-blur-lg
                         transition-transform duration-300"
            >
              {/* subtle gradient glow on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl
                               opacity-0 group-hover:opacity-100
                               transition duration-300
                               bg-gradient-to-br from-blue-400/5 to-purple-400/5" />

              <div className="relative z-10 p-6 flex flex-col gap-4">
                {/* icon square */}
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center 
                              rounded-xl text-white text-xl shadow
                              bg-gradient-to-br ${iconGrads[i % iconGrads.length]}`}
                >
                  {mod.icon}
                </span>

                {/* label */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {mod.text}
                </h3>

                {/* optional description?  
                    Uncomment if your schema starts storing descriptions */}
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                     {mod.description}
                   </p> */}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Process({ p }: { p: Project["processSection"] }) {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br
                        from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <AnimatedBackdrop />

      {/* 90 % width container  */}
      <div className="relative mx-auto px-6 w-[90vw] max-w-[1600px]">
        <SectionHeading title={p.heading} subtitle={p.description} />

        <motion.figure
          variants={scale}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group w-full"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1
                          ring-gray-200 dark:ring-gray-700">
            <img
              src={p.image}
              alt="Illustration of our process"
              width={2000}
              height={1000}
              className="
                w-full h-auto max-h-[540px] object-cover
                transition-transform duration-700
                group-hover:scale-[1.03]
              "
            />
            <span className="pointer-events-none absolute inset-0 rounded-3xl
                             bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          {/* hover glow */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl -z-10
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-700
                           bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20
                           blur-2xl" />
        </motion.figure>
      </div>
    </section>
  );
}

function CTA({ c }: { c: Project["ctaSection"] }) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <AnimatedBackdrop />
      {/* gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

      {/* dotted pattern backdrop (quotes encoded) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%23ffffff%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.7, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {c.heading}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="text-xl text-blue-300 leading-relaxed max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: c.text }}
          />

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
          {/* price pill */}
          <span className="
              inline-block px-8 py-4 rounded-full font-bold text-2xl
              bg-gradient-to-r from-indigo-200 to-purple-600 text-white shadow-lg
            ">
              {c.cost}
            </span>


            <Link
              href={c.buttonHref}
              className="group bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {c.buttonText}
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRightIcon className="w-4 h-4 text-white" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Impact({ im }: { im: Project["impactSection"] }) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
       <AnimatedBackdrop/>
      <div className="mx-auto w-[90vw] max-w-7xl px-6">
        <SectionHeading title={im.heading} subtitle={im.description} />

        <div className="flex flex-col gap-24">
          {im.impacts.map((row, i) => {
            /* ───────────── bullets ───────────── */
            const Bullets = (
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {row.highlight.map((h, j) => (
                  <motion.li
                    key={j}
                    variants={scale}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl
                               backdrop-blur-md ring-1 ring-white/10
                               bg-gradient-to-r from-blue-600/90 to-blue-400/80 text-white
                               dark:from-blue-900/90 dark:to-blue-400/80"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                      {h.icon}
                    </span>
                    <span className="font-medium leading-snug">{h.bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>
            );

            /* ───────────── image ───────────── */
            const StatImage = (
              <motion.div
                variants={scale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative group flex-1 aspect-video overflow-hidden rounded-3xl
                           shadow-xl ring-1 ring-black/5 dark:ring-white/10"
              >
                <img
                  src={row.statImage}
                  alt="Impact illustration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            );

            /* alternate order on lg+ */
            const rowDir = i % 2 ? "lg:flex-row-reverse" : "lg:flex-row";

            return (
              <div
                key={i}
                className={`flex flex-col ${rowDir} items-center gap-10`}
              >
                {/* bullets column */}
                <div className="w-full lg:basis-[420px] shrink-0">{Bullets}</div>
                {/* image column */}
                {StatImage}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats({ s }: { s: Project["statisticsSection"] }) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
     <AnimatedBackdrop></AnimatedBackdrop>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={s.heading} />

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {s.statistics.map((stat, i) => (
            <motion.div
              key={i}
              variants={scale}
              whileHover={{ y: -5 }}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                {stat.value}
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                {stat.statLabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function Testimonials({ t }: { t: Project["testimonialsSection"] }) {
  const [idx, setIdx] = useState(0);
  
  if (!t.testimonials.length) return null;
  const total = t.testimonials.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  const cur = t.testimonials[idx];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900">
      <AnimatedBackdrop />
      <div className="mx-auto w-[90vw] max-w-3xl px-6 text-center">
        <SectionHeading title={t.heading} />

        {/* testimonial card */}
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="
            relative mx-auto mt-10
            rounded-2xl p-10
            bg-gradient-to-br from-white to-gray-100
           
            shadow-xl ring-1 ring-gray-100 dark:ring-gray-700
          "
        >
          {/* decorative quote bubble */}
          <span className="
            absolute -top-4 left-8 w-8 h-8 
            bg-gradient-to-br from-purple-600 to-indigo-600 
            rounded-full flex items-center justify-center text-white
            text-lg font-serif
          ">
            &ldquo;
          </span>

          {/* stars */}
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
            ))}
          </div>

          {/* quote */}
          <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            “{cur.quote}”
          </p>

          {/* author */}
          <div className="flex items-center justify-center gap-3">
            <div className="
              w-12 h-12 rounded-full
              bg-gradient-to-br from-blue-500 to-purple-600
              flex items-center justify-center text-white font-bold
            ">
              {cur.author.charAt(0)}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">
                {cur.author}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {cur.role}
              </div>
            </div>
          </div>

          {/* nav buttons */}
          <div className="absolute bottom-6 right-6 flex gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="
                w-10 h-10 rounded-full border
                border-gray-300 dark:border-gray-600
               
                backdrop-blur-[2px]
                flex items-center justify-center
                text-gray-700 dark:text-gray-300
                hover:bg-white dark:hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="
                w-10 h-10 rounded-full border
                border-gray-300 dark:border-gray-600
              
                backdrop-blur-[2px]
                flex items-center justify-center
                text-gray-700 dark:text-gray-300
                hover:bg-white dark:hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition
              "
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



/* prettier, higher-contrast tech-stack ----------------------------------- */

function TechStack({ ts }: { ts: Project["techStackSection"] }) {
  const ramps = [
    "from-blue-500 to-blue-700",
    "from-emerald-500 to-emerald-700",
    "from-purple-500 to-purple-700",
    "from-rose-500 to-rose-700",
    "from-amber-500 to-amber-700",
    "from-pink-500 to-pink-700",
    "from-indigo-500 to-indigo-700",
    "from-teal-500 to-teal-700",
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br
    from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <AnimatedBackdrop></AnimatedBackdrop>
      {/* faint dotted background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-10">
        <div className="absolute inset-0 bg-[url('/svg/dots.svg')]" />
      </div>

      <div className="mx-auto w-[90vw] max-w-7xl px-6 relative">
        <SectionHeading title={ts.heading} subtitle={ts.description} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {ts.technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={scale}
              whileHover={{ y: -8 }}
              className="
                group flex flex-col items-center gap-4
                rounded-xl p-6 shadow-md hover:shadow-xl
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                transition-transform
              "
            >
              {/* coloured icon blob */}
              <span
                className={`
                  w-16 h-16 rounded-2xl text-2xl text-white
                  flex items-center justify-center
                  bg-gradient-to-br ${ramps[i % ramps.length]}
                  shadow-lg group-hover:scale-110 transition-transform
                `}
              >
                {tech.icon}
              </span>

              {/* label – always full-opacity */}
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



/* ═════════════════════════════ PAGE ══════════════════════════════════════ */

export default function ProductDetailPage() {
  const { product: slug } = useParams<{ product: string }>();
  const [proj, setProj] = useState<Project | null>(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`/api/projects/${slug}`);
        if (!res.ok) throw new Error("Failed to load");
        const data: Project = await res.json();
        if (!cancelled) setProj(data);
      } catch (e) {
        if (!cancelled) setErr("Unable to load project "+e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Loading amazing project...</p>
        </div>
      </div>
    );
  }

  if (err || !proj) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">😕</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {err || "Project not found"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you&#39;re looking for doesn&#39;t exist or has been moved.
          </p>
          <Link
            href="/services/custom-development"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            <ArrowRightIcon className="w-4 h-4 rotate-180" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main >
      <Hero p={proj} />

  

      <ProblemSolution ps={proj.problemSolution} />
      <ProofOfConcept pc={proj.proofOfConcept} />
      <Experience ex={proj.experienceSection} />
      <Impact im={proj.impactSection} />
      <Modules m={proj.modulesSection} />
    
     
      <Stats s={proj.statisticsSection} />
      <TechStack ts={proj.techStackSection} />
     
      <Testimonials t={proj.testimonialsSection} />
      <Process p={proj.processSection} />
     
      <CTA c={proj.ctaSection} />
      
      {/* Footer section */}
      <footer className="py-12 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Ready to build something amazing? Let&apos;s turn your vision into reality.
          </p>
        </div>
      </footer>
    </main>
  );
}