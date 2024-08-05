import { Injectable } from '@nestjs/common';
// import { IPromptGetBuyerPerson } from './../../../domain/application/interfaces/prompts/IPropmts';
import { gText } from '../../SDKs/ai-sdk';
import { PROMPT_CREATE_KEYWORDS_LIST, PROMPT_CREATE_CONTENT } from '../../../domain/contracts/prompts';
import { CreateKeywordsCommandHandler } from '../../../domain/useCase/createKeywordListsCommandHandler';
import { CreateContentCommandHandler } from '../../../domain/useCase/createContentCommandHandler';
import { IPromptGetKeyWorks, IPromptCreateContent } from './../../../domain/application/interfaces/prompts/IPropmts';

@Injectable()
export class ContentService {
  async createKeywords(params: IPromptGetKeyWorks) {
    const buyer = new CreateKeywordsCommandHandler(gText);

    buyer.term = params.term;
    buyer.prompt = PROMPT_CREATE_KEYWORDS_LIST;

    const response = await buyer.call();

    return response;
  }

  async createContent(params: IPromptCreateContent) {
    const buyer = new CreateContentCommandHandler(gText);

    buyer.keywords = params.keywords;
    buyer.message = params.message;
    buyer.objective = params.objective;
    buyer.tone = params.tone;
    buyer.prompt = PROMPT_CREATE_CONTENT;

    const response = await buyer.call();

    return response;
  }
}
