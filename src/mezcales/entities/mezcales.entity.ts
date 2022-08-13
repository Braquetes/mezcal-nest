import { medida } from "src/medida/entities/medida.entity";
import { Tipomezcales } from "src/tipo-mezcal/entities/tipomezcales.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class mezcales{
    @PrimaryGeneratedColumn()
    id_mezcal:number;
    @Column()
    nombre:string;
    @Column()
    stock:number;
    @Column()
    precio:number;
    @Column()
    img:string;
    @Column()
    descripcion:string;
    @ManyToOne(()=>Tipomezcales,tipoMezcalesEntity=>tipoMezcalesEntity.id_tipo_mezcal, {
        onDelete: 'SET NULL'
    })
    Tipomezcales
    @ManyToOne(()=>medida,medidaEntity=>medidaEntity.id_medida, {
        onDelete: 'SET NULL'
    })
    medida
}