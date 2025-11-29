import { IsInt, IsNotEmpty, IsString, IsDateString, MinLength, MaxLength, Min } from 'class-validator';

export class CreateAlumnoDto {
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    nro_cuenta: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(255)
    contraseña: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    apellido_1: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    apellido_2: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_nacimiento: string; // Formato: YYYY-MM-DD

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    grupo: number;
}