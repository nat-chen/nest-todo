import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    const { title, description } = createTodoDto;
    return this.prisma.todo.create({
      data: { title, description, status: 1 }
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id }
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const { title, description, status } = updateTodoDto;
    return this.prisma.todo.update({
      data: { title, description, status },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: { id }
    })
  }
}
