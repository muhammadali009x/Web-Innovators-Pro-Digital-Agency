import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: `Accessible Web & App Creation 
`,
    des: `Planning a new project? Our team specializes in creating accessible websites and apps from the ground up. By adhering to US accessibility standards, we ensure every digital platform we build is functional, user-friendly, and inclusive. Our approach allows you to reach a broader audience while fostering a seamless user experience for everyone, including individuals with disabilities. 
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Comprehensive Accessibility Audits 
`,
    des: `If you already have a website or app, our detailed accessibility audits will help you evaluate your platform against US accessibility guidelines. Through our thorough analysis, we pinpoint areas needing improvement and outline actionable steps to enhance usability. The result? A universally accessible digital space that aligns with accessibility requirements and delivers a better experience to all users. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Retrofitting Digital Platforms 
`,
    des: `Struggling with an existing site or app that falls short of accessibility standards? We can help. Our team is experienced in retrofitting digital platforms, making them inclusive without compromising design or functionality. From reworking user interfaces to optimizing content for better perceivability, we can transform your platform into one that meets the needs of all users—helping your business remain compliant and inclusive. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Continuous Support & Training 
`,
    des: `Accessibility is not a one-time achievement—it’s an ongoing commitment. That’s why our support doesn’t end with project completion. We provide continuous assistance to ensure your digital platforms remain compliant with ever-evolving accessibility standards. We also offer training sessions for your team, equipping them with the knowledge to maintain and uphold these standards over time. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Accessibility Strategy & Consultation 
`,
    des: `Whether you’re at the beginning of your accessibility journey or looking to enhance your current practices, our consultation services provide the expert guidance you need. From identifying opportunities within your digital framework to crafting a comprehensive roadmap, we tailor strategic solutions to your unique requirements. Leverage our expertise to confidently improve accessibility and create a more inclusive digital environment. 
`
  },
]

const service_content = {
  title: "Service",
  main_title: "What We Do",
  we_do: "Web Accessibility Services ",
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
          <p>By partnering with us, you don't just meet the guidelines—you foster a culture of inclusion that benefits your audience and aligns with your brand values.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
