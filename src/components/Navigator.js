import React from 'react'
import { Link } from 'react-router-dom'

export function Navigator() {
  return (
    <ul>
      <li><Link to="/">index</Link></li>
      <li><Link to="/career">career</Link></li>
      <li><Link to="/skills">skills</Link></li>
      <li><Link to="/portfolio">portfolio</Link></li>
    </ul>
  )
}