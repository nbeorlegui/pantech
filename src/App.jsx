import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, Bot, Code2, FileText, Rocket, ShoppingBag, Sparkles, Workflow } from "lucide-react";


const demoGroups = [
  {
    category: "Sitios y tiendas online",
    icon: Rocket,
    examples: [
      {
        title: "Landing premium animada",
        text: "Sitio one page con hero visual, scroll effects, secciones comerciales y formulario de contacto.",
      },
      {
        title: "Tienda catálogo + carrito",
        text: "Demo de productos, categorías, carrito, checkout simulado y panel simple de administración.",
      },
    ],
  },
  {
    category: "Dashboards y análisis de datos",
    icon: BarChart3,
    examples: [
      {
        title: "Dashboard Meta Ads",
        text: "Tablero multi-cliente para cargar campañas, analizar inversión, resultados, CTR y costo por resultado.",
      },
      {
        title: "Reporte ejecutivo mensual",
        text: "Informe visual con resumen de indicadores, evolución, hallazgos y próximos pasos recomendados.",
      },
    ],
  },
  {
    category: "Automatizaciones y bots",
    icon: Workflow,
    examples: [
      {
        title: "Bot WhatsApp para turnos",
        text: "Flujo conversacional para pedir datos, validar disponibilidad y derivar o confirmar la solicitud.",
      },
      {
        title: "Automatización de agenda + recetas",
        text: "Sistema para solicitar recetas por WhatsApp, completar datos y organizar envíos para aprobación médica.",
      },
    ],
  },
];

const slides = [
  {
    id: "web",
    image: "/web.png",
    nav: "Web",
    eyebrow: "Desarrollo web / eCommerce",
    title: "Webs, tiendas online y sistemas que venden.",
    text: "Diseñamos experiencias digitales modernas, rápidas y responsivas para empresas que necesitan captar clientes, vender online y gestionar mejor su operación.",
    icon: Code2,
    number: "01",
    chips: ["Landing pages", "eCommerce", "Apps web", "Integraciones"],
    cardTitle: "Soluciones web listas para crecer",
    cardText: "Diseñamos interfaces claras, optimizadas para conversión y preparadas para integrarse con herramientas de gestión, pagos, campañas y automatizaciones.",
  },
  {
    id: "ia",
    image: "/ia.png",
    nav: "IA",
    eyebrow: "Bots & IA",
    title: "Automatizaciones inteligentes para escalar tu atención.",
    text: "Creamos asistentes para web, WhatsApp y procesos internos, conectados a formularios, calendarios, CRM y bases de datos.",
    icon: Bot,
    number: "02",
    chips: ["Chatbots", "WhatsApp", "Automatización", "CRM"],
    cardTitle: "IA aplicada a procesos reales",
    cardText: "Implementamos flujos conversacionales y automatizaciones que reducen tareas manuales, ordenan consultas y conectan cada oportunidad con tu equipo comercial.",
  },
  {
    id: "datos",
    image: "/data.png",
    nav: "Datos",
    eyebrow: "Análisis de datos",
    title: "Dashboards claros para tomar mejores decisiones.",
    text: "Centralizamos ventas, campañas y operación en tableros visuales con KPIs, reportes y métricas accionables para decidir con claridad.",
    icon: BarChart3,
    number: "03",
    chips: ["Dashboards", "KPIs", "Reportes", "Meta Ads"],
    cardTitle: "Indicadores para decidir mejor",
    cardText: "Unificamos datos dispersos en tableros simples de leer, con métricas clave para ventas, campañas, rendimiento operativo y seguimiento de objetivos.",
  },
  {
    id: "demos",
    image: null,
    nav: "Demos",
    eyebrow: "Demos interactivas",
    title: "Probá ejemplos reales antes de contratar.",
    text: "Una sección para mostrar apps demo de Pantech agrupadas por tipo de solución: sitios y tiendas online, dashboards y análisis de datos, automatizaciones y bots.",
    icon: Rocket,
    number: "04",
    chips: ["12 demos", "Apps web", "Bots", "Dashboards"],
    cardTitle: "Biblioteca de demos Pantech",
    cardText: "Cada demo puede tener su propio link, descripción, tecnologías usadas y botón para solicitar una versión personalizada.",
    isDemos: true,
  },
  {
    id: "contacto",
    image: null,
    nav: "Contacto",
    eyebrow: "Contacto",
    title: "¿Listo para impulsar tu negocio?",
    text: "Hablemos sobre tu proyecto y veamos cómo podemos ayudarte con desarrollo web, IA, automatizaciones o análisis de datos.",
    icon: Sparkles,
    number: "05",
    chips: ["WhatsApp", "Email", "Propuesta", "Pantech"],
    cardTitle: "Hablemos de tu proyecto",
    cardText: "Contanos qué necesitás mejorar y te ayudamos a convertirlo en una solución digital concreta, escalable y fácil de usar.",
    isContact: true,
  },
];

function BackgroundImage({ slide }) {
  const isContact = slide.id === "contacto";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#001F4D]">
      <AnimatePresence mode="wait">
        {slide.image ? (
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.eyebrow}
            className="absolute inset-0 h-full w-full object-cover object-center sm:object-center"
            initial={{ opacity: 0, scale: 1.12, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1.03, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(18px)" }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(18px)" }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,239,.55),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(252,185,0,.22),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(124,58,237,.38),transparent_30%),linear-gradient(135deg,#001B45_0%,#0055B3_46%,#00122F_100%)]" />
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 28, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isContact && <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,18,55,.86)_0%,rgba(0,55,150,.45)_45%,rgba(0,18,55,.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,18,55,.92)_0%,rgba(0,55,150,.55)_46%,rgba(0,18,55,.9)_100%)]" />}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_32%,rgba(0,174,239,.32),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(252,185,0,.12),transparent_24%)]" />
    </div>
  );
}

function InteractiveParticleLayer() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 13500 : 9000;
      const maxAmount = isMobile ? 85 : 150;
      const amount = Math.min(maxAmount, Math.floor((window.innerWidth * window.innerHeight) / density));

      particlesRef.current = Array.from({ length: amount }).map((_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.28 : 0.36),
        vy: (Math.random() - 0.5) * (isMobile ? 0.28 : 0.36),
        size: i % 10 === 0 ? 2.1 + Math.random() * 1.6 : 0.7 + Math.random() * 1.25,
        color: i % 12 === 0 ? "rgba(252,185,0,0.68)" : "rgba(210,248,255,0.56)",
        connectDistance: isMobile ? 82 : 105,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      particles.forEach((p) => {
        if (mouse.current.x !== null) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = window.innerWidth < 768 ? 120 : 170;

          if (dist < radius) {
            const force = (radius - dist) / radius;
            p.x += (dx / dist) * force * (window.innerWidth < 768 ? 1.7 : 2.4);
            p.y += (dy / dist) * force * (window.innerWidth < 768 ? 1.7 : 2.4);
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const limit = Math.min(a.connectDistance, b.connectDistance);

          if (dist < limit) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(140,230,255,${0.16 * (1 - dist / limit)})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color.includes("252") ? "rgba(252,185,0,1)" : "rgba(120,230,255,1)";
        ctx.shadowBlur = window.innerWidth < 768 ? 6 : 9;
        ctx.fill();
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onTouchMove = (e) => {
      if (!e.touches?.length) return;
      mouse.current.x = e.touches[0].clientX;
      mouse.current.y = e.touches[0].clientY;
    };

    const onPointerLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("touchend", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("touchend", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[80] opacity-55 sm:opacity-60" />;
}

function Header({ activeIndex, setActiveIndex }) {
  return (
    <header className="fixed left-0 top-0 z-[100] w-full px-4 py-4 text-white sm:px-5 sm:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <button onClick={() => setActiveIndex(0)} className="flex items-center">
          <img src="/logo.png" alt="Pantech" className="h-8 w-auto sm:h-10" />
        </button>

        <nav className="max-w-[64vw] overflow-x-auto rounded-full border border-white/20 bg-white/10 px-1.5 py-1.5 shadow-2xl backdrop-blur-xl sm:max-w-none sm:px-2 sm:py-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition sm:px-4 sm:py-2 sm:text-sm md:px-5 ${
                activeIndex === index ? "bg-white text-[#0055B3]" : "text-white hover:bg-white/10"
              }`}
            >
              {slide.nav}
            </button>
          ))}
        </nav>

        <button onClick={() => setActiveIndex(slides.length - 1)} className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-3 font-bold backdrop-blur-xl transition hover:bg-white hover:text-[#0055B3] md:inline-flex">
          Contacto <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

function MobileGlassCard({ slide, activeIndex, setActiveIndex }) {
  const Icon = slide.icon;

  return (
    <motion.div
      key={`mobile-card-${slide.id}`}
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.45 }}
      className="mt-5 rounded-[1.5rem] border border-white/18 bg-[#002B6E]/28 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-md lg:hidden"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#FCB900] ring-1 ring-white/20">
            <Icon className="h-5 w-5" />
          </div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.28em] text-cyan-50">{slide.eyebrow}</p>
        </div>
        <span className="text-2xl font-black text-white/20">{slide.number}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {slide.chips.map((chip) => (
          <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.72rem] font-bold text-cyan-50">
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="rounded-full bg-[#FCB900] px-4 py-3 text-sm font-black text-slate-950 shadow-xl shadow-yellow-500/20">
          Propuesta
        </button>
        <button
          onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
}


function DemosGrid({ className = "" }) {
  return (
    <motion.div
      key="demos-grid"
      data-demo-scroll="true"
      initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`demo-scroll relative flex flex-col gap-4 overflow-y-auto overscroll-contain pr-2 ${className}`.trim()}
    >
      {demoGroups.map((group) => {
        const Icon = group.icon;
        return (
          <article key={group.category} className="rounded-[1.5rem] border border-cyan-200/20 bg-[#002B6E]/34 p-4 shadow-2xl shadow-cyan-950/25 backdrop-blur-md xl:p-5">
            <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FCB900] ring-1 ring-white/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-[0.9rem] font-black uppercase tracking-[0.18em] text-cyan-50 md:text-[1rem] xl:text-[1.02rem]">{group.category}</h3>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:gap-4">
              {group.examples.map((demo) => (
                <div key={demo.title} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[1rem] font-black leading-tight text-white xl:text-[1.08rem]">{demo.title}</h4>
                    <span className="shrink-0 rounded-full bg-[#FCB900] px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.12em] text-slate-950">Demo</span>
                  </div>
                  <p className="mt-2 text-[0.83rem] leading-6 text-blue-50/78 xl:text-[0.88rem]">{demo.text}</p>
                  <button className="mt-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-black text-white transition hover:bg-white hover:text-[#0055B3]">
                    Ver demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </motion.div>
  );
}

function DemosPage({ onClose }) {
  return (
    <div className="fixed inset-0 z-[140] overflow-hidden bg-[#001B45]/86 text-white backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,239,.28),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(252,185,0,.12),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(124,58,237,.2),transparent_30%),linear-gradient(135deg,#001B45_0%,#003C89_46%,#00122F_100%)]" />
      <div className="relative flex h-full flex-col px-4 pb-6 pt-5 sm:px-6 md:px-10 lg:px-16">
        <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-[0.72rem] font-black uppercase tracking-[0.34em] text-[#FCB900] sm:text-xs sm:tracking-[0.42em]">Catálogo de demos</p>
            <h2 className="text-[2rem] font-black leading-[0.95] tracking-tight sm:text-4xl md:text-[3rem]">Explorá nuestras demos en una pantalla dedicada.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50/80 sm:text-base">Acá podés mostrar tus ejemplos de forma más limpia, sin mezclar el scroll de los demos con la navegación principal del sitio.</p>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#0055B3]"
          >
            Volver al inicio <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1">
          <DemosGrid className="h-full" />
        </div>
      </div>
    </div>
  );
}

function SlideContent({ slide, activeIndex, setActiveIndex, openDemosPage }) {
  const Icon = slide.icon;
  const whatsappUrl = "https://wa.me/5492612434819?text=Hola%20Pantech%2C%20quiero%20consultar%20por%20un%20proyecto";
  const emailUrl = "mailto:info@pantech.com.ar?subject=Consulta%20desde%20el%20sitio%20web%20Pantech";

  if (slide.isDemos) {
    return (
      <section className="relative z-20 flex h-screen items-center overflow-hidden px-4 pb-5 pt-20 text-white sm:px-5 md:px-10 lg:px-20 lg:pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.5fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`demos-text-${slide.id}`}
              initial={{ opacity: 0, x: -35, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 35, filter: "blur(12px)" }}
              transition={{ duration: 0.52, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#FCB900] sm:text-xs sm:tracking-[0.42em]">{slide.eyebrow}</p>
              <h1 className="text-[2.55rem] font-black leading-[0.94] tracking-tight min-[390px]:text-[2.85rem] sm:text-5xl md:text-[3.8rem] lg:text-[4rem] xl:text-[4.25rem]">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-6 text-blue-50/82 sm:text-base md:text-[1.05rem] md:leading-7">{slide.text}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={openDemosPage}
                  className="rounded-full bg-[#FCB900] px-6 py-3 font-black text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:-translate-y-1"
                >
                  Ver demos en pantalla completa <ArrowRight className="ml-2 inline h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveIndex(slides.length - 1)}
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#0055B3]"
                >
                  Ir a contacto
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`demos-card-${slide.id}`}
              initial={{ opacity: 0, x: 60, rotateY: -8, filter: "blur(14px)" }}
              animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -60, rotateY: 8, filter: "blur(14px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative hidden lg:block lg:justify-self-end"
            >
              <div className="relative max-w-[420px] overflow-hidden rounded-[1.75rem] border border-cyan-200/25 bg-[#002B6E]/28 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-md xl:p-6">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FCB900]/12 blur-3xl" />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#FCB900] ring-1 ring-white/20">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-cyan-50">Conocé nuestras demos</p>
                  </div>
                  <h2 className="text-[1.7rem] font-black leading-tight xl:text-[1.9rem]">Explorá ejemplos reales de soluciones digitales.</h2>
                  <p className="mt-3 text-[0.9rem] leading-6 text-blue-50/78">Vas a poder ver referencias de proyectos que desarrollamos y descubrir qué tipo de solución se adapta mejor a tu negocio.</p>
                  <div className="mt-5 space-y-2.5">
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-sm font-black text-white">Sitios y tiendas online</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-sm font-black text-white">Dashboards y análisis de datos</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-sm font-black text-white">Automatizaciones y bots</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative z-20 flex h-screen items-center overflow-hidden px-4 pb-5 pt-20 text-white sm:px-5 md:px-10 lg:px-20 lg:pt-20 ${slide.isContact ? "justify-center text-center" : ""}`}>
      <div className={`mx-auto grid w-full max-w-7xl items-center gap-8 ${slide.isContact ? "lg:grid-cols-1" : "lg:grid-cols-[0.9fr_0.72fr]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${slide.id}`}
            initial={{ opacity: 0, x: -35, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 35, filter: "blur(12px)" }}
            transition={{ duration: 0.52, ease: "easeOut" }}
            className={slide.isContact ? "mx-auto max-w-3xl text-center" : "max-w-xl"}
          >
            

            <p className={`mb-3 text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#FCB900] sm:text-xs sm:tracking-[0.42em] ${slide.isContact ? "text-center" : ""}`}>{slide.eyebrow}</p>
            <h1 className={`max-w-4xl text-[2.55rem] font-black leading-[0.94] tracking-tight min-[390px]:text-[2.85rem] sm:text-5xl md:text-[3.8rem] lg:text-[4.15rem] xl:text-[4.45rem] ${slide.isContact ? "mx-auto" : ""}`}>
              {slide.title}
            </h1>
            <p className={`mt-4 max-w-lg text-[0.95rem] leading-6 text-blue-50/82 sm:text-base md:text-[1.05rem] md:leading-7 ${slide.isContact ? "mx-auto" : ""}`}>{slide.text}</p>

            <div className={`mt-6 hidden flex-col gap-3 sm:flex sm:flex-row ${slide.isContact ? "justify-center" : ""}`}>
              {slide.isContact ? (
                <>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#FCB900] px-6 py-3 font-black text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:-translate-y-1">
                    Escribir por WhatsApp <ArrowRight className="ml-2 inline h-4 w-4" />
                  </a>
                  <a href={emailUrl} className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#0055B3]">
                    Enviar email
                  </a>
                </>
              ) : (
                <>
                  <button className="rounded-full bg-[#FCB900] px-6 py-3 font-black text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:-translate-y-1">
                    Solicitar propuesta <ArrowRight className="ml-2 inline h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {slide.isContact && (
              <div className="mx-auto mt-6 hidden max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-5 text-sm font-bold text-blue-50/90 backdrop-blur-md sm:block">
                <p>WhatsApp: +54 9 261 243 4819</p>
                <p className="mt-2">Email: info@pantech.com.ar</p>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-blue-50/55">Pantech © 2026. Todos los derechos reservados.</p>
              </div>
            )}

            <MobileGlassCard slide={slide} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </motion.div>
        </AnimatePresence>

        {!slide.isContact && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-${slide.id}`}
            initial={{ opacity: 0, x: 60, rotateY: -8, filter: "blur(14px)" }}
            animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -60, rotateY: 8, filter: "blur(14px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/25 bg-[#002B6E]/30 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-md xl:p-7">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#FCB900]/12 blur-3xl" />

              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FCB900] ring-1 ring-white/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-50">{slide.eyebrow}</p>
                </div>
                <span className="text-4xl font-black text-white/20">{slide.number}</span>
              </div>

              <h2 className="relative text-2xl font-black leading-tight xl:text-[2.05rem]">{slide.cardTitle}</h2>
              <p className="relative mt-4 text-[0.95rem] leading-7 text-blue-50/78">{slide.cardText}</p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {slide.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-cyan-50">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      </div>
    </section>
  );
}

function Pagination({ activeIndex, setActiveIndex }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 gap-4 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col md:gap-5">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => setActiveIndex(index)}
          className={`relative h-3.5 w-3.5 rounded-full transition sm:h-4 sm:w-4 ${activeIndex === index ? "bg-[#FCB900]" : "bg-white/35 hover:bg-white"}`}
        >
          {activeIndex === index && <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FCB900]/50 sm:h-10 sm:w-10" />}
        </button>
      ))}
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="fixed bottom-6 left-1/2 z-[100] hidden -translate-x-1/2 flex-col items-center gap-2 text-white/80 md:flex">
      <span className="text-xs font-bold uppercase tracking-[0.28em]">Scroll</span>
      <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
        <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-2 w-2 rounded-full bg-[#FCB900]" />
      </div>
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDemosPageOpen, setIsDemosPageOpen] = useState(false);
  const lockRef = useRef(false);
  const touchStartY = useRef(null);

  const goTo = (nextIndex) => {
    if (lockRef.current || isDemosPageOpen) return;
    if (nextIndex < 0 || nextIndex >= slides.length) return;
    lockRef.current = true;
    setActiveIndex(nextIndex);
    setTimeout(() => {
      lockRef.current = false;
    }, 850);
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (isDemosPageOpen) return;
      if (Math.abs(e.deltaY) < 20) return;

      const demoScroller = e.target?.closest?.('[data-demo-scroll="true"]');
      if (demoScroller) {
        const canScrollDown = demoScroller.scrollTop + demoScroller.clientHeight < demoScroller.scrollHeight - 2;
        const canScrollUp = demoScroller.scrollTop > 2;

        if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
          return;
        }
      }

      if (e.deltaY > 0) goTo(activeIndex + 1);
      if (e.deltaY < 0) goTo(activeIndex - 1);
    };

    const onKeyDown = (e) => {
      if (isDemosPageOpen) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") goTo(activeIndex + 1);
      if (e.key === "ArrowUp" || e.key === "PageUp") goTo(activeIndex - 1);
    };

    const onTouchStart = (e) => {
      if (isDemosPageOpen) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (isDemosPageOpen) return;
      if (touchStartY.current === null) return;
      const endY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - endY;
      if (Math.abs(delta) > 55) {
        if (delta > 0) goTo(activeIndex + 1);
        if (delta < 0) goTo(activeIndex - 1);
      }
      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, isDemosPageOpen]);

  const activeSlide = slides[activeIndex];

  return (
    <main className="relative h-screen overflow-hidden bg-[#0055B3] font-sans text-white">
      <BackgroundImage slide={activeSlide} />
      <InteractiveParticleLayer />
      <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <SlideContent
        slide={activeSlide}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        openDemosPage={() => setIsDemosPageOpen(true)}
      />
      {!isDemosPageOpen && <Pagination activeIndex={activeIndex} setActiveIndex={setActiveIndex} />}
      {!isDemosPageOpen && !activeSlide.isDemos && !activeSlide.isContact && <ScrollHint />}
      {isDemosPageOpen && <DemosPage onClose={() => setIsDemosPageOpen(false)} />}
    </main>
  );
}
