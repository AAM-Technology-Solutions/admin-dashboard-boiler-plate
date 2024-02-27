import React from "react";
import { ReactNode, createContext, useMemo } from "react";
import useTranslate from "./custom-translation";
export const TranslateContext = createContext<((key: string) => string) | undefined>(undefined);
/**
 * Provides a memoized translate function to all child components.
 */
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const translate = useTranslate();
  const memoizedTranslate = useMemo(() => translate, [translate]);

  return <TranslateContext.Provider value={memoizedTranslate}>{children}</TranslateContext.Provider>;
};
