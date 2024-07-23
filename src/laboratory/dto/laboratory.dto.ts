import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LaboratoryDto{
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @MinLength(2)
    name:string;
}