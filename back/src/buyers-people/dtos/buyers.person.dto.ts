import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, ArrayUnique, IsArray, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export type DataSearch = "hola" | "adios"

export class BuyerPersonDto {

    @IsOptional()
    readonly gener: String;

    @IsOptional()
    @IsNumber()
    readonly age: number;

    @IsOptional()
    @IsString()
    readonly address: String;

    @IsOptional()
    @IsString()
    readonly civilStatus: String;

    @IsOptional()
    @IsString()
    readonly job: String;

    @IsOptional()
    @IsArray()
    readonly interests: String;

    @IsOptional()
    @IsArray()
    readonly behaviors: String;

    @IsOptional()
    @IsArray()
    readonly webHistory: String

    @IsNotEmpty()
    @IsArray()
    readonly searchTerms: String
}

export class CreateBuyerPersonDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly companyName: String;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly companyDescription: String;
    
    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsIn(['Genero', 'Edad', 'Ubicacion', 'Estado Civil', 'Trabajo', 'Intereses', 'Comportamientos', 'Historial web'], { each: true })
    readonly dataSearch: Array<String>
}