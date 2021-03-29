import React, { useState,useContext } from "react"
import {useDispatch,useSelector}from "react-redux"
import CounterContext from "../context/countercontext";
import{SetCounter}from '../store/counteraction'
export default function Counterpage(props){
// const dispatch = useDispatch()
// const Counter = useSelector((state)=>(state.Counter))



const { Count, SetCount } = useContext(CounterContext)
let counter =Count
const decrment = ()=>{
    if(counter>0){
    // dispatch(SetCounter(--count))\
    SetCount(--counter)}
}
const incerment=()=>{
    
        SetCount(++counter)
    
    // dispatch(SetCounter(++count))
    
}
const reset=()=>{
    // dispatch(SetCounter(++count))
    counter=0
    SetCount(counter)
}
return(
    <>
    <br></br>
    <div className="d-flex justify-content-center">
        <h1> count = {counter}</h1>
        <button type="button" onClick={incerment}>+</button>
        <button type="button" onClick={decrment}>-</button>
        <button type="button" onClick={reset}>Reset</button>
    </div>
    </>
)
}
