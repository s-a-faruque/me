
const conctInfo = {
  phone: "+1 902 441 9688",
  email: "safique.a.faruque@gmail.com",
};

const sliderContent = {
  name: "Safique A Faruque",
  designation: "Experienced Software Engineer",
  tagline: "Building scalable web platforms and engineering teams with clarity.",
  description: `With over 15 years of experience in software development, I specialize in designing and implementing scalable web applications and integrating complex data systems.`,
  btnText: "Download CV",
  secondaryText: "View About",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+19024419688">{conctInfo.phone}</a>
            <a href={`mailto:${conctInfo.email}`}>{conctInfo.email}</a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-6">
              <div className="type-box">
                <h6
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.tagline}
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <p className="loop-text lead">{sliderContent.designation}</p>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="btn-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <a
                    className="px-btn px-btn-theme"
                    href="https://drive.google.com/file/d/1rz7Gu46cCywLaMwXbClXcVmfCgruCNCF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sliderContent.btnText}
                  </a>
                  <a className="px-btn btn-outline" href="#about">
                    {sliderContent.secondaryText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner-illustrated.jpg"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
