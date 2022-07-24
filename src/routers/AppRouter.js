import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { CvHomeScreen } from '../components/cv/CvHomeScreen';
import { ReferencesComponent } from '../components/cv/ReferencesComponent';
import { HomeScreen } from '../components/HomeScreen';
import { NavComponent } from '../components/NavComponent';

export const AppRouter = () => {
  const personalData = [
    {
      path: 'Personal',
      data: [
        {
          title: 'Camila -- Girlfriend',
          content: (
            <>
              I have known David for over a year. He has consistently demonstrated remarkable enthusiasm for his field of study. 
              <br/>
              He often shows himself outgoing, responsible, intelligent, and passionate about his interests, which is inspiring.
              <br/>
              His ability to strive for a goal is exceptional, and he is eager to learn no matter what stands in his way.
            </>
          )
        },
        {
          title: 'Claudio -- Friend',
          content: (
            <>
              He is persistent and good friend, when He should to stay here for you He will do it
            </>
          )
        },
        {
          title: 'Gustavo -- Friend',
          content: (
            <>
              Is a good self-taught, positive and His priority 
              <br/>
              is move foward with Her career.
              <br/> 
              Is very enthusiastic with the programming and Has much potential
            </>
          )
        }
      ]
    },
    {
      path: 'Family',
      data: [
        {
          title: 'Mother',
          content: (
            <>
              He is punctual, very curious and is well self-taught.
            </>
          )
        },
        {
          title: 'Father',
          content: (
            <>
               He has iniciative, is effective, very good time administration and has a strong concentration.
            </>
          )
        },
        {
          title: 'Brother',
          content: (
            <>
              He is very smart and has a good adaptability on everything what likes him.
            </>
          )
        },
      ]
    }
  ];

  const academicData = [
    {
      path: 'Study',
      data: [
        {
          title: 'High School - Escuela n°3 Dámaso Larrañaga - Montevideo, Uruguay',
          content: (
            <>
            </>
          )
        },
        {
          title: 'High School - Escuela n°18 Vélez Sarsfield - Entre Ríos, Argentina',
          content: (
            <></>
          )
        }
      ]
    },
    {
      path: 'Jobs',
      data: [
        {
          title: 'Cashier || Montevideo, Uruguay',
          content: (
            <>
              I was a cashier at the mini-market "La Vianda "
              <br />
              My tasks were:
              <br />
              Cash register attendant
              <br />
              Cleaning the store
            </>
          )
        },
        {
          title: 'Blueberries Catcher || Entre Ríos, Argentina',
          content: (
            <>
              The point of this job was catch blueberries on the plantation
              <br />
              This job was very dangerous for the snakes inside the plantation
              <br />
              the stabs of the people was job with me.
            </>
          )
        },
        {
          title: 'Freelancer || Bahía Blanca(Buenos Aires), Argentina',
          content: (
            <>
              I was Frontend Developer of a NFT game's webpage, "War Of Titans".
              <br />
              My job was make styles in with CSS, integrate authentication,
              <br />
              with login persistance, get information of the SDK and make
              transactions by Metamask.
              <br />
              <br />
              Technologies: HTML, CSS, Javascript, Metamask, Moralis, Web3,
              Web3Auth.
            </>
          )
        },
        {
          title: 'Frontend Developer || Bahía Blanca(Buenos Aires), Argentina',
          content: (
            <>
              I was part of the team that worked on developing the page for the ONG
              "Somos Más".
              <br />
              This web page have form validate, register, sing in and sing out for
              users, token authentication,
              <br />
              session persistance, full responsive design, mobile-first and
              integration
              <br />
              of differents SDKs as a like Google Maps.
              <br />
              <br />
              Technologies: ReactJS, Sass, Redux, React Router, CDKEditor, Formik,
              React Slick, Sweetalert2, Yup.
            </>
          )
        },
      ]
    }
  ]

  return (
    <HashRouter>
      <NavComponent />
      <Routes>
        <Route path="*" element={<HomeScreen />} />
        <Route path="/cv" element={<CvHomeScreen />} />
        {
          personalData.map((data, i) => {
            return <Route key={i} path={`/cv/${data.path.toLowerCase()}`} element={<ReferencesComponent data={data} />} />
          })
        }
        {
          academicData.map((data, i) => {
            return <Route key={i} path={`/cv/${data.path.toLowerCase()}`} element={<ReferencesComponent data={data} />} />
          })
        }
      </Routes>
    </HashRouter>
  )
}
