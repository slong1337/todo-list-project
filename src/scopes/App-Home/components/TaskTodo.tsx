import clsx from "clsx"
import { TrashIcon } from '@/components/icons/TrashIcon'

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
        <div className="flex mx-auto rounded-full my-1 bg-gray-200 hover:bg-gray-300">
          <input type="checkbox" 
          checked={status} 
          onChange={()=> toggleTask(id)} 
          className="mx-2"/>
          <p className={clsx(status ? "line-through" : "" )}>{value}</p>
          <button onClick={() => deleteTask(id)}
          className="mx-2">
            <TrashIcon className="w-4 h-4 text-black/40" />
          </button>
        </div>
      </>
    )
  }
  
  export default TaskTodo