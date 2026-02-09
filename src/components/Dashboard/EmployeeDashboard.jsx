import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../Auth/AuthProvider'

const EmployeeDashboard = (props) => {

  const [employees] = useContext(AuthContext)

  // ✅ always fetch fresh employee from context
  const employee =
    employees?.find(emp => emp.id === props.data.id)
    || props.data

  return (
    <div className='p-10 bg-[#1C1C1C] '>

      <Header changeUser={props.changeUser} data={employee}/>
      <TaskListNumber data={employee}/>

      <TaskList
        data={employee}
        empId={employee.id}
      />

    </div>
  )
}

export default EmployeeDashboard

