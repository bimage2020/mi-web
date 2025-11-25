export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-50">

      {/* NAVBAR */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/80 text-xs font-bold text-black">
              TB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide">
                Tech Blockchain
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Strategy & Automation
              </span>
            </div>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a href="#focus" className="hover:text-sky-400 transition">En qué me enfoco</a>
            <a href="#services" className="hover:text-sky-400 transition">Servicios</a>
            <a href="#cases" className="hover:text-sky-400 transition">Casos / ideas</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* CONTENEDOR GENERAL */}
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 space-y-24">

        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              IA · CRYPTO · SERVICIO TÉCNICO · OPERACIONES
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Ayudo a personas y negocios a usar{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                tecnología e IA
              </span>{" "}
              de forma práctica.
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-300">
              Soy Julián Waitzman. Vengo de años en servicio técnico y logística,
              y ahora enfoco todo eso en proyectos con IA, crypto y soluciones
              digitales simples. Menos complicación, más cosas que funcionan.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#services"
                className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold text-black hover:bg-sky-400 transition">
                Ver servicios
              </a>
              <a href="#contact"
                className="rounded-full border border-slate-600 px-5 py-2 text-xs font-semibold text-slate-100 hover:border-slate-300 transition">
                Charlar un proyecto
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-3 text-xs text-slate-400">
              <div>
                <span className="block text-slate-200 text-sm font-semibold">+10 años</span>
                <span>en operaciones, servicio técnico y equipos.</span>
              </div>
              <div>
                <span className="block text-slate-200 text-sm font-semibold">IA primero</span>
                <span>todo se piensa con data, automatización y foco.</span>
              </div>
            </div>
          </div>

          {/* PANEL LATERAL */}
          <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-5 shadow-[0_0_60px_rgba(56,189,248,0.25)]">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">Snapshot</p>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Crypto & data</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  En evolución
                </span>
              </div>

              <div className="h-1 w-full rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300" />
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Dashboards y automatización</span>
                <span>75%</span>
              </div>

              <div className="h-px w-full bg-slate-800/80 my-2" />

              <div className="space-y-2">
                <p className="text-slate-300">Áreas donde aporto valor hoy:</p>
                <ul className="space-y-1 text-slate-400 list-disc list-inside">
                  <li>Optimizar procesos (soporte, tickets, tareas).</li>
                  <li>Tableros claros para decidir mejor.</li>
                  <li>Experiencias tech para productos y eventos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOCOS */}
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
                text: "Implemento flujos simples para ahorrar tiempo en soporte, reporting y tareas repetitivas."
              },
              {
                title: "Crypto & data",
                text: "Tableros para seguir proyectos, volumen, riesgo y oportunidades con criterio."
              },
              {
                title: "Operaciones & experiencia",
                text: "Servicio técnico, logística, atención y procesos reales. Tecnología aplicada con sentido."
              }
            ].map((item) => (
              <div key={item.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-sky-500/70 hover:bg-slate-900 transition">
                <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="services" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold">Servicios (versión 1.0)</h2>
            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Iterando sobre la marcha</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Servicio 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">Consultoría tech & IA para pymes y profesionales</h3>
              <p className="text-xs text-slate-300">
                Conversamos tu situación, detectamos cuellos de botella y definimos dónde la tecnología puede ayudarte hoy.
              </p>
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                <li>Relevamiento simple del negocio.</li>
                <li>Mapa de oportunidades con herramientas concretas.</li>
                <li>Plan de acción de 30 días.</li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">Labs: crypto, dashboards y contenido</h3>
              <p className="text-xs text-slate-300">
                Experimentos rápidos: dashboards, seguimiento cripto, prototipos y contenido digital.
              </p>
              <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                <li>Dashboards cripto / mercado.</li>
                <li>Panel de métricas y seguimiento.</li>
                <li>Prototipos para validar ideas rápido.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CASOS */}
        <section id="cases" className="space-y-6">
          <h2 className="text-2xl font-semibold">Casos, ideas y próximos pasos</h2>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-sky-500/30 text-[10px] flex items-center justify-center text-sky-200">01</div>
              <div>
                <p className="font-semibold text-slate-100">Optimizar servicio técnico y logística.</p>
                <p>IA para clasificar tickets, generar respuestas, priorizar casos y mejorar la visibilidad.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 h-7 w-7 rounded-full bg-sky-500/30 text-[10px] flex items-center justify-center text-sky-200">02</div>
              <div>
                <p className="font-semibold text-slate-100">Eventos & tecnología con propósito.</p>
                <p>Experiencias digitales donde la tech conecta personas, ideas y proyectos con sentido real.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contact" className="space-y-4 border-t border-slate-800 pt-10">
          <h2 className="text-2xl font-semibold">¿Hablamos?</h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Si algo de todo esto te resonó, escribime. Prefiero conversaciones reales antes que formularios infinitos.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <a href="mailto:julianwaitzman@gmail.com"
              className="rounded-full bg-sky-500 px-5 py-2 font-medium text-black hover:bg-sky-400 transition">
              Escribirme un mail
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
