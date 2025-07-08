import React from 'react'
import { Helmet } from 'react-helmet'
import { BiMap, BiPhoneCall } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Abdul Rehman - React Frontend Developer</title>
        <meta name="description" content="Get in touch with Abdul Rehman for React.js, Tailwind, or UI projects. Available via email & WhatsApp for freelance or remote work." />
        <meta property="og:title" content="Contact | Abdul Rehman - React Frontend Developer" />
        <meta property="og:description" content="Reach out to Abdul Rehman for responsive, high-quality React.js and UI/UX development. Let's build your idea together." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-ar96.vercel.app/contact" />
        <meta property="og:image" content="https://portfolio-ar96.vercel.app/contact-og.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Abdul Rehman - React Developer" />
        <meta name="twitter:description" content="Hire Abdul Rehman for your next React.js frontend project. Available for freelance & remote." />
        <meta name="twitter:image" content="https://portfolio-ar96.vercel.app/contact-twitter.jpg" />

        {/* ✅ Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Abdul Rehman?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email me at ghotogtk02@gmail.com or WhatsApp at +923052730732."
      }
    },
    {
      "@type": "Question",
      "name": "Is Abdul available for freelance React work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I am available for freelance or remote React.js and frontend projects."
      }
    },
    {
      "@type": "Question",
      "name": "What does Abdul specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "React.js, Tailwind CSS, JavaScript (ES6+), Redux Toolkit, and UI/UX design."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Abdul based?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based in Lahore, Pakistan — working with clients worldwide."
      }
    }
  ]
}
`}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Person",
    "name": "Abdul Rehman",
    "email": "mailto:ghotogtk02@gmail.com",
    "telephone": "+923052730732",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    },
    "url": "https://portfolio-ar96.vercel.app/contact"
  }
}
`}} />
      </Helmet>

      <section className='contact-section min-h-[100vh]'>
        <div className="contact-containerb flex gap-8 w-full text-[1.6rem]">

          {/* LEFT SIDE */}
          <div className="contact-box flex flex-col gap-6">
            <h2 className="font-bold text-6xl">Let's Work Together</h2>
            <p className="desc">
              I’m always open to discuss new projects, creative ideas or opportunities
              to be part of your vision. Let’s build something great together.
            </p>
            <div className="contact-details flex gap-6">
              <BiPhoneCall className='text-4xl' />
              <a className='text-[#7cf03d]' href='tel:+923052730732'>+92 305 2730732</a>
            </div>
            <div className="contact-details flex gap-6">
              <MdEmail className='text-4xl' />
              <a className='text-[#7cf03d]' href='mailto:ghotogtk02@gmail.com'>ghotogtk02@gmail.com</a>
            </div>
            <div className="contact-details flex gap-6">
              <BiMap className='text-4xl' />
              <span className='text-[#7cf03d]'>A-2 Township, Lahore, Pakistan</span>
            </div>

            {/* 🚀 HIRE ME CTA */}
            <div className="hire-me-cta bg-[#323946] rounded-2xl p-8 mt-6 text-center">
              <h3 className="text-3xl font-bold mb-4">🚀 Hire Me</h3>
              <p className="mb-6">
                Need a responsive React app, modern UI, or frontend solution? Let’s talk and bring your idea to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:ghotogtk02@gmail.com"
                  className="inline-flex items-center gap-2 bg-[#7cf03d] text-[#1f242d] px-6 py-3 rounded-xl font-semibold hover:bg-[#a5f879] transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  <MdEmail className="text-2xl" /> Email Me
                </a>
                <a
                  href="https://wa.me/923052730732"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#7cf03d] px-6 py-3 rounded-xl font-semibold hover:bg-[#7cf03d] hover:text-[#1f242d] transition"
                >
                  <FaWhatsapp className="text-2xl" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full text-center contact-box">
            <form>
              <h2 className="heading font-bold">
                Contact <span>Me!</span>
              </h2>
              <div className="filed-box flex justify-center items-center flex-col gap-4">
                <input className='w-2/3 h-16 rounded-lg p-4' placeholder='Full name' type="text" />
                <input className='w-2/3 h-16 rounded-lg p-4' placeholder='Email address' type="email" />
                <input className='w-2/3 h-16 rounded-lg p-4' placeholder='Phone number' type="number" />
                <input className='w-2/3 h-16 rounded-lg p-4' placeholder='Subject' type="text" />
                <textarea className='w-2/3 h-32 rounded-lg p-4' name="message" id="message" placeholder='Your message'></textarea>
                <button className="btn">Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
