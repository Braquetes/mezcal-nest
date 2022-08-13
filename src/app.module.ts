import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MezcalesModule } from './mezcales/mezcales.module';
import { MedidaModule } from './medida/medida.module';
import { TipoMezcalModule } from './tipo-mezcal/tipo-mezcal.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: '',
      database: 'mezcal',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MezcalesModule,
    MedidaModule,
    TipoMezcalModule,
    UsuariosModule,
    ComprasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
