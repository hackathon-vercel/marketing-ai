/**
 * Esta clase es usada como Caso de uso para la creacion
 * de Keywords
 */

export class CreateKeywordsCommandHandler {
  private _prompt: string;
  private _term: string;
  constructor(
    // private readonly model: string,
    private generateText: (prompt: string) => Promise<void>,
  ) {}

  // Create Keywords

  generatePrompt() {
    return this._prompt.replace('term', this._term);
  }

  async call() {
    const promptFormat = this.generatePrompt();
    return await this.generateText(promptFormat);
  }

  // Setters

  set prompt(v: string) {
    this._prompt = v;
  }
  set term(v: string) {
    this._term = v;
  }

  // Getters

  get prompt(): string {
    return this._prompt;
  }
  get term(): string {
    return this._term;
  }

  // methods general

  toString() {
    return `Term  ${this._term}`;
  }
}
