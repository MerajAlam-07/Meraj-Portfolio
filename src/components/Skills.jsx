import React from 'react'
import HTML from '../assets/icons/html.png';
import CSS from '../assets/icons/css.png';
import Bootstrap from '../assets/icons/bootstrap.jpg';
import JavaScript from '../assets/icons/javascript.png';
import ReactImg from '../assets/icons/react.png';
import FireBase from '../assets/icons/firebase.png';
import GitHub from '../assets/icons/github.png';
import Tailwind from '../assets/icons/tailwind.png';
import MaterialUI from '../assets/icons/material-ui.png';
import ReduxToolkit from '../assets/icons/redux-toolkit.png'

const Skills = () => {
  return (
    <div>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' id="skills">
          <div>
              <p className="text-primary font-semibold text-3xl mt-14">Skills :</p>
              <p className='py-4 text-gray-600'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="Css icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Css icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MaterialUI} alt="FireBase icon" />
                  <p className='my-4'>MATERIAL UI</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReduxToolkit} alt="ReduxToolkit icon" />
                  <p className='my-4'>REDUX TOOLKIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
            
          </div>
      </div>
    </div>
  )
}

export default Skills;
