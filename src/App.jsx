import logoEdicor from "./assets/logo-edicor.jpeg";
import principal from "./assets/principal.jpg";
import antes from "./assets/antes-despues.jpg.png";
import detalle from "./assets/detalle-juntas.jpg.jpeg";

export default function AcabadosProPage() {
  const trabajos = [
    {
      titulo: "Instalación de porcelanato en sala",
      detalle:
        "Nivelación, alineación de juntas y acabado limpio para espacios residenciales.",
    },
    {
      titulo: "Chapado de baños y cocinas",
      detalle:
        "Revestimiento de muros con atención al detalle, cortes precisos y excelente presentación.",
    },
    {
      titulo: "Remodelación de pisos",
      detalle:
        "Retiro, preparación de superficie e instalación de cerámico o porcelanato con acabado profesional.",
    },
  ];

  const servicios = [
    "Instalación de pisos de cerámica y porcelanato",
    "Chapado de paredes en baños, cocinas y fachadas",
    "Nivelación y preparación de superficies",
    "Remodelación de ambientes residenciales y comerciales",
    "Cambio de revestimientos antiguos",
    "Asesoría para elección de formato, diseño y distribución",
  ];

  const proceso = [
    {
      paso: "1. Evaluación",
      texto:
        "Revisamos el área, medidas, tipo de material y estado de la superficie.",
    },
    {
      paso: "2. Propuesta",
      texto:
        "Te indico la mejor forma de instalación, tiempos de trabajo y acabados recomendados.",
    },
    {
      paso: "3. Ejecución",
      texto:
        "Realizo el trabajo con precisión, buena presentación y cuidado en cada detalle.",
    },
    {
      paso: "4. Entrega",
      texto:
        "Te entrego el ambiente listo, bien acabado y con revisión final contigo.",
    },
  ];

  const testimonios = [
    {
      nombre: "Cliente residencial",
      texto:
        "Quedó muy bien el porcelanato de la sala. Buen acabado, puntualidad y orden en el trabajo.",
    },
    {
      nombre: "Remodelación de baño",
      texto:
        "Se nota la experiencia en los cortes y el alineado. Muy recomendado para acabados finos.",
    },
    {
      nombre: "Proyecto de cocina",
      texto:
        "Trabajo serio y responsable. El enchape quedó limpio y elegante.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={logoEdicor}
              alt="Logo de EDICOR Acabados"
              className="h-16 w-16 rounded-2xl object-cover shadow-md ring-1 ring-stone-200"
            />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-stone-900">
                EDICOR Acabados en Cerámica & Porcelanato
              </p>
              <p className="text-sm text-stone-600">
                Instalación profesional para hogares y negocios
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/51998535347"
            className="rounded-2xl bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-amber-800"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-100 to-white" />
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.15),transparent_60%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm">
                Remodelaciones y acabados de alta calidad
              </span>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-stone-900 md:text-6xl">
                Dale a tu espacio un acabado limpio, moderno y profesional
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
                Especialista en instalación de cerámica, porcelanato, chapados y
                remodelaciones. Trabajo con precisión, buena presentación y
                compromiso en cada proyecto.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#servicios"
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-stone-800"
                >
                  Ver servicios
                </a>

                <a
                  href="#trabajos"
                  className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-50"
                >
                  Ver trabajos
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-stone-700">
                <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-amber-700">+Calidad</p>
                  <p className="mt-1">Acabados finos y detallados</p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-amber-700">+Orden</p>
                  <p className="mt-1">Trabajo limpio y responsable</p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-2xl font-black text-amber-700">+Confianza</p>
                  <p className="mt-1">Atención directa y seria</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-xl md:col-span-2">
                <img
                  src={principal}
                  alt="Foto principal de trabajo de porcelanato"
                  className="aspect-[16/9] w-full rounded-[1.5rem] object-cover"
                />
                <p className="mt-4 text-sm font-semibold text-stone-900">
                  Trabajo de porcelanato instalado con acabado limpio y nivelado profesional
                </p>
                <p className="text-sm text-stone-600">
                  Acabado real instalado con presentación limpia y profesional.
                </p>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-md">
                <img
                  src={antes}
                  alt="Antes y después del trabajo"
                  className="aspect-square w-full rounded-[1.5rem] object-cover"
                />
                <p className="mt-3 text-sm font-medium text-stone-600">
                  Antes / después
                </p>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-md">
                <img
                  src={detalle}
                  alt="Detalle de las juntas"
                  className="aspect-square w-full rounded-[1.5rem] object-cover"
                />
                <p className="mt-3 text-sm font-medium text-stone-600">
                  Detalle de cortes y alineación de juntas
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="servicios">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
              Lo que puedes ofrecer en tu página
            </h2>
            <p className="mt-4 text-lg text-stone-700">
              Tu web debe dejar clarísimo qué haces, para quién trabajas y por
              qué vale la pena contactarte.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicios.map((servicio) => (
              <div
                key={servicio}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-amber-700 shadow-sm" />
                <p className="text-base font-semibold leading-7 text-stone-800">
                  {servicio}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="trabajos">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Portafolio
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
                  Muestra tus mejores trabajos
                </h2>
                <p className="mt-4 text-lg text-stone-700">
                  La parte más importante de tu web serán las imágenes reales de
                  tus instalaciones y remodelaciones.
                </p>
              </div>

              <a
                href="https://wa.me/51998535347"
                className="text-sm font-semibold text-amber-800 underline underline-offset-4"
              >
                Pedir presupuesto
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {trabajos.map((trabajo) => (
                <article
                  key={trabajo.titulo}
                  className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-amber-100" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight text-stone-900">
                      {trabajo.titulo}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-700">
                      {trabajo.detalle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Por qué elegirte
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
                Lo que genera confianza y te ayuda a cerrar trabajos
              </h2>
              <ul className="mt-6 space-y-4 text-stone-700">
                <li>Atención directa contigo, sin intermediarios.</li>
                <li>Acabados bien alineados, limpios y de buena presentación.</li>
                <li>Responsabilidad en tiempos y cuidado del ambiente de trabajo.</li>
                <li>Experiencia en pisos, muros, baños, cocinas y remodelaciones.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Proceso de trabajo
              </p>
              <div className="mt-6 space-y-6">
                {proceso.map((item) => (
                  <div
                    key={item.paso}
                    className="border-b border-white/10 pb-5 last:border-b-0"
                  >
                    <h3 className="text-lg font-bold text-white">{item.paso}</h3>
                    <p className="mt-2 text-stone-300">{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Testimonios
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900 md:text-4xl">
                Comentarios que puedes mostrar cuando ya tengas clientes propios
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonios.map((testimonio) => (
                <div
                  key={testimonio.nombre}
                  className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-lg leading-8 text-stone-700">
                    “{testimonio.texto}”
                  </p>
                  <p className="mt-6 text-sm font-semibold text-amber-800">
                    {testimonio.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="contacto">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-amber-800 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 p-8 text-white shadow-xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                ¿Tienes una obra o remodelación por hacer?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">
                Escríbeme para cotizar pisos, enchapes, remodelaciones y
                trabajos de porcelanato o cerámica. Atención directa y respuesta
                rápida.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/51998535347"
                  className="rounded-2xl bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-800"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="tel:+51998535347"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Llamar ahora
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-stone-900">
                Información clave
              </h3>
              <div className="mt-6 space-y-5 text-stone-700">
                <div>
                  <p className="text-sm font-semibold text-amber-700">
                    Zona de atención
                  </p>
                  <p className="mt-1">Villa María del Triunfo, Lima</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700">
                    WhatsApp
                  </p>
                  <p className="mt-1">+51 998535347</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700">
                    Correo
                  </p>
                  <p className="mt-1">marquitoruiz2024@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-700">
                    Redes
                  </p>
                  <p className="mt-1">
                    Facebook, Instagram, TikTok o la que uses para mostrar tus
                    trabajos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Acabados en Cerámica & Porcelanato</p>
          <p>Página enfocada en captar clientes por internet y redes sociales</p>
        </div>
      </footer>
    </div>
  );
}

