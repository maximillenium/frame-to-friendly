import { createFileRoute } from "@tanstack/react-router";
import { Check, Microscope, ShieldCheck, Users, Award, GraduationCap, HeartHandshake, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import chiefDoctor from "@/assets/chief-doctor.png";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "О клинике — Центр БиоСтоматологии в Москве" },
      {
        name: "description",
        content:
          "Клиника создана в 2008 году профессорско-преподавательским составом стоматологических факультетов Москвы. Современные технологии, опытные врачи, индивидуальный подход.",
      },
      { property: "og:title", content: "О клинике — Центр БиоСтоматологии" },
      {
        property: "og:description",
        content:
          "Профессиональная стоматологическая помощь любого уровня сложности. Команда врачей с учёными степенями, современное оборудование, безболезненное лечение.",
      },
    ],
  }),
});

function AboutPage() {
  const stats = [
    { icon: Award, t: "С 2008 года", d: "успешной работы" },
    { icon: Users, t: "20 000+", d: "довольных пациентов" },
    { icon: GraduationCap, t: "Учёные степени", d: "у большинства врачей" },
    { icon: ShieldCheck, t: "Гарантия", d: "на все виды работ" },
  ];
  const values = [
    {
      icon: HeartHandshake,
      t: "Индивидуальный подход",
      d: "Комплексный план лечения для каждого пациента, поэтапная реализация и курация сложных случаев главным врачом.",
    },
    {
      icon: Microscope,
      t: "Современные технологии",
      d: "Лечение под микроскопом, цифровая диагностика, CAD/CAM технологии и 3D-печать в собственной лаборатории.",
    },
    {
      icon: Stethoscope,
      t: "Безболезненное лечение",
      d: "Компьютерные технологии анестезии и современные анестетики — приём проходит в обстановке полного комфорта.",
    },
    {
      icon: ShieldCheck,
      t: "Безопасность",
      d: "Жёсткие протоколы стерилизации, нетоксичные материалы на основе диоксида циркония и дисиликата лития.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="О клинике"
        title={
          <>
            Семейная стоматология
            <br />с медицинским подходом
          </>
        }
        subtitle="Клиника создана в 2008 году профессорско-преподавательским составом стоматологических факультетов Москвы. Многолетний опыт практической, учебной и научной работы позволяет нам оказывать высокопрофессиональную помощь пациентам любого возраста и с любой сложностью патологии."
      />

      <section className="mx-auto -mt-6 max-w-[1200px] px-4 sm:px-6 md:-mt-12 relative z-10">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border bg-card shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-4 bg-card px-5 py-5 sm:px-6 sm:py-7">
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

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
          <div className="overflow-hidden rounded-sm bg-[#eaf2fb]">
            <img
              src={chiefDoctor}
              alt="Главный врач — Симакова Татьяна Геннадьевна"
              className="h-[360px] w-full object-cover object-center sm:h-[520px]"
            />
          </div>
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              Наша история
            </span>
            <h2 className="mt-3 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl md:text-4xl">
              Клиника, которой доверяют
              <br />с 2008 года
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                В ЦБС работают врачи разных стоматологических специальностей: гигиенисты,
                терапевты, хирурги-имплантологи, ортопеды, гнатологи, ортодонты и детские
                стоматологи. Многие из них имеют учёные степени и высшую врачебную категорию,
                регулярно проходят повышение квалификации и имеют международные сертификаты.
              </p>
              <p>
                Мы оказываем все виды амбулаторной стоматологической помощи и по праву считаемся
                семейной клиникой — лечим пациентов любой возрастной группы, от детей до старших.
              </p>
              <p>
                Главный врач, доктор медицинских наук{" "}
                <span className="font-medium text-foreground">Симакова Татьяна Геннадьевна</span>,
                курирует сложные случаи и при необходимости собирает консилиум врачей разных
                специализаций.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              Наши принципы
            </span>
            <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">
              На чём строится наша работа
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-sm border border-border bg-card p-6 transition hover:border-[var(--gold)]/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              Технологии
            </span>
            <h2 className="mt-3 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl md:text-4xl">
              Цифровые технологии
              <br />в каждом этапе лечения
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Вкладки, виниры, искусственные коронки и другие зубные протезы изготавливаются в
              современных зуботехнических лабораториях или прямо в клинике на 3D-принтерах
              методом фрезерования (CAD/CAM) из нетоксичных материалов на основе диоксида
              циркония, дисиликата лития и композитной керамики.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Лечение под микроскопом с высокой точностью",
                "3D-диагностика на компьютерном томографе",
                "Компьютерная анестезия — без боли и стресса",
                "CAD/CAM-протезирование за один-два визита",
                "Стерильность и безопасность по международным протоколам",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:+74996734401"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-[var(--gold)] px-7 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Записаться на консультацию
            </a>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src={hero}
              alt="Современное оборудование клиники"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[460px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}