import React from 'react'
import {Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import './App.css'
function App(){
  return (
    <BrowserRouter>
    <div className='App'>
      
      <Routes>
        <Route path = '/' element={<HomePage/>}></Route>
        <Route path = '/login/:pagename'  element={<LoginPage/> }></Route>
      </Routes>
      
    </div></BrowserRouter>
  )
}
export default App;