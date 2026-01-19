import {createContext, useContext ,useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const UsersContext = createContext()

export function UsersProvider({children}){
const {data} = useFetch("https://dummyjson.com/users?limit=50")
const [users ,setUsers] = useState([])


useEffect(()=>{
if(data?.users){
    setUsers(data.users)
}
},[data])

function addUser(newUser){
    setUsers((prev)=> [{...newUser ,id:Date.now()}, ...prev])
}

function updateUser(updatedUser){
    setUsers((prev)=>
    prev.map((u)=>(u.id === updatedUser.id ? updatedUser:u))
    )
}

function deleteUser(userId){
 setUsers((prev) => prev.filter((u) => u.id !== userId))
}

return (
    <UsersContext.Provider
      value={{ users, addUser, updateUser, deleteUser }}
    >
      {children}
    </UsersContext.Provider>
)
}

export function useUsers(){
    return useContext(UsersContext)
}