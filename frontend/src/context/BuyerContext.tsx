import { useContext, createContext, useState } from "react";

import type { ReactNode } from "react";
import type { ContextDefaultValues, CompanyProps } from "@/types/formBuyer";

const defaultValues: ContextDefaultValues = {
  company: {
    companyName: "",
    companyDescription: "",
  },
  setCompany: () => {},
};

const BuyerContext = createContext(defaultValues);
export const useBuyerContext = () => {
  return useContext(BuyerContext);
};

const BuyerContextProvider = ({ children }: { children: ReactNode }) => {
  const [company, setCompany] = useState<CompanyProps>({
    companyName: "",
    companyDescription: "",
  });
  console.log(company);

  return (
    <BuyerContext.Provider
      value={{
        company,
        setCompany,
      }}
    >
      {children}
    </BuyerContext.Provider>
  );
};

export default BuyerContextProvider;
