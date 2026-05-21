import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Mail, Clock, ChevronLeft, ChevronRight, Quote,
  Microscope, Stethoscope, Award, Users, ShieldCheck,
  HeartHandshake, GraduationCap, Check,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import chiefDoctor from "@/assets/chief-doctor.png";
import logoImg from "@/assets/logo.png";
import docSimakova from "@/assets/doctors/simakova.jpg";
import docKirienko from "@/assets/doctors/kirienko.png";
import docGajduk from "@/assets/doctors/gajduk.jpg";
import docDmitriev from "@/assets/doctors/dmitriev.jpg";
import docErgesheva from "@/assets/doctors/ergesheva.jpg";
import docStrandstrem from "@/assets/doctors/strandstrem.jpg";
import docLazareva from "@/assets/doctors/lazareva.jpg";
import docNagornaya from "@/assets/doctors/nagornaya.png";
import docTabakova from "@/assets/doctors/tabakova.jpg";
import docSaribekyan from "@/assets/doctors/saribekyan.jpg";
import docUhova from "@/assets/doctors/uhova.jpg";
import sTherapy from "@/assets/service-therapy.jpg";
import sImplant from "@/assets/service-implant.jpg";
import sOrtho from "@/assets/service-ortho.jpg";
import sBraces from "@/assets/service-braces.jpg";
import sSurgery from "@/assets/service-surgery.jpg";
import sHygiene from "@/assets/service-hygiene.jpg";
import sKids from "@/assets/service-kids.jpg";
import sTmj from "@/assets/service-tmj.jpg";
import sAesthetic from "@/assets/service-aesthetic.jpg";
import sPerio from "@/assets/service-perio.jpg";
import sSaliva from "@/assets/service-saliva.jpg";
import sMicroscope from "@/assets/service-microscope.jpg";
import sCt from "@/assets/service-ct.jpg";
import a1 from "@/assets/avatar1.jpg";
import a2 from "@/assets/avatar2.jpg";
import a3 from "@/assets/avatar3.jpg";
import c1b from "@/assets/case1-before.jpg";
import c1a from "@/assets/case1-after.jpg";
import c2b from "@/assets/case2-before.jpg";
import c2a from "@/assets/case2-after.jpg";
import c3b from "@/assets/case3-before.jpg";
import c3a from "@/assets/case3-after.jpg";
import c4b from "@/assets/case4-before.jpg";
import c4a from "@/assets/case4-after.jpg";
import c5b from "@/assets/case5-before.jpg";
import c5a from "@/assets/case5-after.jpg";
import c6b from "@/assets/case6-before.jpg";
import c6a from "@/assets/case6-after.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Центр БиоСтоматологии — современная стоматология у м. Марьина Роща" },
      { name: "description", content: "Москва, ул. Октябрьская, 36. Лечение, имплантация и эстетическая стоматология. Запись: +7 (499) 673-44-01." },
    ],
  }),
});

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={logoImg} alt="Центр Биостоматологии" className="h-11 w-auto" />
    </div>
  );
}

function Header() {
  const links = [
    ["О клинике", "#about"],
    ["Услуги", "#services"],
    ["Врачи", "#doctors"],
    ["Цены", "#prices"],
    ["Отзывы", "#reviews"],
    ["Контакты", "#contacts"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--gold)]">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a href="tel:+74996734401" className="hidden text-right md:block">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-[var(--gold)]" /> +7 (499) 673-44-01
            </div>
            <div className="text-[11px] text-muted-foreground">Пн–Сб с 9:00 до 21:00</div>
          </a>
          <a href="#cta" className="inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
            Записаться на приём
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-10">
        <div className="grid overflow-hidden rounded-sm bg-[#eaf2fb] md:grid-cols-[1.05fr_1fr]">
          <div className="px-10 py-14 md:py-16">
            <h1 className="font-serif text-3xl font-medium leading-[1.15] text-foreground md:text-[42px]">
              Восстанавливаем<br />здоровье зубов даже<br />в&nbsp;сложных случаях
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Используем лечение под микроскопом и современный подход для максимального результата и&nbsp;вашего комфорта.
            </p>
            <a href="#cta" className="mt-7 inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
              Записаться на приём
            </a>
            <div className="mt-10 grid grid-cols-3 gap-4 text-xs">
              {[
                ["Лицензия", "№ ЛО-77-01-019…"],
                ["Опыт работы", "более 25 лет"],
                ["Гарантия", "на все виды работ"],
              ].map(([t, d]) => (
                <div key={t} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <img src={hero} alt="Лечение под микроскопом" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: Award, t: "25+ лет", d: "успешной работы" },
    { icon: Users, t: "20 000+", d: "довольных пациентов" },
    { icon: Microscope, t: "Лечение под микроскопом", d: "точность и сохранение тканей" },
    { icon: ShieldCheck, t: "Сложные случаи", d: "наше призвание" },
  ];
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 -mt-12 relative z-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border bg-card shadow-xl lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-center gap-4 bg-card px-6 py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-serif text-lg font-semibold text-foreground leading-tight">{t}</div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { img: sTherapy,    t: "Терапия",                 d: "Лечение кариеса любой сложности, профессиональный подход" },
    { img: sImplant,    t: "Имплантация",             d: "Восстановление зубов современными системами имплантов" },
    { img: sOrtho,      t: "Протезирование",          d: "Эстетические коронки, виниры и комплексное протезирование" },
    { img: sBraces,     t: "Ортодонтия",              d: "Брекеты, элайнеры и исправление прикуса у взрослых и детей" },
    { img: sSurgery,    t: "Хирургия",                d: "Удаление зубов, синус-лифтинг и подготовка к имплантации" },
    { img: sHygiene,    t: "Гигиена",                 d: "Профессиональная чистка, Air Flow, отбеливание Zoom" },
    { img: sKids,       t: "Детская стоматология",    d: "Бережное лечение и адаптация ребёнка к стоматологу" },
    { img: sTmj,        t: "Лечение дисфункции ВНЧС", d: "Диагностика и лечение нарушений височно-нижнечелюстного сустава" },
    { img: sAesthetic,  t: "Эстетическая стоматология", d: "Виниры, отбеливание и художественная реставрация улыбки" },
    { img: sPerio,      t: "Пародонтология",          d: "Комплексное лечение дёсен и профилактика пародонтита" },
    { img: sCt,         t: "Компьютерная томография 3D", d: "Точная диагностика на современном томографе" },
    { img: sSaliva,     t: "Исследование слюны",      d: "Лабораторная диагностика и подбор индивидуального плана" },
    { img: sMicroscope, t: "Лечение под микроскопом", d: "Эндодонтия с максимальной точностью и сохранением тканей" },
  ];
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 6);
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Услуги</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">
            Решения для вашей красоты и здоровья
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ img, t, d }) => (
            <div key={t} className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-[var(--gold)]/50 hover:shadow-lg">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={img} alt={t} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
                <a href="#cta" className="mt-4 inline-block text-xs font-medium text-[var(--gold)] hover:underline">Подробнее →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center rounded-sm border border-border bg-card px-7 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
          >
            {expanded ? "Свернуть" : `Показать все услуги (${items.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const points = [
    "Индивидуальный подход к каждому пациенту",
    "Лечение под микроскопом с максимальной точностью",
    "Современное оборудование и материалы",
    "Команда врачей с опытом более 15 лет",
    "Гарантия на все виды работ",
  ];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-sm bg-[#eaf2fb]">
            <img src={chiefDoctor} alt="Симакова Татьяна Геннадьевна" className="h-[480px] w-full object-cover object-center" />
          </div>
          <div className="mt-4">
            <div className="font-serif text-lg font-semibold text-foreground">Симакова Татьяна Геннадьевна</div>
            <div className="mt-1 text-xs text-muted-foreground">Главный врач, доктор медицинских наук</div>
          </div>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">О клинике</span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Мы лечим не зубы —<br />мы заботимся о людях
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Каждый пациент для нас уникален. Мы внимательно изучаем ситуацию, предлагаем оптимальный план лечения и сопровождаем вас на каждом этапе — от первой консультации до результата.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                  <Check className="h-3 w-3" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    { t: "Восстановление сильно разрушенных зубов", d: "Лечение под микроскопом", before: c1b, after: c1a },
    { t: "Комплексная реставрация улыбки", d: "Эстетическое восстановление и виниры", before: c2b, after: c2a },
    { t: "Имплантация и протезирование", d: "Полное восстановление функции", before: c3b, after: c3a },
    { t: "Отбеливание", d: "Безопасное отбеливание", before: c4b, after: c4a },
    { t: "Лечение глубокого кариеса", d: "Композитная реставрация передних зубов", before: c5b, after: c5a },
    { t: "Исправление прикуса", d: "Ортодонтическое лечение элайнерами", before: c6b, after: c6a },
  ];
  const perView = 2;
  const pages = Math.ceil(cases.length / perView);
  const [page, setPage] = useState(0);
  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);
  const grouped = Array.from({ length: pages }, (_, i) => cases.slice(i * perView, i * perView + perView));
  return (
    <section className="bg-[var(--navy-deep)] py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Результаты лечения</span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Сложные случаи — наши лучшие результаты
          </h2>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={prev} aria-label="Назад" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Вперёд" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {grouped.map((group, gi) => (
                <div key={gi} className="grid w-full shrink-0 gap-6 md:grid-cols-2">
                  {group.map((c) => (
                    <div key={c.t} className="rounded-sm bg-white/5 p-4 backdrop-blur">
                      <div className="grid grid-cols-2 gap-2">
                        {[["до", c.before] as const, ["после", c.after] as const].map(([label, img]) => (
                          <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-sm">
                            <img src={img} alt={`${c.t} — ${label}`} loading="lazy" className="h-full w-full object-cover" />
                            <span className="absolute left-2 top-2 rounded-sm bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">{label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3 px-1">
                        <div>
                          <div className="font-serif text-base font-semibold">{c.t}</div>
                          <p className="mt-1 text-xs text-white/65">{c.d}</p>
                        </div>
                        <a href="#cta" className="text-xs font-medium text-[var(--gold)] hover:underline">Подробнее →</a>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Перейти к группе ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === page ? "w-8 bg-[var(--gold)]" : "w-4 bg-white/25 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  const docs = [
    { n: "Симакова Татьяна Геннадьевна", r: "Главный врач, доктор медицинских наук", img: docSimakova },
    { n: "Кириенко Виктория Викторовна", r: "Стоматолог-терапевт, кандидат медицинских наук", img: docKirienko },
    { n: "Гайдук Игорь Викторович", r: "Стоматолог-хирург, имплантолог, кандидат медицинских наук, доцент", img: docGajduk },
    { n: "Дмитриев Игорь Анатольевич", r: "Стоматолог-ортопед, гнатолог", img: docDmitriev },
    { n: "Ергешева Елена Валентиновна", r: "Стоматолог-терапевт, кандидат медицинских наук, доцент", img: docErgesheva },
    { n: "Страндстрем Илья Михайлович", r: "Стоматолог-ортопед, гнатолог, кандидат медицинских наук", img: docStrandstrem },
    { n: "Лазарева Анастасия Андреевна", r: "Стоматолог-хирург", img: docLazareva },
    { n: "Нагорная Надежда Николаевна", r: "Стоматолог-хирург", img: docNagornaya },
    { n: "Табакова Инна Александровна", r: "Стоматолог-хирург", img: docTabakova },
    { n: "Сарибекян Рузана Аветиковна", r: "Стоматолог-ортодонт", img: docSaribekyan },
    { n: "Ухова Екатерина Юрьевна", r: "Стоматолог-терапевт", img: docUhova },
  ];
  const [page, setPage] = useState(0);
  const perView = 4;
  const pages = Math.ceil(docs.length / perView);
  const grouped = Array.from({ length: pages }, (_, i) => docs.slice(i * perView, i * perView + perView));
  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);
  return (
    <section id="doctors" className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Наши врачи</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">
            Опыт, которому можно доверять
          </h2>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={prev} aria-label="Назад" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Вперёд" className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {grouped.map((group, gi) => (
              <div key={gi} className="grid w-full shrink-0 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.map((d) => (
                  <div key={d.n} className="rounded-sm border border-border bg-card p-3 transition duration-300 hover:shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                      <img src={d.img} alt={d.n} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]" />
                    </div>
                    <div className="px-2 pb-3 pt-4">
                      <div className="font-serif text-base font-semibold text-foreground">{d.n}</div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.r}</p>
                      <a href="#cta" className="mt-3 inline-block text-xs font-medium text-[var(--gold)] hover:underline">Подробнее →</a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Страница ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === page ? "w-8 bg-[var(--gold)]" : "w-4 bg-border hover:bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const items = [
    { n: "Екатерина С.", r: "Лечение под микроскопом", a: a1, t: "Обратилась в клинику со сложной ситуацией. Спасибо врачам за профессионализм, внимательное отношение и потрясающий результат!" },
    { n: "Андрей К.", r: "Имплантация и протезирование", a: a2, t: "Делал имплантацию и протезирование. Всё прошло отлично, без боли и стресса. Рекомендую клинику всем знакомым." },
    { n: "Мария Л.", r: "Ортодонтия", a: a3, t: "Исправляла прикус у Дмитрия Олеговича. Очень довольна результатом и уровнем сервиса в клинике!" },
  ];
  return (
    <section id="reviews" className="bg-[var(--navy-deep)] py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Отзывы пациентов</span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">Нас рекомендуют</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((r) => (
            <div key={r.n} className="relative rounded-sm border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <Quote className="h-7 w-7 text-[var(--gold)]" />
              <p className="mt-4 text-sm leading-relaxed text-white/85">{r.t}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <img src={r.a} alt={r.n} loading="lazy" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <div className="font-serif text-sm font-semibold">{r.n}</div>
                  <div className="text-[11px] text-white/55">{r.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === 1 ? "w-8 bg-[var(--gold)]" : "w-1.5 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-background">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-20 md:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Сделайте первый шаг<br />к здоровой улыбке уже сегодня
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Оставьте заявку, мы свяжемся с вами, чтобы подобрать удобное время приёма и ответить на все вопросы.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a href="tel:+74996734401" className="inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
              Записаться на приём
            </a>
            <a href="#cta" className="text-sm font-medium text-foreground/80 underline-offset-4 hover:text-[var(--gold)] hover:underline">
              Получить план лечения
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img src={hero} alt="Современная клиника" loading="lazy" className="h-[340px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacts" className="bg-[var(--navy-deep)] text-white/80">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-4 text-sm md:col-span-1">
          <Logo />
          <p className="text-xs leading-relaxed text-white/55">
            Центр стоматологии полного цикла. Лечение, имплантация и эстетика по международным протоколам.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-serif text-base font-semibold text-white">Контакты</div>
          <a href="tel:+74951234567" className="flex items-center gap-2 hover:text-[var(--gold)]"><Phone className="h-4 w-4 text-[var(--gold)]" /><span>+7 (495) 123-45-67</span></a>
          <a href="mailto:info@biostom.ru" className="flex items-center gap-2 hover:text-[var(--gold)]"><Mail className="h-4 w-4 text-[var(--gold)]" /><span>info@biostom.ru</span></a>
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--gold)]" /><span>Москва, ул. Октябрьская, 36</span></div>
          <div className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-[var(--gold)]" /><span>Ежедневно с 9:00 до 21:00</span></div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-serif text-base font-semibold text-white">Меню</div>
          {[["Услуги", "#services"], ["Врачи", "#doctors"], ["Отзывы", "#reviews"], ["Контакты", "#contacts"]].map(([l, h]) => (
            <a key={l} href={h} className="block hover:text-[var(--gold)]">{l}</a>
          ))}
        </div>
        <div className="overflow-hidden rounded-sm border border-white/10">
          <iframe
            title="Карта"
            src="https://maps.google.com/maps?q=Moscow%20Maryina%20Roscha&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-40 w-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Центр БиоСтоматологии. Все права защищены.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Why />
        <Services />
        <Philosophy />
        <Results />
        <Doctors />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
