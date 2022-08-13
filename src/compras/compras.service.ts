import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComprasEntity } from './entities/compras.entity';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(ComprasEntity)
        private compras:Repository <ComprasEntity>,
    ){}

    async GetAll(){
        return await this.compras.find();
    }

    async findMezc(id: any){
        return await this.compras.find({where: {'id_usuario': id}});
    }

    async createMezc(MezcalNuevo: ComprasEntity){
        const newMez = new ComprasEntity();
        newMez.id_mezcal = MezcalNuevo.id_mezcal;
        newMez.id_usuario = MezcalNuevo.id_usuario;
        this.compras.save(newMez);
    }

    async deleteMezc(id:number){
        return await this.compras.delete(id);
    }

    async updateMezcal(id: any, MezcalNuevo: ComprasEntity) {
        const newMez = await this.compras.findOne({
            where: {'id_mezcal': id}
        });
        newMez.id_mezcal = MezcalNuevo.id_mezcal;
        newMez.id_usuario = MezcalNuevo.id_usuario;

        return this.compras.update(id, newMez);
    }
}
