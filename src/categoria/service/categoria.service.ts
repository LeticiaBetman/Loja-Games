import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../entity/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: ['produtos'],
    });
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: {
        id,
      },
      relations: ['produtos'],
    });

    if (!categoria)
      throw new HttpException(
        `Categoria com id ${id} não encontrada.`,
        HttpStatus.NOT_FOUND,
      );

    return categoria;
  }

  async findByNome(nome: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: ['produtos'],
    });
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    const buscaCategoria: Categoria = await this.findById(categoria.id);

    if (!buscaCategoria || !categoria.id)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return await this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaCategoria = await this.findById(id);

    if (!buscaCategoria)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return await this.categoriaRepository.delete(id);
  }
}
