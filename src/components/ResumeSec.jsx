import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const ResumeSec = () => {
  const [toggleBtn, setToggleBtn] = useState('experience');

  const expData = [
    {
      date: '2024 - Present',
      id: 1,
      name: 'Frontend Developer',
      company: 'Infirix.io (Remote)',
      para: 'Building fast, responsive UIs with React.js and Tailwind CSS, focused on user experience and scalable architecture.'
    },
    {
      date: '2023 - 2024',
      id: 2,
      name: 'React Developer (Internship)',
      company: 'Beyond Logics',
      para: 'Developed custom web solutions, integrated APIs, and ensured SEO-friendly, high-performance applications.'
    },
    {
      date: '2022 - 2023',
      id: 3,
      name: 'Frontend Developer',
      company: 'Self Learning',
      para: 'Created SaaS dashboards and reusable components, emphasizing clean code, speed, and mobile-first design.'
    }
  ];

  const eduData = [
    {
      date: '2017 - 2021',
      id: 1,
      name: 'BS Computer Science',
      company: 'Minhaj University Lahore',
      para: 'Specialized in data structures, algorithms, and statistics, building a strong base for React.js engineering.'
    },
    {
      date: '2015 - 2017',
      id: 2,
      name: 'FSc Pre-Engineering',
      company: 'BISE Sukkur',
      para: 'Studied mathematics and physics. Built analytical problem-solving skills that support logical programming.'
    },
    {
      date: '2013 - 2015',
      id: 3,
      name: 'Matriculation (Science)',
      company: 'BISE Sukkur',
      para: 'Focused on mathematics and computer fundamentals, fueling an early passion for coding and technology.'
    }
  ];

  const SkillsData = [
    { icon: <FaHtml5 />, ID: 1, name: 'HTML' },
    { icon: <IoLogoCss3 />, ID: 2, name: 'CSS3' },
    { icon: <FaJs />, ID: 3, name: 'JavaScript' },
    { icon: <FaReact />, ID: 4, name: 'React.js' },
    { icon: <RiTailwindCssFill />, ID: 5, name: 'Tailwind.css' },
    { icon: <FaNodeJs />, ID: 6, name: 'Node.js' },
    { icon: <TbBrandCpp />, ID: 7, name: 'C++' },
    { icon: <SiMongodb />, ID: 8, name: 'MongoDB' }
  ];

  return (
    <>
      <Helmet>
        <title>Resume | Abdul Rehman - React Frontend Developer</title>
        <meta name="description" content="Explore Abdul Rehman's professional resume. Discover his experience, education, and skills in React.js, Tailwind CSS, JavaScript, and UI/UX design." />
        <meta property="og:title" content="Resume | Abdul Rehman" />
        <meta property="og:description" content="Frontend experience, education, and skills of Abdul Rehman. Available for remote & freelance React projects." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://portfolio-ar97.vercel.app/resume" />
        <meta property="og:image" content="https://portfolio-ar97.vercel.app/abdul-profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume | Abdul Rehman" />
        <meta name="twitter:description" content="Professional background, projects, and skills. Abdul Rehman builds responsive, high-quality React.js applications." />
        <meta name="twitter:image" content="https://portfolio-ar97.vercel.app/abdul-profile.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Abdul Rehman",
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Minhaj University Lahore",
              "address": { "@type": "PostalAddress", "addressLocality": "Lahore", "addressCountry": "Pakistan" },
              "sameAs": "https://www.mul.edu.pk/"
            },
            {
              "@type": "EducationalOrganization",
              "name": "BISE Sukkur",
              "address": { "@type": "PostalAddress", "addressLocality": "Sukkur", "addressCountry": "Pakistan" },
              "sameAs": "http://www.bisesuksindh.edu.pk/"
            }
          ],
          "worksFor": [
            {
              "@type": "Organization",
              "name": "Infirix.io",
              "sameAs": "https://infirix.io"
            },
            {
              "@type": "Organization",
              "name": "Beyond Logics",
              "sameAs": "https://portfolio-ar97.vercel.app"
            }
          ],
          "knowsAbout": ["React.js", "Tailwind CSS", "JavaScript", "UI/UX Design"]
        }
        `}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can Abdul Rehman work remotely?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, Abdul is available for remote React.js and frontend development projects." }
            },
            {
              "@type": "Question",
              "name": "Is Abdul Rehman available for freelance work?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, Abdul is open for freelance and contract React.js projects." }
            },
            {
              "@type": "Question",
              "name": "What frameworks does Abdul specialize in?",
              "acceptedAnswer": { "@type": "Answer", "text": "Abdul specializes in React.js, Tailwind CSS, Redux Toolkit, JavaScript (ES6+), and Node.js." }
            },
            {
              "@type": "Question",
              "name": "Where is Abdul Rehman based?",
              "acceptedAnswer": { "@type": "Answer", "text": "Abdul is based in Lahore, Pakistan but works with clients worldwide." }
            }
          ]
        }
        `}} />
      </Helmet>

      <section className="resume-section">
        <div style={{ gridTemplateColumns: '1fr 2fr' }} className="resume-container grid gap-20">
          <div className="resume-box">
            <h2 className="text-7xl font-bold">Why Hire Me?</h2>
            <p className="mt-8 mb-10 text-[1.6rem]">
              I specialize in building modern, fast, and scalable frontend applications. With a focus on user-centric design and clean code, I can help transform your ideas into responsive digital products.
            </p>
            {['experience', 'education', 'skills', 'aboutMe'].map(btn => (
              <button key={btn}
                onClick={() => setToggleBtn(btn)}
                className={`${toggleBtn === btn ? 'border-[.1rem] border-[#7cf03d] text-[#7cf03d]' : ''} reume-btn w-full h-[5.3rem] bg-[#323946] border-[.2rem] border-solid border-[#323946] text-[1.6rem] font-medium mb-8 rounded-xl cursor-pointer`}>
                {btn.charAt(0).toUpperCase() + btn.slice(1)}
              </button>
            ))}
          </div>

          <div className="resume-box">
            {toggleBtn === 'experience' && (
              <>
                <h2 className="text-[3.5rem] mb-8 font-bold">My <span className="text-[#7cf03d]">Experience</span></h2>
                <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))' }} className="resume-list h-[45rem] overflow-auto gap-8 grid">
                  {expData.map(item => (
                    <div key={item.id} style={{ height: 'calc((45rem - 2rem) / 2)' }} className="resume-item bg-[#323946] rounded-[.8rem] py-12 px-10">
                      <p className="text-[1.6rem] text-[#7cf03d]">{item.date}</p>
                      <h3 className="text-[2.2rem] font-bold">{item.name}</h3>
                      <p className="company text-[1.6rem]">{item.company}</p>
                      <p className="text-[1.6rem]">{item.para}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {toggleBtn === 'education' && (
              <>
                <h2 className="text-[3.5rem] mb-8 font-bold">My <span className="text-[#7cf03d]">Education</span></h2>
                <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))' }} className="resume-list h-[45rem] overflow-auto gap-8 grid">
                  {eduData.map(item => (
                    <div key={item.id} style={{ height: 'calc((45rem - 2rem) / 2)' }} className="resume-item bg-[#323946] rounded-[.8rem] py-12 px-10">
                      <p className="text-[1.6rem] text-[#7cf03d]">{item.date}</p>
                      <h3 className="text-[2.2rem] font-bold">{item.name}</h3>
                      <p className="company text-[1.6rem]">{item.company}</p>
                      <p className="text-[1.6rem]">{item.para}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {toggleBtn === 'skills' && (
              <>
                <h2 className="text-[3.5rem] mb-8 font-bold">My <span className="text-[#7cf03d]">Skills</span></h2>
                <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))' }} className="resume-list overflow-auto gap-8 grid">
                  {SkillsData.map(item => (
                    <div key={item.ID} className="resume-item text-center py-8 px-6 bg-[#323946] rounded-[.8rem] flex flex-col items-center justify-center">
                      <p className="hover:text-[#7cf03d] text-[8.5rem] transition-[.5s]">{item.icon}</p>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {toggleBtn === 'aboutMe' && (
              <>
                <h2 className="text-[3.5rem] mb-8 font-bold">About <span className="text-[#7cf03d]">Me</span></h2>
                <table className="text-[1.6rem] w-full">
                  <tbody>
                    <tr><td>Name <span className="text-[#7cf03d] pl-2">Abdul Rehman</span></td><td>City <span className="text-[#7cf03d] pl-2">Lahore</span></td><td>Experience <span className="text-[#7cf03d] pl-2">1+ year</span></td></tr>
                    <tr><td>Status <span className="text-[#7cf03d] pl-2">Married</span></td><td>Phone <span className="text-[#7cf03d] pl-2">+923052730732</span></td><td>Languages <span className="text-[#7cf03d] pl-2">English, Urdu</span></td></tr>
                    <tr><td>Email <span className="text-[#7cf03d] pl-2">ghotogtk01@gmail.com</span></td><td>Freelance <span className="text-[#7cf03d] pl-2">Available</span></td><td>Full-time <span className="text-[#7cf03d] pl-2">Yes</span></td></tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeSec;
