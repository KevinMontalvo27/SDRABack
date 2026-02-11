
// scripts/migrar-cloudinary-public-ids.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ObjetosAprendizaje } from '../unidades/entities/objetos_aprendizaje.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

async function migrarPublicIds() {
    console.log('🚀 Iniciando migración de public_ids de Cloudinary...\n');

    // Crear la aplicación NestJS
    const app = await NestFactory.createApplicationContext(AppModule);

    try {
        // Obtener los servicios necesarios
        const objetosRepository = app.get<Repository<ObjetosAprendizaje>>(
            getRepositoryToken(ObjetosAprendizaje)
        );
        const cloudinaryService = app.get(CloudinaryService);

        // Buscar objetos sin public_id
        const objetos = await objetosRepository.find({
            where: { cloudinary_public_id: null }
        });

        console.log(`📊 Encontrados ${objetos.length} objetos para migrar\n`);

        let exitosos = 0;
        let fallidos = 0;
        let omitidos = 0;

        for (const objeto of objetos) {
            try {
                // Verificar si tiene una URL de Cloudinary
                if (!objeto.contenido || !objeto.contenido.includes('cloudinary')) {
                    console.log(`⚠️  [${objeto.id}] ${objeto.nombre} - No tiene URL de Cloudinary (omitido)`);
                    omitidos++;
                    continue;
                }

                // Extraer el public_id de la URL
                const publicId = cloudinaryService.extractPublicId(objeto.contenido);

                if (!publicId) {
                    throw new Error('No se pudo extraer el public_id');
                }

                // Actualizar el objeto con el public_id
                await objetosRepository.update(objeto.id, {
                    cloudinary_public_id: publicId
                });

                console.log(`✅ [${objeto.id}] ${objeto.nombre}`);
                console.log(`   📁 Public ID: ${publicId}\n`);
                
                exitosos++;

            } catch (error) {
                console.error(`❌ [${objeto.id}] ${objeto.nombre} - Error: ${error.message}\n`);
                fallidos++;
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log('🎉 Migración completada:');
        console.log(`   ✅ Exitosos: ${exitosos}`);
        console.log(`   ❌ Fallidos: ${fallidos}`);
        console.log(`   ⚠️  Omitidos: ${omitidos}`);
        console.log(`   📊 Total: ${objetos.length}`);
        console.log('='.repeat(60) + '\n');

    } catch (error) {
        console.error('❌ Error fatal durante la migración:', error);
        process.exit(1);
    } finally {
        await app.close();
    }
}

// Ejecutar la migración
migrarPublicIds()
    .then(() => {
        console.log('✨ Script finalizado correctamente');
        process.exit(0);
    })
    .catch((error) => {
        console.error('💥 Error ejecutando el script:', error);
        process.exit(1);
    });