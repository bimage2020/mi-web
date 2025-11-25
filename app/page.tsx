"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#010409] via-[#000] to-[#010409] text-slate-50">

      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-cyan-300 to-emerald-300 text-black font-extrabold text-xs shadow-lg">
              TB
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Tech Blockchain</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                IA · Crypto · Consultoría
              </p>
            </div>
          </div>

          <nav className="hidden sm:flex gap-6 text-xs text-slate-300">
            <a href="#method" className="hover:text-sky-400 transition">Cómo funciona</a>
            <a href="#benefits" className="hover:text-sky-400 transition">Beneficios</a>
            <a href="#integrations" className="hover:text-sky-400 transition">Integraciones</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-6 space-y-32 pb-32 pt-16">

        {/* HERO */}
      {/* HERO — Estilo MeetLara Adaptado */}
<section className="relative flex flex-col items-center justify-center text-center py-32 px-6">

  {/* Glow de fondo estilo premium */}
  <div className="absolute inset-0 -z-10 flex items-center justify-center">
    <div className="h-[400px] w-[400px] rounded-full bg-sky-500/20 blur-[120px] opacity-40"></div>
  </div>

  {/* Etiqueta superior */}
  <p className="uppercase tracking-[0.35em] text-slate-400 text-[10px] mb-6">
    IA · CRYPTO · ESTRATEGIA · AUTOMATIZACIÓN
  </p>

  {/* Título grande */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
    Potencio personas y negocios con{" "}
    <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
      tecnología, datos e inteligencia artificial.
    </span>
  </h1>

  {/* Subtítulo */}
  <p className="max-w-xl text-slate-300 text-sm sm:text-base mt-6">
    Soy Julian Waitzman. Combino experiencia en servicio técnico, logística y 
    operaciones con herramientas tech modernas: IA, data, dashboards y automatización 
    aplicada al día a día. Tomo ideas y las vuelvo soluciones reales.
  </p>

  {/* Botones */}
  <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
    <a
      href="#services"
      className="rounded-full bg-sky-500 px-6 py-2 text-xs font-semibold text-black hover:bg-sky-400 transition"
    >
      Ver servicios
    </a>

    <a
      href="#contact"
      className="rounded-full border border-slate-600 px-6 py-2 text-xs font-semibold text-slate-100 hover:border-slate-300 transition"
    >
      Charlar un proyecto
    </a>
  </div>

  {/* Mini indicadores */}
  <div className="flex gap-6 mt-10 text-xs text-slate-400">
    <div className="text-center">
      <p className="text-slate-200 text-sm font-semibold">+10 años</p>
      <p>operaciones & equipos</p>
    </div>
    <div className="text-center">
      <p className="text-slate-200 text-sm font-semibold">IA primero</p>
      <p>data y eficiencia real</p>
    </div>
  </div>
</section>


        {/* MÉTODO – CÓMO FUNCIONA */}
        <section id="method" className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">Cómo funciona</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Diagnóstico rápido",
                text: "Revisamos tus procesos, tiempos muertos, fricciones y puntos ciegos. Todo en lenguaje simple.",
              },
              {
                step: "02",
                title: "Plan + herramientas",
                text: "Identifico dónde la IA, automatización o dashboards pueden mejorar tiempos y resultados.",
              },
              {
                step: "03",
                title: "Implementación real",
                text: "Aplicamos soluciones que funcionan hoy: IA para soporte, tableros claros, mejoras de flujo y más.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial="hidden" whileInView="visible" variants={fadeUp}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-sky-500/60 transition"
              >
                <div className="text-sky-400 text-sm font-semibold">{item.step}</div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="benefits" className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">Beneficios claros</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ahorro de tiempo",
                text: "Automatizamos tareas repetitivas, soporte, reporting y clasificación.",
              },
              {
                title: "Procesos más simples",
                text: "Transformo procesos pesados en flujos claros, ordenados y medibles.",
              },
              {
                title: "Mejor toma de decisiones",
                text: "Dashboards e IA contextual para ver rápido qué está pasando.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" variants={fadeUp}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-emerald-400/60 transition"
              >
                <h3 className="font-semibold text-slate-50">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTEGRACIONES */}
        <section id="integrations" className="space-y-10">
          <h2 className="text-3xl font-semibold text-center">Integraciones y ecosistema</h2>

          <p className="text-center text-slate-400 max-w-xl mx-auto text-sm">
            Trabajo con herramientas reales, simples y potentes. Nada raro, nada imposible.
            Lo que importa es lo que funciona.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300">
            {[
              "Google Sheets",
              "Binance API",
              "Notion",
              "Slack",
              "WhatsApp",
              "Email",
              "Vercel",
              "Next.js",
            ].map((t) => (
              <div
                key={t}
                className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-xl"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contact" className="space-y-6 border-t border-slate-800 pt-16">
          <h2 className="text-3xl font-semibold">¿Hablamos?</h2>

          <p className="text-slate-300 max-w-xl">
            Si te interesa mejorar tus procesos, automatizar tareas o usar IA de forma práctica,
            escribime. Prefiero conversaciones reales antes que formularios largos.
          </p>

          <a
            href="mailto:julianwaitzman@gmail.com"
            className="px-6 py-3 bg-sky-500 text-black rounded-full font-semibold text-sm hover:bg-sky-400 transition"
          >
            Escribirme
          </a>
        </section>

      </div>
    </main>
  );
}

