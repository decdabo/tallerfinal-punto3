import React from 'react'
import { NavCv } from './NavCv'
import { SectionComponent } from './SectionComponent'

export const ReferencesComponent = ({ data: { path, data }}) => {
  return (
    <div className="cv_body">
      <main className="cv_main">
        <NavCv path={path} />
        <header className="cv_header">
          <h1 className="cv_h1">{path} Referencies</h1>
        </header>
        {
          data.map((section, i) => {
            return <SectionComponent key={i} section={section} i={i} />
          })
        }
      </main>
    </div>
  )
}
