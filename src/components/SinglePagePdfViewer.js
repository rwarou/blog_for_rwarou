import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function SinglePagePdfViewer({ file }) {
  const [pages, setPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  function documentLoadSuccess({ numPages }) {
    setPages(numPages)
  }

  return (
    <div className='pdf-item'>
      <Document
        file={file}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={documentLoadSuccess}>
        <Page scale={0.5} pageNumber={currentPage} />
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