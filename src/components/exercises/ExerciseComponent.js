import React from 'react';
import { CodeComponent } from './CodeComponent';

export const ExerciseComponent = ({ metaData }) => {
  const { path, source: { data, youtubeLink } } = metaData;

  return (
    <div className="main__exercise animate__animated animate__fadeIn">
      <h1 className="animate__animated animate__fadeIn">Taller {path}</h1>
      { youtubeLink && (<h3 className="animate__animated animate__fadeIn">Taller demo video: <a href={youtubeLink} target="_blank" rel="noreferrer"> Click here!</a></h3>) }
      {
        data.map(({ exercise, title, code }, i) => {
          return (
            <div className="exercise animate__animated animate__fadeIn" key={ i }>
              <span><strong>{ exercise }</strong> { title }</span>
              <CodeComponent code={ code } />
            </div>
          )
        })
      }
    </div>
  )
}
