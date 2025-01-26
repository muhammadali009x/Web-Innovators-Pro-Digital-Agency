import Link from "next/link";
import React from "react";
const service_data = [


  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Plugin Dependency Risks 
`,
    des: ` Over-reliance on plugins can affect site performance, lead to compatibility challenges, and increase security risks. Regular updates and monitoring are essential to mitigate these issues.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Handling Complex Projects 
`,
    des: ` For highly complex or enterprise-level sites requiring extensive customization and strict structure, other content management systems may provide better options tailored for scalability and reliability.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Security Concerns 
`,
    des: ` WordPress’s widespread popularity unfortunately makes it a frequent target for hackers. Implementing security best practices, such as regular updates and backups, is crucial for site protection.
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
                  <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                    <i className="before-border"></i>
                    Services <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Where WordPress Falls Short

                  </h2>
                  <p>While WordPress is a powerful tool, it has a few limitations that users need to consider:
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
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <p className="mb-0">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

