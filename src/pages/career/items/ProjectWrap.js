import React from 'react'
import { convertDateDotExceptDay } from '../../../utils'

export function ProjectWrap({ career }) {
  return (
    <div className='career-content-projects-content'>
      {career.projects.map(function (project) {
        function totalTime() {
          const t = (parseInt(project.projectEnd.split('-')[1]) - parseInt(project.projectStart.split('-')[1])) + 1
          return t < 0 ? t + 12 : t
        }

        return (
          <div key={project.id} className='project-wrap'>
            <p>{project.name}</p>
            <p>{convertDateDotExceptDay(project.projectStart)} - {convertDateDotExceptDay(project.projectEnd)} ({totalTime()}개월)</p>
            <ul>
              {project.descriptions.map(function (description) {
                return (
                  <li key={description}>- {description}</li>
                )
              })}
            </ul>
            <p>{project.usedSkills.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}