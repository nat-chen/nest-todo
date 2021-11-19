import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): {
        id: string;
        title: string;
        description: string;
    };
    findAll(): import("./entities/todo.entity").Todo[];
    findOne(id: string): import("./entities/todo.entity").Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): import("./entities/todo.entity").Todo;
    remove(id: string): import("./entities/todo.entity").Todo[];
}
