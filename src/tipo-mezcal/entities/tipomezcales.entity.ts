import { mezcales } from "src/mezcales/entities/mezcales.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tipomezcales{
    @PrimaryGeneratedColumn()
    id_tipo_mezcal:number;
    @Column()
    nombre:string;
    @OneToMany(() => mezcales, mezcalEntity => mezcalEntity.Tipomezcales)
    mezcales: mezcales[];
}