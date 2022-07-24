import { Link, useNavigate } from 'react-router-dom';

import { exercises, javaExercises } from '../../data/data';

export const NavExercises = ({ theRef }) => {
  const history = useNavigate();
  const handlePush = (e) => {
    history(e.target.value)
  }

  return (
    <nav className="main__nav animate__animated animate__fadeInDown" ref={theRef}>
      <ul>
        {
          exercises.map(({ path }, i) => {
            return (
              <li key={i}>
                <Link to={`/${path}`}>Taller {path}</Link>
              </li>
            )
          })
        }
        <select onChange={handlePush}>
          <option>
            Selecciona un taller!
          </option>
          {
            javaExercises.map(({ path }, i) => {
              return (
                <option key={i}>
                  {path}
                </option>
              )
            })
          }
        </select>
      </ul>
    </nav>
  )
}
