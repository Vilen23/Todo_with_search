import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { searchatom } from "../States/Search";
import { Todos } from "../States/InputState";
import axios from "axios";

export function Search() {
  const setSearch = useSetRecoilState(searchatom);
  const navigate = useNavigate();
  const setTodos = useSetRecoilState(Todos)

  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className=" ml-10 mr-4 rounded focus:outline-none focus:shadow-lg focus:shadow-gray text-black font-normal pl-2 px-[2px] "
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      onClick={async()=>{
              
                const response  = await axios.get("http://localhost:3000/todos")
                setTodos(response.data.todos)
                navigate("/filtered")
              
           
        
      }}/>
      
    </>
  );
}
