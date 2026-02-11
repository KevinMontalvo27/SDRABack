import { Profesor } from './profesor.entity';
import { ProfesorService } from './profesor.service';
import { GenericController } from 'src/generic/generic.controller';
import { AlumnosImportData } from './dto/alumnos.dto';
import { LoginDto } from './dto/login.dto';
export declare class ProfesorController extends GenericController<Profesor, ProfesorService> {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    login(loginDto: LoginDto): Promise<import("./dto/profesor.dto").ProfesorDTO>;
    getCsvData(): Promise<AlumnosImportData[]>;
}
