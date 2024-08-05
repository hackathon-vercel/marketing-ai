import type { Dispatch, SetStateAction } from "react";

export interface CompanyProps {
  companyName: string;
  companyDescription: string;
  dataSearch: string[] | string;
}

export interface ContextDefaultValues {
  keywords: string[];
  setKeywords: Dispatch<SetStateAction<string[]>>;
}

export interface TermsProps {
  intencion_de_busqueda: string;
  palabra_clave: string;
}

export interface CreateContentProps {
  objective: string;
  tone: string;
  keyword: string[];
  message: string;
}

export interface ResultContent {
  headline: string;
  description: string;
}
