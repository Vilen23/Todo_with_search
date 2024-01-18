import { selector } from "recoil";
import { searchatom } from "./Search";
import { Todos } from "./InputState";

const searched = selector({
    key:"searched",
    get:(props)=>{
        const item = props.get(searchatom)
        const data = props.get(Todos)

        return data.filter((x)=>x.title.toLowerCase().includes(item.toLowerCase()) || x.interest.toLowerCase().includes(item.toLowerCase()))
    }
})  

export {
    searched
}