import { CreateMedidaDTO } from './DTO/create-medida';
import { MedidaService } from './medida.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('medida')
export class MedidaController {
    constructor (private med:MedidaService){}

    @Get()
    obtenerMedidas(): any {
        return this.med.GetAll();
    }

    @Get(':id')
    obtenerMedida(@Param('id') id: any): any{
        return this.med.findMezc(id);
    }

    @Post()
    crearMedida(@Body()Medida: CreateMedidaDTO){
        return this.med.createMedida(Medida);
    }
    

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.med.deleteMedida(id);
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: CreateMedidaDTO) {
        this.med.updateMedida(id, updBody);
       // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
