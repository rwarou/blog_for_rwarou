import React from 'react'
import { SinglePagePdfViewer } from '../../components'
import dentalbodaAppFlow from '../../assets/files/dentalboda-app-flow.pdf'

export function Portfolio() {
  return (
    <div className='pdf-wrap'>
      <SinglePagePdfViewer file={dentalbodaAppFlow} />
      <SinglePagePdfViewer file={dentalbodaAppFlow} />
      <SinglePagePdfViewer file={dentalbodaAppFlow} />
    </div>
  )
}