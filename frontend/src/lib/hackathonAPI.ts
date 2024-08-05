import axios from "axios";

// Types
import type { ResponseAPI } from "@/types/commonAPI";
import type { AxiosError } from "axios";
import type { CompanyProps } from "@/types/formBuyer";
import httpClient from "./httpClient";

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
      const { data } = await httpClient.post({ url: "/buyers", body: { ...form, dataSearch: ["genero"] } });
      console.log("hola", data);
      if (data.status) {
        result.status = true;
        result.data = data;
      }
      result.message = data.message;
      return result;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(">error in buyers", axiosError);

      return handleError(axiosError, result);
    }
  }
}

export const HackathonApi = new HackathonCoreApi();
