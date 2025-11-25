export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50 font-sans">
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">
        {/* HERO */}
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Tech · IA · Futuro
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Hola, soy <span className="text-sky-400">Juli</span>.
            <br />
            Construyo soluciones prácticas con tecnología e IA.
          </h1>

          <p className="max-w-xl text-zinc-300 text-lg">
            Esta es mi base central para proyectos, ideas y experimentos con
            automatización, crypto, servicio técnico y estrategias digitales.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-300 transition"
            >
              Contacto
            </a>
          </div>
        </section>

        {/* FOCOS PRINCIPALES */}
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Focos principales"
        >
          {[
            {
              title: "Automatización",
              text: "Uso IA y scripts simples para ahorrar tiempo en tareas repetitivas.",
            },
            {
              title: "Análisis & Crypto",
              text: "Dashboards, datos y decisiones con lógica, no solo intuición.",
            },
            {
              title: "Consultoría práctica",
              text: "Bajar la tecnología a tierra para pymes y proyectos reales.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-[0_0_40px_rgba(15,15,25,0.6)]"
            >
              <h2 className="text-sm font-semibold tracking-wide text-zinc-200">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
            </div>
          ))}
        </section>

        {/* PROYECTOS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-zinc-50">
              Proyectos en marcha
            </h2>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Borrador editable
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-sky-500/70 hover:bg-zinc-900 transition">
              <h3 className="text-lg font-semibold text-zinc-50">
                Dashboard de crypto & datos
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Panel para seguir precios, volumen y noticias clave de crypto
                combinando Google Sheets, APIs e IA.
              </p>
              <p className="mt-3 text-xs text-sky-400">
                Próximo paso: conectar a Binance / CoinMarketCap.
              </p>
            </article>

            <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-sky-500/70 hover:bg-zinc-900 transition">
              <h3 className="text-lg font-semibold text-zinc-50">
                Tech consulting para pymes
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Servicio para ayudar a negocios a usar IA y herramientas
                digitales sin complicarse, con foco en resultados rápidos.
              </p>
              <p className="mt-3 text-xs text-sky-400">
                Próximo paso: sumar casos de estudio y testimonios.
              </p>
            </article>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Quién soy y cómo trabajo
          </h2>
          <p className="max-w-3xl text-zinc-300 text-sm leading-relaxed">
            Me gusta combinar tecnología, criterio práctico y experiencia real
            en servicio técnico, logística y proyectos digitales. Esta web va a
            ir mutando: acá voy a documentar experimentos, aprendizajes y
            proyectos que construyo con IA como copiloto.
          </p>
        </section>

        {/* CONTACTO */}
        <section
          id="contact"
          className="space-y-4 border-t border-zinc-800 pt-10"
        >
          <h2 className="text-2xl font-semibold text-zinc-50">Contacto</h2>
          <p className="text-sm text-zinc-400">
            ¿Querés charlar una idea, proyecto o colaboración? Podés arrancar
            mandando un mail o un mensaje por la red que prefieras.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:bimage2020@gmail.com"
              className="rounded-full bg-sky-500 px-5 py-2 font-medium text-black hover:bg-sky-400 transition"
            >
              Escribirme por mail
            </a>
            <span className="text-zinc-500">
              Después voy a sumar links a LinkedIn, X, Telegram, etc.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
