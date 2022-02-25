import React from 'react'
import { startCareer } from '../constants'
import { intervalTime, millisecondToDate, convertDateDot, convertDateDotExceptDay } from '../utils'
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
            <div className='career-content-task'>
              <div>담당업무</div>
              <div>{career.mainTask}</div>
            </div>
            <div className='career-content-projects'>
              <p className='career-content-projects-title'>프로젝트</p>
              <div className='career-content-projects-content'>
                {career.projects.map(function (project) {
                  return (
                    <div key={project.id} className='project-wrap'>
                      <p>{project.name}</p>
                      <p>{convertDateDotExceptDay(project.projectStart)} - {convertDateDotExceptDay(project.projectEnd)}</p>
                      <ul>
                        {project.descriptions.map(function (description) {
                          return (
                            <li key={description}>{description}</li>
                          )
                        })}
                      </ul>
                      <p>{project.usedSkills.join(', ')}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}