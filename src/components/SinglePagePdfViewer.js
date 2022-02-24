import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function SinglePagePdfViewer({ file }) {
  const [pages, setPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [width, setWidth] = useState(window.innerWidth / 2);

  function documentLoadSuccess({ numPages }) {
    setPages(numPages)
  }

  window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth
    const w = windowWidth > 500 ? windowWidth / 2 : windowWidth - 50
    setWidth(w)
  })

  return (
    <div className='pdf-item'>
      <Document
        file={file}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={documentLoadSuccess}>
        <Page width={width} pageNumber={currentPage} />
      </Document>
      <p className='pdf-item-controller'>
        <span onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}>
          &lt;
        </span>
        <span>{currentPage} / {pages}</span>
        <span onClick={() => currentPage < pages ? setCurrentPage(currentPage + 1) : null}>
          &gt;
        </span>
      </p>
    </div>
  )
}