/**
 * Esta clase es usada como Caso de uso para la creacion
 * de Buyer Persona
 */

export class CreateBuyerPerson {
  private _prompt: string;
  private _companyName: string;
  private _companyDescription: string;
  private _dataSearch: string[];
  constructor(
    // private readonly model: string,
    private generateText: (prompt: string) => Promise<void>,
  ) {}

  // Create Buyer Person

  generatePrompt() {
    return this._prompt.replace('companyName', this._companyName).replace('companyDescription', this._companyDescription).replace('dataSearch', this._dataSearch.join(', '));
  }

  async call() {
    const promptFormat = this.generatePrompt();
    return await this.generateText(promptFormat);
  }

  // Setters

  set prompt(v: string) {
    this._prompt = v;
  }
  set companyName(v: string) {
    this._companyName = v;
  }
  set companyDescription(v: string) {
    this._companyDescription = v;
  }
  set dataSearch(v: string[]) {
    this._dataSearch = v;
  }

  // Getters

  get prompt(): string {
    return this._prompt;
  }
  get companyName(): string {
    return this._companyName;
  }
  get companyDescription(): string {
    return this._companyDescription;
  }
  get dataSearch(): string[] {
    return this._dataSearch;
  }

  // methods general

  toString() {
    return `Company Name ${this._companyName}; Company Description ${this._companyDescription}; DataSearch ${this._dataSearch.join(', ')}`;
  }
}
