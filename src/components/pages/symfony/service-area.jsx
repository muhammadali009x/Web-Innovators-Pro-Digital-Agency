import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/ca-sv-icon-1.png",
    title: `Custom Symfony Applications 
`,
    des: `Looking for a tailored web solution that fits your unique needs? Our seasoned developers specialize in creating custom applications using Symfony’s versatile framework. We transform your vision into high-performing software built to meet your specific goals, bringing advanced functionality and precision to every project. 
`
  },
  {
    id: 2,
    img: "/assets/img/services/icon/ca-sv-icon-2.png",
    title: `Scalable Enterprise Solutions 
`,
    des: `Scaling a large corporation shouldn’t feel like climbing Everest. Our Symfony enterprise solutions are built to support your growth seamlessly. By designing software that aligns perfectly with your business processes and effortlessly integrates with existing systems, we ensure your team is always one step ahead. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Custom Bundle Development 
`,
    des: `Why settle for standard functionality when you can have something that truly works for you? Our team leverages Symfony’s modular design to develop custom bundles that enhance the performance of your applications. These specialized bundles unlock new efficiencies and usability, ensuring your software works smarter—not harder. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Elevate Your Symfony Experience 
`,
    des: `At every stage, our Symfony development services combine expert craftsmanship, scalable solutions, and unwavering support. Whether you're a growing enterprise or need custom features that wow, we ensure your applications are built to shine. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Smooth API Integration 
`,
    des: `Connectivity fuels modern applications, and our team has the expertise to make it seamless. Whether it’s creating efficient RESTful solutions or integrating complex APIs into your Symfony applications, we ensure everything runs like clockwork while boosting your app's capability and functionality. 
`
  },
  {
    id: 3,
    img: "/assets/img/services/icon/ca-sv-icon-3.png",
    title: `Ongoing Maintenance and Support 
`,
    des: `Great software doesn’t stop evolving after deployment—and neither do we. With our dedicated maintenance and support services, your Symfony application stays optimized, secure, and ahead of the curve. From updates to troubleshooting, we are here to ensure your software performs at its best every step of the way. 
`
  },
]

const service_content = {
  title: `"Service"`,
  main_title: "What We Do",
  we_do: `Our Symfony Development Services 
`,
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
          <p>Let's build something extraordinary together!
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
