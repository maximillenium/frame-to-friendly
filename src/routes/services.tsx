import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Layout";
import { SERVICES, type Service } from "@/lib/services-data";
import { ServiceDetailDialog } from "@/components/site/ServiceDetailDialog";

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

      <ServiceDetailDialog service={active} onClose={() => setActive(null)} />
    </>
  );
}