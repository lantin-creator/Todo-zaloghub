export type TaskStatus = 'all' | 'active' | 'completed'

export interface Task {
  id: string
  title: string
  completed: boolean
}