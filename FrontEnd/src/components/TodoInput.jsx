import { useRecoilState } from "recoil"
import {Inputtitle,InputInterest} from "../States/InputState.jsx"
import axios from "axios";
export function TodoInput(){
    const[title,setTitle] = useRecoilState(Inputtitle);
    const[interest,setInterest] = useRecoilState(InputInterest);
    return <>
        <div className="flex flex-col items-center">
            <input type="text" placeholder=" Your Name" onChange={(e)=>{
                setTitle(e.target.value)
            }} 
            className='w-[240px] h-[40px] text-2xl  rounded-lg focus:outline-none focus:shadow-lg pl-2 '/> <br />
            <input type="text" placeholder=" Interest" onChange={(e)=>{
                setInterest(e.target.value)
            }}
            className='w-[240px] h-[40px] text-2xl  rounded-lg focus:outline-none  focus:shadow-lg  pl-2 ' /> <br />
            <button onClick={async()=>{
                const response = await axios.post("http://localhost:3000/addtodo",{
                    title,
                    interest
                })
                if(response.status === 200){
                    alert("Your todo added")
                }

            }}
            className="bg-slate-800 text-white w-[90px] h-10 rounded-full font-bold hover:drop-shadow-lg hover:scale-105 relative  ">Add Todo</button>
        </div>
    </>
}
