import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export function Navigator() {
  return (
    <ul className='nav'>
      <Link to="/"><li><img src={logo} /></li></Link>
      <Link to="/career"><li><p>career</p></li></Link>
      <Link to="/skills"><li><p>skills</p></li></Link>
      <Link to="/portfolio"><li><p>portfolio</p></li></Link>
    </ul>
  )
}