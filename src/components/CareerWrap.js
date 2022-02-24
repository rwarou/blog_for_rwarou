import React from 'react'
import { startCareer } from '../constants'
import { intervalTime, millisecondToDate, convertDateDot } from '../utils'
import { careers } from '../states'

export function CareerWrap() {
  const careerStartDate = new Date(startCareer)
  const nowDate = new Date()

  const date = intervalTime(nowDate, careerStartDate)

  return (
    <div className='career-wrap'>
      <div className='career-total'>총 경력 : {millisecondToDate(date)}</div>
      {careers.map(function (career) {
        return (
          <div key={career.id} className='career-item'>
            <div className='career-title'>
              <div>{career.company}</div>
              <div>{convertDateDot(career.careerStart)} - {career.careerEnd ? convertDateDot(career.careerEnd) : "재직중"}</div>
            </div>
            <div className='career-content'>
              <div>주요 업무</div>
              <div>{career.mainTask}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}