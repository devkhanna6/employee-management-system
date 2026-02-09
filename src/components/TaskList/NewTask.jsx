import React from 'react'

const NewTask = ({data, empId, updateTaskStatus}) => {
  return (
    <div className="shrink-0 h-full w-82 p-5 bg-blue-300 rounded-2xl flex flex-col shadow-md">

      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {data.category}
          </h3>
          <h4 className="text-xs text-gray-700 font-medium">
            {data.date}
          </h4>
        </div>

        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {data.title}
        </h2>

        <p className="text-sm mt-2 text-gray-800">
          {data.description}
        </p>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={()=>updateTaskStatus(empId, data.id, "completed")}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium">
          Completed
        </button>

        <button
          onClick={()=>updateTaskStatus(empId, data.id, "failed")}
          className="w-full bg-red-600 text-white py-2 rounded-lg font-medium">
          Failed
        </button>
      </div>

    </div>
  )
}

export default NewTask
