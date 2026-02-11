import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { GenericService } from 'src/generic/generic.service';
import { AlumnosImportData } from './dto/alumnos.dto';
import { Alumnos } from 'src/alumnos/alumnos.entity';
import { LoginDto } from './dto/login.dto';
import { ProfesorDTO } from './dto/profesor.dto';
export declare class ProfesorService extends GenericService<Profesor> {
    private readonly profesorRepository;
    private readonly alumnosRepository;
    constructor(profesorRepository: Repository<Profesor>, alumnosRepository: Repository<Alumnos>);
    login(loginDto: LoginDto): Promise<ProfesorDTO>;
    parseCsvToEntities(filePath: string): Promise<AlumnosImportData[]>;
}
