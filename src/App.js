import "./styles/App.css"
import {BrowserRouter as Harshal,Route,Routes} from "react-router-dom"
import Header from './component/Header'
import Home from './component/Home.jsx'
import React from 'react'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'
import User from './component/User.jsx'


const App = () => {
  return (
    
    <Harshal>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/user/sad" element={<Contact/>}/>
       </Routes>
    </Harshal>
      
   
  )
}

export default App;

