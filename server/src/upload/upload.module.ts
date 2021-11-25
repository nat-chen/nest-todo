import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './upload_dist',
        filename(req, file, cb) {
          cb(null, file.originalname);
        }
      })
    })
  ],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
