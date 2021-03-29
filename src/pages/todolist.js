import { useState } from "react";
import {Item} from  './item'
 export default function Todolist(props){
    const [item , setitem] = useState([]);
    const enterkey = (e) => {
    
        if (e.target.value !== "" && e.keyCode === 13) {
            setitem((item) => [...item, e.target.value])}}

    const itemdelete = (index) => {
                
                let x = [...item];
                x.splice(index, 1);
                setitem(x);
              };
        return(
            <>
    
<br></br>
<div class="container">
<div class="row text-center">
    <h1 className="d-flex justify-content-center"> welcome to do list</h1>
</div>
<div class="row">
    <div class="col-4"></div>
    <div class="col-4 ">
        <div class="row bg-primary">
            <div class="col-12">
            <h1> To Do APP</h1>
<p> enter your item</p>
<input type="text" placeholder="enter your item" onKeyUp={enterkey}></input>
<button type="button" class="btn btn-primary  text-white" >add</button>
        </div>
            </div>
<div class="row">
{item.map((user , index) => {
return < Item key={index} data={user} deleteitem={() => {itemdelete(index)}}/>})}
<br></br>
</div>
    </div>
    <div class="col-4">
<p></p>
    </div>
</div>
</div>



            </>
        )
    }