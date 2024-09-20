import { motion } from 'framer-motion';
import React from 'react';

const ContactUs = () => {
  return (
    <>
      <h1 className="pt-6 md:pt-11  text-center text-2xl md:text-[3vw] font-semibold text-slate-800 font-serif uppercase ">
        Connect With Us
      </h1>

      <div className="md:flex  md:py-9 ">
        ` `
        <div className="  py-4 md:py-6 md:w-1/2">
          <div className=" border  border-transparent rounded-md shadow-xl flex flex-col p-4 h-fit w-fit  items-center mx-auto bg-slate-200">
            <div className="px-4 md:text-center pb-6">
              <h1 className="text-2xl text-slate-700 ">How Can We help?</h1>
              <p className="text-slate-400">
                Send us a message about your query
              </p>
            </div>
            <form
              className=""
              action="https://formsubmit.co/reach@vihaasdtech.com"
              method="POST"
            >
              {/* <input
                type="hidden"
                name="_cc"
                value="info@vihaaasdtech.com"
              ></input> */}

              <input
                type="hidden"
                name="_subject"
                value="New submission From Vihaasdtech.com !"
              />

              <div>
                <label>Name</label>
                <br />
                <input
                  className="border border-transparent  border-slate-300 rounded-md"
                  type="text"
                  name="Name"
                  placeholder="First Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="">Last name</label>
                <br />
                <input
                  className="border border-transparent  border-slate-300"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label htmlFor="">Email</label>
                <br />
                <input
                  className="border border-transparent border-slate-300"
                  type="email"
                  name="Email Address"
                  placeholder="name@Vihaas.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="">Message</label>
                <br />
                <textarea
                  className="border rounded-md   border-slate-300"
                  placeholder="Your Message"
                  name="content"
                  rows={4}
                  cols={40}
                  required
                />
              </div>

              <button
                type="submit"
                className="h-9 w-28 border rounded-md bg-gradient-to-tr from-purple-800 to-slate-600 hover:bg-gray-600"
              >
                <p className="text-center p-1 text-white">Send Message</p>
              </button>
            </form>
          </div>
        </div>
        <div className="  py-4 md:py-6 md:w-1/2">
          <div className="py-2">
            <p className="text-2xl ">More ways to connect</p>
            <p>
              Follow us on social media, join the conversation on Facebook,
              LinkedIn or Instagram.
            </p>
          </div>
          <div className="py-4 ">
            <p className="text-2xl ">Drop Us an Email</p>
            <p>
              Got a question or need more information? Shoot us an email and
              we’ll get back to you quickly!
            </p>
            <p className="pl-2.5 text-red-800">info@vihaasdtech.com</p>
            <p className="text-red-800">reach@vihaasdtech.com</p>
          </div>
          <div>
            <p className="text-2xl ">Give Us a Calll</p>
            <p>
              Prefer to speak directly? Our friendly team is just a phone call
              away.
            </p>
            {/* <p>Mob No. </p> */}
            <p className="text-red-700">78764-29243</p>
            <p className="text-red-700"> 78764-31437</p>
            {/* <p>Mon-Saturday: 9 AM - 6 PM (IST)</p> */}
          </div>
          <div className="py-4">
            <p className="text-2xl ">Address</p>
            <p>
              Mini Secretariat Road, near New D.C.Office, Solan, Himachal
              Pradesh 173212
            </p>
            <p>Mon-Saturday: 9 AM - 6 PM (IST)</p>
          </div>
        </div>
      </div>

      <div className="py-y md:py-9">
        <div className="px-8 md:text-center py-6 text-3xl ">
          Find our Location on Google Maps
        </div>

        <div className="container mx-auto px-4">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.9010207613446!2d77.10361145105782!3d30.889429785023456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f83a8d83e907f%3A0xf4eeb3a6ec7b1fa3!2sVihaas%20Design%20Technologies!5e0!3m2!1sen!2sin!4v1625923173578!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
