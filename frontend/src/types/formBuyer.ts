import type { Dispatch, SetStateAction } from "react";

export interface CompanyProps {
  companyName: String;
  companyDescription: String;
}

export interface ContextDefaultValues {
  company: CompanyProps;
  setCompany: Dispatch<SetStateAction<CompanyProps>>;
}
