import axios from "axios";

// Types
import type { ResponseAPI } from "@/types/commonAPI";
import type { AxiosError } from "axios";
import type { CompanyProps, CreateContentProps, ResultContent } from "@/types/formBuyer";
import httpClient from "./httpClient";
import { isMyDocument } from "@/utils/missingProperties";

function handleError<T extends ResponseAPI<any>>(axiosError: AxiosError<any>, result: T) {
  const message = axiosError.response?.data?.message;

  result.message = "Ocurrio un error inesperado. Por favor vuelva a intentar más tarde.";

  if (axios.isAxiosError(axiosError) && message) {
    result.message = message;
  }

  return result;
}

class HackathonCoreApi {
  async buyers(form: CompanyProps) {
    const result: ResponseAPI<null> = {
      data: null,
      message: "",
      status: false,
    };

    try {
      let { data } = await httpClient.post({ url: "/buyers", body: form });

      if (Object.entries(data.data).length > 0) {
        result.status = true;
        result.data = data.data;
        console.log(data.data);
      } else {
        result.status = false;
        result.message = "Agrega información más específica";
      }

      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(">error in buyers", axiosError);

      return handleError(axiosError, result);
    }
  }

  async keywords(keyword: string) {
    const result: ResponseAPI<null> = {
      data: null,
      message: "",
      status: false,
    };

    try {
      let { data } = await httpClient.post({
        url: "/contents/keywords",
        body: {
          term: keyword,
        },
      });

      if (Object.entries(data?.data).length > 0) {
        result.status = true;
        result.data = data.data;
        console.log(data.data);
      } else {
        result.status = false;
        result.message = "Ocurrió un error, inténtelo nuevamente o seleccione otra frase";
      }

      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(">error in keywords", axiosError);

      return handleError(axiosError, result);
    }
  }

  async createContent(content: CreateContentProps) {
    const result: ResponseAPI<ResultContent | null> = {
      data: null,
      message: "",
      status: false,
    };

    try {
      let { data } = await httpClient.post({
        url: "/contents",
        body: content,
      });
      console.log(data);

      if (isMyDocument<ResultContent>(data, { description: "", headline: "" })) {
        result.status = true;
        result.data = data;
        console.log(data);
      } else {
        result.status = false;
        result.message = "Ocurrió un error, inténtelo nuevamente";
      }

      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(">error in keywords", axiosError);

      return handleError(axiosError, result);
    }
  }
}

export const HackathonApi = new HackathonCoreApi();
