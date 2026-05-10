import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Mail, Clock, Check, ChevronLeft, ChevronRight,
  Smile, Shield, Star, Sparkles, Users, Cpu, Stethoscope, HeartPulse,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";
import sTherapy from "@/assets/service-therapy.jpg";
import sImplant from "@/assets/service-implant.jpg";
import sOrtho from "@/assets/service-ortho.jpg";
import sBraces from "@/assets/service-braces.jpg";
import sSurgery from "@/assets/service-surgery.jpg";
import sHygiene from "@/assets/service-hygiene.jpg";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Центр Биостоматологии — современная стоматология у м. Марьина Роща" },
      { name: "description", content: "Лечение, имплантация и эстетическая стоматология по международным протоколам. Запись на консультацию: +7 (499) 673-44-01." },
    ],
  }),
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <Stethoscope className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">Центр</div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground">Биостоматологии</div>
      </div>
    </div>
  );
}

function Header() {
  const links = [
    ["Услуги", "#services"],
    ["О клинике", "#about"],
    ["Врачи", "#doctors"],
    ["Отзывы", "#reviews"],
    ["Цены", "#prices"],
    ["Контакты", "#contacts"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+74996734401" className="hidden text-sm font-semibold text-foreground md:block">+7 (499) 673-44-01</a>
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Записаться на приём
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Современная стоматология для всей семьи
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Здоровая улыбка<br />без страха и стресса
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Лечение, имплантация и эстетическая стоматология по международным протоколам в современной клинике у метро Марьина Роща.
          </p>
          <div className="mt-7">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]">
              Записаться на консультацию →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
            {[
              ["Приём", "без очередей"],
              ["План лечения", "в первый визит"],
              ["Работаем ежедневно", "с 9:00 до 21:00"],
            ].map(([a, b]) => (
              <div key={a} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div><div className="font-medium text-foreground">{a}</div><div>{b}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
            <img src={hero} alt="Врач-стоматолог проводит осмотр пациентки" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Users, n: "2000+", t: "пациентов доверили нам лечение" },
    { icon: Shield, n: "16+", t: "лет опыта ведущих специалистов Москвы" },
    { icon: Star, n: "98%", t: "рекомендаций от наших пациентов" },
    { icon: Cpu, n: "CAD/CAM", t: "и цифровая диагностика — точность современного уровня" },
  ];
  return (
    <section className="mx-auto -mt-10 max-w-7xl px-4">
      <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm md:grid-cols-4 md:p-6">
        {items.map(({ icon: Icon, n, t }) => (
          <div key={n} className="flex items-start gap-3 rounded-xl p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">{n}</div>
              <div className="text-xs leading-snug text-muted-foreground">{t}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: Smile, t: "Безболезненное лечение", d: "Современная анестезия и деликатный подход к каждому пациенту." },
    { icon: Cpu, t: "Цифровая диагностика", d: "КТ и план лечения уже на первом приёме." },
    { icon: Users, t: "Врачи с большим опытом", d: "Специалисты ведущих клиник Москвы и постоянное обучение." },
    { icon: HeartPulse, t: "Комплексный подход", d: "От профилактики до имплантации — всё в одной клинике." },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          Преимущества
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Почему нас выбирают
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Создаём комфортные условия и используем современные технологии, чтобы каждый визит был спокойным и предсказуемым.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { img: sTherapy, t: "Терапия", d: "Лечение кариеса, реставрации, эндодонтия, профессиональная гигиена." },
    { img: sImplant, t: "Имплантация", d: "Современные системы имплантов и цифровая навигация." },
    { img: sOrtho, t: "Ортопедия", d: "Виниры, коронки, протезирование любой сложности." },
    { img: sBraces, t: "Ортодонтия", d: "Брекеты и элайнеры для взрослых и детей." },
    { img: sSurgery, t: "Хирургия", d: "Удаление зубов любой сложности, пластика, синус-лифтинг." },
    { img: sHygiene, t: "Профгигиена", d: "Профилактика заболеваний, отбеливание, Air Flow." },
  ];
  return (
    <section id="services" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Наши услуги</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map(({ img, t, d }) => (
            <div key={t} className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md">
              <img src={img} alt={t} loading="lazy" width={640} height={360} className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <div className="font-semibold text-foreground">{t}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="#cta" className="inline-flex items-center rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-soft">
            Все услуги
          </a>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctors" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="overflow-hidden rounded-2xl">
          <img src={doctor} alt="Главный врач клиники" loading="lazy" width={768} height={768} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
            Мы лечим не зубы —<br />мы заботимся о людях
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Наша задача — сделать лечение максимально комфортным, понятным и безопасным для каждого пациента. Мы используем современные технологии и работаем по международным протоколам качества.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="font-handwriting text-2xl italic text-primary" style={{ fontFamily: "'Caveat', cursive" }}>Воронцов</div>
          </div>
          <div className="mt-1 text-sm font-semibold text-foreground">Д-р Андрей Воронцов</div>
          <div className="text-xs text-muted-foreground">Главный врач, стоматолог-имплантолог</div>
        </div>
        <div className="space-y-3">
          {[
            "Индивидуальный подход к каждому пациенту",
            "Честный план лечения без навязывания услуг",
            "Чистота и безопасность по европейским стандартам",
            "Современное оборудование премиум-класса",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </div>
              <div className="text-sm text-foreground">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    { t: "Имплантация", d: "Полное восстановление жевательной функции", s: "3 месяца", before: c1b, after: c1a },
    { t: "Виниры E.max", d: "Эстетика и естественный результат", s: "5 дней", before: c2b, after: c2a },
    { t: "Реставрация зубов", d: "Восстановление формы и цвета зубов", s: "1 день", before: c3b, after: c3a },
    { t: "Отбеливание", d: "Безопасное отбеливание с длительным эффектом", s: "1 час", before: c4b, after: c4a },
  ];
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Результаты, которыми мы гордимся</h2>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"><ChevronLeft className="h-4 w-4" /></button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl border border-border bg-card p-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img src={c.before} alt={`${c.t} — до`} loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
                  <span className="absolute left-2 top-2 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">до</span>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img src={c.after} alt={`${c.t} — после`} loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
                  <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">после</span>
                </div>
              </div>
              <div className="mt-3 px-1">
                <div className="text-sm font-semibold text-foreground">{c.t}</div>
                <p className="mt-1 text-xs text-muted-foreground">{c.d}</p>
                <div className="mt-2 text-[11px] text-muted-foreground">Срок: {c.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const items = [
    { n: "Елена Смирнова", a: a1, t: "Долго искала «свою» клинику. Очень рада, что нашла! Здесь действительно внимательное отношение и высокий уровень профессионализма." },
    { n: "Максим К.", a: a2, t: "Делал имплантацию — всё прошло идеально. Доктор подробно объяснил каждый этап, результатом полностью доволен." },
    { n: "Ольга Л.", a: a3, t: "Ходим всей семьёй. Дети лечат зубы без страха, а я — спокойна за их здоровье." },
  ];
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">Отзывы наших пациентов</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((r) => (
          <div key={r.n} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <img src={r.a} alt={r.n} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <div className="font-semibold text-foreground">{r.n}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.t}</p>
            <div className="mt-3 flex gap-0.5 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 pb-16">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-10 md:px-12 md:py-12"
        style={{ background: "linear-gradient(120deg, var(--cta-from), var(--cta-to))" }}
      >
        <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
          <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 text-white">
            <Stethoscope className="h-12 w-12" />
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold leading-snug md:text-2xl">
              Запишитесь на консультацию<br />и получите персональный план лечения
            </h3>
            <p className="mt-2 text-sm text-white/75">Мы подберём оптимальное решение именно для вас.</p>
          </div>
          <a href="tel:+74996734401" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]">
            Записаться на консультацию
          </a>
        </div>
        <div className="mt-8 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/85 md:grid-cols-2">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Работаем ежедневно с 9:00 до 21:00</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> м. Марьина Роща</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacts" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3 text-sm text-muted-foreground">
          <Logo />
          <a href="tel:+74996734401" className="flex items-center gap-2 text-foreground hover:text-primary"><Phone className="h-4 w-4 text-primary" /><span>+7 (499) 673-44-01</span></a>
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>Москва, ул. Октябрьская, 36 (м. Марьина Роща)</span></div>
          <a href="mailto:info@biostom.ru" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" /><span>info@biostom.ru</span></a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <iframe
            title="Карта"
            src="https://maps.google.com/maps?q=Moscow%20Maryina%20Roscha&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-44 w-full"
            loading="lazy"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          <div className="font-semibold text-foreground">Как нас найти</div>
          <p className="mt-2 leading-relaxed">
            При проезде на метро: высокий выход номер 4 (в сторону ул. Октябрьской). Далее 3 минуты пешком: пройдите вдоль центра, поверните направо после кафе — вход с торца здания (вывеска «Центр Биостоматологии»).
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Центр Биостоматологии. Все права защищены.
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
        <Stats />
        <Why />
        <Services />
        <Doctor />
        <Results />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
