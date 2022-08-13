import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id_usuario: number;
    @Column()
    nombre: string;
    @Column()
    a_p: string;
    @Column()
    a_m: string;
    @Column()
    usuario: string;
    @Column()
    correo: string;
    @Column()
    password: string;
}