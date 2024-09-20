import React from 'react';
import ceoFrame from '../assets/AboutUs/ceoFrame.png';
import ceo from '../assets/AboutUs/ceo.jpg';
import p from '../assets/AboutUs/photo1.jpg';
import p2 from '../assets/AboutUs/photo2.jpeg';
import p3 from '../assets/AboutUs/photo3.jpg';
import p4 from '../assets/AboutUs/addy.jpeg';

const AboutUs = () => {
  return (
    <>
      <div className="container  py-4 md:py-[4vw]  px-6 md:mx-auto">
        <div className=" text-3xl text-center md:text-start leading-relaxed pb-[2vw] md:text-[3vw] font-bold text-slate-800  font-serif">
          Redefining Design and Technology
          <div className=" md:border-b-2  md:w-1/4 md:border-black  "></div>
        </div>
        <p className="text-justify">
          As pioneers in telecommunications for Homeland Security and Military
          applications, we offer cutting-edge solutions tailored to meet the
          highest standards. Our team of founders and advisors holds the highest
          technical degrees and specializes in their respective fields, each
          with over fifteen years of industry and project management experience.
          We have successfully delivered numerous concurrent projects with a
          focus on quality and complete customer satisfaction. Our extensive
          research and studies have focused on integrating coalition forces into
          a unified, flexible, and secure communication network. This
          integration ensures seamless cooperation among diverse forces. Our
          communication solutions consist of distinct systems tailored to meet
          the diverse needs of users across various military platforms. At
          Vihaas, we have developed a range of communication systems designed
          and manufactured domestically. We combine our extensive experience
          with the latest technological advancements to provide secure, rapid,
          and cost-effective communication solutions. Our communication systems
          are customized to meet the specific demands of Land, Airborne, and
          Naval platforms, ensuring secure and seamless voice, data, and video
          communication.
        </p>
      </div>

      <div className="container md:flex py-4 md:py-[4vw] px-6   md:px-12 md:mx-auto">
        <div className=" md:py-18  md:mx-26 md:w-1/2  md:pl-12">
          <h1 className="text-slate-700 text-2xl font-semibold pb-2 md:pb-4 text-center md:text-justify ">
            Message From Our Leader
          </h1>
          <div className="md:hidden py-6 items-center  ">
            <img
              className="rounded-xl mx-auto text-center  h-48 "
              src={ceoFrame}
              alt=""
            />
          </div>
          <p className="text-center md:text-left md:pr-16  text-slate-600 text-sm md:text-sm">
            Vihaas is more than just a business, it's the collective wisdom and
            conscience of all our employees, whom we proudly call our Partners.
            They are the heart and soul of the innovations happening at Vihaas.
            Our success depends entirely on their motivation and creativity.
            Vihaas strives to provide a nurturing and supportive environment
            that empowers all our Partners to reach their full potential.
          </p>

          <p className="text-center md:text-left md:pr-16 text-slate-600 text-sm md:text-sm py-2">
            We aspire to be at the forefront of India's industrial renaissance,
            driving innovation and excellence in every project we undertake. We
            are dedicated to enhancing local capabilities, fostering sustainable
            growth, and contributing to the nation's economic development
            through cutting-edge design and technology solutions. Our commitment
            is to support the Make in India initiative by delivering
            high-quality, impactful solutions that resonate with the evolving
            needs of our country.
          </p>

          <p className=" pt-2 pr-6 text-purple-900 font-semibold  ">
            "Success is not just about achieving our goals but also about
            empowering our associates to maximize their assets and reach new
            heights."
          </p>

          <div className="py-4">
            <div className="flex gap-4">
              {/* <img
                className="h-14 w-14 border-transparent rounded-2xl "
                src={ceo}
                alt=""
              /> */}
              <div>
                <p className="text-slate-800 text-lg font-semibold">
                  Harish Sharma
                </p>
                <p className="  text-slate-600 ">(Vihaas Family)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block py-2 items-center md:mx-auto">
          <img
            className="rounded-xl mx-auto text-center h-[22vw]"
            src={ceoFrame}
            alt=""
          />
        </div>
      </div>

      <div className="text-center photos md:flex gap-6 p-4">
        {[p, p3, p4, p2].map((item, index) => (
          <div
            key={index}
            className="pt-[7vw] mb-4 md:mb-0 md:pt-0 flex justify-center"
          >
            <img className="h-72 md:h-[22vw] rounded-lg" src={item} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
