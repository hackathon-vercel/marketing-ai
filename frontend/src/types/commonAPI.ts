export interface ResponseAPI<T = unknown> {
  data: T;
  status: boolean;
  message: string;
}
