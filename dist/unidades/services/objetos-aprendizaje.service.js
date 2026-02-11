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
exports.ObjetosAprendizajeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const generic_service_1 = require("../../generic/generic.service");
const objetos_aprendizaje_entity_1 = require("../entities/objetos_aprendizaje.entity");
const cloudinary_service_1 = require("../../cloudinary/cloudinary.service");
let ObjetosAprendizajeService = class ObjetosAprendizajeService extends generic_service_1.GenericService {
    constructor(objetosAprendizajeRepository, cloudinaryService) {
        super(objetosAprendizajeRepository);
        this.objetosAprendizajeRepository = objetosAprendizajeRepository;
        this.cloudinaryService = cloudinaryService;
    }
    async findByTemaId(idTema) {
        return this.objetosAprendizajeRepository.find({
            where: { id_tema: idTema },
            relations: ['estiloObjeto']
        });
    }
    async countByTemaId(idTema) {
        return this.objetosAprendizajeRepository.count({
            where: { id_tema: idTema }
        });
    }
    async createWithFile(objetoData, file) {
        const uploadResult = await this.cloudinaryService.uploadFile(file, 'objetos-aprendizaje');
        const nuevoObjeto = this.objetosAprendizajeRepository.create(Object.assign(Object.assign({}, objetoData), { contenido: uploadResult.url, cloudinary_public_id: uploadResult.public_id }));
        return await this.objetosAprendizajeRepository.save(nuevoObjeto);
    }
    async updateWithFile(id, objetoData, file) {
        var _a;
        const objetoExistente = await this.objetosAprendizajeRepository.findOne({
            where: { id }
        });
        if (!objetoExistente) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }
        if (file) {
            if (objetoExistente.cloudinary_public_id || ((_a = objetoExistente.contenido) === null || _a === void 0 ? void 0 : _a.includes('cloudinary'))) {
                try {
                    const publicId = objetoExistente.cloudinary_public_id ||
                        this.cloudinaryService.extractPublicId(objetoExistente.contenido);
                    await this.cloudinaryService.deleteFile(publicId);
                    console.log(`Archivo antiguo eliminado: ${publicId}`);
                }
                catch (error) {
                    console.error('Error al eliminar archivo antiguo:', error.message);
                }
            }
            const uploadResult = await this.cloudinaryService.uploadFile(file, 'objetos-aprendizaje');
            objetoData.contenido = uploadResult.url;
            objetoData.cloudinary_public_id = uploadResult.public_id;
            console.log(`Nuevo archivo subido: ${uploadResult.public_id}`);
        }
        await this.objetosAprendizajeRepository.update(id, objetoData);
        return await this.objetosAprendizajeRepository.findOne({ where: { id } });
    }
    async deleteWithFile(id) {
        var _a;
        const objeto = await this.objetosAprendizajeRepository.findOne({ where: { id } });
        if (!objeto) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }
        let fileDeleted = false;
        if (objeto.cloudinary_public_id || ((_a = objeto.contenido) === null || _a === void 0 ? void 0 : _a.includes('cloudinary'))) {
            try {
                const publicId = objeto.cloudinary_public_id ||
                    this.cloudinaryService.extractPublicId(objeto.contenido);
                await this.cloudinaryService.deleteFile(publicId);
                fileDeleted = true;
                console.log(`Archivo eliminado de Cloudinary: ${publicId}`);
            }
            catch (error) {
                console.error(`Error al eliminar el archivo de Cloudinary:`, error.message);
                throw new Error(`Error al eliminar el archivo de Cloudinary: ${error.message}`);
            }
        }
        await this.delete(id);
        return {
            message: 'Objeto de aprendizaje eliminado exitosamente',
            fileDeleted,
        };
    }
    async getDownloadUrl(id) {
        var _a;
        const objeto = await this.objetosAprendizajeRepository.findOne({ where: { id } });
        if (!objeto) {
            throw new Error('Objeto de aprendizaje no encontrado');
        }
        if (!objeto.cloudinary_public_id && !((_a = objeto.contenido) === null || _a === void 0 ? void 0 : _a.includes('cloudinary'))) {
            throw new Error('El objeto no tiene un archivo en Cloudinary');
        }
        const publicId = objeto.cloudinary_public_id ||
            this.cloudinaryService.extractPublicId(objeto.contenido);
        const downloadUrl = this.cloudinaryService.getDownloadUrl(publicId, 'raw');
        return {
            downloadUrl,
            nombre: objeto.nombre
        };
    }
};
ObjetosAprendizajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(objetos_aprendizaje_entity_1.ObjetosAprendizaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], ObjetosAprendizajeService);
exports.ObjetosAprendizajeService = ObjetosAprendizajeService;
//# sourceMappingURL=objetos-aprendizaje.service.js.map