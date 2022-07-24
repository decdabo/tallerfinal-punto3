import React, { useState } from 'react'

export const SectionComponent = ({ section : { title, content }, i }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <section className={ `cv_section mt-5 section-${ ((i%2) !== 0) ? "right" : "left" }` } onClick={handleToggleOpen}>
      <h3 className='h3-reference'> { title }</h3>
      <div className="div-line"></div>
      <p className={`${ isOpen && "active" }`}>
        {content}
      </p>
    </section>
  )
}
