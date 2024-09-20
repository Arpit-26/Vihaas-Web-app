import React from 'react';
import JobCard from './Carreers/JobCard';
import ApplyNowForm from './Carreers/ApplyNowForm';

const Careers = () => {
  return (
    <>
      <h1 className="text-3xl md:text-[3vw] font-serif font-bold text-center py-8 ">
        {' '}
        Experienced Professional
      </h1>

      <div className="md:flex">
        {' '}
        <JobCard
          props={{
            jobTitle: 'Accounts Department',
            Responsibilities: [
              'Prepare and review financial statements, balance sheets, and profit and loss statements.',
              'Tax Compliance includes Prepare and file tax returns, ensuring adherence to federal, state, and local tax regulations.  ',
              'Audit Support: Assist with internal and external audits, providing necessary documentation and addressing any audit findings.  ',
              'Stay informed about changes in accounting regulations and ensure compliance with all relevant standards. ',
              'Knowledge of Company Law',
            ],
            Skills: [
              'Strong understanding of accounting principles, financial reporting, and tax regulations.',
              ' Ability to work independently and as part of a team in a fast-paced environment.',
              ' Effective communication and interpersonal skills',
              ' Familiarity with Manufacturing industry-specific regulations or standards.',
            ],
            flag: true,
          }}
        />
        <JobCard
          props={{
            jobTitle: 'QA Engineer',
            Responsibilities: [
              'Basic knowledge of Networking and Electronics.',
              'Solve technical problems by debugging code, troubleshooting issues, and finding innovative solutions.',
              'Collaborate with other members of the development team, including software engineers, designers, and product maintainers.',
              'Write documentation for software projects, including technical specifications and user manuals.',
              'Assist in deploying software applications to production environments and provide ongoing support and maintenance.',
            ],
            Skills: [
              'Basic Knowledge of Electronics concepts.',
              'Positive attitude in any situation.',
              'Strong teamwork abilities.',
              'Problem-solving attitude.',
            ],
            flag: false,
          }}
        />
        <JobCard
          props={{
            jobTitle: 'Software Department',
            Responsibilities: [
              'Design, develop, and maintain software applications.',
              'Write clean, efficient, and maintainable code using programming languages such as C, C++, JavaScript, etc.',
              'Solve technical problems by debugging code, troubleshooting issues, and finding innovative solutions.',
              'Collaborate with other members of the development team, including software engineers, designers, and product maintainers.',
              'Use version control systems such as Git to manage code repositories and collaborate effectively.',
              'Write documentation for software projects, including technical specifications and user manuals.',
              'Assist in deploying software applications to production environments and provide ongoing support and maintenance.',
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
      <div className="md:flex">
        {' '}
        <JobCard
          props={{
            jobTitle: 'PCB Design',
            Responsibilities: [
              'Core knowledge of Electronics.',
              'Knowledge of circuit design software (e.g., Altium Designer, OrCAD, Eagle), and familiarity with simulation tools (e.g., SPICE, LTspice).',
              'Design and develop analog, digital, and mixed-signal circuits based on project requirements.',
              'Create detailed schematics and PCB layouts using industry-standard CAD software.',
              'Build and test circuit prototypes to validate designs and ensure they meet performance specifications.',
              'Select appropriate components and materials for circuit designs, considering factors such as availability, cost, and performance.',
              'Prepare comprehensive documentation for circuit designs, including schematics, layout files, test results, and user manuals.',
            ],
            Skills: [
              'Knowledge of high-frequency/RF circuit design.',
              'Knowledge of embedded systems and microcontroller-based designs.',
              'Strong understanding of analog and digital circuit principles, PCB layout techniques, and electronic components.',
              'Positive attitude in any situation.',
              'Strong teamwork abilities.',
              'Problem-solving attitude.',
              'Good communication skills.',
            ],
            flag: false,
          }}
        />
        <JobCard
          props={{
            jobTitle: 'HR Department ',
            Responsibilities: [
              'Policy Development: Create, review, and update HR policies and procedures to ensure compliance with current.',
              'laws and regulations, and implement these policies throughout the organization.',
              'Recruitment and Staffing: Manage hiring processes and onboarding of new employees.',
              'Employee Relations: Resolve conflicts and handle employee grievances.',
              'Compliance and Legal Issues: Ensure adherence to labor laws and company policies.',
              'Organizational Development: Support organizational culture and strategic planning.',
              'Risk Management: Identify and mitigate potential risks related to HR practices; manage investigations and recommend appropriate actions.',
            ],
            Skills: [
              'Excellent analytical, communication, and interpersonal skills.',
              'Knowledge of employment laws and regulations.',
              'Positive attitude in any situation.',
              'Problem-solving attitude.',
              'Employee Engagement.',
              'Proficiency in HR software and Microsoft Office &amp; Excel.',
              'Knowledge Statutory compliances.',
            ],
            flag: false,
          }}
        />
        <JobCard
          props={{
            jobTitle: 'Mechanical Department',
            Responsibilities: [
              'Create detailed 3D models and 2D drawings of mechanical components and assemblies using CAD software (e.g. SolidWorks, AutoCAD).',
              'Develop and prototype new mechanical systems and components.',
              'Ensure designs comply with industry standards, regulatory requirements, and safety guidelines.',
              'Conduct stress and tolerance analyses to ensure designs are robust and reliable.',
              'Select appropriate materials for mechanical designs, considering factors such as strength, durability, cost, and performance.',
              'Prepare comprehensive documentation for mechanical designs, including specifications, test results, and user manuals.',
              'Collaborate with cross-functional teams to ensure seamless integration of mechanical designs into overall projects.',
            ],
            Skills: [
              'Knowledge of mechanical system design and development.',
              'Proficiency in using CAD software (e.g., AutoCAD, SolidWorks, CATIA) for creating detailed 3D models and 2D drawings.',
              'Strong understanding of material properties, mechanical principles, and manufacturing processes.',
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

export default Careers;
