import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './components/Auth/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  // ✅ restore login on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const parsed = JSON.parse(loggedInUser)
      setUser(parsed.role)
      setLoggedInUserData(parsed.data)
    }
  }, [])

  // ✅ login handler
  const handleLogin = (email, password) => {

    // admin login
    if(email === 'admin@company.com' && password === '123'){
      setUser('admin')
      setLoggedInUserData(null)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role:'admin', data:null })
      )
      return
    }

    // employee login
    if(userData){
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      )

      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role:'employee', data:employee })
        )
        return
      }
    }

    alert("Invalid credentials")
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin}/>}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser}/>
      )}

      {user === 'employee' && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App
