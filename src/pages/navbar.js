import {Link} from 'react-router-dom'
import CounterContext from "../context/countercontext";
import React, { useState,useContext } from "react";
import { useSelector } from 'react-redux';
export default function Navbar(props){
    // const count = useSelector((state)=>(state.Counter))
    const product = useSelector(state => state.products)
    const { Count, SetCount } = useContext(CounterContext)
    return(

    <nav class="navbar navbar-expand-sm bg-light ">
<ul class="navbar-nav ">
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/">Home</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/aboutus">about</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/Todolist">to-do</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/books">Books</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/count">Counter ({Count})</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-black-50" href="#"><Link to="/product">Products</Link></a>
    </li>
  </ul>
  <span><strong>Total products ({Object.values(product).length})</strong></span>
  <a class="nav-link text-black-50 m-auto" href="#"><Link to="/login">login</Link></a>
</nav>
)}