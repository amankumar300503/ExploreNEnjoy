import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user,setuser] = useState(null)
    const [ready,setready] = useState(false)
    useEffect(()=>{
       if(!user){
         axios.get('/profile').then(({data})=>{
            setuser(data)
         }) 
         setready(true)
       }
    },[])
    return(
        <UserContext.Provider value={{user,setuser,ready}}>
            {children}
        </UserContext.Provider>
    )
}