import { CreateUsuariosDTO } from './DTO/create-usuarios';
import { UsuariosService } from './usuarios.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    constructor (private use: UsuariosService){}

    @Get()
    ObtenerUser(): any {
        return this.use.GetAll();
    }

    @Get(':id')
    obtenerUser(@Param('id') id: any ): any {
        return this.use.findUsuario(id);
    }

    @Post('/login')
    login(@Body() login: any): any {
        const rows = this.use.login(login);
        return rows;
    }

    @Post('/correo')
    correo(@Body() login: any): any {
        const rows = this.use.correo(login);
        return rows;
    }

    @Post()
    crearUser(@Body()Usuario: CreateUsuariosDTO){
        this.use.createUsuario(Usuario);
        return `{"message": "Correct"}`;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any {
        return this.use.deleteUser(id);
    }

    @Put(':id')
    UpdateHomework(@Param('id') id: string, @Body() updBody: CreateUsuariosDTO) {
        this.use.updateUser(id, updBody);
       // return `Actualizando User con ID: ${id}`;
        return `{"message": "Correct"}`;
    }
}
