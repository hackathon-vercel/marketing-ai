/**
 * Esta clase es usada como Caso de uso para la creacion
 * de Buyer Persona
 */

export class CreateContentCommandHandler {
  private _prompt: string;
  private _keywords: string[];
  private _objective: string;
  private _tone: string;
  private _message: string;
  constructor(
    // private readonly model: string,
    private generateText: (prompt: string) => Promise<void>,
  ) {}

  // Create Buyer Person

  generatePrompt() {
    return this._prompt.replace('objective', this._objective).replace('objective', this._objective).replace('message', this._message).replace('keywords', this._keywords.join(', '));
  }

  async call() {
    const promptFormat = this.generatePrompt();
    return await this.generateText(promptFormat);
  }

  // Setters

  set prompt(v: string) {
    this._prompt = v;
  }
  set keywords(v: string[]) {
    this._keywords = v;
  }
  set objective(v: string) {
    this._objective = v;
  }
  set tone(v: string) {
    this._tone = v;
  }
  set message(v: string) {
    this._message = v;
  }

  // Getters

  get prompt(): string {
    return this._prompt;
  }
  get keywords(): string[] {
    return this._keywords;
  }
  get objective(): string {
    return this._objective;
  }
  get tone(): string {
    return this._tone;
  }
  get message(): string {
    return this._message;
  }

  // methods general

  toString() {
    return `Keywords: ${this._keywords.join(', ')}; Objective: ${this._objective}; Tone: ${this._tone}; Message: ${this._message}`;
  }
}
