import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import badge from '../../assets/hiring.webp';

const JobCard = ({ props }) => {
  const navigate = useNavigate(); //  initialize navigate function
  const { jobTitle, Responsibilities, Skills, flag } = props;

  const handleClick = () => {
    // Construct the query string with all relevant data
    const responsibilities = encodeURIComponent(
      JSON.stringify(Responsibilities),
    );
    const skills = encodeURIComponent(JSON.stringify(Skills));

    navigate(
      `/applicationForm?name=${encodeURIComponent(jobTitle)}&responsibilities=${responsibilities}&skills=${skills}`,
    );
  };

  return (
    <div className="md:w-1/3 px-6 md:px-6 py-6 ">
      <div className="rounded-xl bg-slate-200 px-12 py-6 ">
        <div className="flex items-center justify-between">
          {/* <h2 className="font-semibold ">Job Title - </h2> */}
          <h2 className="text-2xl font-serif font-semibold py-2 ">
            {jobTitle}
          </h2>
          {flag && (
            <div className="flex-shrink-0   size-28 ">
              <img className="animate-blink" src={badge} alt="" />
            </div>
          )}
        </div>

        <div>
          <h2 className="font-semibold">Responsibilities</h2>
          {Responsibilities.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
          <h2 className="font-semibold">Preferred Skills</h2>
          {Skills.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </div>
        <div className="w-full p-2 text-end">
          <button
            disabled={!flag}
            className={`inline-block p-2 rounded-md text-white text-center ${
              flag
                ? 'bg-green-600 cursor-pointer'
                : 'bg-zinc-400 cursor-not-allowed'
            }`}
            aria-disabled={!flag}
            onClick={handleClick} // Call handleClick on button click
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
