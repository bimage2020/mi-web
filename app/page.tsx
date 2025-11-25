"use client";"use client";
import { LogoTBM } from "./components/LogoTBM";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#010409] via-[#000] to-[#010409] text-slate-50">
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 space-y-20">
        {/* BREADCRUMB / HEADER */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-xs text-slate-400">
            <a href="/" className="hover:text-sky-400 transition">
              Home
            </a>{" "}
            <span className="mx-1">/</span>
            <span className="text-slate-300">Sobre mí</span>
          </div>

          <p className="uppercase tracking-[0.35em] text-slate-400 text-[10px]">
            SOBRE MÍ · JULIAN WAITZMAN
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Julian Waitzman
            </span>
            . Combino tecnología, IA y operaciones para que las cosas
            funcionen en la vida real.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Trabajo hace más de 12 años en tecnología, servicio técnico,
            logística y proyectos digitales. Hoy mi foco es ayudar a personas y
            negocios a usar IA, data y automatización de forma práctica, sin
            humo y con criterio: menos complicación, más cosas que realmente
            funcionan.
          </p>
        </motion.section>

        {/* QUIÉN SOY / QUÉ HAGO HOY */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Quién soy</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Vengo del mundo de las operaciones: servicio técnico, logística,
              atención, equipos y procesos que no pueden frenar. Eso me dio algo
              clave hoy: entender cómo se vive la tecnología en el día a día,
              cuando los clientes llaman, se rompen cosas, hay tickets,
              demoras y decisiones que tomar rápido.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Sobre esa base sumo IA, herramientas online, dashboards y
              automatización. Me interesa bajar todo eso a tierra para solucionar
              problemas concretos: menos planillas eternas y reportes que nadie
              mira, más sistemas simples que te ayudan a decidir y avanzar.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Me gusta trabajar cerca, con confianza, explicando las cosas en
              lenguaje simple. Prefiero una charla honesta y un plan de 30 días
              que una promesa vacía de “transformación digital”.
            </p>
          </div>

          {/* BLOQUE LATERAL / SNAPSHOT */}
          <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-5 shadow-[0_0_60px_rgba(56,189,248,0.25)] space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Snapshot
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between items-center">
                <span className="text-slate-200 font-semibold">
                  +12 años en tech & operaciones
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  Experiencia real
                </span>
              </div>

              <div className="h-1.5 w-full rounded-full bg-slate-800">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
              </div>

              <ul className="space-y-1 list-disc list-inside">
                <li>Servicio técnico, logística y coordinación de equipos.</li>
                <li>Consultoría tech, IA aplicada y automatización.</li>
                <li>Dashboards, análisis cripto y procesos medibles.</li>
                <li>Eventos y experiencias con tecnología con propósito.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* TIMELINE EXPERIENCIA */}
        <motion.section
          variants={{ ...sectionVariant, ...stagger }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold">Recorrido profesional</h2>
          <p className="text-sm text-slate-300 max-w-3xl">
            Pasé por empresas y proyectos muy distintos, pero siempre con la
            misma idea: mejorar cómo se trabaja, cómo se atiende y cómo se
            toman decisiones.
          </p>

          <div className="space-y-4 border-l border-slate-700 pl-4">
            {[
              {
                year: "Actual",
                role: "Consultoría en tecnología, IA & procesos",
                desc: "Acompaño a personas y negocios a usar IA, automatización y data para ordenar procesos, reducir fricción y crear soluciones simples.",
              },
              {
                year: "Años previos",
                role: "Servicio técnico, logística & operaciones",
                desc: "Roles donde el foco fue coordinar equipos, mejorar tiempos de respuesta, ordenar la información y construir procesos más claros.",
              },
              {
                year: "Antes",
                role: "Proyectos creativos, eventos y estrategia",
                desc: "Participación en experiencias presenciales, acciones BTL y proyectos donde la tecnología se mezcla con la creatividad y la conexión humana.",
              },
            ].map((item) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className="relative pl-4"
              >
                <div className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {item.year}
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  {item.role}
                </p>
                <p className="text-xs text-slate-300 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS / FOCOS */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold">En qué puedo aportar más hoy</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "IA & automatización",
                text: "Detectar tareas repetitivas y flujos rotos, y reemplazarlos por sistemas simples apoyados en IA.",
              },
              {
                title: "Crypto & data",
                text: "Dashboards, seguimiento de proyectos y análisis más ordenado del riesgo y las oportunidades.",
              },
              {
                title: "Operaciones & experiencia",
                text: "Cruzar tecnología con servicio técnico, logística, eventos y atención al cliente.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-sky-500/70 hover:bg-slate-900 transition"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* LADO HUMANO */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Un poco más personal</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Soy de moverme, de probar cosas nuevas y de no quedarme quieto.
            Me interesan la tecnología, la naturaleza, la cocina, los proyectos
            con propósito y las conversaciones honestas. Me gusta acompañar
            procesos de cambio, bajar ansiedad con claridad y ayudar a que las
            personas se sientan un poco menos solas frente a lo digital.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Si algo de todo esto te resuena, probablemente tengamos algo para
            construir juntos: una automatización, una estrategia, un tablero,
            un evento o simplemente una buena charla para ordenar ideas.
          </p>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="border border-sky-500/30 rounded-3xl bg-slate-900/70 p-6 sm:p-8 space-y-4"
        >
          <h2 className="text-xl font-semibold">
            ¿Te gustaría trabajar conmigo?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            Podemos arrancar con algo simple: una conversación corta donde me
            contás tu contexto y vemos si tiene sentido hacer algo juntos. Sin
            compromiso, sin vueltas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:julianwaitzman@gmail.com"
              className="px-6 py-2 rounded-full bg-sky-500 text-black text-sm font-semibold hover:bg-sky-400 transition"
            >
              Escribirme un mail
            </a>
            <a
              href="https://wa.me/5491127320366"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-slate-600 text-sm font-semibold text-slate-100 hover:border-slate-300 transition"
            >
              Charlar por WhatsApp
            </a>
            <a
              href="/#contact"
              className="px-6 py-2 rounded-full border border-slate-700 text-xs text-slate-300 hover:border-sky-400 transition"
            >
              Ver sección de contacto completa
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}


import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#010409] via-[#000] to-[#010409] text-slate-50">
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-sky-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          {/* LOGO FUTURISTA */}
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-emerald-300 opacity-80 blur-[6px]" />
              <div className="relative h-full w-full rounded-2xl bg-black flex items-center justify-center border border-white/20 text-[11px] font-extrabold tracking-[0.18em]">
                TB
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Tech Blockchain</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                IA · Crypto · Consultoría
              </p>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-6 text-xs text-slate-300">
            <a href="#method" className="hover:text-sky-400 transition">
              Cómo funciona
            </a>
            <a href="#benefits" className="hover:text-sky-400 transition">
              Beneficios
            </a>
            <a href="#integrations" className="hover:text-sky-400 transition">
              Integraciones
            </a>
            <a href="/labs" className="hover:text-sky-400 transition">
              Labs
            </a>
            <a href="/crypto" className="hover:text-sky-400 transition">
              Crypto
            </a>
            <a href="/eventos" className="hover:text-sky-400 transition">
              Eventos
            </a>
            <a href="/consultoria" className="hover:text-sky-400 transition">
              Consultoría
            </a>
            <a href="/marketing-btl" className="hover:text-sky-400 transition">
              Marketing BTL
            </a>
            <a href="/desarrollo" className="hover:text-sky-400 transition">
              Desarrollo
            </a>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contacto
            </a>
          </nav>

          {/* NAV MOBILE BUTTON */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-black/60"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-slate-100 rounded-sm"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-5 bg-slate-100 rounded-sm -mt-[2px]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-slate-100 rounded-sm -mt-[2px]"
            />
          </button>
        </div>

        {/* NAV MOBILE MENU */}
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-slate-800 bg-black/90 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm text-slate-200">
              <a href="#method" onClick={() => setMenuOpen(false)}>
                Cómo funciona
              </a>
              <a href="#benefits" onClick={() => setMenuOpen(false)}>
                Beneficios
              </a>
              <a href="#integrations" onClick={() => setMenuOpen(false)}>
                Integraciones
              </a>
              <a href="/labs" onClick={() => setMenuOpen(false)}>
                Labs
              </a>
              <a href="/crypto" onClick={() => setMenuOpen(false)}>
                Crypto
              </a>
              <a href="/eventos" onClick={() => setMenuOpen(false)}>
                Eventos
              </a>
              <a href="/consultoria" onClick={() => setMenuOpen(false)}>
                Consultoría
              </a>
              <a href="/marketing-btl" onClick={() => setMenuOpen(false)}>
                Marketing BTL
              </a>
              <a href="/desarrollo" onClick={() => setMenuOpen(false)}>
                Desarrollo
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/5491127320366"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="h-14 w-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-110 hover:bg-green-400 transition-transform cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-7 w-7"
          >
            <path d="M16.002 3.2c-7.05 0-12.8 5.637-12.8 12.58 0 2.22.582 4.39 1.69 6.32L3.2 28.8l6.86-1.764c1.86 1.01 3.95 1.54 6.01 1.54h.002c7.05 0 12.8-5.637 12.8-12.58 0-3.36-1.34-6.52-3.77-8.89-2.42-2.37-5.66-3.706-9.1-3.706zm0 22.267c-1.72 0-3.41-.45-4.9-1.31l-.35-.2-4.07 1.046 1.09-3.97-.23-.36c-1.03-1.64-1.57-3.52-1.57-5.46 0-5.62 4.68-10.19 10.42-10.19 2.78 0 5.38 1.06 7.33 2.98 1.95 1.92 3.02 4.48 3.02 7.21 0 5.62-4.68 10.19-10.42 10.19zm5.68-7.63c-.31-.15-1.84-.91-2.13-1.02-.29-.11-.5-.15-.72.15-.21.3-.83 1.02-1.02 1.23-.19.22-.37.25-.68.1-.31-.15-1.31-.48-2.5-1.53-.93-.8-1.56-1.8-1.74-2.1-.18-.3-.02-.46.13-.61.13-.13.31-.35.47-.53.16-.18.21-.3.31-.5.1-.2.05-.38-.03-.53-.08-.15-.72-1.79-.98-2.45-.26-.62-.53-.54-.72-.55-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.38-.3.3-1.16 1.13-1.16 2.77 0 1.64 1.19 3.22 1.36 3.44.17.22 2.34 3.7 5.68 5.08.79.34 1.41.54 1.89.69.79.25 1.52.21 2.09.13.64-.1 2-.82 2.28-1.61.28-.79.28-1.46.19-1.61-.1-.15-.28-.22-.59-.37z" />
          </svg>
        </div>
      </a>

      {/* <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
  <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
    {/* LOGO TBM ANIMADO */}
    <LogoTBM showText />

    {/* NAV DESKTOP */}
    <nav className="hidden sm:flex gap-6 text-xs text-slate-300">
      <a href="/about" className="hover:text-sky-400 transition">
        Sobre mí
      </a>
      <a href="#method" className="hover:text-sky-400 transition">
        Cómo funciona
      </a>
      <a href="#benefits" className="hover:text-sky-400 transition">
        Beneficios
      </a>
      <a href="#integrations" className="hover:text-sky-400 transition">
        Integraciones
      </a>
      <a href="#contact" className="hover:text-sky-400 transition">
        Contacto
      </a>
    </nav>
  </div>
</header>
CONTENEDOR PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-6 space-y-32 pb-24 pt-16">
        {/* HERO – animación de sección entera */}
        <motion.section
          className="relative flex flex-col items-center justify-center text-center py-24 px-6"
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[130px] opacity-50" />
          </div>

          <motion.p
            variants={fadeIn}
            className="uppercase tracking-[0.35em] text-slate-400 text-[10px] mb-6"
          >
            IA · CRYPTO · ESTRATEGIA · AUTOMATIZACIÓN
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl"
          >
            Potencio personas y negocios con{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              tecnología, datos e inteligencia artificial.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-slate-300 text-sm sm:text-base mt-6"
          >
            Soy Julian Waitzman. Combino experiencia en servicio técnico,
            logística y operaciones con herramientas tech modernas: IA, data,
            dashboards y automatización aplicada al día a día. Tomo ideas y las
            vuelvo soluciones reales.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <a
              href="#method"
              className="rounded-full bg-sky-500 px-6 py-2 text-xs font-semibold text-black hover:bg-sky-400 transition"
            >
              Ver cómo funciona
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-2 text-xs font-semibold text-slate-100 hover:border-slate-300 transition"
            >
              Charlar un proyecto
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-6 mt-10 text-xs text-slate-400"
          >
            <div className="text-center">
              <p className="text-slate-200 text-sm font-semibold">+10 años</p>
              <p>operaciones & equipos</p>
            </div>
            <div className="text-center">
              <p className="text-slate-200 text-sm font-semibold">IA primero</p>
              <p>data y eficiencia real</p>
            </div>
          </motion.div>
        </motion.section>

        {/* MÉTODO – CÓMO FUNCIONA (sección animada) */}
        <motion.section
          id="method"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
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
                variants={fadeUp}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-sky-500/60 transition"
              >
                <div className="text-sky-400 text-sm font-semibold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BENEFICIOS (sección animada) */}
        <motion.section
          id="benefits"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-semibold text-center">
            Beneficios claros
          </h2>

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
                variants={fadeUp}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-emerald-400/60 transition"
              >
                <h3 className="font-semibold text-slate-50">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* INTEGRACIONES – con “iconos” visuales */}
        <motion.section
          id="integrations"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-semibold text-center">
            Integraciones y ecosistema
          </h2>

          <p className="text-center text-slate-400 max-w-xl mx-auto text-sm">
            Trabajo con herramientas reales, simples y potentes. Lo importante
            no es la cantidad de apps, sino que todo se conecte y funcione.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Google Sheets",
                label: "GS",
                color: "#22C55E",
              },
              {
                name: "Binance API",
                label: "B",
                color: "#FACC15",
              },
              {
                name: "Notion",
                label: "N",
                color: "#FFFFFF",
                textColor: "#020617",
              },
              {
                name: "Slack",
                label: "S",
                color: "#A855F7",
              },
              {
                name: "WhatsApp",
                label: "W",
                color: "#25D366",
              },
              {
                name: "Email",
                label: "@",
                color: "#38BDF8",
              },
              {
                name: "Vercel",
                label: "V",
                color: "#020617",
              },
              {
                name: "Next.js",
                label: "Nx",
                color: "#020617",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3"
              >
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shadow-md"
                  style={{
                    backgroundColor: item.color,
                    color: item.textColor || "#F9FAFB",
                  }}
                >
                  {item.label}
                </div>
                <span className="text-sm text-slate-100">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACTO */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 border-t border-slate-800 pt-16"
        >
          <h2 className="text-3xl font-semibold">¿Hablamos?</h2>

          <p className="text-slate-300 max-w-xl text-sm sm:text-base">
            Si te interesa mejorar procesos, automatizar tareas o usar IA y
            tecnología de forma práctica, escribime por el canal que te quede
            más cómodo. Prefiero conversaciones reales antes que formularios
            eternos.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="mailto:julianwaitzman@gmail.com"
              className="px-6 py-3 bg-sky-500 text-black rounded-full font-semibold text-sm hover:bg-sky-400 transition"
            >
              Escribirme por mail
            </a>
            <span className="text-xs text-slate-500">
              También podés usar cualquiera de estas opciones:
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4 text-sm">
            {[
              {
                name: "WhatsApp",
                href: "https://wa.me/5491127320366",
                handle: "+54 9 11 2732 0366",
                color: "#25D366",
                label: "W",
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/juliwaitz",
                handle: "@juliwaitz",
                color: "#E1306C",
                label: "Ig",
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/julián-waitzman-070b4a28",
                handle: "Perfil profesional",
                color: "#0A66C2",
                label: "in",
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/tuusuario",
                handle: "Facebook",
                color: "#1877F2",
                label: "f",
              },
              {
                name: "Email alternativo",
                href: "mailto:julianwaitzman@gmail.com",
                handle: "julianwaitzman@gmail.com",
                color: "#38BDF8",
                label: "@",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 hover:border-sky-500/70 hover:bg-slate-900 transition"
              >
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                  style={{ backgroundColor: item.color }}
                >
                  {item.label}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-50 text-sm">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {item.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.section>
      </div>

      {/* FOOTER ELEGANTE */}
      <footer className="border-t border-slate-800 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Tech Blockchain · Julian Waitzman
          </span>
          <span className="text-[11px]">
            IA, crypto, procesos reales y soluciones simples.
          </span>
        </div>
      </footer>
    </main>
  );
}
