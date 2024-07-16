import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";


export class ContentDto {

    @IsUUID('4')
    @ApiProperty()
    readonly id: string;

    @IsString()
    @ApiProperty()
    readonly title: string;

    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsString()
    @ApiProperty()
    readonly objective: string;

    @IsString()
    @ApiProperty()
    readonly tone: string;

    @IsArray()
    @ApiProperty()
    readonly keyword: Array<String>;

    @IsString()
    @ApiProperty()
    readonly message: String;
}
export class CreateContentDto extends OmitType(ContentDto, ['id', 'title', 'description']) {}

export class KeywordsDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly term: String
}
