import { useState, useRef } from 'react'
import Wrapper from '../assets/wrappers/Navbar_90'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'

const PdfPage = () => {
 
  
  return (
    <Wrapper>

      <div className="flex-1 px-8 py-12 grid">
          <div className="pdf-container">
         
            <embed
              src="/supablogdemo.pdf"  // 正確的路徑
              type="application/pdf"
              width="100%"
              height="800px"
            />
          </div>
        </div>
    </Wrapper>
  )
}

export default PdfPage

