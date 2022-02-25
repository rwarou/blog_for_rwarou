import React from 'react'
import { Skills, Portfolio, Career } from '../'

export function Home() {
  return (
    <div className='home-wrap'>
      <Career />
      <div style={{ padding: 50 }}><hr /></div>
      <Skills />
      <div style={{ padding: 50 }}><hr /></div>
      <Portfolio />
    </div>
  )
}