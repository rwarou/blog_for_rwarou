import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function SinglePagePdfViewer({ file }) {
  const [pages, setPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const windowHeight = window.screen.height
  const windowWidth = window.screen.width
  const height = windowHeight > 450 ? windowHeight / 3 : windowHeight - 50
  const width = windowWidth > 450 ? windowWidth / 3 : windowWidth - 50

  function documentLoadSuccess({ numPages }) {
    setPages(numPages)
  }

  return (
    <div className='pdf-item'>
      <Document
        file={file}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={documentLoadSuccess}>
        <Page width={width} height={height} pageNumber={currentPage} />
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