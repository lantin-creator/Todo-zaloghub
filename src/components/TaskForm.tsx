import { useState } from 'react'
import styles from '../App.module.css'

interface Props {
  onAdd: (title: string) => void
}

export function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="New task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={styles.addBtn} type="submit">
        Add
      </button>
    </form>
  )
}