import { CreateMedidaDTO } from './DTO/create-medida';
import { medida } from './entities/medida.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedidaService {
    constructor(
        @InjectRepository(medida)
        private medi: Repository <medida>
    ){}

    async GetAll(){
        return await  this.medi.find();
    }

    async findMezc(id: any){
        return await this.medi.findOne({
            where: {'id_medida': id}
        });
    }

    async createMedida(MedidaNueva:CreateMedidaDTO){
        const newMed = new medida();
        newMed.ml = MedidaNueva.ml;
        this.medi.save(newMed);
    }

    async deleteMedida(id: number){
        return await this.medi.delete(id);
    }

    async updateMedida(id: any, editMedida: CreateMedidaDTO) {
        const updateCategoria = await this.medi.findOne({
            where: {'id_medida': id}
        });
        updateCategoria.ml = editMedida.ml;

        return this.medi.update(id, updateCategoria);
    }
}
