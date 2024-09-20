import { color, motion } from 'framer-motion';
import React from 'react';

import gmail from '../assets/footer/gmail.png';
import facebook from '../assets/footer/facebook.png';
import insta from '../assets/footer/Insta.png';
import linkedin from '../assets/footer/linkedin.png';
import web from '../assets/footer/web.png';

import logo from '../assets/vihaas_logo_only.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-0.1"
      className=" h-1/2"
    >
      <div className="w-full bg-white rounded-t-[2vw] overflow-hidden  bottom-0 ">
        <div className="">
          <div className="bg-zinc-300 w-full h-[1vw]"></div>
          <div className="border-t border-zinc-300 w-full  bg-gradient-to-tr from-purple-800 to-pink-900  flex py-[1vw]">
            {['Vihaas Design Technologies Welcomes You'].map((item) => (
              <motion.div
                // initial={{ x: '100%' }}
                animate={{ x: ['220%', '-100%'] }}
                transition={{
                  ease: 'linear',
                  repeat: Infinity,
                  duration: 22,
                }}
                className=" pb-4 text-white font-bold  text-[2vw] uppercase pt-2  whitespace-nowrap"
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="p-[1vw] md:pt-[6vw]">
            <div className="md:w-full md:flex ">
              <div className="container md:w-1/3">
                <img
                  src={logo}
                  alt=""
                  className="size-48 md:w-[20vw] mx-auto justify-items-center"
                />
              </div>
              <div className="px-4   md:justify-end flex w-full md:w-1/2 ">
                <div className=" flex-1  md:cotainer md:w-1/3 mb-4 md:mb-0">
                  <div className="text-xl font-semibold ">Quick Links</div>
                  {[
                    { name: 'Home', link: '/' },
                    { name: 'About Us', link: '/about' },
                    { name: 'Services', link: '/services' },
                    { name: 'Products', link: '/products' },
                    { name: 'Careers', link: '/careers' },
                    { name: 'Gallery', link: '/gallery' },
                    { name: 'Contact Us', link: '/contact ' },
                  ].map((item, index) => (
                    <div key={index}>
                      <Link
                        className="text-purple-800 font-semibold"
                        to={item.link}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex-1 md:container md:w-1/3">
                  <div className="text-xl font-semibold py-2">Contact Us</div>
                  <div className="md:bg-slate-200 md:border rounded-md">
                    {/* {[
                      // {
                      //   name: 'Email',
                      //   value: 'info@vihaasdtech.com',
                      //   img: gmail,
                      // },

                      {
                        name: 'Facebook',
                        value: 'https://www.facebook.com/vihaasdesigntech/',
                        img: facebook,
                        color: 'blue',
                      },
                      {
                        name: 'Linkedin',
                        value: 'https://www.linkedin.com/company/vihaas/',
                        img: linkedin,
                        color: '#000080',
                      },
                      {
                        name: 'Instagram',
                        value: 'https://www.instagram.com/vihaasdesign/?hl=en',
                        img: insta,
                        color: '#FF0000',
                      },
                    ].map((item, index) => (
                      <div className=" ">
                        <div
                          className="  flex items-center gap-2 p-2  text-sm md:text-base"
                          key={index}
                        >
                          <img
                            className="w-6 h-6 md:w-8 md:h-8 object-cover"
                            src={item.img}
                            alt={item.name}
                          />
                          <span className="font-medium">{item.name}:</span>
                          <a
                            style={{ color: item.color }}
                            href={item.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-800 hover:underline"
                          >
                            <div>VihaasDT@{item.name}</div>
                          </a>
                        </div>
                      </div>
                    ))} */}
                    <div className=" ">
                      {/* 1 */}
                      <div className="  flex items-center gap-2 p-2  text-sm md:text-base">
                        <img
                          className="w-6 h-6 md:w-8 md:h-8 object-cover"
                          src={facebook}
                          alt={facebook}
                        />
                        <span className="font-medium">Facebook:</span>
                        <a
                          // style={{ color: 'blue' }}
                          href="https://www.facebook.com/vihaasdesigntech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:underline"
                        >
                          <div>VihaasDT</div>
                        </a>
                      </div>
                      {/* 2 */}
                      <div className="  flex items-center gap-2 p-2  text-sm md:text-base">
                        <img
                          className="w-6 h-6 md:w-8 md:h-8 object-cover"
                          src={linkedin}
                          alt={linkedin}
                        />
                        <span className="font-medium">linkedin:</span>
                        <a
                          // style={{ color: '#000080' }}
                          href="https://www.linkedin.com/company/vihaas/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <div className="ml-3">VihaasDT</div>
                        </a>
                      </div>
                      {/* 3 */}
                      <div className="  flex items-center gap-2 p-2  text-sm md:text-base">
                        <img
                          className="w-6 h-6 md:w-8 md:h-8 object-cover"
                          src={insta}
                          alt={insta}
                        />
                        <span className="font-medium">Instagram:</span>
                        <a
                          // style={{ color: '#FF0000' }}
                          href="https://www.instagram.com/vihaasdesign/?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:underline"
                        >
                          <div>VihaasDT</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
