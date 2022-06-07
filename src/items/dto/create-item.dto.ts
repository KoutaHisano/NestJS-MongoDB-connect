import { IsString, MinLength, MaxLength, IsNumberString } from "class-validator";

export class CreateItemDto {
  // @IsString()
  // @MinLength(1)
  // @MaxLength(5)
  // readonly id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(15)
  readonly name: string;

  @IsNumberString()
  @MinLength(1)
  @MaxLength(10)
  readonly price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly description: string;
}