import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Phone, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PageHero } from "@/components/site/Layout";
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

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Услуги — Центр БиоСтоматологии" },
      {
        name: "description",
        content:
          "Полный спектр стоматологической помощи: терапия, хирургия, имплантация, ортопедия, ортодонтия, эстетическая стоматология, лечение под микроскопом.",
      },
      { property: "og:title", content: "Услуги — Центр БиоСтоматологии" },
      {
        property: "og:description",
        content:
          "От профессиональной чистки до имплантации и комплексного протезирования. Современные технологии, опытные врачи, безболезненное лечение.",
      },
    ],
  }),
});

type Service = {
  img: string;
  t: string;
  short: string;
  long: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    img: sTherapy,
    t: "Терапевтическая стоматология",
    short: "Лечение кариеса и заболеваний зубов любой сложности",
    long:
      "В компетенцию стоматолога-терапевта входит диагностика, лечение заболеваний зубов и дёсен, нехирургическая реставрация и восстановление зубных тканей. Реконструкция и пломбирование проводятся с использованием современных сверхпрочных материалов, которые при умелом подборе оттенка не отличаются от собственных зубов пациента.",
    bullets: [
      "Лечение кариеса любой сложности",
      "Эстетические реставрации передних зубов",
      "Лечение каналов под микроскопом",
      "Подбор оттенка под цвет ваших зубов",
    ],
  },
  {
    img: sSurgery,
    t: "Хирургическая стоматология",
    short: "Удаление зубов, зубосохраняющие операции, подготовка к имплантации",
    long:
      "Хирурги-стоматологи нашей клиники проводят сложные зубосохраняющие операции, удаление кист, операции по восстановлению костной ткани челюсти с применением самых современных и надёжных костных материалов. Все вмешательства проходят при полном обезболивании и строгом соблюдении протоколов стерильности.",
    bullets: [
      "Удаление зубов любой сложности",
      "Удаление зубов мудрости",
      "Резекция верхушки корня, цистэктомия",
      "Костная пластика и подготовка к имплантации",
    ],
  },
  {
    img: sOrtho,
    t: "Ортопедия (протезирование)",
    short: "Эстетические коронки, виниры и комплексное протезирование",
    long:
      "Ортопедическая стоматология восстанавливает форму и функцию зубов и всего челюстно-лицевого аппарата. Изготавливаем коронки, виниры, мостовидные и съёмные протезы с использованием CAD/CAM-технологий и нетоксичных материалов — диоксида циркония, дисиликата лития и композитной керамики.",
    bullets: [
      "Коронки из диоксида циркония и e.max",
      "Виниры и эстетические реставрации",
      "Протезирование на имплантатах",
      "Съёмное и бюгельное протезирование",
    ],
  },
  {
    img: sKids,
    t: "Детская стоматология",
    short: "Бережное лечение и адаптация ребёнка к стоматологу",
    long:
      "В нашей клинике работают опытные детские стоматологи, которые умеют находить подход к ребёнку любого возраста. Безболезненное лечение, адаптация к приёму в игровой форме и индивидуальный темп визита помогают сформировать у ребёнка положительное отношение к врачу.",
    bullets: [
      "Лечение молочных и постоянных зубов",
      "Профилактика кариеса и герметизация фиссур",
      "Профессиональная гигиена для детей",
      "Адаптационные приёмы для самых маленьких",
    ],
  },
  {
    img: sImplant,
    t: "Имплантация и синус-лифтинг",
    short: "Восстановление зубов с использованием премиум-имплантатов Straumann",
    long:
      "Центр БиоСтоматологии является официальным партнёром всемирно известного производителя премиум-имплантатов Straumann. Даже в сложных случаях, когда нет условий для установки имплантатов, квалификация наших хирургов и современные технологии позволяют провести полноценную подготовку — синус-лифтинг и костную пластику.",
    bullets: [
      "Имплантация Straumann (Швейцария)",
      "Одномоментная имплантация после удаления",
      "Открытый и закрытый синус-лифтинг",
      "Полное восстановление челюсти All-on-4 / All-on-6",
    ],
  },
  {
    img: sBraces,
    t: "Ортодонтия",
    short: "Брекеты, элайнеры и исправление прикуса у взрослых и детей",
    long:
      "Ортодонтическое лечение исправляет неправильный прикус и положение зубов в любом возрасте. Мы подбираем оптимальную систему — от классических металлических брекетов до прозрачных элайнеров, которые практически незаметны и легко снимаются на время еды.",
    bullets: [
      "Металлические и керамические брекеты",
      "Лингвальные (внутренние) брекеты",
      "Элайнеры Invisalign и аналоги",
      "Ортодонтическое лечение детей и подростков",
    ],
  },
  {
    img: sTmj,
    t: "Лечение дисфункции сустава (гнатология)",
    short: "Диагностика и лечение нарушений ВНЧС",
    long:
      "Гнатолог занимается диагностикой и лечением нарушений височно-нижнечелюстного сустава. Щелчки, боли при жевании, головные боли и ограничение открывания рта — повод обратиться к специалисту. Мы используем современные методы диагностики и индивидуальные капы для нормализации работы сустава.",
    bullets: [
      "Диагностика дисфункции ВНЧС",
      "Индивидуальные сплинты и капы",
      "Подготовка к ортопедическому лечению",
      "Снятие болевого синдрома и мышечного гипертонуса",
    ],
  },
  {
    img: sAesthetic,
    t: "Эстетическая стоматология",
    short: "Виниры, отбеливание и художественная реставрация улыбки",
    long:
      "Эстетическая стоматология меняет улыбку, не затрагивая здоровые ткани сверх необходимого. Виниры из керамики e.max, художественная композитная реставрация и комплексное планирование улыбки с цифровым дизайном (Digital Smile Design) помогают добиться естественного и гармоничного результата.",
    bullets: [
      "Керамические виниры e.max",
      "Композитные виниры за один визит",
      "Художественная реставрация передних зубов",
      "Digital Smile Design — цифровое планирование улыбки",
    ],
  },
  {
    img: sHygiene,
    t: "Отбеливание",
    short: "Профессиональное безопасное отбеливание зубов",
    long:
      "Профессиональное отбеливание проводится после тщательной диагностики и профессиональной гигиены. Используем щадящие системы, которые не повреждают эмаль и дают стабильный результат на годы. Перед процедурой врач оценивает состояние эмали и подбирает оптимальный метод.",
    bullets: [
      "Кабинетное отбеливание Zoom 4",
      "Домашнее отбеливание в индивидуальных капах",
      "Реминерализирующая терапия после процедуры",
      "Профессиональная гигиена в подарок",
    ],
  },
  {
    img: sPerio,
    t: "Лечение заболеваний пародонта и СОПР",
    short: "Комплексное лечение дёсен и слизистой полости рта",
    long:
      "Пародонтолог занимается лечением дёсен и заболеваний слизистой оболочки полости рта (СОПР). Современные методы — закрытый и открытый кюретаж, Vector-терапия, плазмолифтинг — позволяют сохранить зубы даже при средней и тяжёлой стадии пародонтита.",
    bullets: [
      "Лечение гингивита и пародонтита",
      "Закрытый и открытый кюретаж",
      "Vector-терапия",
      "Шинирование подвижных зубов",
    ],
  },
  {
    img: sSaliva,
    t: "Лечение заболеваний слюнных желёз",
    short: "Диагностика и лечение сиалоаденитов и слюннокаменной болезни",
    long:
      "Заболевания слюнных желёз требуют специализированной диагностики. Наши хирурги проводят полное обследование, лечат острые и хронические сиалоадениты, удаляют камни из протоков слюнных желёз с применением малотравматичных методик.",
    bullets: [
      "Диагностика сиалоаденитов",
      "Лечение слюннокаменной болезни",
      "Малоинвазивное удаление камней",
      "Послеоперационное наблюдение",
    ],
  },
  {
    img: sCt,
    t: "Компьютерная томография 3D",
    short: "Точная 3D-диагностика на современном томографе",
    long:
      "3D-компьютерная томография — золотой стандарт диагностики в современной стоматологии. Точный объёмный снимок челюстей даёт врачу полную картину перед имплантацией, эндодонтическим лечением или хирургической операцией. Минимальная лучевая нагрузка и высокая детализация.",
    bullets: [
      "Планирование имплантации",
      "Диагностика каналов перед лечением",
      "Оценка состояния пазух носа",
      "Минимальная лучевая нагрузка",
    ],
  },
  {
    img: sMicroscope,
    t: "Лечение зубов под микроскопом",
    short: "Эндодонтия с максимальной точностью и сохранением тканей",
    long:
      "Лечение под микроскопом позволяет врачу детально рассмотреть поверхность зуба и его внутренние структуры. Микроскоп применяется при диагностике кариеса в начальной стадии, обнаружении трещин эмали, обработке извилистых корневых каналов, извлечении обломков инструментов и многом другом.",
    bullets: [
      "Диагностика кариеса в начальной стадии",
      "Лечение и перелечивание корневых каналов",
      "Обнаружение трещин эмали и корня",
      "Извлечение инородных предметов из каналов",
    ],
  },
];

function ServicesPage() {
  const [active, setActive] = useState<Service | null>(null);
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title={
          <>
            Полный спектр стоматологической помощи —<br />
            от чистки до протезирования
          </>
        }
        subtitle="В клинике работают врачи всех стоматологических специальностей. Мы проводим лечение по международным протоколам с использованием современного оборудования и нетоксичных материалов."
      />

      <section className="bg-surface py-12 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {SERVICES.map((s) => (
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
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-block text-xs font-medium text-[var(--gold)] group-hover:underline">
                    Подробнее →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-sm p-0 sm:rounded-sm">
          {active && (
            <>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <img src={active.img} alt={active.t} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Закрыть"
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow backdrop-blur transition hover:bg-background"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="px-6 pb-8 pt-6 sm:px-8">
                <DialogHeader className="text-left">
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
                    Услуга
                  </span>
                  <DialogTitle className="mt-2 font-serif text-2xl font-medium text-foreground sm:text-3xl">
                    {active.t}
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {active.long}
                  </DialogDescription>
                </DialogHeader>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="tel:+74996734401"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
                  >
                    <Phone className="h-4 w-4" />
                    Записаться на приём
                  </a>
                  <span className="text-xs text-muted-foreground">
                    +7 (499) 673-44-01 · Пн–Сб с 9:00 до 21:00
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}