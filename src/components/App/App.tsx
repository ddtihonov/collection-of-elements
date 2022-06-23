import React, { FC} from 'react'
import { Route, Routes} from 'react-router-dom'
import app from './App.module.scss'
import { Main, Preloaders, Buttons } from '../../pages'

export const App: FC = () =>{

  return (
    <div className={app.page}>
          <Routes>
            <Route  path='/'  element={
                      <Main/>
                  } />
          <Route  path='/preloaders'  element={
                      <Preloaders/>
                  } />
          <Route  path='/buttons'  element={
                      <Buttons/>
                  } />                
          </Routes>
    </div>
  )
}