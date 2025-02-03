 import Link from "next/link";
import React from "react";

const service_data = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/icon_for_renewed_confidence.jpg",
      title: `Renewed Confidence`,
      des:`  Joomla 5, with its new updates and refinements, is restoring trust and interest in the platform among users and developers.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/steady_project_request_volume (1).jpg",
      title: `Steady Project Request Volume`,
      des: `  Our agency has observed consistent demand for new Joomla projects, indicating sustained enthusiasm for what the CMS has to offer.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/a_stable_and_supportive_community.jpg",
      title: `A Stable and Supportive Community 
`,
      des: `  The strength of the Joomla community is a significant advantage. This vibrant ecosystem of developers and users provides ongoing support and development, ensuring the platform remains relevant in the years to come.
`
  }, 

]

const Service = () => {
  return (
    <>
      <div className="tp-it-service pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                   
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                   The Future of Joomla
                  </h2>
                  <p>Despite facing initial skepticism with the launch of Joomla 4, the platform continues to find its footing, especially with the release of Joomla 5. Here's where things stand:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="it-service__item mb-30 text-center wow tpfadeUp"
                  data-wow-delay=".3s"
                >
                  <div className="it-servicce__item-img mb-35">
                    <img src={item.img} alt="image-here" />
                  </div>
                  <h3 className="it-service__item-title mb-20">
                    {item.title}
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Final Thoughts
          </h2>
          <p>Joomla is a versatile and capable CMS that can handle a wide range of projects, from blogs to multilingual sites. While it does have some limitations—particularly for ecommerce and plugin variety—it is still a powerful option for businesses prioritizing flexibility, multilingual support, and robust menu systems.
          </p>
          <p>If you're considering Joomla for your next project, we’d be happy to explore how it fits your specific needs. Whether you’re just starting out or looking to upgrade, our expert guidance can help you make informed choices and get exceptional results. Reach out today to learn more.
          </p>
          <p>Looking to bring your Joomla project to life? 
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;

