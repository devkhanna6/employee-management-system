import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const AcceptTask = ({data}) => {

  const [employees, setEmployees] = useContext(AuthContext)

  const updateTask = (status) => {

    const updatedEmployees = employees.map(emp => {

      if(!emp.tasks.some(t => t.id === data.id)) return emp

      const updatedTasks = emp.tasks.map(task => {

        if(task.id === data.id){
          return {
            ...task,
            active:false,
            newTask:false,
            completed: status === "completed",
            failed: status === "failed"
          }
        }

        return task
      })

      // ✅ ALWAYS recalc numbers (never manual +/-)
      const updatedNumbers = {
        active: updatedTasks.filter(t=>t.active).length,
        newTask: updatedTasks.filter(t=>t.newTask).length,
        completed: updatedTasks.filter(t=>t.completed).length,
        failed: updatedTasks.filter(t=>t.failed).length
      }

      return {
        ...emp,
        tasks: updatedTasks,
        taskNumbers: updatedNumbers
      }
    })

    setEmployees(updatedEmployees)
    localStorage.setItem("employees", JSON.stringify(updatedEmployees))
  }

  return (
    <div className='shrink-0 h-full w-82 p-5 bg-red-400 rounded-2xl flex flex-col shadow-md'>

      <div className='flex justify-between items-center mb-2'>
        <span className='bg-red-600 text-white px-3 py-1 rounded text-xs'>
          {data.category}
        </span>
        <span className='text-xs'>{data.date}</span>
      </div>

      <h2 className='text-lg font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>

      <div className='flex gap-2 mt-auto'>
        <button
          onClick={()=>updateTask("completed")}
          className='bg-green-600 px-3 py-1 rounded text-white'>
          Completed
        </button>

        <button
          onClick={()=>updateTask("failed")}
          className='bg-red-600 px-3 py-1 rounded text-white'>
          Failed
        </button>
      </div>

    </div>
  )
}

export default AcceptTask
