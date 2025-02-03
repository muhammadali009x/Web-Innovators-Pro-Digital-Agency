 import Link from "next/link";
import React from "react";

const local_service_data = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-1.png",
      title: `Versatile Components
`,
      des: `Symfony’s reusable components provide flexibility and power that go beyond just its framework. From templating to routing, you can integrate these components into standalone projects. That versatility makes Symfony an excellent choice whether you’re building a large, complex application or just need a flexible toolset for smaller tasks.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-2.png",
      title: `Exceptional Performance
`,
      des: `One reason Symfony is celebrated is its efficiency, and this is in no small part due to Symfony Flex. This feature ensures that projects start lean with minimal dependencies, giving developers the ability to scale selectively. If high performance is a top priority for you, Symfony has tools designed to keep your digital experiences fast and reliable.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `Passionate Developer Community
`,
      des: `Although not the largest, Symfony’s developer community is thriving. These dedicated contributors constantly enhance the platform, share useful bundles (Symfony’s term for plugins), and provide thorough documentation. With such an active ecosystem, you’re not just choosing a framework—you’re joining a network of innovators working to make Symfony better every day.
`
  }, 


]


const local_service_data2 = [


  // service data home 2
  {
      id: 1,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-1.png",
      title: `Steep Learning Curve
`,
      des: `Symfony is robust and flexible, offering a deep toolbox for tackling complex digital needs. But with great flexibility comes a learning curve. For those unfamiliar with its structure or concepts, it may feel a little overwhelming at first. If tight deadlines or limited technical expertise are factors, onboarding to Symfony could take more time.
`
  },
  {
      id: 2,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-2.png",
      title: `Bundle Dependencies
`,
      des: `The power of Symfony lies in its reusable and modular bundles. However, managing these can create complexity—especially for large-scale projects. Ensuring compatibility, maintaining updates, and managing configurations may require experienced developers to handle effectively.
`
  },
  {
      id: 3,
      link: "/service-3",
      img: "/assets/img/services/icon/it-service-3.png",
      title: `Requires Object-Oriented Know-How
`,
      des: `Symfony is built on Object-Oriented Programming (OOP) principles. While this ensures your code is organized, reusable, and scalable, it could present challenges if your project has limited resources or calls for a simpler framework. For quick projects on tight schedules, a lighter framework might be more practical.
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
                  Is Symfony the Right Framework for You?

                  </h2>
                  <p>Choosing the right framework for your digital project is a pivotal decision, and we get how overwhelming it can feel. After years of working with Symfony, we’ve seen firsthand what it’s capable of—and it’s nothing short of impressive! But like any piece of technology, it’s essential to consider its strengths and challenges to decide if it’s the perfect fit for your needs.
                  </p>
                  <h3>What Makes Symfony Stand Out?
                  </h3>
                  <p>Here are some unique features of Symfony that have cemented its place as a top contender in the PHP ecosystem:
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
                  Things to Keep in Mind Before Choosing Symfony


                  </h2>
                  <p>Despite its many advantages, Symfony may come with challenges you’ll need to weigh:
                  </p>
                   
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
               Is Symfony Right for Your Project?


                  </h2>
                 <p>Symfony’s flexibility and performance make it a fantastic choice for robust, scalable projects. Its reusable components and thriving community mean you’ll never lack tools to solve complex challenges. But it’s not a one-size-fits-all solution. If you’re working on a simple application or your team isn’t yet familiar with advanced programming concepts, Symfony’s steep learning curve may not align with your needs.
                 </p>

                 <p>That’s where we can help. Selecting the right framework doesn’t have to be daunting. Our expert team is here to guide you through the decision-making process, giving you a full picture of whether Symfony will elevate your project—or if an alternative framework might work better.
                 </p>

                 <p>Feeling ready to take the next step? We’re here to help bring your ideas to life. Reach out to us today!
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

