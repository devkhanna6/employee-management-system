import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setemail('')
    setpassword('')
  }

  // ✅ demo login buttons
  const loginAsAdmin = () => {
    handleLogin("admin@company.com", "123")
  }

  const loginAsEmployee = () => {
    handleLogin("employee1@company.com", "123")
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-gray-800 text-white border border-emerald-400 rounded-2xl px-8 py-14 w-full max-w-sm shadow-xl'>
        
        <form 
          onSubmit={(e) => submitHandler(e)}
          className='flex flex-col items-center justify-center'
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white'
            type="email"
            placeholder='Enter your email'
          />

          <input 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-white'
            type="password"
            placeholder='Enter password'
          />

          <button className='text-white outline-none border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl mt-4'>
            Login
          </button>
        </form>

        {/* ✅ Demo Login Buttons */}
        <div className='flex flex-col gap-3 mt-5'>
          <button
            onClick={loginAsAdmin}
            className='bg-purple-600 py-2 rounded-lg text-white'
          >
            Login as Demo Admin
          </button>

          <button
            onClick={loginAsEmployee}
            className='bg-blue-600 py-2 rounded-lg text-white'
          >
            Login as Demo Employee
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login
