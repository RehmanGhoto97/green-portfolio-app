import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import slidImg1 from './../assets/images/dctr.jpg'
import slidImg2 from './../assets/images/hotl.jpg'
import slidImg3 from './../assets/images/p1.png'
import slidImg4 from './../assets/images/portfolio1.jpg'
import slidImg5 from './../assets/images/portfolio3.png'
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Portfolio = () => {
  const [tranVal, setTranVal] = useState(0);

  const SliderRight = () => {
    if (tranVal < 400) {
      setTranVal(tranVal + 104);

    }

  }
  const SliderLeft = () => {
    if (tranVal > 0) {
      setTranVal(tranVal - 104);

    }

  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Abdul Rehman's Portfolio Projects",
      "url": "https://portfolio-ar97.vercel.app/",
      "description": "Portfolio of React.js, Next.js, and UI projects built by Abdul Rehman.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Prescipto Doctors App",
          "about": "React.js app for doctors to manage appointments and prescriptions",
          "programmingLanguage": "JavaScript, React.js, Context API, Tailwind CSS"
        },
        {
          "@type": "CreativeWork",
          "name": "Hotel Management System",
          "about": "Platform to manage hotel guests, bookings, and cash flow",
          "programmingLanguage": "HTML, CSS, JavaScript, Bootstrap"
        },
        {
          "@type": "CreativeWork",
          "name": "Admin Dashboard",
          "about": "Full-stack dashboard with Next.js and Node.js",
          "programmingLanguage": "Next.js, Node.js, SCSS, Material UI"
        },
        {
          "@type": "CreativeWork",
          "name": "Personal Portfolio",
          "about": "Portfolio website to showcase skills and projects",
          "programmingLanguage": "React.js, Bootstrap, CSS"
        },
        {
          "@type": "CreativeWork",
          "name": "Food Delivery App",
          "about": "Interactive ordering platform with cart functionality",
          "programmingLanguage": "React.js, Tailwind CSS"
        }
      ]
    }
  ` }} />
      </Helmet>

      <section className='portfolio-section'>
        <h2 className="text-[4.5rem] text-center font-bold mb-8 font-bold">Latest <span className="text-[#7cf03d]">Projects</span></h2>
        <div className="portfolio-container grid grid-cols-2 gap-12">
          <div className="portfolio-box">
            <div className={`portfolio-details ${tranVal == 0 ? 'block' : 'hidden'}`}>
              <p style={{ WebkitTextStroke: '0.07rem white' }} className="text-9xl text-transparent">01</p>
              <h3 className="font-bold text-[3.5rem] mt-[0.8rem] mb-8 mx-0">Prescipto Doctors App</h3>
              <p className="text-[1.6rem]">
                A responsive UI for doctors to manage patient appointments and prescriptions. Built with React.js and Context API for efficient state handling.
              </p>
              <div style={{ borderBottom: '1px solid white' }} className="tech text-[#7cf03d] pb-8 my-8 px-0">
                <p className="text-[1.6rem]">React.js, Context API, Tailwind CSS</p>
              </div>
              <div className="live-github">
                {/* 1. Prescripto Doctors */}
                <a href="https://prescripto-doctors-frontend-only.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <MdArrowOutward /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Live project</span>
                </a>
                <a href="https://github.com/RehmanGhoto97/Prescripto-web-app-frontend-only" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <FaGithub /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Github Repo</span>
                </a>
              </div>
            </div>
            <div className={`portfolio-details ${tranVal == 104 ? 'block' : 'hidden'}`}>
              <p style={{ WebkitTextStroke: '0.07rem white' }} className="text-9xl text-transparent">02</p>
              <h3 className="font-bold text-[3.5rem] mt-[0.8rem] mb-8 mx-0">Hotel Management System</h3>
              <p className="text-[1.6rem]">
                A booking management platform where hotels can handle guest data, cash flows, and reservations. Developed with vanilla JS and Bootstrap for clean UI.
              </p>
              <div style={{ borderBottom: '1px solid white' }} className="tech text-[#7cf03d] pb-8 my-8 px-0">
                <p className="text-[1.6rem]">HTML5, CSS3, JavaScript, Bootstrap 5</p>
              </div>
              <div className="live-github">
                {/* 2. Hotel Management */}
                <a href="https://hotel-management-system-mini.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <MdArrowOutward /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Live project</span>
                </a>
                <a href="https://github.com/RehmanGhoto97/Hotel-Management-System" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <FaGithub /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Github Repo</span>
                </a>
              </div>
            </div>

            <div className={`portfolio-details ${tranVal == 208 ? 'block' : 'hidden'}`}>
              <p style={{ WebkitTextStroke: '0.07rem white' }} className="text-9xl text-transparent">03</p>
              <h3 className="font-bold text-[3.5rem] mt-[0.8rem] mb-8 mx-0">Tic Tac Toe Game</h3>
              <p className="text-[1.6rem]">
                A Simple tic tac toe game using react.js with simple css, in this state is managed by context api.
              </p>
              <div style={{ borderBottom: '1px solid white' }} className="tech text-[#7cf03d] pb-8 my-8 px-0">
                <p className="text-[1.6rem]">react.js, CSS, Context API, </p>
              </div>
              <div className="live-github">
                {/* 3. Admin Dashboard */}
                <a href="https://todo-app-using-nextjs-five.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <MdArrowOutward /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Live project</span>
                </a>
                <a href="https://github.com/RehmanGhoto97/todo-app-using-nextjs" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <FaGithub /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Github Repo</span>
                </a>
              </div>
            </div>

            <div className={`portfolio-details ${tranVal == 312 ? 'block' : 'hidden'}`}>
              <p style={{ WebkitTextStroke: '0.07rem white' }} className="text-9xl text-transparent">04</p>
              <h3 className="font-bold text-[3.5rem] mt-[0.8rem] mb-8 mx-0">Personal Portfolio</h3>
              <p className="text-[1.6rem]">
                The first version of my personal portfolio, built with Next.js and tailwind.css, framer-motion and react-redux-toolkit to showcase my projects, skills, and contact information.
              </p>
              <div style={{ borderBottom: '1px solid white' }} className="tech text-[#7cf03d] pb-8 my-8 px-0">
                <p className="text-[1.6rem]">Next.js, Framer Motion, TAilwind.css, react-redux-toolkit</p>
              </div>
              <div className="live-github">
                {/* 4. Personal Portfolio */}
                <a href="https://portfolio-ar96.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <MdArrowOutward /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Live project</span>
                </a>
                <a href="https://github.com/RehmanGhoto97/portfolio-ar97" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <FaGithub /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Github Repo</span>
                </a>
              </div>
            </div>

            <div className={`portfolio-details ${tranVal == 416 ? 'block' : 'hidden'}`}>
              <p style={{ WebkitTextStroke: '0.07rem white' }} className="text-9xl text-transparent">05</p>
              <h3 className="font-bold text-[3.5rem] mt-[0.8rem] mb-8 mx-0">Food Delivery App</h3>
              <p className="text-[1.6rem]">
                An interactive platform for browsing menus and placing orders with a cart system. Built using React.js and Tailwind for fast, responsive design.
              </p>
              <div style={{ borderBottom: '1px solid white' }} className="tech text-[#7cf03d] pb-8 my-8 px-0">
                <p className="text-[1.6rem]">React.js, Tailwind CSS, JavaScript</p>
              </div>
              <div className="live-github">
                {/* 5. Food Delivery */}
                <a href="https://food-delivery-grocery.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <MdArrowOutward /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Live project</span>
                </a>
                <a href="https://github.com/RehmanGhoto97/food-delivery-web-app" target="_blank" rel="noopener noreferrer"
                  className="mr-6 relative hover:text-[#7cf03d] inline-flex text-[3rem] text-white p-[1.3rem] bg-[#323946] rounded-[50%]">
                  <FaGithub /><span className='absolute -top-[60%] left-1/2 text-[1.6rem] py-2 px-4 rounded-xl text-[#1f242d] bg-white'>Github Repo</span>
                </a>
              </div>
            </div>

          </div>
          <div className="portfolio-box">
            <div className="portfolio-carousel w-full h-[38rem] rounded-2xl overflow-hidden">
              <div style={{ transform: `translateX(calc(-${tranVal}% ))`, gridAutoColumns: '100%', }} className="img-slider grid grid-flow-col gap-8  transition-[.5s]">
                <div className="img-item">
                  <img src={slidImg1} className='w-full h-full' />
                </div>
                <div className="img-item">
                  <img src={slidImg2} className='w-full h-full' />
                </div>
                <div className="img-item">
                  <img src={slidImg3} className='w-full h-full' />
                </div>
                <div className="img-item">
                  <img src={slidImg4} className='w-full h-full' />
                </div>
                <div className="img-item">
                  <img src={slidImg5} className='w-full h-full' />
                </div>
              </div>
            </div>
            <div className="navigation flex justify-end gap-4 text-right mt-8">
              <button onClick={() => SliderLeft()} className={`arrow-left active-border-[#323946] inline-flex p-[.4rem] bg-[#323946] border rounded border-[#7cf03d] text-[4rem] cursor-pointer ${tranVal == 0 ? 'text-[#fff3]' : 'text-[#7cf03d]'}`}><IoIosArrowBack /></button>
              <button onClick={() => SliderRight()} className={`arrow-left active-border-[#323946] inline-flex p-[.4rem] bg-[#323946] border rounded border-[#7cf03d] text-[4rem] cursor-pointer ${tranVal == 416 ? 'text-[#fff3]' : 'text-[#7cf03d]'}`}><IoIosArrowForward /></button>
            </div>
          </div>

        </div>


      </section>
    </>
  )
}

export default Portfolio
