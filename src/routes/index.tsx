import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, MapPin, Mail, Clock, ChevronLeft, ChevronRight, Quote,
  Microscope, Stethoscope, Sparkles, Award, Users, ShieldCheck,
  Smile, ScanSearch, Syringe, Crown, Bone, ShieldPlus,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";
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
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)]">
        <Stethoscope className="h-6 w-6" />
      </div>
      <div className="leading-tight font-serif">
        <div className="text-base font-semibold text-foreground">Центр</div>
        <div className="text-base font-semibold text-foreground -mt-0.5">БиоСтоматологии</div>
      </div>
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
          <a href="tel:+74951234567" className="hidden text-right md:block">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-[var(--gold)]" /> +7 (495) 123-45-67
            </div>
            <div className="text-[11px] text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
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
      <div className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-0">
        <div className="relative overflow-hidden rounded-sm">
          <img src={hero} alt="Лечение под микроскопом" width={1600} height={900} className="h-[560px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-10 text-white">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
                Современная стоматология
              </span>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.15] md:text-5xl">
                Восстанавливаем здоровье зубов даже в сложных случаях
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
                Лечение под микроскопом и индивидуальный подход для максимального результата и вашего комфорта.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
                  Записаться на приём
                </a>
                <a href="#cta" className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10">
                  Получить план лечения
                </a>
              </div>
            </div>
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
    { icon: ScanSearch, t: "Диагностика", d: "Комплексная диагностика и 3D-сканирование" },
    { icon: Syringe, t: "Лечение зубов", d: "Терапевтическое лечение любой сложности" },
    { icon: Microscope, t: "Лечение под микроскопом", d: "Эндодонтия с максимальной точностью" },
    { icon: Crown, t: "Протезирование", d: "Эстетическое восстановление и протезирование" },
    { icon: Bone, t: "Имплантация", d: "Надёжная имплантация и восстановление зубов" },
    { icon: Smile, t: "Ортодонтия", d: "Исправление прикуса и выравнивание зубов" },
    { icon: Sparkles, t: "Эстетическая стоматология", d: "Отбеливание, виниры, художественная реставрация" },
    { icon: ShieldPlus, t: "Пародонтология", d: "Лечение дёсен и забота о здоровье пародонта" },
  ];
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Услуги</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">
            Решения для здоровья и красоты вашей улыбки
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group flex flex-col items-center rounded-sm border border-border bg-card p-7 text-center transition-all hover:border-[var(--gold)]/50 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--gold-foreground)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
              <a href="#cta" className="mt-4 text-xs font-medium text-[var(--gold)] hover:underline">Подробнее →</a>
            </div>
          ))}
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
  ];
  return (
    <section className="bg-[var(--navy-deep)] py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Результаты лечения</span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Сложные случаи — наши лучшие результаты
          </h2>
        </div>
        <div className="relative mt-12">
          <button aria-label="Назад" className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 md:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid gap-6 md:grid-cols-2">
            {cases.slice(0, 2).map((c) => (
              <div key={c.t} className="rounded-sm bg-white/5 p-4 backdrop-blur">
                <div className="grid grid-cols-2 gap-2">
                  {[["до", c.before], ["после", c.after]].map(([label, img]) => (
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
          <button aria-label="Вперёд" className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 md:flex">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  const docs = [
    { n: "Иванов Алексей Сергеевич", r: "Главный врач, стоматолог-хирург, имплантолог", img: doctor },
    { n: "Петрова Мария Игоревна", r: "Стоматолог-терапевт, эндодонтист", img: doctor },
    { n: "Соколов Дмитрий Олегович", r: "Ортопед, специалист по эстетической реставрации", img: doctor },
    { n: "Кузнецова Анна Павловна", r: "Стоматолог-пародонтолог, гигиенист", img: doctor },
  ];
  return (
    <section id="doctors" className="bg-background py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">Наши врачи</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">
            Опыт, которому можно доверять
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((d) => (
            <div key={d.n} className="rounded-sm border border-border bg-card p-3 transition hover:shadow-lg">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={d.img} alt={d.n} loading="lazy" className="h-full w-full object-cover grayscale-[0.15]" />
              </div>
              <div className="px-2 pb-3 pt-4">
                <div className="font-serif text-base font-semibold text-foreground">{d.n}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.r}</p>
                <a href="#cta" className="mt-3 inline-block text-xs font-medium text-[var(--gold)] hover:underline">Подробнее →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#cta" className="inline-flex items-center rounded-sm border border-border bg-card px-7 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]">
            Все врачи
          </a>
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
            <a href="tel:+74951234567" className="inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90">
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
        <Results />
        <Doctors />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
