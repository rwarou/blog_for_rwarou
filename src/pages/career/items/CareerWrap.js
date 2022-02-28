import React from 'react'
import { startCareer } from '../../../constants'
import { intervalTime, millisecondToDate, convertDateDot, convertDateDotExceptDay } from '../../../utils'
import { careers } from '../../../states'
import { CareerItem } from './CareerItem'

export function CareerWrap() {
  const careerStartDate = new Date(startCareer)
  const nowDate = new Date()

  const date = intervalTime(nowDate, careerStartDate)

  return (
    <div className='career-wrap'>
      <div className='career-total'>총 경력 : {millisecondToDate(date)}</div>
      <CareerItem careers={careers} />
    </div>
  )
}