import { CreateTipoMezcalesDTO } from './DTO/create-tipomezc';
import { Tipomezcales } from './entities/tipomezcales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMezcalService {
    constructor(
      @InjectRepository(Tipomezcales)
      private tmezcales: Repository <Tipomezcales>,
    ){}

    async GetAll(){
        return await this.tmezcales.find();
    }

    async findTMezc(id: any){
        return await this.tmezcales.findOne({
            where: {'id_tipo_mezcal': id}
        });
    }

    async createTMezc(TMezcalNuevo: CreateTipoMezcalesDTO){
        const newTmezc = new Tipomezcales();
        newTmezc.nombre = TMezcalNuevo.nombre;
        this.tmezcales.save(newTmezc);
    }

    async deleteTmezc(id:number){
        return await this.tmezcales.delete(id);
    }

    async updateTipo(id: any, editMedida: CreateTipoMezcalesDTO) {
        const updateCategoria = await this.tmezcales.findOne({
            where: {'id_tipo_mezcal': id}
        });
        updateCategoria.nombre = editMedida.nombre;

        return this.tmezcales.update(id, updateCategoria);
    }
}


