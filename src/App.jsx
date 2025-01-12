import React from 'react'
import NavBar from './navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import body from './body'
import Profile from './Profile'
import login from './login'
const App = () => {
  return (
    <>
    <BrowserRouter basename='/'>
    <Route>
    <Route path='/'element={body}>
    <Route path='/Profile'element={Profile}></Route>
    <Route path='/login'element={login}></Route>

    </Route>
    
    </Route>
    </BrowserRouter>

    <NavBar/>
    </>
    
  )
}

export default App