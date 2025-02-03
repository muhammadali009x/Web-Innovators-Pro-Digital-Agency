import Link from "next/link";
import React from "react";
const local_service_data = [
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Component-Based Architecture 
`,
    des: `React’s component-based structure transforms development into something modular and streamlined. What does this mean for you? Your team can reuse code, build faster, and better maintain your application over time. Say goodbye to bulky, tangled codebases—this architecture keeps things neat and efficient. 
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Exceptional UI Capabilities 
`,
    des: `When it comes to creating a dynamic, interactive user experience, React is a top contender. Responsive interfaces built on React enhance the user experience in ways that increase engagement, retention, and even conversion rates. If delivering a seamless, stunning front-end is a priority, React could be your go-to. 
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `A Thriving Community 
`,
    des: `React isn’t just a tool; it’s backed by a vibrant, global community. Maintained by Meta (formerly Facebook), React benefits from active contributions, regular updates, and an entire ecosystem of supporting tools. Need a library or plugin? Odds are someone’s already built it. 
`
  },
]

const local_service_data2 = [
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `It’s a Library, Not a Full Framework 

`,
    des: `Unlike full-fledged frameworks like Angular, React offers flexibility—but flexibility comes with a trade-off. For complex or large-scale applications, you’ll need to integrate other libraries and tools, which can add complexity and decision fatigue. 
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Challenges with Integration 
`,
    des: `If you’re integrating React into an existing codebase, be prepared for a potential headache. It often requires significant refactoring to make everything fit just right. For projects relying heavily on smooth transitions and backward compatibility, this could be an issue. 
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `SEO Considerations 
`,
    des: `React’s client-side rendering can present challenges for search engine optimization (SEO). While there are solutions, like server-side rendering or static site generation, they typically require extra configurations and effort. If organic traffic is vital to your business, this is something you absolutely need to address. 
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
                    React JS <i className="after-border"></i>
                  </span>
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Is React the Right Framework for Your Project?

                  </h2>
                  <p>Choosing the right framework for your digital project can make or break your success. With several years of experience working with React, we’ve seen firsthand how powerful it can be. But no technology is perfect for every scenario. To help you make an informed decision, let's deep-dive into what makes React shine and where it might fall short.
                  </p>
                  <h3>Why React Stands Out
                  </h3>
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
                    Where React Might Not Be the Best Fit


                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {local_service_data2.map((item, i) => (
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
                    Making the Right Choice


                  </h2>
                  <p>React is a powerful and versatile tool. Its strengths—like modular architecture and impressive UI capabilities—make it ideal for many modern applications. But it’s important to weigh potential hurdles, such as SEO or integration concerns, against your project’s goals.
                  </p>
                  <p>When deciding if React is right for you, remember that frameworks and libraries are tools to serve your unique needs—not one-size-fits-all solutions. We believe in giving you the complete picture to empower informed choices.
                  </p>

                  <p>Need guidance or clarity for your project? We can help you find the right fit, ensuring your platform aligns perfectly with your vision and goals. Don’t hesitate to reach out—your next great digital experience starts here!
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

