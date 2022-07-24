import React, { useState } from 'react'

export const ExerciseWelcome = () => {
  const [preState, setPreState] = useState(false)
  return (
    <div className="main__exercise">
      <h1>Bienvenido!</h1>
        <div className="exercise">
          <pre style={{ maxHeight: preState ? "250vh" : "10vh" }}>
            <code>
              {`
0
1    Bienvenido!
2
3    Esta es la sección de código
4    donde vas a ver el código tal cual lo escribí.
5    
6    Espero que el diseño sea de su agrado :)
7
`}
            </code>
          </pre>
          <div>
            <button onClick={() => setPreState(!preState)}>
              {preState 
                ? (<i className="fa-solid fa-angle-up"></i>) 
                : (<i className="fa-solid fa-angle-down"></i>)
              }
            </button>
          </div>
        </div>
    </div>
  )
}
