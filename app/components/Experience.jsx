import React from "react";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors;

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { complex, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../data/experiences.js";
import { AnimatedSection } from "./index.js";
import { textVariant } from "../utils/motion.js";
import Image from "next/image";


const TimelineElementWrapper = ({ children, company_name, date, icon, iconBg }) => {
  return (
    <VerticalTimelineElement
      // set 'visible to work around
      // https://github.com/stephane-monnot/react-vertical-timeline/issues/166
      visible={true}
      contentStyle={{
        background: colors.primary['900'],  // ref: https://tailwindcss.com/docs/customizing-colors
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}  //#232631
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full' >
          <Image
            src={icon}
            alt={company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div >
      }
    >
      {children}
    </VerticalTimelineElement>
  )
}


const LanguageTags = ({ experience }) => {
  return (
    <div>
      {experience.languages != null ?
        <div className='mt-4 flex flex-wrap gap-x-2'>
          {experience.languages.map((language, index) => (
            <div
              key={`lang-${index}`}
              className={'text-lg text-tertiary-light'}
            >
              {language}
            </div>
          ))}
        </div>
        :
        null}
    </div>
  )
}

const SummaryContents = ({ experience }) => {
  return (
    <div>
      <div className='my-4 ml-4 text-primary-light text-xl font-normal' > {[experience.summary]} </div>
    </div>
  )
}

const SimpleContents = ({ experience }) => {
  return (
    <div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`xp-${index}`}
            className='text-primary-light text-xl pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

const DetailedContents = ({ experience }) => {
  return (
    <div className="group perspective" >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000" >
        <div className="relative backface-hidden group-hover:hidden " >
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`xp-${index}`}
                className='text-primary-light text-lg pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group-not-hover my-rotate-y-180 backface-hidden overflow-hidden" >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-secondary-light font-bold opacity-30 z-0 -rotate-45 scale-[5] lg:scale-[8]">TL;DR</p>
          </div>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.detailed_points.map((point, index) => (
              <li key={`dxp-${index}`} className='text-primary-light text-xl pl-1' >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ExperienceCard = ({ experience }) => {
  const summary = true;
  const company_name = experience.company_name;
  const date = experience.date;
  const icon = experience.icon;
  const iconBg = experience.iconBg;

  return (
    <TimelineElementWrapper company_name={company_name} date={date} icon={icon} iconBg={iconBg}>
      <div>
        <div className='text-primary-light h3-size font-black uppercase'>{experience.company_name}</div>
        <div className='text-secondary' > {experience.title} </div>
      </div>

      {
        summary ?
          <SummaryContents experience={experience} />
          :
          experience.detailed_points != null ?
            <DetailedContents experience={experience} />
            :
            <SimpleContents experience={experience} />
      }

      {summary || <LanguageTags experience={experience} />}

    </TimelineElementWrapper >
  );
};

const CompanyCard = ({ experiencesAtCompany }) => {
  const company_name = experiencesAtCompany[0].company_name;
  const icon = experiencesAtCompany[0].icon;
  const iconBg = experiencesAtCompany[0].iconBg;
  const startDateRange = experiencesAtCompany[experiencesAtCompany.length - 1].date;
  const endDateRange = experiencesAtCompany[0].date;
  const startDate = startDateRange.split('-')[0].trim();
  const endDate = endDateRange.split('-')[1].trim();
  const date = `${startDate} - ${endDate}`;

  return (
    <TimelineElementWrapper company_name={company_name} date={date} icon={icon} iconBg={iconBg}>
      <div>
        <h3 className='text-primary-light h3-size font-black uppercase'>{experiencesAtCompany[0].company_name}</h3>
        <h3 className='text-secondary-light text-xl font-bold mt-1' >
          <div className='flex flex-col'>
            {/* list-disc */}
            {experiencesAtCompany.map((role, index) => (
              <>
                <div className='text-secondary-light text-xl font-bold' key={`role-${index}`} > {role.title} </div>
                {/* {
                  role.points.map((point, pointIndex) => (
                    <div className='text-primary-light text-base font-normal' key={`point-${pointIndex}`} > {[point]} </div>
                  ))
                } */}
                <div className='my-4 ml-4 text-primary-light text-xl font-normal' key={`role-${index}-summary`} > {[role.summary]} </div>
              </>))}
          </div>
        </h3>
      </div>
    </TimelineElementWrapper>
  );
};

const Experience = () => {

  const experiencesGroupedByCompany = experiences.reduce((acc, curr) => {
    if (!acc[curr.company_name]) {
      acc[curr.company_name] = [];

    }
    acc[curr.company_name].push(curr);
    return acc;
  }, {});

  // console.log(JSON.stringify(experiencesGroupedByCompany));
  // console.log(Object.keys(experiencesGroupedByCompany));

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={'pre-h1 text-center'}>Career / Education</h1>
        <h1 className='text-center link'><a href='experience'>Experience</a></h1>

      </motion.div>

      <div className='mt-8 lg:mt-16 flex flex-col'>
        <VerticalTimeline>
          {/* {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))} */}

          {Object.keys(experiencesGroupedByCompany).map((company, index) => (
            // console.log(company),
            // console.log(JSON.stringify(experiencesGroupedByCompany[company])),
            <CompanyCard experiencesAtCompany={experiencesGroupedByCompany[company]} />
          ))}

        </VerticalTimeline>
      </div>
    </>
  );
};

export default AnimatedSection(Experience, "experience");
