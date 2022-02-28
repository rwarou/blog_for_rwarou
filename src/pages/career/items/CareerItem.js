import React from 'react'
import { convertDateDot } from '../../../utils'
import { ProjectWrap } from './ProjectWrap'

export function CareerItem({ careers }) {
  return (
    careers.map(function (career) {
      return (
        <div key={career.id} className='career-item'>
          <div className='career-title'>
            <div>{career.company}</div>
            <div>{convertDateDot(career.careerStart)} - {career.careerEnd ? convertDateDot(career.careerEnd) : "재직중"}</div>
          </div>
          <div className='career-content-task'>
            <div>담당업무</div>
            <div>{career.mainTask}</div>
          </div>
          <div className='career-content-projects'>
            <p className='career-content-projects-title'>프로젝트</p>
            <ProjectWrap career={career} />
          </div>
        </div>
      )
    })
  )
}