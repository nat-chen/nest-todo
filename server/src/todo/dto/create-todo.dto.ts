import { TodoStatus } from '../entities/todo.entity';
export class CreateTodoDto {
  id: string; // id
  title: string; // 标题
  description?: string; // 内容
  status: TodoStatus; // 状态
}
