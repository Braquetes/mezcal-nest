import { CreateTipoMezcalesDTO } from './DTO/create-tipomezc';
import { TipoMezcalService } from './tipo-mezcal.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('tipo-mezcal')
export class TipoMezcalController {
    constructor(private mez: TipoMezcalService){}

    @Get()
    obtenerTMezcales(): any {
        return this.mez.GetAll();
    }

    @Get(':id')
    ObtenerTipo(@Param('id') id: any): any {
        return this.mez.findTMezc(id);
    }

    @Post()
    crearTmezcal(@Body()Tipo: CreateTipoMezcalesDTO){
        return this.mez.createTMezc(Tipo);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.mez.deleteTmezc(id);
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: CreateTipoMezcalesDTO) {
        this.mez.updateTipo(id, updBody);
       // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
