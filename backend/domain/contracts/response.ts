export interface IResponse {
  success: boolean;
  message: string | null;
}

export class Response {
  constructor(
    private _success: boolean,
    private _message: string | null,
  ) {}

  // Getters
  get success() {
    return this._success;
  }

  get message() {
    return this._message;
  }

  // Setters
  set success(v: boolean) {
    this._success = v;
  }

  set message(v: string | null) {
    this._message = v;
  }

  response(): IResponse {
    const message = this._message;
    const success = this._success;

    return { message, success };
  }
}
