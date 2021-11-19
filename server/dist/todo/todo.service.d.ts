import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todos;
    create(createTodoDto: CreateTodoDto): {
        id: string;
        title: string;
        description: string;
    };
    findAll(): Todo[];
    findOne(id: string): Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: string): Todo[];
}
