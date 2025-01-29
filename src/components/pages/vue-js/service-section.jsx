import Link from "next/link";
import React from "react";

const service_data = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Ease of Use`,
    des: `Vue.js is well-known for its beginner-friendly structure, making it accessible for developers who are already familiar with HTML, CSS, and JavaScript. Its simplicity allows teams to reduce development time and quickly create prototypes, offering a perfect blend of speed and usability.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Flexibility`,
    des: `Designed with integration in mind, Vue.js is incrementally adoptable. This means you can use it to power part of your project without committing to a full-scale framework overhaul. Its adaptable nature allows developers to meet a range of project requirements—whether you're building a sophisticated app or adding interactivity to a smaller feature.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Strong and Growing Community Support`,
    des: `While not as large as Angular or React, Vue.js boasts an enthusiastic and growing community. Developers can rely on a solid ecosystem of libraries and robust community-provided resources, which are constantly improving. This active support base fosters innovation and ensures Vue.js remains a forward-thinking tool.
`
  },

]

const service_data2 = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Smaller Community
`,
    des: `Although the Vue.js community is expanding, its size is still smaller compared to competitors like Angular or React. This can occasionally lead to fewer resources and third-party components being available, as well as limited assistance for obscure issues.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Localization and Language Barriers`,
    des: `Vue.js has a strong following in China, where much of its early documentation and community-led discussion originated. While significant progress has been made in translating resources into other languages, some third-party libraries and support materials may still be primarily available in Chinese.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Limited Large-Scale Adoption
`,
    des: `Vue.js is not as widely used in large-scale enterprise applications as Angular or React. While this does not diminish its capabilities for complex projects, the limited number of reference examples can make navigating large, intricate developments more challenging at times.
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
                    Is Vue.js the Right Framework for Your Project?
                  </h2>
                  <p>Choosing the ideal framework for your digital project can significantly impact its success. Vue.js is a popular option due to its simplicity and flexibility, making it a favorite among developers. However, like any technology, it's important to weigh both its strengths and potential limitations to determine whether it's the best fit for your needs.
                  </p>
                  <p>Here's a closer look at what makes Vue.js stand out and where it might fall short:
                  </p>
                  <h3>Key Advantages of Vue.js
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data.slice(0, 3).map((item, i) => (
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



          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Challenges to Consider
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row it-sv-counter">
            {service_data2.map((item, i) => (
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

          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Is Vue.js Right for Your Needs?
                  </h2>
                  <p>Vue.js offers a compelling mix of flexibility, simplicity, and functionality, making it an excellent choice for small- to medium-scale projects or for teams seeking an intuitive framework. That said, if your project involves enterprise-level complexity or relies heavily on extensive third-party tools and components, a framework with a larger developer base, like Angular or React, may be more appropriate.
                  </p>
                  <p>At the end of the day, selecting the right technology depends on the unique demands of your project—everything from scale to team expertise should factor into your decision. The benefit of a framework like Vue.js lies in its accessibility and adaptability, both of which allow you to experiment and find what works best for your goals.
                  </p>
                  <p>If you're navigating this decision-making process and need guidance on whether Vue.js (or another framework) aligns with your objectives, our team is here to help. With extensive experience in modern technologies and a user-centric approach, we can ensure you have the tools and insights to make a choice that perfectly complements your vision.
                  </p>
                  <p>Looking to bring your Vue.js project to life?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper pb-55">
                <div className="tp-section text-center">
                  <h2
                    className="tp-section__title vogue-text-color wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Why Vue.js Could Be the Right Choice for You

                  </h2>
                  <p>Vue.js offers extensive customization, adaptability, and a developer-friendly structure, whether your project is small, medium, or enterprise-level. It’s a framework that puts both developers and application users at the forefront.
                  </p>
                  <p>Got more questions about how Vue.js can fit into your project? Contact our team to discuss your unique needs and how we can bring them to life with Vue.js. We're always here to help!
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

