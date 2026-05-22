import { createContext, useCallback, useContext, useState } from "react";
import { BookingDialog } from "@/components/site/BookingDialog";

type Ctx = { open: (service?: string) => void };

const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>(undefined);

  const open = useCallback((svc?: string) => {
    setService(svc);
    setOpen(true);
  }, []);

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <BookingDialog open={isOpen} onOpenChange={setOpen} service={service} />
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}