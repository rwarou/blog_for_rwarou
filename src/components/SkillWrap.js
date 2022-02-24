import React from 'react'

export function SkillWrap({ skills }) {
  return (
    <div className='skill-wrap'>
      {skills.map(function (skill) {
        return (
          <div key={skill.id} className='skill-item'>
            <img src={skill.img} />
            <p className='skill-name'>{skill.name}</p>
            <p className='skill-rate'>{skill.rate} / 5.0</p>
            <ul>
              {skill.descriptions.map(function (description) {
                return <li key={description}>- {description}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}