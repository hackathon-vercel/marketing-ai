import { ArrayNotEmpty, ArrayUnique, IsArray, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export type DataSearch = 'hola' | 'adios';

export class BuyerPersonDto {
  @IsOptional()
  readonly gener: string;

  @IsOptional()
  @IsNumber()
  readonly age: number;

  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly civilStatus: string;

  @IsOptional()
  @IsString()
  readonly job: string;

  @IsOptional()
  @IsArray()
  readonly interests: string;

  @IsOptional()
  @IsArray()
  readonly behaviors: string;

  @IsOptional()
  @IsArray()
  readonly webHistory: string;

  @IsNotEmpty()
  @IsArray()
  readonly searchTerms: string;
}

export class CreateBuyerPersonDto {
  @IsNotEmpty()
  @IsString()
  readonly companyName: string;

  @IsNotEmpty()
  @IsString()
  readonly companyDescription: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsIn(['Genero', 'Edad', 'Ubicacion', 'Estado Civil', 'Trabajo', 'Intereses', 'Comportamientos', 'Historial web'], { each: true })
  readonly dataSearch: Array<string>;
}
