import { Navigate, useNavigate } from "react-router-dom"
import { Search } from "./Search";

export function Navbar(){
    const navigate = useNavigate();
    return <div>
        <nav className="h-[70px] bg-slate-800 flex justify-end align-middle text-white items-center font-extrabold px-10 text-xl">
            <p className="mr-10 cursor-pointer" onClick={()=>{
                navigate("/CreateTodo")
            }}>Create Todo</p>
            <p className="cursor-pointer" onClick={()=>{
                navigate("/Todos")
            }}>Todos</p>
            <Search></Search>
        </nav>
    </div>
}