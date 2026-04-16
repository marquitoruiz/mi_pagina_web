import { useState } from "react";
import {
  BadgeCheck,
  Phone,
  MessageCircle,
  Hammer,
  Ruler,
  LayoutGrid,
  House,
  Wrench,
  Sparkles,
  X,
  ArrowUpRight,
} from "lucide-react";

import logoEdicor from "./assets/logo-edicor.jpeg";
import principal from "./assets/principal.jpg";
import antes from "./assets/antes-despues.jpg.png";
import detalle from "./assets/detalle-juntas.jpg.jpeg";
import trabajo1 from "./assets/galeria/trabajo1.jpg";
import trabajo2 from "./assets/galeria/trabajo2.jpg";
import trabajo3 from "./assets/galeria/trabajo3.jpg";
import trabajo4 from "./assets/galeria/trabajo4.jpg";
import trabajo5 from "./assets/galeria/trabajo5.jpg";
import trabajo6 from "./assets/galeria/trabajo6.jpg";

import sala from "./assets/sala.jpg";
import bano from "./assets/bano.jpg";
import pisos from "./assets/pisos.jpg";
import nivelacion from "./assets/nivelacion.jpg";
import revestimiento from "./assets/revestimiento.png";

export default function AcabadosProPage() {
  const [imagenActiva, setImagenActiva] = useState(null);

  const trabajos = [
    {
      titulo: "Instalación de porcelanato en sala",
      detalle:
        "Nivelación, alineación de juntas y acabado limpio para espacios residenciales.",
      imagen: sala,
    },
    {
      titulo: "Chapado de baños y cocinas",
      detalle:
        "Revestimiento de muros con atención al detalle, cortes precisos y excelente presentación.",
      imagen: bano,
    },
    {
      titulo: "Remodelación de pisos",
      detalle:
        "Retiro, preparación de superficie e instalación de cerámico o porcelanato con acabado profesional.",
      imagen: pisos,
    },
  ];

  const galeria = [
    {
      imagen: trabajo1,
      titulo: "Porcelanato en sala",
      detalle: "Instalación limpia con buena alineación y acabado uniforme.",
    },
    {
      imagen: trabajo2,
      titulo: "Remodelación interior",
      detalle: "Trabajo real con mejor distribución visual y presentación final.",
    },
    {
      imagen: trabajo3,
      titulo: "Acabado en piso",
      detalle: "Superficie terminada con nivelación correcta y estética moderna.",
    },
    {
      imagen: trabajo4,
      titulo: "Ambiente residencial",
      detalle: "Aplicación precisa y resultado profesional en espacio habitable.",
    },
    {
      imagen: trabajo5,
      titulo: "Enchape decorativo",
      detalle: "Detalle visual cuidado con cortes y presentación prolija.",
    },
    {
      imagen: trabajo6,
      titulo: "Entrega final",
      detalle: "Resultado terminado, limpio y listo para uso del cliente.",
    },
  ];

  const servicios = [
    {
      icono: <LayoutGrid className="h-5 w-5" />,
      nombre: "Instalación de pisos",
      texto: "Cerámica y porcelanato con acabado nivelado y presentación fina.",
      imagen: sala,
      titulo: "Instalación de pisos de cerámica y porcelanato",
      detalle:
        "Acabados nivelados, alineados y con excelente presentación final.",
    },
    {
      icono: <House className="h-5 w-5" />,
      nombre: "Chapado de paredes",
      texto: "Baños, cocinas y fachadas con cortes precisos y estética moderna.",
      imagen: bano,
      titulo: "Chapado de paredes en baños y cocinas",
      detalle:
        "Estética moderna con cortes precisos y excelente acabado visual.",
    },
    {
      icono: <Ruler className="h-5 w-5" />,
      nombre: "Nivelación",
      texto: "Base firme y bien preparada para lograr un acabado perfecto.",
      imagen: nivelacion,
      titulo: "Nivelación y preparación de superficies",
      detalle:
        "Base firme y nivelada para lograr un acabado profesional duradero.",
    },
    {
      icono: <Wrench className="h-5 w-5" />,
      nombre: "Remodelación",
      texto: "Ambientes residenciales y comerciales con resultado profesional.",
      imagen: trabajo2,
      titulo: "Remodelación de ambientes",
      detalle:
        "Transformación completa de espacios con acabados modernos y limpios.",
    },
    {
      icono: <Hammer className="h-5 w-5" />,
      nombre: "Cambio de revestimientos",
      texto:
        "Renovación total con instalación limpia, ordenada y bien ejecutada.",
      imagen: revestimiento,
      titulo: "Cambio de revestimientos",
      detalle:
        "Renovación completa con instalación limpia y excelente presentación.",
    },
    {
      icono: <Sparkles className="h-5 w-5" />,
      nombre: "Asesoría en diseño",
      texto:
        "Te ayudamos a elegir formato, distribución y estilo para tu espacio.",
      imagen: trabajo6,
      titulo: "Asesoría en diseño y distribución",
      detalle: "Te ayudamos a elegir lo mejor según tu espacio y estilo.",
    },
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
        "Quedó muy bien el porcelanato de la sala. Buen acabado, puntualidad y orden en el trabajo. proximamente veras los videos",
        
    },
    {
      nombre: "Remodelación de baño",
      texto:
        "Se nota la experiencia en los cortes y el alineado. Muy recomendado para acabados finos. proximamente veras los videos",
    },
    {
      nombre: "Proyecto de cocina",
      texto:
        "Trabajo serio y responsable. El enchape quedó limpio y elegante. proximamente veras los videos",
    },
  ];

  return (
    <>
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
                  EDICOR ACABADOS en Cerámica & Porcelanato
                </p>
                <p className="text-sm text-stone-600">
                  Instalación profesional para hogares y negocios
                </p>
              </div>
            </div>

            <a
  href="https://wa.me/51998535347"
  className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-[1.03] hover:bg-amber-800"
>
  Cotizar por WhatsApp
  <ArrowUpRight className="h-4 w-4" />
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
                  Especialista en cerámica, porcelanato, enchapes y
                  remodelaciones. Realizo trabajos con buena nivelación, cortes
                  precisos, acabado limpio y presentación profesional.
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

                <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-stone-700 sm:grid-cols-3">
                  <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-2xl font-black text-amber-700">
                      +Calidad
                    </p>
                    <p className="mt-1">Acabados finos y detallados</p>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <p className="text-2xl font-black text-amber-700">+Orden</p>
                    <p className="mt-1">Trabajo limpio y responsable</p>
                  </div>

                  <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-2xl font-black text-amber-700">
                      +Confianza
                    </p>
                    <p className="mt-1">Atención directa y seria</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-xl md:col-span-2">
                  <img
                    src={principal}
                    alt="Foto principal de trabajo de porcelanato"
                    className="aspect-[16/9] w-full cursor-pointer rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.01]"
                    onClick={() =>
                      setImagenActiva({
                        imagen: principal,
                        titulo: "Trabajo principal de porcelanato",
                        detalle:
                          "Acabado real instalado con presentación limpia y profesional.",
                      })
                    }
                  />
                  <p className="mt-4 text-sm font-semibold text-stone-900">
                    Trabajo de porcelanato instalado con acabado limpio y
                    nivelado profesional
                  </p>
                  <p className="text-sm text-stone-600">
                    Acabado real instalado con presentación limpia y profesional.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-md">
                  <img
                    src={antes}
                    alt="Antes y después del trabajo"
                    className="aspect-[16/9] w-full cursor-pointer rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.01]"
                    onClick={() =>
                      setImagenActiva({
                        imagen: antes,
                        titulo: "Antes / después",
                        detalle:
                          "Comparación visual del trabajo antes y después de la intervención.",
                      })
                    }
                  />
                  <p className="mt-3 text-sm font-medium text-stone-600">
                    Antes / después
                  </p>
                </div>

                <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-md">
                  <img
                    src={detalle}
                    alt="Detalle de las juntas"
                   className="aspect-[16/9] w-full cursor-pointer rounded-[1.5rem] object-cover transition duration-300 hover:scale-[1.01]"
                    onClick={() =>
                      setImagenActiva({
                        imagen: detalle,
                        titulo: "Detalle de cortes y alineación de juntas",
                        detalle:
                          "Trabajo con cuidado en la alineación, cortes y presentación final.",
                      })
                    }
                  />
                  <p className="mt-3 text-sm font-medium text-stone-600">
                    Detalle de cortes y alineación de juntas
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Atención directa
                </p>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  Trato directo contigo, sin intermediarios ni vueltas
                  innecesarias.
                </p>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Acabado profesional
                </p>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  Trabajo limpio, alineado y con buena presentación visual en
                  cada ambiente.
                </p>
              </div>

              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Respuesta rápida
                </p>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  Cotización y coordinación directa por WhatsApp para avanzar más
                  rápido.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-8">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                    Sobre EDICOR
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
                    Trabajo responsable, buena presentación y acabados de calidad
                  </h2>
                </div>

                <div className="space-y-4 leading-7 text-stone-700">
                  <p>
                    EDICOR está enfocado en trabajos de cerámica, porcelanato,
                    enchapes y remodelaciones, con atención al detalle y un
                    resultado final limpio y profesional.
                  </p>
                  <p>
                    Haz realidad tu proyecto hoy mismo. Tu espacio merece un
                    acabado perfecto, con una ejecución seria, ordenada y de
                    buena presentación.
                  </p>
                  <div className="flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-amber-900">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Calidad, detalle y compromiso en cada trabajo. Más que un
                      servicio, buscamos entregar resultados que se noten.
                    </p>
                  </div>
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
                Especialistas en acabados de alta calidad para tu hogar o negocio
              </h2>
              <p className="mt-4 text-lg text-stone-700">
                Transformamos tus espacios con acabados de calidad. Desde la
                preparación hasta el acabado final, nos enfocamos en orden,
                precisión y responsabilidad.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {servicios.map((servicio) => (
                <button
                  key={servicio.titulo}
                  type="button"
                  onClick={() =>
                    setImagenActiva({
                      imagen: servicio.imagen,
                      titulo: servicio.titulo,
                      detalle: servicio.detalle,
                    })
                  }
                  className="group rounded-[2rem] border border-stone-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-700 text-white shadow-sm transition group-hover:bg-stone-900">
                    {servicio.icono}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-stone-900">
                    {servicio.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {servicio.texto}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-amber-700">
                    Ver referencia
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-center shadow-sm">
              <h4 className="text-2xl font-black tracking-tight text-stone-900 md:text-3xl">
                Cotiza rápido por WhatsApp y recibe atención personalizada
              </h4>
              <p className="mt-3 text-stone-700">
                Cuéntame tu idea, tu espacio o tu remodelación y te respondo de
                forma directa.
              </p>
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
                    Trabajos bien hechos desde el primer detalle
                  </h2>
                  <p className="mt-4 text-lg text-stone-700">
                    El nivel de acabado que tu espacio merece.
                  </p>
                </div>

                <a
                  href="https://wa.me/51998535347"
                  className="text-sm font-semibold text-amber-800 underline underline-offset-4"
                >
                  Pedir presupuesto
                </a>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galeria.map((item) => (
                  <article
                    key={item.titulo}
                    onClick={() => setImagenActiva(item)}
                    className="group cursor-pointer overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm 
                    transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-bold tracking-tight text-stone-900">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.detalle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {trabajos.map((trabajo) => (
                  <article
                    key={trabajo.titulo}
                    onClick={() => setImagenActiva(trabajo)}
                    className="cursor-pointer overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={trabajo.imagen}
                      alt={trabajo.titulo}
                      className="aspect-[4/3] w-full object-cover"
                    />
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
                  Por qué elegirnos
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
                  Por qué elegirnos para tu proyecto
                </h2>
                <ul className="mt-6 space-y-4 text-stone-700">
                  <li>Atención directa contigo, sin intermediarios.</li>
                  <li>
                    Acabados bien hechos, limpios y de buena presentación.
                  </li>
                  <li>
                    Responsabilidad en tiempos y cuidado del ambiente de trabajo.
                  </li>
                  <li>
                    Experiencia en pisos, muros, baños, cocinas y remodelaciones.
                  </li>
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
                      <h3 className="text-lg font-bold text-white">
                        {item.paso}
                      </h3>
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
                  Comentarios que puedes mostrar cuando ya tengas clientes
                  propios
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
                  trabajos de porcelanato o cerámica. Atención directa y
                  respuesta rápida.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/51998535347"
                    className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="tel:+51998535347"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
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
        <section className="mx-auto max-w-7xl px-6 pb-16">
  <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-stone-50 p-8 shadow-sm md:p-10">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          ¿Listo para empezar?
        </p>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-stone-900">
          Cotiza tu proyecto y recibe atención directa por WhatsApp
        </h3>
        <p className="mt-3 text-stone-700">
          Si estás pensando en renovar o dar acabados a pisos, baños, cocinas o cualquier ambiente,
          escríbeme y revisamos la mejor solución para tu espacio.
        </p>
      </div>

      <a
        href="https://wa.me/51998535347"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-stone-900 px-6 py-4 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-[1.03] hover:bg-stone-800"
      >
        Escribir ahora
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </div>
</section>

        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-stone-900">
                EDICOR Acabados en Cerámica & Porcelanato
              </p>
              <p className="mt-1">
                Villa María del Triunfo, Lima · WhatsApp: +51 998535347
              </p>
            </div>
            <p>
              Página orientada a mostrar trabajos reales y captar clientes por
              internet.
            </p>
          </div>
        </footer>
      </div>
<a
  href="https://wa.me/51998535347"
  className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-3 rounded-full bg-green-600 px-5 py-3 
  text-sm font-semibold text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-green-700"
>
  <MessageCircle className="h-5 w-5" />
  WhatsApp
</a>
      {imagenActiva && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setImagenActiva(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagenActiva(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={imagenActiva.imagen}
              alt={imagenActiva.titulo}
              className="max-h-[75vh] w-full object-contain bg-black"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold tracking-tight text-stone-900">
                {imagenActiva.titulo}
              </h3>
              <p className="mt-2 text-stone-700">{imagenActiva.detalle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
