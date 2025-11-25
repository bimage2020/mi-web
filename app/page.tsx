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
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-black to-[#020617] text-slate-50">
      {/* GLOW DE FONDO */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-40px] h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300 text-[11px] font-extrabold text-black shadow-[0_0_30px_rgba(56,189,248,0.55)]">
              TB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide">
                Tech Blockchain
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Strategy · IA · Crypto
              </span>
            </div>
          </div>

          <nav className="hidden gap-6 text-[11px] font-medium text-slate-300 sm:flex">
            <a href="#focus" className="hover:text-sky-400 transition">
              En qué me enfoco
            </a>
            <a href="#services" className="hover:text-sky-400 transition">
              Servicios
            </a>
            <a href="#cases" className="hover:text-sky-400 transition">
              Casos / ideas
            </a>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* CONTENEDOR GENERAL */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 space-y-24">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.p
              variants={fadeIn}
              className="text-[11px] uppercase tracking-[0.35em] text-slate-400"
            >
              IA · CRYPTO · SERVICIO TÉCNICO · OPERACIONES
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
            >
              Ayudo a personas y negocios a usar{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                tecnología e IA
              </span>{" "}
              de forma práctica.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm sm:text-base text-slate-300"
            >
              Soy <span className="font-semibold">Julián Waitzman</span>. Vengo de
              años en servicio técnico y logística, y ahora enfoco todo eso en
              proyectos con IA, crypto y soluciones digitales simples. Menos
              complicación, más cosas que funcionan.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="#services"
                className="rounded-full bg-sky-500 px-5 py-2 text-[11px] font-semibold text-black hover:bg-sky-400 transition shadow-[0_0_25px_rgba(56,189,248,0.55)]"
              >
                Ver servicios
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600/80 px-5 py-2 text-[11px] font-semibold text-slate-100 hover:border-slate-200 transition"
              >
                Charlar un proyecto
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 pt-3 text-xs text-slate-400"
            >
              <div>
                <span className="block text-slate-100 text-sm font-semibold">
                  +10 años
                </span>
                <span>en operaciones, servicio técnico y equipos.</span>
              </div>
              <div>
                <span className="block text-slate-100 text-sm font-semibold">
                  IA primero
                </span>
                <span>todo se piensa con data, automatización y foco.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* PANEL LATERAL / GLASS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-sky-500/50 via-blue-500/30 to-emerald-400/40 opacity-70 blur-lg" />
            <div className="relative rounded-[24px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">
                Snapshot
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Crypto & data</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-400/40">
                    En evolución
                  </span>
                </div>

                <div className="h-1.5 w-full rounded-full bg-slate-800/80">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                </div>

                <div className="flex justify-between text-slate-400">
                  <span>Dashboards & automatización</span>
                  <span>75%</span>
                </div>

                <div className="h-px w-full bg-slate-800/80 my-3" />

                <div className="space-y-2">
                  <p className="text-slate-200 text-xs">
                    Áreas donde aporto más valor hoy:
                  </p>
                  <ul className="space-y-1 text-slate-400 list-disc list-inside">
                    <li>Optimizar procesos (soporte, tickets, tareas).</li>
                    <li>Tableros claros para decidir mejor.</li>
                    <li>Experiencias tech para productos y eventos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EN QUÉ ME ENFOCO */}
        <section id="focus" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold">En qué me enfoco</h2>
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Adaptable según el proyecto
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Automatización con IA",
                text: "Flujos simples para ahorrar tiempo en soporte, reporting y tareas repetitivas.",
              },
              {
                title: "Crypto & data",
                text: "Tableros para seguir proyectos, volumen, riesgo y oportunidades con criterio.",
              },
              {
                title: "Operaciones & experiencia",
                text: "Servicio técnico, logística y atención al cliente con tecnología aplicada.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 hover:border-sky-500/70 hover:bg-slate-900/80 transition shadow-[0_0_0_rgba(15,23,42,0.6)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.95)]"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="services" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold">Servicios (versión 1.0)</h2>
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Iterando sobre la marcha
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-3 hover:border-sky-500/70 hover:bg-slate-900 transition"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                Consultoría tech & IA para pymes y profesionales
              </h3>
              <p className="text-xs text-slate-300">
                Conversamos tu situación, detectamos cuellos de botella y
                definimos dónde la tecnología puede ayudarte hoy, no “algún
                día”.
              </p>
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                <li>Relevamiento simple del negocio o proyecto.</li>
                <li>Mapa de oportunidades con herramientas concretas.</li>
                <li>Primer plan de acción de 30 días.</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-3 hover:border-sky-500/70 hover:bg-slate-900 transition"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                Labs: crypto, dashboards y contenido
              </h3>
              <p className="text-xs text-slate-300">
                Espacio para experimentar con dashboards, seguimiento de crypto,
                contenido para redes y pequeños prototipos digitales.
              </p>
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                <li>Tableros en Sheets o Notion para ver todo claro.</li>
                <li>Microproyectos para testear ideas sin gastar de más.</li>
                <li>Soporte para que después puedas iterar solo.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CASOS / IDEAS */}
        <section id="cases" className="space-y-6">
          <h2 className="text-2xl font-semibold">Casos, ideas y próximos pasos</h2>

          <div className="space-y-4 text-xs text-slate-300">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="flex gap-4"
            >
              <div className="mt-1 h-7 w-7 rounded-full bg-sky-500/30 text-[10px] flex items-center justify-center text-sky-100">
                01
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Optimizar servicio técnico y logística.
                </p>
                <p>
                  Uso de IA para clasificar tickets, generar respuestas base,
                  priorizar casos y tener visibilidad clara del estado real.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="flex gap-4"
            >
              <div className="mt-1 h-7 w-7 rounded-full bg-sky-500/30 text-[10px] flex items-center justify-center text-sky-100">
                02
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Espacios y eventos con tecnología con propósito.
                </p>
                <p>
                  Experiencias donde la tech no sea solo “pantallas”, sino una
                  herramienta para conectar personas, ideas y proyectos.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contact"
          className="space-y-4 border-t border-slate-800 pt-10"
        >
          <h2 className="text-2xl font-semibold">¿Hablamos?</h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Si algo de todo esto te resonó y sentís que podemos construir algo
            juntos, mandame un mensaje. Prefiero conversaciones reales antes
            que formularios infinitos.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:julianwaitzman@gmail.com"
              className="rounded-full bg-sky-500 px-5 py-2 font-medium text-black hover:bg-sky-400 transition"
            >
              Escribirme un mail
            </a>
            <span className="text-slate-500 text-xs">
              Más adelante sumamos links a LinkedIn, X o lo que decidas usar.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

