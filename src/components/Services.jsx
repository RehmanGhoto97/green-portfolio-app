import React from 'react';
import { Helmet } from 'react-helmet';
import { CgBrowser } from 'react-icons/cg';
import { FaCode } from 'react-icons/fa';
import { GiMatterStates } from 'react-icons/gi';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { MdArrowOutward, MdWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Abdul Rehman - React.js & Frontend Specialist</title>
                <meta name="description" content="Explore Abdul Rehman's React.js development, UI/UX design, API integration, Redux state management, and deployment services. Let's build something outstanding together." />
                <meta property="og:title" content="Services | Abdul Rehman - React Developer & UI Specialist" />
                <meta property="og:description" content="I offer professional React.js frontend development, UI/UX design, API integration, SEO optimization and deployment services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio-ar97.vercel.app/services" />
                <meta property="og:image" content="https://portfolio-ar97.vercel.app/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Abdul Rehman" />
                <meta name="twitter:description" content="Professional React.js, UI/UX, API, and deployment services by Abdul Rehman." />
                <meta name="twitter:image" content="https://portfolio-ar97.vercel.app/twitter-image.png" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development, UI/UX Design, API Integration, SEO Optimization, State Management",
  "provider": {
    "@type": "Person",
    "name": "Abdul Rehman",
    "email": "mailto:ghotogtk02@gmail.com",
    "telephone": "+923052730732",
    "url": "https://portfolio-ar97.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressCountry": "Pakistan"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "description": "Professional services by Abdul Rehman: React.js frontend development, Redux state management, API integration, SEO, modern UI/UX design.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Frontend & UI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "React.js Development",
          "description": "Building scalable, high-performance web applications with React.js, Tailwind CSS and modern JavaScript."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "State Management",
          "description": "Integrating Redux Toolkit or Context API for maintainable state in complex applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Crafting clean, user-centered interfaces and seamless experiences that convert."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Integration",
          "description": "Connecting frontend apps with REST APIs using Axios, Fetch and secure data flows."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO & Deployment",
          "description": "Implementing on-page SEO and deploying to Vercel/Netlify with best practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Browser Testing",
          "description": "Ensuring your site looks and performs great across all browsers & devices."
        }
      }
    ]
  }
}
`}} />
            </Helmet>

            <section className="services-section">
                <h2 className="heading font-bold">
                    My <span>Services</span>
                </h2>
                <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))' }} className="services-container justify-center gap-8 grid">
                    {[
                        {
                            icon1:<FaCode />,
                            
                            title: "React.js Development",
                            desc: "I develop high-performance, scalable web apps with React.js, Tailwind CSS, and modern JavaScript (ES6+), ensuring your digital product stands out."
                        },
                        {
                            icon1:<GiMatterStates />,
                            title: "State Management",
                            desc: "I integrate Redux Toolkit or React Context to handle complex state, making your app fast, maintainable, and future-ready."
                        },
                        {
                            icon1:<MdWeb />,
                            title: "UI/UX Design",
                            desc: "From wireframes to pixel-perfect interfaces, I focus on clean layouts and seamless user journeys that keep visitors engaged."
                        },
                        {
                            icon1:<TbApi/>,
                            title: "API Integration",
                            desc: "I connect your frontend seamlessly with REST APIs using Axios & Fetch, enabling real-time data and dynamic features."
                        },
                        {
                            icon1:<LuChartNoAxesCombined />,
                            title: "SEO & Deployment",
                            desc: "I apply on-page SEO best practices and deploy to platforms like Vercel or Netlify, so your app is fast, discoverable, and live with CI/CD."
                        },
                        {
                            icon1:<CgBrowser />,
                            title: "Cross-Browser Testing",
                            desc: "I ensure your website works flawlessly across modern browsers and devices, delivering consistent experiences to all your users."
                        }
                    ].map((service, index) => (
                        <div key={index} className="services-box hover:border-[#7cf03d] hover:border-[2px] hover:border-solid py-12 px-10 bg-[#323946] border border-[#323946] rounded-2xl hover:border-[#7cf03d] transition-[.5s]">
                            <div className="icon-div hover:text-[#7cf03d] mb-4 flex items-center justify-between px-4 text-4xl font-bold">
                                <span className=' inline-block text-6xl font-bold '>{service.icon1}</span>
                                <span className=' inline-block text-3xl font-bold '><MdArrowOutward className=' inline-block text-6xl font-bold ' /></span>
                            </div>
                            <h3 className="font-bold text-5xl mt-2 mb-8">{service.title}</h3>
                            <p className="text-[1.6rem]">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
