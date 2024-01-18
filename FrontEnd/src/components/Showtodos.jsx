import { useRecoilState, useRecoilValue ,useSetRecoilState} from "recoil"
import { Todos } from "../States/InputState"
import { useEffect } from "react"
import axios from "axios"

export function Showtodos(){
    const setTodos = useSetRecoilState(Todos)
  useEffect(()=>{
    const fetcheddata = async()=>{
      const response  = await axios.get("http://localhost:3000/todos")
      setTodos(response.data.todos)
    }
    fetcheddata();
  },[])
  const todos = useRecoilValue(Todos)
    return <div className="flex flex-wrap">
        {todos.map((todo)=>{
            return <div className="flex flex-wrap mt-10 ml-10">
                <div className='bg-slate-100 p-4 drop-shadow-lg flex flex-col rounded-2xl text-center w-[250px] justify-center' >
                    <p className="font-bold text-2xl">Name- {todo.title}</p> 
                    <p className="font-bold text-1xl">Crush- {todo.interest}</p>
                </div>
            </div>
        })}
    </div>
    
}