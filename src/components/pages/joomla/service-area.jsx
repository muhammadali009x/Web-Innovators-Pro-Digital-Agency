import React from "react";




const service_data = [
    {
        id: 1, 
        img: "/assets/img/services/icon/ca-sv-icon-1.png",
        title: `Development for New & Existing Sites 
`,
        des: `Whether you're starting from scratch or looking to enhance your current site, our Joomla development services have you covered. Our expert team specializes in planning and building new Joomla websites tailored to your specific needs. Additionally, we offer development and maintenance support for existing Joomla sites, ensuring consistent performance and functionality. No matter the scope of your project, we’re here to provide guidance and execute any development tasks with precision and expertise. 
`   },
    {
        id: 2, 
        img: "/assets/img/services/icon/ca-sv-icon-2.png",
        title: `Joomla Maintenance, Recovery & Support 
`,
        des:`Keep your site running smoothly with our comprehensive maintenance services. We offer regular backups, performance audits, and version updates to ensure your Joomla website remains reliable and secure. Facing issues like crashes or cyberattacks? We also specialize in recovering and repairing broken or hacked Joomla websites, helping you regain control and confidence in your digital presence. 
` },
    {
        id: 3, 
        img: "/assets/img/services/icon/ca-sv-icon-3.png",
        title: `Version Updates & Joomla 3.x Migration 
`,
        des: `Stay ahead with the latest technology. Since 2021, our team has successfully assisted nearly 100 Joomla 3 site owners in migrating or rebuilding their websites with Joomla 4. For those considering a change, we’ve also helped clients transition to alternative CMS platforms. Whether you're upgrading or switching, we ensure a seamless process that aligns with your business goals. 
`},
    {
      id: 4, 
      img: "/assets/img/services/icon/ca-sv-icon-3.png",
      title: `Expertise in Other CMS & Web Technologies 
`,
      des: `Joomla is just one of the many tools in our repertoire. We also work extensively with WordPress, Drupal, Contao, and numerous other CMS solutions and frameworks. Not sure which platform suits your needs? We provide expert advice to help you make informed decisions and manage smooth migrations to a new CMS if required. Our team's experience means you’ll receive the right solution for your digital strategy. 
`},
]

const service_content ={
    title: "Service",
    main_title: "Our Services",
    we_do: "Joomla Development Services",
    btn_text: "More Services"
}


const {title, main_title , we_do, btn_text}  = service_content

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
                  <p>Partnering with us means more than just technical expertise — it’s a commitment to making your website functional, scalable, and aligned with your vision. Contact us today to see how we can support your Joomla or CMS project.
                  </p>
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
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
