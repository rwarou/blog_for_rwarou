import React from 'react'
import { convertDateDotExceptDay } from '../../../utils'

export function ProjectWrap({ career }) {
  return (
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
  )
}