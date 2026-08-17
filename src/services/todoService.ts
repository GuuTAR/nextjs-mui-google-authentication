import { DisplayTodo, TodoRecord } from '@/types/Todo'

class TodoService {
  public renderTodos = (todos: TodoRecord[]): DisplayTodo[] => {
    return todos.map((todo) => ({
      id: todo.id,
      title: todo.title,
      isCompleted: todo.is_completed,
      createdAt: todo.created_at,
      updatedAt: todo.updated_at,
    }))
  }
}

export const todoService = new TodoService()
