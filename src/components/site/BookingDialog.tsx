import { useState } from "react";
import { Phone, User, MessageSquare, Check } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя")
    .max(100, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .min(6, "Укажите телефон")
    .max(30, "Слишком длинный номер")
    .regex(/^[+0-9()\-\s]+$/, "Только цифры и + ( ) -"),
  comment: z.string().trim().max(500, "Не более 500 символов").optional(),
});

export function BookingDialog({
  open,
  onOpenChange,
  service,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  service?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; comment?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setComment("");
    setErrors({});
    setDone(false);
  };

  const handleChange = (o: boolean) => {
    if (!o) reset();
    onOpenChange(o);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, phone, comment });
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof typeof errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Имитация отправки — без бэкенда выводим подтверждение
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
    toast.success("Заявка отправлена", {
      description: "Администратор перезвонит вам в ближайшее время.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleChange}>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-md overflow-y-auto rounded-sm">
        {done ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
              <Check className="h-7 w-7" />
            </span>
            <DialogTitle className="mt-4 font-serif text-2xl font-medium text-foreground">
              Спасибо за заявку!
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-muted-foreground">
              Администратор клиники перезвонит вам в ближайшее рабочее время
              для подтверждения записи.
            </DialogDescription>
            <button
              type="button"
              onClick={() => handleChange(false)}
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <DialogHeader className="text-left">
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
                Запись на приём
              </span>
              <DialogTitle className="mt-2 font-serif text-2xl font-medium text-foreground">
                Оставьте заявку
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                Заполните форму — администратор перезвонит, уточнит детали и
                подберёт удобное время визита.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate>
              {service && (
                <div className="rounded-sm border border-border bg-surface px-3 py-2 text-xs text-muted-foreground">
                  Услуга: <span className="font-medium text-foreground">{service}</span>
                </div>
              )}

              <Field
                label="Ваше имя"
                icon={<User className="h-4 w-4" />}
                error={errors.name}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  placeholder="Иван"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                />
              </Field>

              <Field
                label="Телефон"
                icon={<Phone className="h-4 w-4" />}
                error={errors.phone}
              >
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={30}
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                />
              </Field>

              <Field
                label="Комментарий"
                icon={<MessageSquare className="h-4 w-4" />}
                error={errors.comment}
              >
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={500}
                  rows={3}
                  placeholder="Опишите кратко вопрос или удобное время"
                  className="w-full resize-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Отправляем…" : "Отправить заявку"}
              </button>

              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Нажимая «Отправить», вы соглашаетесь с обработкой персональных
                данных в соответствии с политикой конфиденциальности.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">{label}</span>
      <span
        className={`flex items-start gap-2 rounded-sm border bg-card px-3 py-2.5 transition-colors focus-within:border-[var(--gold)] ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <span className="mt-0.5 text-muted-foreground">{icon}</span>
        {children}
      </span>
      {error && <span className="mt-1 block text-[11px] text-destructive">{error}</span>}
    </label>
  );
}