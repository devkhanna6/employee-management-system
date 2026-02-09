import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const AllTask = () => {

  const [userData] = useContext(AuthContext)



  return (
    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5 rounded-lg'>
      
      {/* Header */}
      <div className='flex justify-between items-center bg-[#2a2a2a] text-gray-200 py-3 px-4 rounded mb-3 font-semibold'>
        <h2 className='w-1/5'>Employee</h2>
        <h3 className='w-1/5 text-center'>New</h3>
        <h5 className='w-1/5 text-center'>Active</h5>
        <h5 className='w-1/5 text-center'>Completed</h5>
        <h5 className='w-1/5 text-center'>Failed</h5>
      </div>

      {/* Body */}
      <div className='max-h-60 overflow-y-auto space-y-2'>
        {userData?.map(function (elem, index) {
          return (
            <div
              key={index}
              className='flex justify-between items-center bg-[#242424] text-gray-300 py-2 px-4 rounded hover:bg-[#2f2f2f] transition'
            >
              <h2 className='w-1/5 font-medium text-white'>
                {elem.firstName}
              </h2>

              <h3 className='w-1/5 text-center text-blue-400'>
                {elem.taskNumbers.newTask}
              </h3>

              <h5 className='w-1/5 text-center text-yellow-400'>
                {elem.taskNumbers.active}
              </h5>

              <h5 className='w-1/5 text-center text-green-400'>
                {elem.taskNumbers.completed}
              </h5>

              <h5 className='w-1/5 text-center text-red-400'>
                {elem.taskNumbers.failed}
              </h5>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default AllTask
