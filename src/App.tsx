import { useMemo, useState } from 'react'
import styles from './App.module.css'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { Task, TaskStatus } from './types/types'
import { TaskForm } from './components/TaskForm'
import { TaskFilters } from './components/TaskFilters'
import { TaskList } from './components/TaskList'

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('zaloghub-tasks', [])
  const [filter, setFilter] = useState<TaskStatus>('all')
  const [search, setSearch] = useState('')

  const addTask = (title: string) => {
    const trimmed = title.trim()
    if (!trimmed) return
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), title: trimmed, completed: false },
    ])
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const deleteAll = () => setTasks([])

  const visibleTasks = useMemo(() => {
    return tasks
      .filter(t => {
        if (filter === 'active') return !t.completed
        if (filter === 'completed') return t.completed
        return true
      })
      .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
  }, [tasks, filter, search])

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <h1 className={styles.title}>To Do ZalogHub</h1>

        <TaskForm onAdd={addTask} />

        <input
          className={styles.search}
          placeholder="Search task"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className={styles.meta}>
          <span>Total Tasks: {tasks.length}</span>
          <button
            className={styles.deleteAll}
            onClick={deleteAll}
            disabled={tasks.length === 0}
          >
            Delete All
          </button>
        </div>

        <TaskFilters filter={filter} onChange={setFilter} />

        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
  )
}