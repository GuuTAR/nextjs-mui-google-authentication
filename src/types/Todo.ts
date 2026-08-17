export type DisplayTodo = {
  id: string
  title: string
  isCompleted: boolean
  createdAt: string
  updatedAt: string
}

export type TodoRecord = {
  id: string
  title: string
  is_completed: boolean
  created_at: string
  updated_at: string
}

export type InsertTodoInput = {
  title: string
}
