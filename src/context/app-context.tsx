import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang, Variant } from "@/data/menu";
import { dishes, priceOf } from "@/data/menu";
import { translate } from "@/lib/i18n";

const STORAGE_KEY = "chapati-lang";
const TAX_RATE = 0.05;

export interface CartLine {
  id: string;
  variant: Variant;
  qty: number;
}

export const lineKey = (id: string, variant: Variant) => `${id}|${variant}`;

interface AppState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  cart: CartLine[];
  qtyOf: (id: string, variant?: Variant) => number;
  add: (id: string, variant?: Variant) => void;
  remove: (id: string, variant?: Variant) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  tax: number;
  total: number;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [cart, setCart] = useState<CartLine[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") setLangState(stored);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const add = useCallback((id: string, variant: Variant = "full") => {
    setCart((prev) => {
      const found = prev.find((l) => l.id === id && l.variant === variant);
      if (found)
        return prev.map((l) =>
          l.id === id && l.variant === variant ? { ...l, qty: l.qty + 1 } : l,
        );
      return [...prev, { id, variant, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id: string, variant: Variant = "full") => {
    setCart((prev) =>
      prev
        .map((l) =>
          l.id === id && l.variant === variant ? { ...l, qty: l.qty - 1 } : l,
        )
        .filter((l) => l.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setCart([]), []);

  const value = useMemo<AppState>(() => {
    const subtotal = cart.reduce((sum, line) => {
      const dish = dishes.find((d) => d.id === line.id);
      return sum + (dish ? priceOf(dish, line.variant) * line.qty : 0);
    }, 0);
    const tax = Math.round(subtotal * TAX_RATE);

    return {
      lang,
      setLang,
      t: (key: string) => translate(lang, key),
      cart,
      qtyOf: (id: string, variant: Variant = "full") =>
        cart.find((l) => l.id === id && l.variant === variant)?.qty ?? 0,
      add,
      remove,
      clear,
      count: cart.reduce((sum, l) => sum + l.qty, 0),
      subtotal,
      tax,
      total: subtotal + tax,
    };
  }, [lang, setLang, cart, add, remove, clear]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
