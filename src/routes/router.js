import React from "react"
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Career, Portfolio, Skills } from '../pages';
import { Navigator } from '../components'

export function AppRoute(){
  return (
  <HashRouter>
    <Navigator />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/career" element={<Career />}/>
      <Route path="portfolio" element={<Portfolio />}/>
      <Route path="skills" element={<Skills />} />
    </Routes>
  </HashRouter>
  )
}