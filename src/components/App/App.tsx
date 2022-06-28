import React, { FC} from 'react'
import { Route, Routes} from 'react-router-dom'
import app from './App.module.scss'
import { Main, Preloaders, Buttons, Sliders, Headings } from '../../pages'

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
          <Route  path='/sliders'  element={
                      <Sliders/>
                  } />
          <Route  path='/Headings'  element={
                      <Headings/>
                  } />                                    
          </Routes>
    </div>
  )
}