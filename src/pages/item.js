import { useState } from "react"

export const Item=(props)=>{
const [complete,setcomplete]=useState(
    {
        type: "complete",
        style: "",
    }
)
    const[auth,setauth]=useState(false)

const changetype =()=>{
    if(auth=== false){
        setauth(true);
        setcomplete(
            {
                ...complete,
                type:"undo",
                style:"line-through"
        })
    }else{
        setauth(false);
        setcomplete({
                ...complete,
                type:"complete",
                style:""
        })
    }
}
    return (
    <>
    <div>
    <button onClick={props.deleteitem}>delete</button>
    <button  onClick ={changetype}> {complete.type}</button>
    <span style={{textDecoration:complete.style}}>{props.data}</span>
    </div>
    
    </>
)}