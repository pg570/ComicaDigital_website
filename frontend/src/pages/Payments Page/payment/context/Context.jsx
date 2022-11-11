import { useState } from "react";
import { createContext } from "react";


export const AppProvider=createContext()

export const ContextProvider = ({ children }) => {
  const [data,setData]=useState([])
  return (
    <AppProvider.Provider value={{data,setData}}>
        {children}
    </AppProvider.Provider>
  )

}
