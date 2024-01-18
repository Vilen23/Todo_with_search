import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { Routes,Route } from 'react-router-dom'
import { TodoInput } from './components/TodoInput'
import { Showtodos } from './components/Showtodos'
import { Card } from './components/Card'
import { Searchtodo } from './components/Searchtodo'
function App() {
    
  return (
    <RecoilRoot>
      <Navbar></Navbar>

      <Routes>
          <Route path='/CreateTodo' element={<Card comp={<TodoInput/>}></Card>}/>
          <Route path='/Todos' element={<Showtodos/>}/>
          <Route path='/filtered' element={<Searchtodo/>}/>
      </Routes>
    </RecoilRoot>
    
  )
}

export default App