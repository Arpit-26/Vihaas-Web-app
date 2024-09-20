import React from 'react';
import JobCard from './Carreers/JobCard';

const CareersFresher = () => {
  return (
    <>
      <div className=" text-3xl md:text-[3vw] font-bold text-center py-8  font-serif">
        Recent Graduates
      </div>

      <div className="md:flex">
        {' '}
        <JobCard
          props={{
            jobTitle: 'Software Developer Intern',
            Responsibilities: [
              'Design, develop, and maintain software applications.',
              'Write clean, efficient, and maintainable code using programming languages such as C, C++, JavaScript, etc.',
              'Solve technical problems by debugging code, troubleshooting issues, and finding innovative solutions.',
              'Collaborate with other members of the development team, including software engineers, designers, and product maintainers.',
              'Use version control systems such as Git to manage code repositories and collaborate effectively.',
              'Write documentation for software projects, including technical specifications and user manuals.',
              'Assist in deploying software applications to production environments and provide ongoing support and maintenance.',
              ,
            ],
            Skills: [
              'Basic Knowledge of Electronics concepts.',
              'Expertise in C and C++ Language.',
              'Positive attitude in any situation.',
              'Strong teamwork abilities.',
              'Problem-solving attitude.',
              'Good communication skills.',
            ],
            flag: false,
          }}
        />
      </div>
    </>
  );
};

export default CareersFresher;
