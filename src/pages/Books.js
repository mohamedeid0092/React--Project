import axios from "axios"
import React, { useEffect, useState } from "react"
import { Content } from "../component/content";
export default function Books(){
    const [book, setbook ]= useState(null);
    const[items,setitems]=useState([])
    const press = (e) => {
if (e.target.value !== "" && e.keyCode === 13) {
    setbook(e.target.value)
}}
    useEffect(()=>{
        
axios.get("https://www.googleapis.com/books/v1/volumes",{
    params:{
        q:book
    }
}).then(function (response) {
    console.log(response.data.items[0]);
    setitems(response.data.items)
  })
  .catch(function (error) {
    console.log(error);
  })


    },[book])
return(
    <div >
        <h1 className="d-flex justify-content-center">book Finder App</h1>
        <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Enter Book name" onKeyUp={press}/>
    <div class="input-group-append">
      <button class="btn btn-success" type="submit">Search</button>  
     </div>

      </div>
<div>
    <div class="container">
<div class="card-columns">
{items?(items.map((content , index) => {
return < Content key={index} data={content} />})):<h1>loading.....</h1>}
</div>
</div>
</div>
    </div>
)
}