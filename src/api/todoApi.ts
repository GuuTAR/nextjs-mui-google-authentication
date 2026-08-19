import { AxiosResponse } from 'axios'

import { ResponseData } from '@/types/ResponseData'
import { InsertTodoInput, TodoRecord } from '@/types/Todo'
import { STATUS_CODE } from '@/enum/global'

import { ApiService } from '@/services/apiService'

export class TodoAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public getTodos = async (): Promise<TodoRecord[]> => {
    try {
      const result: AxiosResponse<ResponseData<TodoRecord[]>> =
        await this.api.get<ResponseData<TodoRecord[]>>('/api/v1/todos')
      if (result.status === STATUS_CODE.OK) {
        return result.data.body ?? []
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/v1/todos:', (error as Error).message)
      return []
    }
  }

  public createTodo = async (todoInput: InsertTodoInput): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.post<undefined, InsertTodoInput>('/api/v1/todos', todoInput)
      if (result.status === STATUS_CODE.CREATED) {
        return true
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in POST /api/v1/todos:', (error as Error).message)
      return false
    }
  }

  public resetTodos = async (): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.patch<undefined, undefined>(`/api/v1/todos-reset`)
      if (result.status === STATUS_CODE.OK) {
        return true
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error(`Error in PATCH /api/v1/todos-reset:`, (error as Error).message)
      return false
    }
  }

  public toggleTodoStatus = async (id: string): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.patch<undefined, undefined>(`/api/v1/todos-toggle/${id}`)
      if (result.status === STATUS_CODE.OK) {
        return true
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error(`Error in PATCH /api/v1/todos-toggle/${id}`, (error as Error).message)
      return false
    }
  }

  public deleteTodo = async (id: string): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.delete<undefined>(`/api/v1/todos/${id}`)
      if (result.status === STATUS_CODE.OK) {
        return true
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error(`Error in DELETE /api/v1/todos/${id}:`, (error as Error).message)
      return false
    }
  }
}
