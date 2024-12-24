import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "jason",
      desc: `  Faruque's work at iMoney brought a lot of structure to the engineering team's practices and processes. His aptitude in research, software architecture and sound engineering ensured that our internal systems were built on a solid foundation. His measured work brought a much needed balance to our desire to 'move fast and break things'. 

On top of that, as a person, Faruque's an absolute pleasure to work with, and it's no wonder that he's now an engineering leader at iMoney.`,
      reviewerName: "Jason Kon",
      designation: "Lead Digital Product Owner, Amplify Health",
      delayAnimation: "",
    },
    {
      imageName: "shajedul",
      desc: `Safique Ahmed Faruque is the person who would not become complacent over his success and sit back and relax, rather would thrive for more. 
      But there is something else that is more important to him than success, that is self improvement. Ever since we met, we have grown a friendly relationship beyond 
      professional relationship and during this time I have seen him make continuous strides towards improvement. 
      He would continuously try to improve his technical skill, his interpersonal and communication skill, would try to improve relationship with his colleagues 
      and also try to maintain a healthy social and family life. A person who would take courageous and bold steps besides his daily job, to create new opportunities for himself, 
      and also to create new jobs for others. Whenever I feel hesitated or insecure about taking any new challenge, I call him and his soothing voice works like magic for me. 
      And not to mention that he is a rockstar programmer! 
      He is another guy among the very few who is trying everyday to bring positive change to the society and I wish he achieves all the success in life. `,
      reviewerName: "Md Shajedul Islam",
      designation: "Digital Engineering Senior Engineer, NTT Data",
      delayAnimation: "200",
    }
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpeg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
