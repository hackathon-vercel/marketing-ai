export interface IPromptGetBuyerPerson {
  name: string;
  description: string;
  data: string[];
}

export interface IPromptGetKeyWorks {
  term: string;
}

export interface IPromptCreateContent {
  keywords: string[];
  objective: string;
  tone: string;
  message: string;
}
