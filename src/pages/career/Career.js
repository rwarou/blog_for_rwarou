import React from 'react'
import { startCareer } from '../../constants'
import { intervalTime, convertDate } from '../../utils'
import { careers } from '../../states'

export function Career() {
  const careerStartDate = new Date(startCareer)
  const nowDate = new Date()

  const date = intervalTime(nowDate, careerStartDate)

  convertDate(date)

  return (
    <div>
      {careers.map(function (career) {
        return (
          <div key={career.id}>
            <div>총 경력 : {convertDate(date)}</div>
            <div>{career.company}</div>
          </div>
        )
      })}
    </div>
  )
}