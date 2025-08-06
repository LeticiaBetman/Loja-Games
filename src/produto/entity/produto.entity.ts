import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entity/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column('decimal', {nullable: false })
  preco: number;

  @Column({ default: true })
  disponibilidade: boolean;

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  categoria: Categoria[];
}
