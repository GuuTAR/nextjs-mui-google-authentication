import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { DisplayTodo, TodoRecord } from '@/types/Todo'

import { TodoAPI } from '@/api/todoApi'

import { createApiService } from '@/services/apiService'
import { todoService } from '@/services/todoService'

import { useUserData } from '@/providers/UserDataProvider'

import useInitialGetAPI from '@/hooks/useInitialGetAPI'

type TodoDataContextType = {
  displayTodos: DisplayTodo[] | undefined
  getTodos: () => Promise<boolean>
  createTodo: (title: string) => Promise<boolean>
  resetTodos: () => Promise<boolean>
  deleteTodo: (id: string) => Promise<boolean>
  toggleTodoStatus: (id: string) => Promise<boolean>
}
const TodoDataContext = createContext<TodoDataContextType>({} as TodoDataContextType)

type Props = {
  children: ReactNode
}

export const TodoDataProvider = ({ children }: Props) => {
  const { userToken } = useUserData()

  const [displayTodos, setDisplayTodos] = useState<DisplayTodo[] | undefined>(undefined)

  const todoApi: TodoAPI | undefined = useMemo(() => {
    if (!userToken) return
    return new TodoAPI(createApiService(userToken))
  }, [userToken])

  const getTodos = useCallback(async (): Promise<boolean> => {
    if (!todoApi) return false
    const todosRecord: TodoRecord[] | undefined = await todoApi.getTodos()
    if (!todosRecord) return false
    setDisplayTodos(todoService.renderTodos(todosRecord))
    return true
  }, [todoApi])

  const handleTodosSuccess = useCallback((todosRecord: TodoRecord[]) => {
    setDisplayTodos(todoService.renderTodos(todosRecord))
  }, [])

  useInitialGetAPI(todoApi?.getTodos, handleTodosSuccess)

  const createTodo = useCallback(
    async (title: string): Promise<boolean> => {
      if (!todoApi) return false
      const isSuccess: boolean = await todoApi.createTodo({ title })
      if (!isSuccess) {
        return false
      }
      return await getTodos()
    },
    [todoApi, getTodos],
  )

  const resetTodos = useCallback(async (): Promise<boolean> => {
    if (!todoApi) return false
    const isSuccess: boolean = await todoApi.resetTodos()
    if (!isSuccess) {
      return false
    }
    return await getTodos()
  }, [todoApi, getTodos])

  const toggleTodoStatus = useCallback(
    async (id: string): Promise<boolean> => {
      if (!todoApi) return false
      const isSuccess: boolean = await todoApi.toggleTodoStatus(id)
      if (!isSuccess) {
        return false
      }
      return await getTodos()
    },
    [todoApi, getTodos],
  )

  const deleteTodo = useCallback(
    async (id: string): Promise<boolean> => {
      if (!todoApi) return false
      const isSuccess: boolean = await todoApi.deleteTodo(id)
      if (!isSuccess) {
        return false
      }
      return await getTodos()
    },
    [todoApi, getTodos],
  )

  return (
    <TodoDataContext.Provider value={{ displayTodos, getTodos, createTodo, resetTodos, deleteTodo, toggleTodoStatus }}>
      {children}
    </TodoDataContext.Provider>
  )
}

export const useTodoData = () => useContext(TodoDataContext)
