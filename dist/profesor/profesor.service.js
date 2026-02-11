"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorService = void 0;
const fs = require("fs");
const csvParser = require("csv-parser");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profesor_entity_1 = require("./profesor.entity");
const generic_service_1 = require("../generic/generic.service");
const alumnos_dto_1 = require("./dto/alumnos.dto");
const alumnos_entity_1 = require("../alumnos/alumnos.entity");
const profesor_dto_1 = require("./dto/profesor.dto");
let ProfesorService = class ProfesorService extends generic_service_1.GenericService {
    constructor(profesorRepository, alumnosRepository) {
        super(profesorRepository);
        this.profesorRepository = profesorRepository;
        this.alumnosRepository = alumnosRepository;
    }
    async login(loginDto) {
        const { nro_empleado, contra } = loginDto;
        if (!nro_empleado || !contra) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const options = { where: { nro_empleado, contra } };
        const profesor = await this.profesorRepository.findOne(options);
        if (!profesor) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const info = new profesor_dto_1.ProfesorDTO();
        info.id_profesor = profesor.id_profesor;
        info.nombre_profesor = profesor.nombre_profesor;
        info.grupo = profesor.grupo;
        return info;
    }
    async parseCsvToEntities(filePath) {
        const entities = [];
        await new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csvParser({ headers: ['nro_cuenta', 'contraseña', 'apellido_1', 'apellido_2', 'nombre', 'fecha_nacimiento', 'id_grupo'] }))
                .on('data', (data) => {
                const alumnos = new alumnos_dto_1.AlumnosImportData();
                alumnos.nro_cuenta = data.nro_cuenta;
                alumnos.contraseña = data.contraseña;
                alumnos.nombre = data.nombre;
                alumnos.apellido_1 = data.apellido_1;
                alumnos.apellido_2 = data.apellido_2;
                alumnos.fecha_nacimiento = data.fecha_nacimiento;
                alumnos.grupo = data.id_grupo;
                entities.push(alumnos);
            })
                .on('end', () => resolve())
                .on('error', (error) => reject(error));
        });
        const alumnos = entities.map(entity => {
            const alumnos = new alumnos_entity_1.Alumnos();
            alumnos.nro_cuenta = entity.nro_cuenta;
            alumnos.contraseña = entity.contraseña;
            alumnos.nombre = entity.nombre;
            alumnos.apellido_1 = entity.apellido_1;
            alumnos.apellido_2 = entity.apellido_2;
            alumnos.fecha_nacimiento = entity.fecha_nacimiento;
            alumnos.grupo = entity.grupo;
            return alumnos;
        });
        await this.alumnosRepository
            .createQueryBuilder()
            .insert()
            .into(alumnos_entity_1.Alumnos)
            .values(alumnos)
            .orIgnore()
            .execute();
        return entities;
    }
};
ProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profesor_entity_1.Profesor)),
    __param(1, (0, typeorm_1.InjectRepository)(alumnos_entity_1.Alumnos)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProfesorService);
exports.ProfesorService = ProfesorService;
//# sourceMappingURL=profesor.service.js.map