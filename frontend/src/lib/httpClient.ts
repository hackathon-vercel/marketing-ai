import axios, { AxiosRequestConfig } from "axios";
import { URI_API, URL_API } from "@/constants";

const URL_BASE = `${URL_API}${URI_API}`;
/**
 * @param {string}  url url a la cual consultar
 * esta funcion detecta si es una nueva url base (comienza con http:// o https://).
 * en caso de ser asi, retorna la url. en caso contrario, se asume que es un fragmento
 * de path por lo que se concatena con la constante URL_BASE
 **/
const readUrl = (url: string) => {
  console.log(`${URL_BASE}${url}`);
  return url.startsWith("http://") || url.startsWith("https://") ? url : `${URL_BASE}${url}`;
};

// Authorization Token
const getToken = () => {
  return {
    token: "",
  };
};

const HEADERS_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

interface AxiosParams {
  url: string;
  body?: object;
  headers?: object;
  options?: AxiosRequestConfig;
}

const get = ({ url = "", options = {}, headers = {} }: AxiosParams) => {
  const { token } = getToken();

  return axios.get(readUrl(url), {
    headers: {
      ...HEADERS_DEFAULT,
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};

const post = ({ url = "", body = {}, headers = {}, options = {} }: AxiosParams) => {
  const { token } = getToken();

  const { headers: headers_, ...restOptions } = options;
  let printUrl = readUrl(url);
  console.log(printUrl);
  return axios.post(readUrl(url), body, {
    headers: {
      ...HEADERS_DEFAULT,
      ...headers_,
      Authorization: `Bearer ${token}`,
    },
    ...restOptions,
  });
};

const put = ({ url = "", body = {}, headers = {}, options = {} }: AxiosParams) => {
  const { token } = getToken();

  return axios.put(readUrl(url), body, {
    headers: {
      ...HEADERS_DEFAULT,
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};

const _delete = ({ url = "", body = {}, headers = {}, options = {} }: AxiosParams) => {
  const { token } = getToken();

  return axios.delete(readUrl(url), {
    headers: {
      ...HEADERS_DEFAULT,
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};

const httpClient = {
  get,
  post,
  put,
  delete: _delete,
};

export default httpClient;
