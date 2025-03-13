import { useState } from "react"
import TodoItem from "@/scopes/App-Home/components/TodoItem"
import TaskTodo from "@/scopes/App-Home/components/TaskTodo"

interface Task {
  id: number
  value: string
  status: boolean
}


export const Home = () => {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])
  const [done, setDone] = useState("")
  
  let copiTasks = tasks

  const addTask = () => {
    if (!todo.trim()) return

    const newTask: Task = {
      id: Math.random(),
      value: todo,
      status: false,
    }

    setTasks([newTask, ...tasks])
    setTodo("")
  }

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }
  const toggleTask = (id: number) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === id ? { ...task, status: !task.status } : task
      )
  
      return updatedTasks.sort((a, b) => Number(a.status) - Number(b.status))
    })
  }

  switch (done) {
    case 'all':
        copiTasks = tasks
      break
      case 'active':
        copiTasks = tasks.filter(task => task.status === false)
      break
      case 'complete':
        copiTasks = tasks.filter(task => task.status === true)
      break
    default:
    break
  }
  

  return (
    <>
      <div className="w-full px-4">
        <TodoItem todo={todo} setTodo={setTodo} addTask={addTask} />
        {copiTasks.map((task) => (
          <div key={task.id} className="flex">
            <TaskTodo
              id={task.id}
              value={task.value}
              status={task.status}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          </div>
        ))}
      </div>
  
      <div className="flex flex-wrap gap-4 justify-center mt-4 ">
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" onClick={() => setDone('all')}>Все</button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" onClick={() => setDone('active')}>Активные</button>
        <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300" onClick={() => setDone('complete')}>Выполненные</button>
      </div>
    </>
  )
}

export default Home