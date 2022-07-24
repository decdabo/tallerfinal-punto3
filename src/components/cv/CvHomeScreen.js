import React from 'react'
import { Link } from 'react-router-dom';
import { ColorPicker } from './ColorPicker';
import './index.css';
import { SectionComponent } from './SectionComponent';

export const CvHomeScreen = () => {
  const data = [
    {
      title: "Personal Profile",
      content: (
      <>
        I love coding and work in team with strong and clear comunication.
        <br />
        Willing to learn fast, in group and alone.
        <br />
        Results oriented.
        <br />
        Independent, passionate and good vibes 4/20.
      </>
    ),
   },
   {
    title: "Hobbies",
    content: (
      <>
        When I was 15 years old, I started to play music, I begun with the guitar,
        followed by the bass and the trumpet, until I realize I like the drum more than
        the any instrument in the world. I have been playing drums ever since 
        However, I sold it to study programming (I needed a new PC).
        <br />
        The music and coding is not my unique passion, I love audiovisual
        medium, I see interesting how tell a history without the necessity of words, only
        images, secuences and planes.
      </>
  ),
 },
  ];

  return (
    <div className="cv_body">
      <header className="cv_header">
        <h1>Principal information</h1>
      </header>
      <main className='cv_main'>
          {
            data.map((section, i) => {
              return (
                <SectionComponent section={section} i={i} key={i} />
              )
            })
          }
          <section className="cv_section mt-5 section-left">
            <h3>Contact me!</h3>
            <div className="div-line"></div>
            <ul className='cv_ul'>
              <li>
                <a className='cv_a' href="https://www.instagram.com/david_jejox/" target="_blank" rel="noreferrer"
                  >IG 📷</a
                >
              </li>
              <li>
                <a className='cv_a' href="mailto:david.caro.dec@hotmail.com" target="_blank" rel="noreferrer">Mail 📧</a>
              </li>
              <li>
                <a className='cv_a' href="https://www.linkedin.com/in/david-c-a5028621a/" target="_blank" rel="noreferrer">
                  LinkedIn 👨‍👨‍👧
                </a>
              </li>
            </ul>
          </section>
          <footer className="cv_footer">
            <h3 className='cv_h3'>More about me</h3>
            <div className="div-line"></div>
            <div className="links-container">
              <Link className="cv_a" to="/cv/jobs">Job exprience👔</Link>
              <Link className="cv_a" to="/cv/personal">Personal ref🤼</Link>
              <Link className="cv_a" to="/cv/family">Family ref👨‍👩‍👧‍👧</Link>
              <Link className="cv_a" to="/cv/study">Study ref📚</Link>
            </div>
          </footer>
        </main>
        <ColorPicker />
    </div>
  );
}
