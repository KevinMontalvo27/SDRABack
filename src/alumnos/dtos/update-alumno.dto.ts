import { CreateAlumnoDto } from './create-alumno.dto';
import { PartialType } from '@nestjs/swagger';


export class UpdateAlumnoDto extends PartialType(CreateAlumnoDto) {
}