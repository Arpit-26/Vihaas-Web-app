import React, { useState } from 'react';

const ApplyNowForm = () => {
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const responsibilities = JSON.parse(
    decodeURIComponent(queryParams.get('responsibilities')),
  );
  const skills = JSON.parse(decodeURIComponent(queryParams.get('skills')));

  const [phoneNumber, setPhoneNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    // Allow only digits and format as needed
    const formattedValue = value.replace(/[^\d]/g, '');
    setPhoneNumber(formattedValue);
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };
  return (
    <>
      <div className="text-[3vw] font-serif font-bold text-center py-8 uppercase">
        Application Form
      </div>

      <div className="py-[6vw] md:flex  justify-center">
        <div className=" flex justify-center px-4">
          <div>
            <h1 className="text-3xl font-bold pb-4">
              Application Form for {name}
            </h1>
            <h2 className="text-xl font-semibold">Responsibilities:</h2>
            <div>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <h2 className="text-xl font-semibold">Preferred Skills:</h2>
            <div>
              {skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>
        </div>

        {/*Application Form */}
        <div className="md:w-1/3 flex items-center justify-center">
          <div className="  px-6 border rounded-lg bg-slate-200 w-fit ">
            <form
              className="p-6 "
              method="POST"
              action="https://formsubmit.co/reach@vihaasdtech.com"
              enctype="multipart/form-data"
            >
              <input
                type="hidden"
                name="_subject"
                value={`New Application for ${name}`}
              />
              {/* <input type="hidden" name="_captcha" value="false" /> */}
              <div>
                <label htmlFor="firstName">Name</label>
                <br />
                <input
                  id="firstName"
                  className="border border-slate-300 rounded-sm"
                  type="text"
                  name="Name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  id="lastName"
                  className="border border-slate-300 rounded-sm"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  className="border border-slate-300 rounded-sm"
                  type="email"
                  name="Email"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <br />
                <div className="relative">
                  {/* Fixed part of the phone number */}
                  <span className="absolute inset-y-0 left-0 pl-1 flex items-center text-gray-600 text-sm">
                    +91
                  </span>
                  {/* Input field */}
                  <input
                    className="pl-9 border border-slate-300 rounded-sm  py-2"
                    type="tel"
                    name="PhoneNumber"
                    placeholder="123 456 7890"
                    value={phoneNumber}
                    onChange={handleChange}
                    maxLength="10" // Optional: limit the number of digits entered
                  />
                </div>
              </div>
              <div>
                <label htmlFor="fileUpload">Upload Resume.pdf </label>
                <br />
                <input
                  id="fileUpload"
                  className="border border-slate-300 rounded-sm py-2"
                  type="file"
                  name="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                {file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="pt-4">
                {' '}
                <button
                  type="submit"
                  className="h-9  w-fit border rounded-md bg-gradient-to-tr from-purple-800 to-slate-600 hover:bg-gray-600"
                >
                  <p className="text-center p-1 text-white">
                    Submit Application
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNowForm;
