import React from 'react'
import { Link } from 'react-router-dom'

export const NavCv = ({ path = 'cv' }) => {
  const links = [ 'Jobs', 'Family', 'Cv', 'Personal', 'Study' ];

  const filteredLinks = links.filter( link => link !== path)
  return (
    <nav className="cv_nav animate__animated animate__fadeInDown"> 
      {
        filteredLinks.map((link) => {
          return <Link className="cv_a" to={`/cv/${(link === 'Cv' ? '' : link.toLowerCase())}`} key={link}> {link} </Link>
        })
      }
    </nav>
  )
}
