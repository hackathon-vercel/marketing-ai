import { useContext, createContext, useState } from "react";

import type { ReactNode } from "react";
import type { ContextDefaultValues, CompanyProps } from "@/types/formBuyer";

const defaultValues: ContextDefaultValues = {
  keywords: [],
  setKeywords: () => {},
};

const BuyerContext = createContext(defaultValues);
export const useBuyerContext = () => {
  return useContext(BuyerContext);
};

const BuyerContextProvider = ({ children }: { children: ReactNode }) => {
  const [keywords, setKeywords] = useState<string[]>([]);

  return (
    <BuyerContext.Provider
      value={{
        keywords,
        setKeywords,
      }}
    >
      {children}
    </BuyerContext.Provider>
  );
};

export default BuyerContextProvider;
