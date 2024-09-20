import React from 'react';

import productDesign from '../assets/services/productDesign.png';
import IOT from '../assets/services/IOT.png';
import softwareDev from '../assets/services/softwareDev.png';
import PCB from '../assets/services/PCB.png';
import solution from '../assets/services/solution.png';
import coverPhoto from '../assets/Vihaas Family1.jpg';
import vision from '../assets/vision.jpg';
import video from '../assets/coverVideo.mp4';

import customer from '../assets/home/costumer.png';
import low from '../assets/home/low-price.png';
import power from '../assets/home/power.png';
import repairing from '../assets/home/repairing.png';
import reward from '../assets/home/reward.png';
import idea from '../assets/home/idea.png';

const Home = () => {
  return (
    <>
      <div
        className=" py-44   px-8 md:text-left md:p-22 flex relative "
        // style={{
        //   backgroundImage: `url(${coverPhoto})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        {/* Video Element */}
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={video} type="video/mp4" />{' '}
          {/* Replace with your video URL */}
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-10 md:w-1/2 md:p-4 md:pt-8 md:mx-10 flex-wrap  text-white">
          <h1 className=" text-2xl md:text-4xl md:px-4 md:text-left md:max-w-2xl">
            Himachal’s first{' '}
            <span className=" font-semibold text-purple-900 border rounded-lg bg-slate-100  py-0 ">
              Telecommunications 
            </span>{' '}
            <span className="font-bold text-slate-200">R&D Company</span>
          </h1>
          <p className="  text-slate-200     text-sm md:text-lg text-left  pt-4 pb-10 md:p-4 md:max-w-md">
            Designing Unique Solutions with State-of-the-Art Technologies for
            Secure Communications
          </p>
          {/* <div className="container text-center  md:text-left   pt-2 md:pt-4 text-white md:px-4 w-fit mx-auto md:mx-0">
            <p className="hover:border hover:border-purple-300 p-2 rounded-md bg-gradient-to-tr from-purple-700 to-slate-700 hover:bg-black shadow-xl">
              Let's get Started
            </p>
          </div> */}
        </div>
      </div>

      {/* <div
        className="p-28 flex relative"
        style={{
          backgroundImage: `url(${coverPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container relative z-10 w-1/2 p-4 pt-8 mx-10 flex-wrap justify-start text-white">
          <h1 className="text-4xl px-4 text:center md:text-left md:max-w-2xl">
            Himachal’s first{' '}
            <span className=" font-semibold text-purple-900 border rounded-lg bg-slate-100  py-0 ">
              Telecommunications 
            </span>{' '}
            <span className="font-bold text-slate-200">R&D Company</span>
          </h1>
          <p className="  text-slate-200   text-center  md:text-left  md:p-4 md:max-w-md">
            Designing Unique Solutions with State-of-the-Art Technologies for
            Secure Communications
          </p>
          <div className="text-white p-4 w-fit">
            <p className="hover:border hover:border-purple-300 p-2 rounded-md bg-gradient-to-tr from-purple-700 to-slate-700 hover:bg-black shadow-xl">
              Let's get Started
            </p>
          </div>
        </div>
      </div> */}

      <div className="pb-4 md:pb-7">
        <div className="  py-2  bg-zinc-300 border-b border-pink-100 rounded-b-[2vw] ">
          <p className=" bg-slate-00 md:m-8 px-4    md:px-42 text-sm md:text-lg font-serif text-zinc-900  text-justify md:text-center">
            The introduction of the Make in India Policy by the Indian
            Government ignited a profound commitment among our founders to
            actively participate in this transformative initiative.
            Consequently, Vihaas Design Technologies was established in 2017 in
            New Delhi. In 2019, the company was strategically relocated to
            Himachal Pradesh to more effectively address the needs of the
            regions where its impact is most essential.
          </p>
        </div>
      </div>

      <div className="md:container md:flex py-4 md:py-7  mx-auto ">
        <div className=" px-8 md:py-18  md:mx-26 md:w-1/2  ">
          <h1 className="text-slate-600 text-2xl md:text-3xl font-semibold pb-4 md:pb-6 text-center md:text-justify ">
            OUR VISION
          </h1>
          <p className="text-justify text-slate-600 text-sm md:text-lg">
            At Vihaas Design Technologies, our vision is to be at the forefront
            of India's industrial renaissance, driving innovation and excellence
            in every project we undertake. We are dedicated to enhancing local
            capabilities, fostering sustainable growth, and contributing to the
            nation's economic development through cutting-edge design and
            technology solutions. Our commitment is to support the Make in India
            initiative by delivering high-quality, impactful solutions that
            resonate with the evolving needs of our country.
          </p>
        </div>
        <div className="mx-12 pl-4 py-4 md:py-0 md:mx-auto">
          <img
            className="rounded-2xl   text-center mx-auto"
            src={vision}
            alt=""
          />
        </div>
      </div>

      <div className="py-4 md:py-7 ">
        <div className="bg-slate-100 border border-pink-100 py-6">
          <div>
            <h1 className="text-2xl md:text-3xl text-slate-700 font-semibold font-sans  text-center py-4">
              Services We Offer
            </h1>
          </div>
          {/* cards Container */}

          <div className="container flex flex-wrap gap-4  md:gap-8 py-2 md:py-4  px-2 md:px-4 justify-center mx-auto">
            {/* 1 */}
            <div className="h-48 md:h-60 w-48 md:w-60 p-2 md:p-4  bg-white border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-16 w-16  md:h-24 md:w-24 mb-2"
                src={productDesign}
                alt="Product Design"
              />
              <h3 className="font-semibold text-sm md:text-lg">
                Product Design
              </h3>
              <p className="text-xs text-gray-500 text-center px-1">
                Industry Experts in Mechanical Drawing, Hardware Circuit
                Designing and Ruggedisation.
              </p>
            </div>
            {/* 2 */}
            <div className="h-48 md:h-60 w-48 md:w-60 p-2 md:p-4  bg-white border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-16 w-16  md:h-24 md:w-24 mb-2"
                src={IOT}
                alt="Internet of Things"
              />
              <h3 className="font-semibold text-sm md:text-lg">
                Internet of Things (IOT)
              </h3>
              <p className="text-xs text-gray-500 text-center px-1">
                Control home appliances and other items embedded with
                electronics and network connectivity to exchange data.
              </p>
            </div>
            {/* 3 */}
            <div className="h-48 md:h-60 w-48 md:w-60 p-2 md:p-4  bg-white border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-16 w-16  md:h-24 md:w-24 mb-2"
                src={softwareDev}
                alt="Software Development"
              />
              <h3 className="font-semibold text-sm md:text-lg text-center">
                Software Development & Testing
              </h3>
              <p className="text-xs text-gray-500 text-center px-1">
                Bootloader/Firmware Development, Kernel Customization and
                Multi-Platform Application Designing.
              </p>
            </div>
            {/* 4 */}
            <div className="h-48 md:h-60 w-48 md:w-60 p-2 md:p-4  bg-white border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-16 w-16  md:h-24 md:w-24 mb-2"
                src={PCB}
                alt="PCB Designing"
              />
              <h3 className="font-semibold text-sm md:text-lg">
                PCB Designing
              </h3>
              <p className="text-xs text-gray-500 text-center px-1">
                Excellent PCB Design Services provided due to rich industrial
                experience.
              </p>
            </div>
            {/* 5 */}
            <div className="h-48 md:h-60 w-48 md:w-60 p-2 md:p-4  bg-white border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-16 w-16  md:h-24 md:w-24 mb-2"
                src={solution}
                alt="Customized Solutions"
              />
              <h3 className="font-semibold text-sm md:text-lg">
                Customized Solutions
              </h3>
              <p className="text-xs text-gray-500 text-center px-1">
                Quick Turnaround Time, Proactive Approach and Pragmatic
                Solutions for Customer Satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="pt-4 md:pt-7">
          <div>
            <h1 className="text-2xl md:text-3xl text-slate-700 font-semibold font-sans  text-center py-4">
              Our Product Features
            </h1>
          </div>

          <div className="flex flex-wrap  gap-2   md:gap-4 py-2 md:py-4  px-4 justify-center mx-auto">
            <div className=" h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center ">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={repairing}
                alt="Customized Solutions"
              />
              <h3 className="font-semib text-xs md:text-sm text-center ">
                Easy To Customize
              </h3>
            </div>

            <div className="h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={power}
                alt="Customized Solutions"
              />
              <h3 className="font-semib text-xs md:text-sm text-center">
                Power Efficient
              </h3>
            </div>

            <div className="h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={idea}
                alt="Customized Solutions"
              />
              <h3 className="font-semib text-xs md:text-sm text-center">
                Creative Designs
              </h3>
            </div>

            <div className="h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={reward}
                alt="Customized Solutions"
              />
              <h4 className="font-semib text-xs md:text-sm text-center">
                Quality And Reliability
              </h4>
            </div>

            <div className="h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={customer}
                alt="Customized Solutions"
              />
              <h3 className="font-semib text-xs md:text-sm text-center">
                Customer Oriented
              </h3>
            </div>

            <div className="h-20 md:h-40 w-20 md:w-40 p-2 md:p-4  bg-slate-100 border-transparent rounded-md shadow-lg flex flex-col items-center">
              <img
                className="h-8 w-8 md:h-20 md:w-20 mb-1 md:mb-2"
                src={low}
                alt="Customized Solutions"
              />
              <h3 className="font-semib text-xs md:text-sm text-center">
                Low Cost{' '}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
