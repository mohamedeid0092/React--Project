import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
// import Home from './pages/home';
// import { Todolist } from './pages/todolist';
// import Aboutus from './pages/aboutus';
// import Books from './pages/Books';
// import { Register } from './pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ lazy, Suspense, useState } from 'react';
import { CounterContextProvider } from "./context/countercontext"
import Navbar from './pages/navbar';

const Home=React.lazy(()=> import('./pages/home'))
const Aboutus=React.lazy(()=>import('./pages/aboutus'));
const Books=React.lazy(()=>import('./pages/Books'))
const Register=React.lazy(()=>import('./pages/register'))
const Todolist=React.lazy(()=>import('./pages/todolist'))
const Counter=React.lazy(()=>import('./pages/counter'))
const product = React.lazy(()=>import('./pages/products'))
function App() {
  const [Count, SetCount] = useState(0)
  return (

<CounterContextProvider value={{Count , SetCount}}>
<Router>

<Navbar/>
    
<Suspense fallback="loading.....">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route  path="/Todolist" exact component={Todolist}/>
        <Route  path="/aboutus" exact component={Aboutus}/>
        <Route  path="/books" exact component={Books}/>
        <Route  path="/login" exact component={Register}/>
        <Route  path="/count" exact component={Counter}/>
        <Route  path="/product" exact component={product}/>
      </Switch>
      </Suspense>
      
    
    </Router>
    </CounterContextProvider>
    
  );
}

export default App;
