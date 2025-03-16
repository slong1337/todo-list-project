import clsx from "clsx"
import { TrashIcon } from '@/components/icons/TrashIcon'
import { cursorTo } from "node:readline"

export type TaskProps = {
    id: number
    value: string
    status: boolean
    deleteTask: (id: number) => void
    toggleTask: (id: number) => void
    className?: string
  }
  
  export const TaskTodo = ({ id, value, status, deleteTask, toggleTask, className }: TaskProps) => {
    return (
      <>
        <div className="flex mx-auto rounded-full my-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700" onClick={() => toggleTask(id)}>
          
          <input type="checkbox" 
          checked={status} 
          className="mx-2 accent-gray-300"/>

          <p 
            className={clsx( status ? "line-through" : "" )}
            style={{ cursor: "default" }}>{value}
          </p>

          <button 
            onClick={() => deleteTask(id)}
            className="mx-2">
            <TrashIcon className="w-4 h-4 text-black/40" />
          </button>

        </div>
      </>
    )
  }
  
  export default TaskTodo
