import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

export const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Главная", to: "/" },
  { label: "О клинике", to: "/about" },
  { label: "Услуги", to: "/services" },
  { label: "Цены", to: "/prices" },
  { label: "Контакты", to: "/contacts" },
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="На главную">
      <img src={logoImg} alt="Центр Биостоматологии" className="h-9 w-auto sm:h-11" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[var(--gold)]" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--gold)]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="tel:+74996734401" className="hidden text-right md:block">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-[var(--gold)]" /> +7 (499) 673-44-01
            </div>
            <div className="text-[11px] text-muted-foreground">Пн–Сб с 9:00 до 21:00</div>
          </a>
          <a
            href="tel:+74996734401"
            aria-label="Позвонить"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] md:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="tel:+74996734401"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
          >
            Записаться<span className="hidden md:inline">&nbsp;на приём</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Открыть меню"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[999] flex min-h-dvh w-screen flex-col overflow-hidden bg-background lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-4 shadow-sm">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto bg-background px-4 py-5">
            <div className="space-y-2">
              {NAV_LINKS.map(({ label, to }, index) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "border-[var(--gold)]/60 text-[var(--gold)]" }}
                  className="flex min-h-14 items-center justify-between rounded-sm border border-border bg-card px-4 text-base font-semibold text-foreground shadow-sm"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[var(--gold)]">
                      0{index + 1}
                    </span>
                    {label}
                  </span>
                  <span className="text-xl leading-none text-[var(--gold)]">→</span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="shrink-0 space-y-3 border-t border-border bg-background px-4 py-5 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
            <a
              href="tel:+74996734401"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-sm border border-border bg-card p-3"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  +7 (499) 673-44-01
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  Пн–Сб с 9:00 до 21:00
                </span>
              </span>
            </a>
            <a
              href="tel:+74996734401"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
            >
              Записаться на приём
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-3">
        <div className="space-y-4 text-sm md:col-span-1">
          <Logo />
          <p className="text-xs leading-relaxed text-white/55">
            Центр стоматологии полного цикла. Лечение, имплантация и эстетика по международным
            протоколам.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-serif text-base font-semibold text-white">Контакты</div>
          <a href="tel:+74996734401" className="flex items-center gap-2 hover:text-[var(--gold)]">
            <Phone className="h-4 w-4 text-[var(--gold)]" />
            <span>+7 (499) 673-44-01</span>
          </a>
          <a
            href="mailto:info@cbstom.ru"
            className="flex items-center gap-2 hover:text-[var(--gold)]"
          >
            <Mail className="h-4 w-4 text-[var(--gold)]" />
            <span>info@cbstom.ru</span>
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
            <span>127473, Москва, ул. Октябрьская, 36 (м. Марьина Роща)</span>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
            <span>Пн–Сб с 9:00 до 21:00, Вс — выходной</span>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="font-serif text-base font-semibold text-white">Меню</div>
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className="block hover:text-[var(--gold)]">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 pb-12 sm:px-6 sm:pb-14">
        <div className="relative overflow-hidden rounded-sm border border-white/10">
          <iframe
            title="Центр Биостоматологии на Яндекс.Картах"
            src="https://yandex.ru/map-widget/v1/?ll=37.614529%2C55.789760&mode=search&oid=39640787211&ol=biz&z=17.28"
            className="h-[220px] w-full sm:h-[280px]"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Центр БиоСтоматологии. Все права защищены.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
        <div className="rounded-sm bg-[#eaf2fb] px-6 py-10 sm:px-10 sm:py-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
            {eyebrow}
          </span>
          <h1 className="mt-3 font-serif text-[26px] font-medium leading-tight text-foreground sm:text-3xl md:text-[42px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}