import React from "react";
import userEntradas from '../services/entradas'
import userDespesas from '../services/despesa'
export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [totalDespesas,setTotalDespesas] = React.useState("")
    const [totalEntradas,setTotalEntradas] = React.useState(0)
    const id = localStorage.getItem("user")
    return (
        <GlobalContext.Provider value = {{totalDespesas,totalEntradas}}>{children} </GlobalContext.Provider>
    )
}