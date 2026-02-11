"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const streamifier = require("streamifier");
let CloudinaryService = class CloudinaryService {
    async uploadFile(file, folder = 'objetos-aprendizaje') {
        return new Promise((resolve, reject) => {
            const resourceType = this.getResourceType(file.mimetype, file.originalname);
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                folder: folder,
                quality: 'auto',
                fetch_format: 'auto',
                resource_type: resourceType,
                allowed_formats: ['jpg', 'png', 'pdf', 'mp4', 'mp3', 'docx', 'pptx', 'txt']
            }, (error, result) => {
                if (error) {
                    return reject(error);
                }
                else {
                    resolve({
                        url: result.secure_url,
                        public_id: result.public_id,
                        resource_type: result.resource_type,
                        format: result.format
                    });
                }
            });
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }
    getResourceType(mimetype, filename) {
        var _a;
        const extension = (_a = filename.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (mimetype === 'application/pdf' ||
            extension === 'pdf' ||
            mimetype.includes('document') ||
            mimetype.includes('msword') ||
            mimetype.includes('spreadsheet') ||
            mimetype.includes('presentation') ||
            ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt', 'csv'].includes(extension || '')) {
            return 'raw';
        }
        if (mimetype.startsWith('video/') ||
            ['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(extension || '')) {
            return 'video';
        }
        if (mimetype.startsWith('image/') ||
            ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'].includes(extension || '')) {
            return 'image';
        }
        return 'raw';
    }
    async deleteFile(publicId, resourceType = 'raw') {
        try {
            await cloudinary_1.v2.uploader.destroy(publicId, { resource_type: resourceType });
        }
        catch (error) {
            throw new Error(`Error al eliminar el archivo: ${error.message}`);
        }
    }
    extractPublicId(url) {
        const parts = url.split('/');
        const fileWithExtension = parts[parts.length - 1];
        const publicId = fileWithExtension.split('.')[0];
        const folder = parts[parts.length - 2];
        return `${folder}/${publicId}`;
    }
    getDownloadUrl(publicId, resourceType = 'raw') {
        return cloudinary_1.v2.url(publicId, {
            resource_type: resourceType,
            flags: 'attachment',
            secure: true
        });
    }
};
CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map