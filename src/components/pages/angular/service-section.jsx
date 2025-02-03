import Link from "next/link";
import React from "react";

const local_service_data = [


  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/steep_learning_curve.jpg",
    title: `Steep Learning Curve
`,
    des: `Angular is a robust and feature-rich framework, but this comes with complexity. Its reliance on TypeScript and its structured approach might take more time for developers to learn and master. This can extend the onboarding process for team members, potentially impacting project timelines, particularly for teams unfamiliar with the framework.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/performance_considerations.jpg",
    title: `Performance Considerations
`,
    des: `For smaller, less complex applications, Angular might be overkill. Its comprehensive approach can introduce performance overhead, potentially leading to slower load times compared to leaner options like React or Vue.js. If your project doesn’t require the full scope of Angular’s capabilities, these simpler solutions may be more efficient.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/application_size.jpg",
    title: `Application Size
`,
    des: `Applications built with Angular often have larger file sizes when compared to similar projects using other frameworks or libraries. This can result in slower loading speeds, which can negatively impact the user experience, especially in regions with limited internet connectivity or on mobile devices.
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
                  {/* <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                    <i className="before-border"></i>
                    Services <i className="after-border"></i>
                  </span> */}
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Why Consider Alternatives to Angular?

                  </h2>
                  <p>Despite its strengths, Angular may not be the ideal choice for every project. Here are a few challenges that you should weigh:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {local_service_data.map((item, i) => (
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




          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">

                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    How to Decide if Angular Fits Your Needs

                  </h2>
                  <p>To determine whether Angular is the right fit for your project, it’s essential to evaluate your specific goals, technical requirements, and team expertise. Angular shines when working on large-scale, feature-rich applications where its comprehensive tools and structures provide significant value. However, for smaller projects or when minimal complexity is required, exploring alternatives such as React, Vue.js, or Svelte may better serve your needs.
                  </p>
                  <p>Our team is dedicated to helping you make these critical decisions with confidence. We bring an unbiased perspective to the table and aim to align the chosen technology with your project requirements, timeline, and business objectives.
                  </p>
                  <p>Need expert guidance? We’re here to help you choose the technology that drives your project’s success. Reach out to us today, and take the first step toward a well-informed, strategic framework decision.
                  </p>
                    
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Service;

