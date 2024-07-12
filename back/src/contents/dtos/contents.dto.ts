import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsArray, IsString, IsUUID } from "class-validator";


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
}
export class CreateContentDto extends OmitType(ContentDto, ['id']) {}
