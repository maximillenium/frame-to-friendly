import { createFileRoute } from "@tanstack/react-router";
import { Info, Phone } from "lucide-react";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/prices")({
  component: PricesPage,
  head: () => ({
    meta: [
      { title: "Цены — Центр БиоСтоматологии" },
      {
        name: "description",
        content:
          "Прейскурант на услуги клиники: консультации, терапия, хирургия, имплантация, ортопедия, ортодонтия, гигиена. Москва, ул. Октябрьская, 36.",
      },
      { property: "og:title", content: "Цены — Центр БиоСтоматологии" },
      {
        property: "og:description",
        content:
          "Прозрачные цены на стоматологические услуги. Полный прейскурант доступен в регистратуре клиники.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Section = {
  title: string;
  rows: { name: string; price: string }[];
};

const SECTIONS: Section[] = [
  {
    title: "Консультации",
    rows: [
      { name: "Консультация врача-стоматолога, доктора медицинских наук", price: "2 000" },
      { name: "Консультация врача-стоматолога, кандидата медицинских наук", price: "1 200" },
      { name: "Консультация врача-стоматолога терапевта", price: "1 000" },
      { name: "Консультация врача-стоматолога ортопеда, гнатолога", price: "1 000" },
      { name: "Консультация врача-стоматолога хирурга", price: "1 000" },
      { name: "Консультация врача-стоматолога ортодонта", price: "1 500" },
      { name: "Консультация врача-стоматолога пародонтолога", price: "1 000" },
      { name: "Консультация врача-стоматолога гигиениста", price: "1 000" },
      { name: "Консультация врача-стоматолога детского", price: "1 500" },
    ],
  },
];

function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Цены"
        title={
          <>
            Прозрачные цены
            <br />на стоматологические услуги
          </>
        }
        subtitle="Окончательная стоимость лечения определяется после консультации и диагностики. Уважаемые пациенты, с полным прейскурантом вы можете ознакомиться в регистратуре клиники."
      />

      <section className="bg-surface py-12 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <div className="space-y-10 sm:space-y-12">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
                  {s.title}
                </h2>
                <div className="mt-4 overflow-hidden rounded-sm border border-border bg-card">
                  <table className="w-full text-sm">
                    <tbody>
                      {s.rows.map((r, i) => (
                        <tr
                          key={r.name}
                          className={i % 2 === 1 ? "bg-surface/50" : undefined}
                        >
                          <td className="px-4 py-3 text-foreground sm:px-6 sm:py-4">{r.name}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-right font-serif text-base font-semibold text-foreground sm:px-6 sm:py-4">
                            {r.price} <span className="text-xs text-muted-foreground">₽</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-border bg-card p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Администрация старается своевременно обновлять размещённый на сайте прейскурант,
                но во избежание возможных недоразумений советуем уточнять стоимость услуг на день
                обращения в регистратуре. Размещённый прейскурант не является офертой.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-3 rounded-sm bg-[var(--navy-deep)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="font-serif text-lg font-semibold sm:text-xl">
                Не нашли нужную услугу?
              </div>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                Позвоните нам — администратор подскажет стоимость и запишет на консультацию.
              </p>
            </div>
            <a
              href="tel:+74996734401"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              +7 (499) 673-44-01
            </a>
          </div>
        </div>
      </section>
    </>
  );
}