import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Engineer 3`,
    jobType: `Remote`,
    jobDuration: `Mar 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Proposify Inc",
    jobDescription: `Architected and implemented scalable public APIs to enhance developer access and integration, 
    employing OpenAPI for specifications and Redoc for dynamic documentation.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Software Development Lead`,
    jobType: `iPrice`,
    jobDuration: `July 2020 - Dec 2020`,
    timeDuraton: `Full Time`,
    compnayName: "iPrice Group",
    jobDescription: `Led 3 integration projects with e-wallets and super apps with a team of 10 members`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Technical Lead`,
    jobType: ``,
    jobDuration: `July 2014 - May 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Intelligent Money Sdn. Bhd",
    jobDescription: `Integrated CRM system with top financial organizations of South East Asia like Citibank, HSBC, RHB, Hollard, Tunaiku etc`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2009-2014",
    degreeTitle: "M.Sc in CSE",
    instituteName: "Bangladesh University Of Engineering and Technology",
  },
  {
    passingYear: "2004-2016",
    degreeTitle: "B.Sc in CSE",
    instituteName: "University of Dhaka",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-12 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            {/* <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div> */}
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
