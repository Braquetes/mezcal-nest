import { mezcales } from './entities/mezcales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MezcalesController } from './mezcales.controller';
import { MezcalesService } from './mezcales.service';
import { Tipomezcales } from 'src/tipo-mezcal/entities/tipomezcales.entity';
import { medida } from 'src/medida/entities/medida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([mezcales,Tipomezcales,medida])],
  controllers: [MezcalesController],
  providers: [MezcalesService]
})
export class MezcalesModule {}
