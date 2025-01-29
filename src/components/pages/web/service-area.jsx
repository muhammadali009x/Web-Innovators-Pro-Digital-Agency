import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: `CMS Development 
`,
    des: `Creating exceptional user experiences with content management systems is our specialty. Whether it's Drupal, WordPress, Joomla, or Contao, our deep expertise in these platforms allows us to build tailored solutions that align with your business needs. From intuitive blogs to dynamic, content-driven enterprise websites, we focus on leveraging the strengths of each CMS to captivate your audience while meeting your strategic goals. 
`},
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Web App Development 
`,
    des: `Web applications are a key driver of digital transformation, offering immersive and engaging experiences that empower users. Our team focuses on building responsive, high-performance web apps designed to streamline your business processes and evolve with your users’ needs. Whether you're enhancing customer engagement or optimizing internal workflows, we craft solutions that are adaptable, efficient, and forward-thinking. 
`},
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Frameworks & Libraries 
`,
    des: `Our development expertise lies in harnessing the capabilities of cutting-edge frameworks and libraries to deliver cutting-edge results. On the backend, we excel in robust technologies like Laravel and Symfony for secure and scalable development. For interactive and dynamic frontends, we specialize in React, Angular, and Vue.js, ensuring your digital platforms are as engaging as they are functional. Every solution blends technological innovation with an unwavering focus on user experience. 
`  },
  {
    id: 4,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Web Solutions & Services 
`   , des: `A well-rounded digital presence hinges on more than just aesthetics and usability—it thrives on inclusivity and data-driven strategies. We are committed to web accessibility, ensuring that every user, regardless of ability, has a seamless and engaging experience. Leveraging tools like Matomo analytics, we gather actionable insights to keep your strategies informed and effective. Our goal is to make your digital presence not only beautiful and functional but also inclusive and impactful. 
`},
]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Web Agency Services `,
  btn_text: "More Services"
}


const { title, main_title, we_do, btn_text } = service_content

const ServiceArea = () => {
  return (
    <>
      <div
        className="ca-service-area theme-bg-7 pt-120 pb-90"
        style={{
          backgroundImage: `url(/assets/img/services/ca-sv-pattern-bg.png)`,
        }}
      >
        <div className="container">
          <div className="row align-content-center">
            <div className="col-md-8 wow tpfadeUp">
              <div className="section-title-wraper">
                <div className="tp-section">
                  <span className="tp-section__bigtitle">{title}</span>
                  <span className="tp-section__subtitle shadow-none text-rgb mb-15 p-0">
                    {main_title}
                  </span>
                  <h2 className="tp-section__title mb-40">{we_do}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow tpfadeUp">
              <div className="ca-service-btn-wrapper float-md-end mb-75">
                <a href="#" className="tp-white-btn-rgb">
                  {btn_text}
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="ca-service-wrapper mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="ca-service__item text-center aos-init aos-animate">
                    <div className="law-servicce__item-img mb-35">
                      <img src={item.img} alt="" />
                    </div>
                    <h3 className="ca-service__item-title mb-20">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p className="mb-30">{item.des}</p>
                    <a href="#" className="read-btn">
                      Read More <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>Partner with us to create solutions that inspire, perform, and connect with your audience at every level.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
