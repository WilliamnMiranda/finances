import React from "react"

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {

    const [logado,setLogado]  = React.useState(null);

    React.useEffect(()=>{
        const user = localStorage.getItem("user")
            if(user){
                setLogado(true)
            }
            else{
                setLogado(false)
            }
    },[])
    return (
        <GlobalContext.Provider value={{logado,setLogado}}>
            {children} 
        </GlobalContext.Provider>
    )
}