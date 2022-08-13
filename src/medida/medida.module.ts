import { TypeOrmModule } from '@nestjs/typeorm';
import { medida } from './entities/medida.entity';
import { Module } from '@nestjs/common';
import { MedidaController } from './medida.controller';
import { MedidaService } from './medida.service';
import { mezcales } from 'src/mezcales/entities/mezcales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([medida, mezcales])],
  controllers: [MedidaController],
  providers: [MedidaService]
})
export class MedidaModule {}
