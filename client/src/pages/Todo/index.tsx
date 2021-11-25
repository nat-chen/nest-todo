import { FC, useEffect, useState } from 'react';
import { ITodo } from '../../../types/Todo';
import TodoForm from '../../Components/TodoForm';
import http from '../../http';
import List from "./List";

const Todo: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  
  const [formType, setFormType] = useState<'add' | 'update' | null>(null);
  const [selected, setSelected] = useState<ITodo | undefined>();

  useEffect(() => {
    fetchTodos().then();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const { data } = await http.get<ITodo[]>('/todo');
    setTodos(data);
    setLoading(false);
  };

  const submitTodo = async (newTodo: Partial<ITodo>) => {
    setLoading(true);
    if (formType === 'add') {
      await http.post<ITodo>('/todo', newTodo);
    } else {
      await http.patch<ITodo>(`/todo/${newTodo.id}`, newTodo);
    }
    setSelected(undefined);
    setFormType(null);
    setLoading(false);
    await fetchTodos();
  };

  const deleteTodo = async (id: number | undefined) => {
    setLoading(true);
    await http.delete<ITodo>(`/todo/${id}`);
    setLoading(false);
    await fetchTodos();
  }

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      <div>
        <button onClick={() => {
          setFormType('add')
          setSelected(undefined)
        }}>
          添加新待办
        </button>

        {(formType === 'add' || selected) && (
          <div>
            <TodoForm todo={selected} onSubmit={submitTodo} />
          </div>
        )}
      </div>

      <hr />

      <List
        todoList={todos}
        onDelete={deleteTodo}
        onEdit={(todo) => {
          setFormType("update");
          setSelected(todo);
        }}
      />
    </div>
  )
}

export default Todo;