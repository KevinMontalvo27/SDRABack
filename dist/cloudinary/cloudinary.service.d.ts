/// <reference types="multer" />
export interface CloudinaryUploadResult {
    url: string;
    public_id: string;
    resource_type: string;
    format: string;
}
export declare class CloudinaryService {
    uploadFile(file: Express.Multer.File, folder?: string): Promise<CloudinaryUploadResult>;
    private getResourceType;
    deleteFile(publicId: string, resourceType?: 'image' | 'video' | 'raw'): Promise<void>;
    extractPublicId(url: string): string;
    getDownloadUrl(publicId: string, resourceType?: string): string;
}
