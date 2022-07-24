import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavExercises } from '../components/exercises/NavExercises';
import { ExerciseComponent } from '../components/exercises/ExerciseComponent';
import { exercises, javaExercises } from '../data/data';
import { ExerciseWelcome } from '../components/exercises/ExerciseWelcome';

export const ExercisesRouter = () => {
  const myRef = useRef(null);

  return (
    <main className="body__main">
      <NavExercises theRef={myRef} />
      <Routes>
        <Route path='*' element={<ExerciseWelcome />} />
        {
          exercises.map((exercise, i) => {
              return <Route key={i} path={`/${exercise.path}`} element={<ExerciseComponent metaData={exercise} />} />
            }
          )
        }

        {
          javaExercises.map((exercise, i) => {
              return <Route key={i} path={`/${exercise.path}`} element={<ExerciseComponent metaData={exercise} />} />
            }
          )
        }
      </Routes>
      <button className="control__button" onClick={() => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </main>
  )
}
