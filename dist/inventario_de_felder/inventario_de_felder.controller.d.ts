import { GenericController } from 'src/generic/generic.controller';
import { InventarioDeFelder } from './inventario_de_felder.entity';
import { InventarioDeFelderService } from './inventario_de_felder.service';
import { RespuestasCompactadasDto } from './dto/respuestas_compactadas.dto';
export declare class InventarioDeFelderController extends GenericController<InventarioDeFelder, InventarioDeFelderService> {
    private readonly inventarioDeFelderService;
    constructor(inventarioDeFelderService: InventarioDeFelderService);
    findAll(): Promise<InventarioDeFelder[]>;
    create(entity: InventarioDeFelder): Promise<import("typeorm").InsertResult>;
    estadoEncuesta(numAlumno: number): Promise<InventarioDeFelder[]>;
    saveResultadoEncuesta(respuestasCompactadasDto: RespuestasCompactadasDto): Promise<{
        message: string;
        perfil: import("../perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity").PerfilFinalInventarioDeFelder;
    }>;
}
