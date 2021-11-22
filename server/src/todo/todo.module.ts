import { PrismaService } from '../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService]
})
export class TodoModule {}