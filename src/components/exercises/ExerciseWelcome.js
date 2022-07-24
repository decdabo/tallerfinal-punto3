import React, { useState } from 'react'

export const ExerciseWelcome = () => {
  const [preState, setPreState] = useState(false)
  return (
    <div className="main__exercise">
      <h1>Welcome!</h1>
        <div className="exercise">
          <span><strong>Taller: </strong> Doomie</span>
          <pre style={{ maxHeight: preState ? "250vh" : "10vh" }}>
            <code>
              {`
0
1    Welcome!
2
3    This is the code section
4    were you can see my code literally how it is
5    
6    I hope this likes you :)
7
8
9
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
