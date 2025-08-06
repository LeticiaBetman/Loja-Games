import { Module } from '@nestjs/common';
import { CategoriaService } from './service/categoria.service';
import { CategoriaController } from './controller/categoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entity/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
