import principal from "./assets/principal.jpg";
import antes from "./assets/antes-despues.jpg.png";
import detalle from "./assets/detalle-juntas.jpg.jpeg";
export default function AcabadosProPage() {
  const trabajos = [
    {
      titulo: "Instalación de porcelanato en sala",
      detalle: "Nivelación, alineación de juntas y acabado limpio para espacios residenciales.",
    },
    {
      titulo: "Chapado de baños y cocinas",
      detalle: "Revestimiento de muros con atención al detalle, cortes precisos y excelente presentación.",
    },
    {
      titulo: "Remodelación de pisos",
      detalle: "Retiro, preparación de superficie e instalación de cerámico o porcelanato con acabado profesional.",
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
      texto: "Revisamos el área, medidas, tipo de material y estado de la superficie.",
    },
    {
      paso: "2. Propuesta",
      texto: "Te indico la mejor forma de instalación, tiempos de trabajo y acabados recomendados.",
    },
    {
      paso: "3. Ejecución",
      texto: "Realizo el trabajo con precisión, limpieza y cuidado en cada detalle.",
    },
    {
      paso: "4. Entrega",
      texto: "Te entrego el ambiente listo, bien acabado y con revisión final contigo.",
    },
  ];

  const testimonios = [
    {
      nombre: "Cliente residencial",
      texto: "Quedó muy bien el porcelanato de la sala. Buen acabado, puntualidad y orden en el trabajo.",
    },
    {
      nombre: "Remodelación de baño",
      texto: "Se nota la experiencia en los cortes y el alineado. Muy recomendado para acabados finos.",
    },
    {
      nombre: "Proyecto de cocina",
      texto: "Trabajo serio y responsable. El enchape quedó limpio y elegante.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold tracking-tight">
              EDICOR Acabados en Cerámica & Porcelanato
            </p>
            <p className="text-sm text-neutral-600">
              Instalación profesional para hogares y negocios
            </p>
          </div>
          <a
            href="https://wa.me/51998535347"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-white to-neutral-100" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700">
                Remodelaciones y acabados de alta calidad
              </span>
              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Dale a tu espacio un acabado limpio, moderno y profesional
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
                Especialista en instalación de cerámica, porcelanato, chapados y
                remodelaciones. Trabajo con precisión, buena presentación y
                compromiso en cada proyecto.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#servicios"
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Ver servicios
                </a>
                <a
                  href="#trabajos"
                  className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
                >
                  Ver trabajos
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-neutral-700">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold">+Calidad</p>
                  <p className="mt-1">Acabados finos y detallados</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold">+Orden</p>
                  <p className="mt-1">Trabajo limpio y responsable</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold">+Confianza</p>
                  <p className="mt-1">Atención directa y seria</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-lg md:col-span-2">
                <img
                  src={principal}
                  alt="Foto principal de trabajo de porcelanato"
                  className="aspect-[16/9] w-full rounded-2xl object-cover"
                />
                <p className="mt-4 text-sm font-semibold text-neutral-900">
                  Trabajo de porcelanato instalado con acabado limpio y nivelado profesional
                </p>
                <p className="text-sm text-neutral-600">
                  Acabado real instalado con presentación limpia y profesional.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
  <img 
    src={antes}
    alt="Antes y después del trabajo"
    className="aspect-square w-full object-cover rounded-2xl"
  />
  <p className="mt-3 text-sm text-neutral-600">Antes / después</p>
</div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
  <img 
    src={detalle}
    alt="detalle de las juntas"
    className="aspect-square w-full object-cover rounded-2xl"
  />
  <p className="mt-3 text-sm text-neutral-600">Detalle de cortes y alineación de juntas</p>
</div>

            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="servicios">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Servicios
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Lo que puedes ofrecer en tu página
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              Tu web debe dejar clarísimo qué haces, para quién trabajas y por
              qué vale la pena contactarte.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicios.map((servicio) => (
              <div
                key={servicio}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-10 w-10 rounded-2xl bg-neutral-900" />
                <p className="text-base font-semibold leading-7">{servicio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20" id="trabajos">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Portafolio
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Muestra tus mejores trabajos
                </h2>
                <p className="mt-4 text-lg text-neutral-700">
                  La parte más importante de tu web serán las imágenes reales de
                  tus instalaciones y remodelaciones.
                </p>
              </div>
              <a
                href="https://wa.me/51998535347"
                className="text-sm font-semibold text-neutral-900 underline underline-offset-4"
              >
                Pedir presupuesto
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {trabajos.map((trabajo) => (
                <article
                  key={trabajo.titulo}
                  className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm"
                >
                  <div className="aspect-[4/3] bg-neutral-200" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight">
                      {trabajo.titulo}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-700">
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
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Por qué elegirte
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Lo que genera confianza y te ayuda a cerrar trabajos
              </h2>
              <ul className="mt-6 space-y-4 text-neutral-700">
                <li>Atención directa contigo, sin intermediarios.</li>
                <li>
                  Acabados bien alineados, limpios y de buena presentación.
                </li>
                <li>
                  Responsabilidad en tiempos y cuidado del ambiente de trabajo.
                </li>
                <li>
                  Experiencia en pisos, muros, baños, cocinas y remodelaciones.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
                Proceso de trabajo
              </p>
              <div className="mt-6 space-y-6">
                {proceso.map((item) => (
                  <div
                    key={item.paso}
                    className="border-b border-white/10 pb-5 last:border-b-0"
                  >
                    <h3 className="text-lg font-bold">{item.paso}</h3>
                    <p className="mt-2 text-white/80">{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Testimonios
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Comentarios que puedes mostrar cuando ya tengas clientes propios
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonios.map((testimonio) => (
                <div
                  key={testimonio.nombre}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <p className="text-lg leading-8 text-neutral-700">
                    “{testimonio.texto}”
                  </p>
                  <p className="mt-6 text-sm font-semibold text-neutral-900">
                    {testimonio.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="contacto">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-900 p-8 text-white shadow-lg md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
                Contacto
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                ¿Tienes una obra o remodelación por hacer?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Escríbeme para cotizar pisos, enchapes, remodelaciones y
                trabajos de porcelanato o cerámica. Atención directa y respuesta
                rápida.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/51998535347"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="tel:+51998535347"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  Llamar ahora
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight">
                Información clave
              </h3>
              <div className="mt-6 space-y-5 text-neutral-700">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    Zona de atención
                  </p>
                  <p className="mt-1">Villa María del Triunfo, Lima</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    WhatsApp
                  </p>
                  <p className="mt-1">+51 998535347</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    Correo
                  </p>
                  <p className="mt-1">marquitoruiz2024@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
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

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Acabados en Cerámica & Porcelanato</p>
          <p>Página enfocada en captar clientes por internet y redes sociales</p>
        </div>
      </footer>
    </div>
  );
}

