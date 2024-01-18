import { useRecoilValue } from "recoil";
import { searched } from "../States/filter";

export function Searchtodo(){
    const filteredData = useRecoilValue(searched)
    return <div className="flex flex-wrap   ">
        {filteredData.map((item)=>{
            return <div className="flex flex-wrap mt-10 ml-10" >
            <div className='bg-slate-100 p-4 drop-shadow-lg flex flex-col rounded-2xl text-center w-[250px] justify-center' >
                <p className="font-bold text-2xl">Name- {item.title}</p> 
                <p className="font-bold text-1xl">Crush-{ item.interest}</p>
            </div>
        </div>
        })}
    </div>
}