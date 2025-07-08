import React from 'react'
import { Helmet } from 'react-helmet'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import heroImg from './../assets/hero-img.PNG'
import { LiaLinkedinIn } from 'react-icons/lia'
import Resume from './../assets/latestCS.pdf'
import { FiYoutube } from 'react-icons/fi'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Abdul Rehman - React Frontend Developer | UI Specialist</title>
                <meta name="description" content="Abdul Rehman is a React.js Frontend Developer building responsive, high-performance websites with Tailwind CSS & modern JavaScript. Available for freelance or remote work." />
                <meta property="og:title" content="Abdul Rehman - React Frontend Developer" />
                <meta property="og:description" content="Crafting clean, responsive UI with React.js, Redux, Tailwind CSS & modern JavaScript." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio-ar96.vercel.app" />
                <meta property="og:image" content="https://portfolio-ar96.vercel.app/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Abdul Rehman - React Frontend Developer" />
                <meta name="twitter:description" content="React.js developer crafting responsive UI with modern tools. Available for your next project." />
                <meta name="twitter:image" content="https://portfolio-ar96.vercel.app/twitter-image.png" />

                {/* ✅ Person Schema with real links */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abdul Rehman",
  "jobTitle": "React Frontend Developer",
  "image": "https://portfolio-ar96.vercel.app/abdul-profile.jpg",
  "email": "mailto:ghotogtk02@gmail.com",
  "telephone": "+923052730732",
  "url": "https://portfolio-ar96.vercel.app",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "Pakistan"
  },
  "sameAs": [
    "https://github.com/RehmanGhoto97",
    "https://www.linkedin.com/in/rehman-ghoto",
    "https://www.facebook.com/abdul.rehman.776507/",
    "https://www.youtube.com/@NeuralNightmares-97"
  ]
}
`}} />

                {/* ✅ Website Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Abdul Rehman Portfolio",
  "url": "https://portfolio-ar96.vercel.app",
  "author": {
    "@type": "Person",
    "name": "Abdul Rehman"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://portfolio-ar96.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
`}} />

                {/* ✅ Organization fallback */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Abdul Rehman Development",
  "url": "https://portfolio-ar96.vercel.app",
  "sameAs": [
    "https://github.com/RehmanGhoto97",
    "https://www.linkedin.com/in/rehman-ghoto",
    "https://www.facebook.com/abdul.rehman.776507/",
    "https://www.youtube.com/@NeuralNightmares-97"
  ]
}
`}} />

                {/* ✅ Review snippet for trust */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewBody": "Abdul did an amazing job on our platform. Clean UI, fully responsive, delivered exactly what we needed.",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "datePublished": "2025-07-08",
  "author": {
    "@type": "Person",
    "name": "John Doe - CEO, StartupXYZ"
  },
  "itemReviewed": {
    "@type": "Person",
    "name": "Abdul Rehman"
  }
}
`}} />
            </Helmet>

            <section className='home flex items-center gap-[5rem] bg-[#1f242d] relative h-[100vh] w-full px-[5%] pt-[10rem] pb-8'>
                <div className="home-detail">
                    <h1 className='font-bold'>Abdul Rehman</h1>
                    <h2 className='inline-block text-[3.2rem] -mt-4'>
                        I'm a
                        <span className='i-1' data-text=' React Developer'> React Developer </span>
                        <span className='i-2' data-text=" Frontend Specialist"> Frontend Specialist </span>
                        <span className='i-3' data-text=" UI Engineer"> UI Engineer </span>
                        <span className='i-4' data-text=" Lifelong Learner"> Lifelong Learner </span>
                    </h2>
                    <p className="text-[1.6rem] mt-4 mb-10 mx-0">
                        I build clean, responsive, and intuitive web applications using React.js,
                        Tailwind CSS, and modern JavaScript. With a strong foundation in front-end
                        development and a passion for user-centric design, I help businesses bring
                        their digital ideas to life with pixel-perfect interfaces and robust functionality.
                    </p>
                    <div className="btn-sci flex items-center">
                        <a href={Resume} className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
                        <div className="sci ml-8">
                            <a href="https://github.com/RehmanGhoto97" target="_blank" rel="noopener noreferrer"
                                className="hover:bg-[#7cf03d] hover:text-black inline-block transition-[.5s] m-[.8rem] 
                                text-[#7cf03d] text-[2rem] rounded-[50%] border-[.2rem] border-solid border-[#7cf03d] 
                                py-[.8rem] px-[1.2rem]"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/rehman-ghoto" target="_blank" rel="noopener noreferrer"
                                className="hover:bg-[#7cf03d] hover:text-black inline-block transition-[.5s] m-[.8rem] 
                                text-[#7cf03d] text-[2rem] rounded-[50%] border-[.2rem] border-solid border-[#7cf03d] 
                                py-[.8rem] px-[1.2rem]"><LiaLinkedinIn /></a>
                            <a href="https://www.facebook.com/abdul.rehman.776507/" target="_blank" rel="noopener noreferrer"
                                className="hover:bg-[#7cf03d] hover:text-black inline-block transition-[.5s] m-[.8rem] 
                                text-[#7cf03d] text-[2rem] rounded-[50%] border-[.2rem] border-solid border-[#7cf03d] 
                                py-[.8rem] px-[1.2rem]"><FaFacebook /></a>
                            <a href="https://www.youtube.com/@NeuralNightmares-97" target="_blank" rel="noopener noreferrer"
                                className="hover:bg-[#7cf03d] hover:text-black inline-block transition-[.5s] m-[.8rem] 
                                text-[#7cf03d] text-[2rem] rounded-[50%] border-[.2rem] border-solid border-[#7cf03d] 
                                py-[.8rem] px-[1.2rem]"><FiYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className="home-image">
                    <div className="img-box relative w-[32vw] h-[32vw] rounded-[50%] p-2 flex items-center justify-center overflow-hidden">
                        <div className="img-item relative w-full h-full bg-[#1f242d] rounded-[50%] border-solid 
                            border-[.001rem] border-[#1f242d] flex justify-center z-[10] overflow-hidden">
                            <img alt="Abdul Rehman React Frontend Developer portrait" src={heroImg}
                                className='absolute top-12 block w-[85%] object-cover mix-blend-lighten' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
