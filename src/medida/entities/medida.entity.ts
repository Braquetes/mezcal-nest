import { mezcales } from 'src/mezcales/entities/mezcales.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class medida{
    @PrimaryGeneratedColumn()
    id_medida:number;
    @Column()
    ml: number;
    @OneToMany(() => mezcales, mezcalEntity => mezcalEntity.medida)
    mezcales: mezcales[];
}