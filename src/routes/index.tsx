import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Microscope,
  Award,
  Users,
  ShieldCheck,
  Check,
  ExternalLink,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import chiefDoctor from "@/assets/chief-doctor.png";
import consultationPhoto from "@/assets/clinic-consultation.jpg";
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
import { SERVICES, type Service } from "@/lib/services-data";
import { ServiceDetailDialog } from "@/components/site/ServiceDetailDialog";
import { useBooking } from "@/components/site/BookingContext";
import reviewer1 from "@/assets/reviewers/reviewer-1.asset.json";
import reviewer2 from "@/assets/reviewers/reviewer-2.asset.json";
import reviewer3 from "@/assets/reviewers/reviewer-3.asset.json";
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
      {
        name: "description",
        content:
          "Москва, ул. Октябрьская, 36. Лечение, имплантация и эстетическая стоматология. Запись: +7 (499) 673-44-01.",
      },
      { property: "og:title", content: "Центр БиоСтоматологии — стоматология в Москве" },
      { property: "og:description", content: "Лечение, имплантация и эстетическая стоматология на Октябрьской, 36. Запись: +7 (499) 673-44-01." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Hero() {
  const booking = useBooking();
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-[1200px] px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="grid overflow-hidden rounded-sm bg-[#eaf2fb] md:grid-cols-[1.05fr_1fr]">
          <div className="order-2 px-6 py-10 sm:px-10 sm:py-14 md:order-1 md:py-16">
            <h1 className="font-serif text-[26px] font-medium leading-[1.15] text-foreground sm:text-3xl md:text-[42px]">
              Восстанавливаем
              <br />
              здоровье зубов даже
              <br />
              в&nbsp;сложных случаях
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-5">
              Используем лечение под микроскопом и современный подход для максимального результата
              и&nbsp;вашего комфорта.
            </p>
            <button
              type="button"
              onClick={() => booking.open()}
              className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90 sm:mt-7 sm:w-auto"
            >
              Записаться на приём
            </button>
            <div className="mt-8 grid grid-cols-1 gap-3 text-xs sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {[
                ["Лицензия", "Л041-01137-77\n77/00360298"],
                ["Команда", "Врачи экспертного уровня"],
                ["Гарантия", "на все виды работ"],
              ].map(([t, d]) => (
                <div key={t} className="flex min-w-0 items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="break-words text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 min-h-[220px] sm:min-h-[280px] md:order-2 md:min-h-[320px]">
            <img
              src={hero}
              alt="Лечение под микроскопом"
              className="absolute inset-0 h-full w-full object-cover"
            />
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
    <section
      id="about"
      className="mx-auto mt-10 max-w-[1200px] px-4 sm:px-6 md:-mt-12 relative z-10"
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border bg-card shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-center justify-center gap-4 bg-card px-5 py-5 sm:px-6 sm:py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-serif text-lg font-semibold text-foreground leading-tight">
                {t}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted-foreground">{d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = SERVICES;
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<Service | null>(null);
  const visible = expanded ? items : items.slice(0, 6);
  return (
    <section id="services" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            Услуги
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">
            Решения для вашей красоты и здоровья
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visible.map((s) => (
            <button
              key={s.t}
              type="button"
              onClick={() => setActive(s)}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card text-left transition-all hover:border-[var(--gold)]/50 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{s.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-block text-xs font-medium text-[var(--gold)] group-hover:underline">
                  Подробнее →
                </span>
              </div>
            </button>
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
      <ServiceDetailDialog service={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Philosophy() {
  const points = [
    "Индивидуальный подход к каждому пациенту",
    "Диагностика с использованием компьютерного томографа",
    "Лечение под микроскопом с максимальной точностью",
    "Современное оборудование и материалы",
    "Команда врачей с опытом более 15 лет",
    "Гарантия на все виды работ",
  ];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        <div>
          <div className="overflow-hidden rounded-sm bg-[#eaf2fb]">
            <img
              src={chiefDoctor}
              alt="Симакова Татьяна Геннадьевна"
              className="h-[360px] w-full object-cover object-center sm:h-[480px]"
            />
          </div>
          <div className="mt-4">
            <div className="font-serif text-lg font-semibold text-foreground">
              Симакова Татьяна Геннадьевна
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Генеральный директор, доктор медицинских наук
            </div>
          </div>
        </div>
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            О клинике
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl md:text-4xl">
            Мы лечим не зубы —<br />
            мы заботимся о людях
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Каждый пациент для нас уникален. Мы внимательно изучаем ситуацию, предлагаем оптимальный
            план лечения и сопровождаем вас на каждом этапе — от первой консультации до результата.
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
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cases = [
    {
      t: "Восстановление сильно разрушенных зубов",
      d: "Лечение под микроскопом",
      before: c1b,
      after: c1a,
    },
    {
      t: "Комплексная реставрация улыбки",
      d: "Эстетическое восстановление и виниры",
      before: c2b,
      after: c2a,
    },
    {
      t: "Имплантация и протезирование",
      d: "Полное восстановление функции",
      before: c3b,
      after: c3a,
    },
    { t: "Отбеливание", d: "Безопасное отбеливание", before: c4b, after: c4a },
    {
      t: "Лечение глубокого кариеса",
      d: "Композитная реставрация передних зубов",
      before: c5b,
      after: c5a,
    },
    { t: "Исправление прикуса", d: "Ортодонтическое лечение элайнерами", before: c6b, after: c6a },
  ];
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth >= 768 ? 2 : 1);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const pages = Math.ceil(cases.length / perView);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage(0);
  }, [perView]);
  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);
  const grouped = Array.from({ length: pages }, (_, i) =>
    cases.slice(i * perView, i * perView + perView),
  );
  return (
    <section className="bg-[var(--navy-deep)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            Результаты лечения
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
            Сложные случаи — наши лучшие результаты
          </h2>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Назад"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Вперёд"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]"
          >
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
                <div key={gi} className="grid w-full shrink-0 gap-5 px-1 sm:gap-6 md:grid-cols-2">
                  {group.map((c) => (
                    <div key={c.t} className="rounded-sm bg-white/5 p-4 backdrop-blur">
                      <div className="grid grid-cols-2 gap-2">
                        {[["до", c.before] as const, ["после", c.after] as const].map(
                          ([label, img]) => (
                            <div
                              key={label}
                              className="relative aspect-[4/3] overflow-hidden rounded-sm"
                            >
                              <img
                                src={img}
                                alt={`${c.t} — ${label}`}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-2 top-2 rounded-sm bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                                {label}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3 px-1">
                        <div>
                          <div className="font-serif text-base font-semibold">{c.t}</div>
                          <p className="mt-1 text-xs text-white/65">{c.d}</p>
                        </div>
                        <a
                          href="#cta"
                          className="text-xs font-medium text-[var(--gold)] hover:underline"
                        >
                          Подробнее →
                        </a>
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
    {
      n: "Симакова Татьяна Геннадьевна",
      r: "Генеральный директор, доктор медицинских наук",
      img: docSimakova,
    },
    {
      n: "Кириенко Виктория Викторовна",
      r: "Главный врач, стоматолог-терапевт, кандидат медицинских наук",
      img: docKirienko,
    },
    {
      n: "Гайдук Игорь Викторович",
      r: "Стоматолог-хирург, имплантолог, кандидат медицинских наук, доцент",
      img: docGajduk,
    },
    { n: "Дмитриев Игорь Анатольевич", r: "Стоматолог-ортопед, гнатолог", img: docDmitriev },
    {
      n: "Ергешева Елена Валентиновна",
      r: "Стоматолог-терапевт, кандидат медицинских наук, доцент",
      img: docErgesheva,
    },
    {
      n: "Страндстрем Илья Михайлович",
      r: "Стоматолог-ортопед, гнатолог, кандидат медицинских наук",
      img: docStrandstrem,
    },
    { n: "Лазарева Анастасия Андреевна", r: "Стоматолог-хирург", img: docLazareva },
    { n: "Нагорная Надежда Николаевна", r: "Стоматолог-хирург", img: docNagornaya },
    { n: "Табакова Инна Александровна", r: "Стоматолог-хирург", img: docTabakova },
    { n: "Сарибекян Рузана Аветиковна", r: "Стоматолог-ортодонт", img: docSaribekyan },
    { n: "Ухова Екатерина Юрьевна", r: "Стоматолог-терапевт", img: docUhova },
  ];
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(4);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      return w >= 1024 ? 4 : w >= 640 ? 2 : 1;
    };
    const onResize = () => setPerView(calc());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const pages = Math.ceil(docs.length / perView);
  useEffect(() => {
    setPage(0);
  }, [perView]);
  const grouped = Array.from({ length: pages }, (_, i) =>
    docs.slice(i * perView, i * perView + perView),
  );
  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);
  return (
    <section id="doctors" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            Наши специалисты
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">
            Опыт, которому можно доверять
          </h2>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Назад"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Вперёд"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {grouped.map((group, gi) => (
              <div
                key={gi}
                className="grid w-full shrink-0 gap-5 px-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {group.map((d) => (
                  <div
                    key={d.n}
                    className="rounded-sm border border-border bg-card p-3 transition duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                      <img
                        src={d.img}
                        alt={d.n}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                    <div className="px-2 pb-3 pt-4">
                      <div className="font-serif text-base font-semibold text-foreground">
                        {d.n}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.r}</p>
                      <a
                        href="#cta"
                        className="mt-3 inline-block text-xs font-medium text-[var(--gold)] hover:underline"
                      >
                        Подробнее →
                      </a>
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
    {
      n: "Анастасия",
      r: "Отзыв на Яндекс Картах",
      a: reviewer1.url,
      t: "Была у врача Елизаветы Эдуардовны Пожарской на приеме по поводу коррекции и реставрации переднего зуба. Меня проконсультировали, так как я думала, что нужно другую процедуру делать. Но в итоге мне аккуратно все отшлифовали, еще и состав специальный нанесли от кариеса. Елизавета очень внимательная, вежливая. В общем рекомендую!",
      link: "https://yandex.com/maps/user/h592mnw4reamhjtbnyw6429jpg",
    },
    {
      n: "Artem",
      r: "Отзыв на Яндекс Картах",
      a: reviewer2.url,
      t: "Был на лечении у Елизаветы Эдуардовны, все прошло комфортно и безболезненно. Очень понравилась включенность доктора, подробный рассказ о проблеме и о плане лечения. Во время самого лечения меня постоянно спрашивали о самочувствии. Плюсом отмечу, что лишних услуг (как это сейчас часто бывает) не навязывал ни доктор, ни администратор. Однозначно буду обращаться еще.",
      link: "https://yandex.com/maps/user/98dqk2j5qe1kyzetqqg1n6txdr",
    },
    {
      n: "Лилия Исхакова",
      r: "Отзыв на Яндекс Картах",
      a: reviewer3.url,
      t: "Единственное место где я лечу зубы уже 15 лет. Вся семья туда ходит и всё родственники. Спасали зубы, которые в обычных зубных пытались просто удалить. Процесс дорогой, но зубы того стоят. Хочу дополнить отзыв…. Ну очень не хватает экрана с кино, скучно и нудно сидеть по 1-2 часа в кресле. Очень прошу повесить)",
      link: "https://yandex.com/maps/user/3w1y4cb3f629hd6km5x780jxv4",
    },
  ];
  return (
    <section id="reviews" className="bg-[var(--navy-deep)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            Отзывы пациентов
          </span>
          <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
            Нас рекомендуют
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {items.map((r) => (
            <div
              key={r.n}
              className="relative rounded-sm border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
            >
              <Quote className="h-7 w-7 text-[var(--gold)]" />
              <p className="mt-4 text-sm leading-relaxed text-white/85">{r.t}</p>
              <a href={r.link} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 hover:text-[var(--gold)]">
                <img
                  src={r.a}
                  alt={r.n}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-serif text-sm font-semibold">{r.n}</div>
                  <div className="text-[11px] text-white/55">{r.r}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://yandex.ru/maps/-/CPwkf4NQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--gold-foreground)]"
          >
            Все отзывы <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const booking = useBooking();
  return (
    <section id="cta" className="bg-background">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_1fr] md:gap-10">
        <div>
          <h3 className="font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl md:text-4xl">
            Сделайте первый шаг
            <br />к здоровой улыбке уже сегодня
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Оставьте заявку, мы свяжемся с вами, чтобы подобрать удобное время приёма и ответить на
            все вопросы.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <button
              type="button"
              onClick={() => booking.open()}
              className="inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
            >
              Записаться на приём
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img
            src={consultationPhoto}
            alt="Врач объясняет пациенту результаты диагностики"
            loading="lazy"
            width={1280}
            height={960}
            className="h-[220px] w-full object-cover sm:h-[280px] md:h-[340px]"
          />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Why />
      <Services />
      <Philosophy />
      <Results />
      <Doctors />
      <Reviews />
      <CTA />
    </>
  );
}
