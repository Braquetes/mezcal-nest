import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { compras } from './DTO/compras-mezcales';

@Controller('compras')
export class ComprasController {
    constructor(private mez: ComprasService){}

    @Get()
    obtenerMezcales(): any {
        return this.mez.GetAll();
    }

    @Get(':id')
    obtenerMezcal(@Param('id') id: any): any {
        return this.mez.findMezc(id);
    }

    @Post()
    crearMezcales(@Body()Mezcales: compras){
        this.mez.createMezc(Mezcales);
        return `{"message": "Correct"}`;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.mez.deleteMezc(id);
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: compras) {
        this.mez.updateMezcal(id, updBody);
       // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
