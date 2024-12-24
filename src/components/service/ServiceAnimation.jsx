import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Development",
    descriptions: `Crafting responsive and user-friendly web applications tailored to business needs, leveraging modern frameworks and best practices.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Performance Improvement",
    descriptions: `Enhancing system performance through optimized code, efficient architectures, and scalability solutions.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "System Design",
    descriptions: `Designing robust and scalable systems with a focus on security, reliability, and business objectives.`,
    delayAnimation: "400",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
