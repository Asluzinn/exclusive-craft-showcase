import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Boxes,
  Clock3,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import img1 from "@/assets/IMG_3170.jpg.asset.json";
import img2 from "@/assets/IMG_3171.jpg.asset.json";
import img3 from "@/assets/IMG_3172.jpg.asset.json";
import img4 from "@/assets/IMG_3173.jpg.asset.json";
import img5 from "@/assets/IMG_3174.jpg.asset.json";
import img6 from "@/assets/IMG_3175.jpg.asset.json";
import img7 from "@/assets/IMG_3167.jpg.asset.json";
import img8 from "@/assets/IMG_3168.jpg.asset.json";
import img9 from "@/assets/IMG_3177.jpg.asset.json";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=%2B553191369845&text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20m%C3%B3veis%20planejados.&type=phone_number&app_absent=0";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Exclusiva Marcenaria | Móveis Planejados sob Medida em Juatuba-MG" },
      {
        name: "description",
        content:
          "Marcenaria em Juatuba-MG com atendimento em toda a Grande BH. Móveis planejados sob medida, projeto 3D sem custo e 24 meses de garantia. Peça seu orçamento.",
      },
      { property: "og:title", content: "Exclusiva Marcenaria | Móveis Planejados sob Medida" },
      {
        property: "og:description",
        content:
          "Cozinhas gourmet, closets e ambientes corporativos sob medida. Projeto 3D gratuito e garantia de 24 meses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Exclusiva Marcenaria",
          description: "Móveis planejados sob medida em Juatuba-MG e região metropolitana de BH.",
          telephone: "+55 31 99136-9845",
          email: "exclusivamarcenariaadm@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Dr. Ovídio de Abreu, 1555 - Cidade Satélite",
            addressLocality: "Juatuba",
            addressRegion: "MG",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

const gallery = [
  { src: img1.url, title: "Cozinha Gourmet integrada à sala", tag: "Residencial" },
  { src: img2.url, title: "Bancada linear em carvalho", tag: "Cozinha" },
  { src: img3.url, title: "Adega iluminada e painel ripado", tag: "Living" },
  { src: img4.url, title: "Torre de fornos e adega em LED", tag: "Gourmet" },
  { src: img5.url, title: "Home theater sob medida", tag: "Sala de TV" },
  { src: img6.url, title: "Marcenaria de piso a teto", tag: "Detalhes" },
  { src: img7.url, title: "Cozinha Magma Corten", tag: "Assinatura" },
  { src: img8.url, title: "Aéreos com pistão a gás", tag: "Ferragens" },
  { src: img9.url, title: "Recepção de Clínica Médica", tag: "Corporativo" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, top, bottom }: { eyebrow: string; top: string; bottom: string }) {
  return (
    <div className="text-center">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-4xl leading-[0.95] font-light tracking-tight sm:text-6xl">
          {top}
          <span className="block font-semibold text-gold-gradient">{bottom}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="hairline mx-auto mt-6 w-40" />
      </Reveal>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Quem somos", "#sobre"],
    ["Serviços", "#servicos"],
    ["Portfólio", "#portfolio"],
    ["Contato", "#contato"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <img src={logo.url} alt="Brasão da Exclusiva Marcenaria" className="h-11 w-auto" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg tracking-[0.28em] text-foreground">EXCLUSIVA</span>
            <span className="block text-[0.55rem] tracking-[0.5em] text-muted-foreground">MARCENARIA</span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-gold rounded-full px-5 py-2.5 text-[0.65rem] font-bold tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.04]"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section id="topo" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.img
        style={{ y }}
        src={img1.url}
        alt="Cozinha gourmet planejada assinada pela Exclusiva Marcenaria"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-veil)]" />
      <div className="absolute inset-0 bg-background/55" />

      <motion.div style={{ opacity: fade }} className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src={logo.url}
          alt="Logo Exclusiva Marcenaria"
          className="animate-floaty mb-8 h-24 w-auto sm:h-28"
        />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="eyebrow"
        >
          Juatuba · MG — Grande BH
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl text-5xl leading-[0.92] font-light tracking-tight sm:text-7xl lg:text-8xl"
        >
          Móveis planejados
          <span className="block font-semibold text-gold-gradient">sob medida</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Tradição familiar de marcenaria, MDF das melhores marcas e acabamentos em laca, laminado e
          microtextura. Sua imaginação é nossa única limitação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-gold group inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
          >
            Peça seu orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-semibold tracking-[0.22em] text-foreground uppercase backdrop-blur transition-colors hover:border-gold hover:text-gold"
          >
            Ver portfólio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {[
            ["+10", "anos de ofício"],
            ["24", "meses de garantia"],
            ["3D", "projeto sem custo"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl text-gold-gradient">{n}</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">{l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="grain-bg relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm shadow-[var(--shadow-lux)]">
            <img
              src={img7.url}
              alt="Cozinha em acabamento Magma Corten produzida pela Exclusiva Marcenaria"
              className="h-[460px] w-full object-cover transition-transform duration-[1.2s] hover:scale-105 sm:h-[560px]"
              loading="lazy"
            />
          </div>
          <div className="surface-card absolute -right-2 -bottom-8 hidden max-w-[240px] p-6 sm:block lg:-right-10">
            <Sparkles className="mb-3 h-5 w-5 text-gold" />
            <p className="font-display text-xl leading-snug">
              “Sua imaginação é nossa única limitação.”
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Quem somos</span>
            <h2 className="mt-4 text-4xl leading-[0.95] font-light tracking-tight sm:text-5xl">
              Tradição familiar,
              <span className="block font-semibold text-gold-gradient">execução impecável</span>
            </h2>
            <div className="hairline mt-6 w-32" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-muted-foreground">
              Fundada com uma tradição familiar de marcenaria, nossa fábrica está localizada em
              Juatuba-MG e atende toda a região metropolitana de Belo Horizonte. Entregamos móveis
              planejados de alta qualidade, feitos sob medida para as necessidades de cada cliente.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Contamos com uma equipe de profissionais qualificados e experientes. Aqui, a satisfação
              do cliente é prioridade máxima — e nossa reputação fala por si, reconhecida pela
              qualidade e pelo compromisso em cada projeto entregue.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [Hammer, "Profissionais qualificados"],
                [ShieldCheck, "Qualidade garantida"],
                [Clock3, "Prazos cumpridos"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Hammer;
                return (
                  <div key={label as string} className="surface-card p-5">
                    <I className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-sm leading-snug font-medium">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const servicos = [
  {
    icon: Boxes,
    title: "Armários Planejados",
    text: "Fabricação e montagem de móveis sob medida com a mais alta qualidade de matéria-prima e ferragens. MDF das melhores marcas, com acabamentos em Laca, Laminados e Microtexturas.",
  },
  {
    icon: Ruler,
    title: "Projeto 3D",
    text: "Sem projeto de arquitetura? Fazemos o Projeto 3D sem taxas adicionais. Nossa equipe transforma suas ideias em visualizações realistas do ambiente dos seus sonhos.",
  },
  {
    icon: Sparkles,
    title: "Parceiros",
    text: "Serralheria para estruturas personalizadas, vidraçaria para espelhos, portas e prateleiras, além de serviços elétricos como iluminação em fita de LED e muito mais.",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="border-y border-border bg-card/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="O que fazemos" top="Nossos" bottom="Serviços" />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="surface-card group relative h-full overflow-hidden p-9"
              >
                <div className="absolute inset-x-0 top-0 h-px w-full scale-x-0 bg-[var(--gradient-gold)] transition-transform duration-500 group-hover:scale-x-100" />
                <s.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-6 font-display text-3xl font-medium">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="portfolio" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Projetos entregues" top="Nosso" bottom="Portfólio" />

        <div className="mt-16 grid auto-rows-[240px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 0.06}
              className={
                i === 0 || i === 5
                  ? "col-span-2 row-span-2"
                  : i === 2
                    ? "row-span-2"
                    : "col-span-1 row-span-1"
              }
            >
              <button
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-sm border border-border text-left"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-[0.6rem]">{item.tag}</span>
                  <p className="mt-1 font-display text-xl leading-tight">{item.title}</p>
                </div>
                <span className="absolute top-4 right-4 rounded-full border border-gold/60 p-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-lg"
        >
          <button
            aria-label="Fechar"
            className="absolute top-6 right-6 rounded-full border border-border p-3 text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.figure
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[86svh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[active]!.src}
              alt={gallery[active]!.title}
              className="max-h-[74svh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="eyebrow text-[0.6rem]">{gallery[active]!.tag}</span>
              <p className="mt-1 font-display text-2xl">{gallery[active]!.title}</p>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </section>
  );
}

function Diferenciais() {
  const items = [
    {
      icon: Hammer,
      title: "Profissionais qualificados",
      text: "Equipe de marceneiros altamente qualificada e engajada, com treinamento contínuo e as melhores tecnologias para um serviço surpreendente.",
    },
    {
      icon: ShieldCheck,
      title: "Qualidade garantida",
      text: "Garantimos nossos serviços por 24 meses contra erros e defeitos de fabricação. Tranquilidade total, sem dores de cabeça.",
    },
    {
      icon: Clock3,
      title: "Compromisso",
      text: "Prazos cumpridos e pós-venda excepcional, sem rodeios. Garantimos a qualidade dos produtos e a sua total satisfação.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border py-28 sm:py-36">
      <img
        src={img4.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Por que a Exclusiva" top="Feito para" bottom="durar" />
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="flex gap-5 border-l border-border pl-6">
                <it.icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="font-display text-2xl">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="grain-bg py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow">Vamos começar</span>
          <h2 className="mt-5 text-4xl leading-[0.95] font-light tracking-tight sm:text-6xl">
            Conte sua ideia.
            <span className="block font-semibold text-gold-gradient">Nós construímos.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Orçamento sem compromisso e projeto 3D sem taxas adicionais. Fale agora com a nossa
            equipe pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-gold group mt-10 inline-flex items-center gap-2 rounded-full px-10 py-5 text-xs font-bold tracking-[0.22em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
          >
            Peça seu orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="border-t border-border bg-card/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Visite a fábrica" top="Onde" bottom="Estamos" />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-muted-foreground">
            Venha nos fazer uma visita e conheça pessoalmente o nosso espaço e os nossos projetos.
            Estamos ansiosos para recebê-lo!
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="surface-card h-full overflow-hidden">
              <iframe
                title="Mapa da Exclusiva Marcenaria em Juatuba-MG"
                src="https://www.google.com/maps?q=Rua%20Dr.%20Ov%C3%ADdio%20de%20Abreu%2C%201555%20-%20Cidade%20Sat%C3%A9lite%2C%20Juatuba%20-%20MG&output=embed"
                loading="lazy"
                className="h-[380px] w-full grayscale-[35%] lg:h-full lg:min-h-[420px]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card flex h-full flex-col justify-between gap-8 p-9">
              <div className="space-y-7">
                {[
                  [Phone, "(31) 9 9136-9845", "tel:+5531991369845"],
                  [Mail, "exclusivamarcenariaadm@gmail.com", "mailto:exclusivamarcenariaadm@gmail.com"],
                  [MapPin, "Rua Dr. Ovídio de Abreu, 1555 — Cidade Satélite, Juatuba/MG", null],
                  [Instagram, "@exclusiva-marc", "https://instagram.com/exclusiva-marc"],
                ].map(([Icon, label, href]) => {
                  const I = Icon as typeof Phone;
                  const content = (
                    <span className="flex items-start gap-4">
                      <I className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                        {label as string}
                      </span>
                    </span>
                  );
                  return href ? (
                    <a
                      key={label as string}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label as string} className="group">
                      {content}
                    </div>
                  );
                })}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <img src={logo.url} alt="Exclusiva Marcenaria" className="h-14 w-auto" />
        <div>
          <p className="font-display text-lg tracking-[0.3em]">EXCLUSIVA</p>
          <p className="text-[0.55rem] tracking-[0.5em] text-muted-foreground">MARCENARIA</p>
        </div>
        <div className="hairline w-44" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Exclusiva Marcenaria — Juatuba/MG · Móveis planejados sob medida
        </p>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Peça seu orçamento pelo WhatsApp"
      className="shimmer-gold fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-full px-5 py-4 text-[0.65rem] font-bold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
    >
      <Phone className="h-4 w-4" />
      Orçamento
    </motion.a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Diferenciais />
        <CTA />
        <Contato />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
