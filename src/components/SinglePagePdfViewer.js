import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function SinglePagePdfViewer({ file }) {
  const [pages, setPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [width, setWidth] = useState(window.innerWidth > 500 ? window.innerWidth / 2 : window.innerWidth - 50);

  window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth
    const w = windowWidth > 500 ? windowWidth / 2 : windowWidth - 50
    setWidth(w)
  })

  function documentLoadSuccess({ numPages }) {
    setPages(numPages)
  }

  const previous = () => currentPage > 1 ? setCurrentPage(currentPage - 1) : null
  const next = () => currentPage < pages ? setCurrentPage(currentPage + 1) : null

  return (
    <div className='pdf-item'>
      <Document
        file={file}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={documentLoadSuccess}>
        <Page width={width} pageNumber={currentPage} />
      </Document>
      <p className='pdf-item-controller'>
        <MdArrowBackIos
          className="arrow"
          size="32"
          onClick={previous}
        />
        <span className="page-count">{currentPage} / {pages}</span>
        <MdArrowForwardIos
          className="arrow"
          size="32"
          onClick={next}
        />
      </p>
    </div >
  )
}