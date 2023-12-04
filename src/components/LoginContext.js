import React,{useState} from 'react'
import { createContext } from 'react'

export const adminlogin=createContext()

function LoginContext({children}) {
    const [loginData,setLoginData]=useState(false)
    return (
      <div>
          <adminlogin.Provider value={{loginData,setLoginData}}>
          {children}
          </adminlogin.Provider>
      </div>
    )
}

export default LoginContext