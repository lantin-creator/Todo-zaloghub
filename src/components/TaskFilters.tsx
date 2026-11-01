import type { TaskStatus } from '../types/types'
import styles from '../App.module.css'

interface Props {
  filter: TaskStatus
  onChange: (f: TaskStatus) => void
}

const OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

export function TaskFilters({ filter, onChange }: Props) {
  return (
    <div className={styles.filters}>
      {OPTIONS.map(o => (
        <button
          key={o.value}
          className={`${styles.filterBtn} ${
            filter === o.value ? styles.filterBtnActive : ''
          }`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}