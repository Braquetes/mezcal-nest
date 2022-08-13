import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipomezcales } from './entities/tipomezcales.entity';
import { Module } from '@nestjs/common';
import { TipoMezcalController } from './tipo-mezcal.controller';
import { TipoMezcalService } from './tipo-mezcal.service';
import { mezcales } from 'src/mezcales/entities/mezcales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tipomezcales, mezcales])],
  controllers: [TipoMezcalController],
  providers: [TipoMezcalService]
})
export class TipoMezcalModule {}
