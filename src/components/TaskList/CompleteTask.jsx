import React from 'react'

const CompleteTask = ({data, empId, updateTaskStatus}) => {
  return (
    <div className="shrink-0 h-full w-82 p-5 bg-green-300 rounded-xl flex flex-col justify-between shadow-md">
      
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full font-medium">
            {data.category}
          </span>
          <span className="text-gray-700">{data.date}</span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">
          {data.title}
        </h2>

        <p className="text-sm text-gray-800">
          {data.description}
        </p>
      </div>

      <button 
      onClick={() => updateTaskStatus(empId, data.id, "completed")}
      className="bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
        Finished
      </button>
    </div>
  )
}

export default CompleteTask
