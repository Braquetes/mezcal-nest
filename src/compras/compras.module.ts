import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { ComprasEntity } from './entities/compras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComprasEntity])],
  controllers: [ComprasController],
  providers: [ComprasService]
})
export class ComprasModule {}
