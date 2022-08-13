import { medida } from "src/medida/entities/medida.entity";
import { Tipomezcales } from "src/tipo-mezcal/entities/tipomezcales.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ComprasEntity{
    @PrimaryGeneratedColumn()
    id_compra:number;
    @Column()
    id_usuario:number;
    @Column()
    id_mezcal:number;
}