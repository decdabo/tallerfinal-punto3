import React from 'react';

import { ExercisesRouter } from '../routers/ExercisesRouter';
import { WelcomeComponent } from './WelcomeComponent';

export const HomeScreen = () => {
  return (
    <main className="body">
      <WelcomeComponent />  
      <ExercisesRouter />
    </main>
  )
}
