import React from "react";
import Link from "next/link";

const service_data = [
  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Platform Independence 
`,
    des: `Imagine a solution that works everywhere—this is the beauty of web applications. Since they run directly in browsers, they can be accessed from any device with an internet connection, from desktops to smartphones. No downloads? No problem! Your users can access your products or services seamlessly, anytime, anywhere.
` },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Cost-Effective Maintenance 
`,
    des: `Updates couldn’t be easier. With web applications, all updates are managed on the server-side. Instead of asking users to download and install new versions, they’ll instantly get the latest features and fixes without lifting a finger. For businesses, this means streamlined maintenance and fewer disruptions—plus happier users.
`},
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Built to Grow 
`,
    des: `Growth is good—but only if your tech can keep up. Web apps are designed with scalability in mind. Whether your user base gradually increases or your business sees explosive growth, these apps adapt with ease, maintaining top-notch performance and user experience no matter the demand.
`},

  // service home 5
  {
    id: 4,
    icon: "flaticon-diaphragm",
    link: "#",
    img: "/assets/img/services/icon/it-service-3.png",
    title: "Flytographer",
    des: <>Photographer is someone who takes photographs.</>
  },
];

const service_data2 = [
  // service data home 2
  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-1.png",
    title: `Performance Limitations 
 
`,
    des: `Web apps are versatile, but for resource-heavy tasks, they may not pack the punch of native applications. If your project requires heavy graphics rendering, extensive offline capabilities, or ultra-fast processing, a native app might fare better. It’s all about matching the solution to the task at hand.
` },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-2.png",
    title: `Dependence on Internet Connectivity 
`,
    des: `Web applications typically require a stable internet connection to function. If you’re creating software for users in areas with spotty connectivity—or if offline access is a must for your functionality—this could be a dealbreaker. Evaluating your audience’s needs is essential here.
`},
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/it-service-3.png",
    title: `Security Risks 
`,
    des: `Anything accessible online is inherently more exposed. Web apps are vulnerable to a wider range of external threats compared to native solutions. While robust security tools and practices can minimize these risks, it’s vital to consider this carefully, especially if your application will handle sensitive data.
`},
];

const ServiceSection = () => {
  return (
    <div className="tp-it-service pt-120 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-wraper pb-55">
              <div className="tp-section text-center">
                <span className="tp-section__subtitle vogue-text-color white-bg mb-15 wow tpfadeUp">
                  <i className="before-border"></i>
                  Our Talents <i className="after-border"></i>
                </span>
                <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">
                  Is a Web Application the Right Choice for Your Project?
                </h2>
                <p>Deciding how to approach your digital project isn’t just a detail—it’s a game-changer. And when web applications come into play, they offer some incredible opportunities! But like any tech solution, it’s essential to weigh the benefits against the challenges to make the best decision for your goals.
                </p>
              </div>
              <div className="tp-section text-center">
                <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">
                  Why Choose a Web Application?
                </h2>
                <p>Here’s what sets web apps apart and makes them a standout choice:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row it-sv-counter">
          {service_data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="it-service__item mb-30 text-center wow tpfadeUp" data-wow-delay=".3s">
                <div className="it-service__item-img mb-35">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="it-service__item-title mb-20">
                  <Link href={item.link}>{item.title}</Link>
                </h3>
                <p className="mb-0">{item.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-50">
          <div className="col-12">
            <div className="section-title-wraper pb-55">

              <div className="tp-section text-center">
                <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">
                  Things to Consider
                </h2>
                <p>While web applications provide plenty of perks, it’s important to note where they may fall short. Here are a few challenges to keep in mind:
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row it-sv-counter">
          {service_data2.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="it-service__item mb-30 text-center wow tpfadeUp" data-wow-delay=".3s">
                <div className="it-service__item-img mb-35">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="it-service__item-title mb-20">
                  <Link href={item.link}>{item.title}</Link>
                </h3>
                <p className="mb-0">{item.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-50">
          <div className="col-12">
            <div className="section-title-wraper pb-55">

              <div className="tp-section text-center">
                <h2 className="tp-section__title vogue-text-color wow tpfadeUp" data-wow-delay=".3s">
                Making the Right Decision Together 
                </h2>
                <p>Building the best solution for your business doesn’t have to be overwhelming. From knowing when to use a web app to evaluating alternatives, our team is here to guide you each step of the way. We aim to match your project’s unique requirements with technology that aligns perfectly with your vision.
                </p>
                <p>*Have questions or want expert advice? Contact us today to explore solutions that elevate your business, one step at a time. *
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;
