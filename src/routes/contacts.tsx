import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { useBooking } from "@/components/site/BookingContext";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
  head: () => ({
    meta: [
      { title: "Контакты — Центр БиоСтоматологии" },
      {
        name: "description",
        content:
          "Москва, ул. Октябрьская, 36 (м. Марьина Роща). Телефон +7 (499) 673-44-01. Пн–Сб с 9:00 до 21:00.",
      },
      { property: "og:title", content: "Контакты — Центр БиоСтоматологии" },
      {
        property: "og:description",
        content:
          "Адрес, телефон и схема проезда. Запишитесь на приём — Пн–Сб с 9:00 до 21:00.",
      },
    ],
  }),
});

function ContactsPage() {
  const booking = useBooking();
  const items = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (499) 673-44-01",
      href: "tel:+74996734401",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@cbstom.ru",
      href: "mailto:info@cbstom.ru",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "127473, Москва, ул. Октябрьская, 36",
      href: "https://yandex.ru/maps/?rtext=~55.789760%2C37.614529&rtt=auto",
    },
    {
      icon: Clock,
      label: "Часы работы",
      value: "Пн–Сб с 9:00 до 21:00 · Вс — выходной",
    },
  ];

  const requisites: [string, string][] = [
    ["Полное наименование", "ООО «Центр БиоСтоматологии»"],
    ["Юридический адрес", "127473, Москва, ул. Октябрьская, д. 36"],
    ["Почтовый адрес", "127473, Москва, ул. Октябрьская, д. 36"],
    ["Генеральный директор", "Симакова Татьяна Геннадьевна"],
    ["ИНН", "9731066155"],
    ["КПП", "771501001"],
    ["ОГРН", "1207700219275"],
    ["ОКПО", "44620531"],
    ["ОКВЭД", "86.23"],
    ["Р/счёт", "40702810038000171144"],
    ["Банк", "ПАО «Сбербанк России» г. Москва"],
  ];

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title={
          <>
            Клиника у метро
            <br />
            Марьина Роща
          </>
        }
        subtitle="Удобно добраться от метро Марьина Роща. Записаться можно по телефону или через форму обратной связи."
      />

      <section className="bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {items.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 font-serif text-base font-semibold leading-snug text-foreground">
                    {value}
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-sm border border-border bg-card p-6 transition hover:border-[var(--gold)]/50 hover:shadow-md"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="rounded-sm border border-border bg-card p-6">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1fr] md:gap-12">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              Как добраться
            </span>
            <h2 className="mt-3 font-serif text-2xl font-medium leading-tight text-foreground sm:text-3xl">
              От метро Марьина Роща — 5 минут пешком
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Последний вагон из центра, выход № 4 (в сторону ул. Октябрьская). Далее — до
                первого светофора, перейти дорогу по диагонали и идти прямо по ул. Октябрьская
                до дома 36.
              </p>
              <p>
                На фасаде здания — вывеска «Центр Биостоматологии».
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => booking.open()}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Записаться на приём
              </button>
              <a
                href="https://yandex.ru/maps/?rtext=~55.789760%2C37.614529&rtt=auto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
              >
                <Navigation className="h-4 w-4" />
                Построить маршрут
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Центр Биостоматологии на Яндекс.Картах"
              src="https://yandex.ru/map-widget/v1/?ll=37.614529%2C55.789760&mode=search&oid=39640787211&ol=biz&z=17.28"
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              Реквизиты
            </span>
            <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl">
              ООО «Центр БиоСтоматологии»
            </h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-sm border border-border bg-card">
            <dl className="divide-y divide-border">
              {requisites.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[260px_1fr] sm:gap-6 sm:px-6"
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}