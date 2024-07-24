import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ContentDto {
  @IsUUID('4')
  readonly id: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly objective: string;

  @IsString()
  readonly tone: string;

  @IsArray()
  readonly keyword: Array<string>;

  @IsString()
  readonly message: string;
}
export class CreateContentDto {
  @IsString()
  readonly objective: string;

  @IsString()
  readonly tone: string;

  @IsArray()
  readonly keywords: Array<string>;

  @IsString()
  readonly message: string;
}

export class KeywordsDto {
  @IsString()
  @IsNotEmpty()
  readonly term: string;
}
