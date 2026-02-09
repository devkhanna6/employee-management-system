import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'


const TaskList = ({data, empId, updateTaskStatus}) => {

  const [userData] = useContext(AuthContext)

  const employee = userData?.find(emp => emp.firstName === data.firstName) || data
  // console.log(data)
  return (
    <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-60  w-full py-5 mt-10 '>
      {employee.tasks.map((elem,index)  => {

        if(elem.active){
          return <AcceptTask key={index} data={elem} empId={empId}
            updateTaskStatus={updateTaskStatus} employeeName={data.firstName}/>
        }

        if(elem.newTask){
          return <NewTask key={index} data={elem} empId={empId}
            updateTaskStatus={updateTaskStatus}/>
        }
        if(elem.completed){
          return <CompleteTask key={index} data={elem} empId={empId}
            updateTaskStatus={updateTaskStatus}/>
        }
        if(elem.failed){
          return <FailedTask key={index} data={elem} empId={empId}
            updateTaskStatus={updateTaskStatus}/>
        }

      })}
    </div>
  )
}

export default TaskList