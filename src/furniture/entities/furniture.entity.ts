import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Furniture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FurnitureName: string;

  @Column()
  detail: string;

  @Column()
  image: string;

}

