import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  render() {
        return (<>
    <Router>
        <Navbar/>
        {/* <div className='container'>
        <News country="in" category ="technology"/>
      </div> */}

        <Routes>
        
           <Route exact path ="/" element={<News key="general" country="in" category ="general"/>}/>
           <Route exact path ="/Technology"element ={<News key="technology" country="in" category ="technology"/>}/>
           <Route exact path ="/Business"element={<News key="business" country="in" category ="business"/>}/>
           <Route exact path ="/Sports"element={<News key="sports" country="in" category ="sports"/>}/>
           <Route exact path ="/Technology"element={<News key="technology" country="in" category ="technology"/>}/>
           <Route exact path ="/Health"element={<News key="health" country="in" category ="health"/>}/>
           <Route exact path ="/Entertainment"element={<News key="Entertainment" country="in" category ="entertainment"/>}/>
           <Route exact path ="/Science"element={<News key="Science" country="in" category ="science"/>}/>
        
        </Routes>
      </Router></>

    )
  }
}
