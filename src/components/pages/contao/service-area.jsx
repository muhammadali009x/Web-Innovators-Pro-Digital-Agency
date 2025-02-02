import React from "react";




const service_data = [
  {
    id: 1,
    img: "/assets/img/services/icon/contao_development.jpg",
    title: `Contao Development 
`,
    des: <> Unlock the full potential of your digital projects with Contao, tailored to meet your unique requirements. Whether you're launching a corporate website, building an accessible web app, or creating a discussion forum, we bring expertise and creativity to deliver exceptional results.
      With our Contao development services, we transform your ideas into reality, functioning as your trusted digital partner at every step of the process.
    </>
  },
  {
    id: 2,
    img: "/assets/img/services/icon/concept_and_design.jpg",
    title: ` Concept and Design 
`,
    des: `We understand that great projects start with great concepts. Our team creates detailed strategies, paired with modern, visually appealing designs, to bring your vision to life. Even the most intricate and challenging projects are handled with precision, ensuring every element aligns with your needs and goals. Our individualized approach guarantees designs that are as functional as they are stunning. 
` },
  {
    id: 3,
    img: "/assets/img/services/icon/cms_selection_and_migration.jpg",
    title: ` CMS Selection and Migration 
`,
    des: `Choosing the right Content Management System (CMS) is crucial for the success of your project. We offer guidance in selecting the best CMS suited to your goals. Whether you're switching to Contao or migrating away from it, we’ll ensure a seamless transition with minimal disruptions. 
With extensive experience in platforms like WordPress, Drupal, and Joomla, as well as other CMS solutions and frameworks, we’ll ensure your project is handled with expertise.
`},
  {
    id: 3,
    img: "/assets/img/services/icon/icon_for_support_and_maintenance.jpg",
    title: ` Support and Maintenance 
`,
    des: `Keeping your website running smoothly is essential. From recovering hacked sites to upgrading Contao versions, we offer reliable, ongoing support to protect and enhance your digital platform. Our support and maintenance services are customizable, available as part of comprehensive monthly plans to meet your specific needs and keep your website performing at its best. 
`  },

]

const service_content = {
  title: "Service",
  main_title: "Our Services",
  we_do: `Our Contao Development Services 
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
                       {item.title} 
                    </h3>
                    <p className="mb-30">{item.des}</p>
                          
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p> With a professional team, a collaborative approach, and years of experience, we are ready to make your Contao-powered project truly exceptional. Connect with us today to explore how we can help bring your visions to life efficiently and effectively. 
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
