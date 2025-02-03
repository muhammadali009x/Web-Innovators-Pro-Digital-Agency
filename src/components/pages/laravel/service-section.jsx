import Link from "next/link";
import React from "react";

const local_service_data = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/versatile_database_handling.jpg",
    title: `Versatile Database Handling `,
    des: `Laravel’s Eloquent ORM (Object-Relational Mapping) is a powerhouse for database management. It's efficient, intuitive, and versatile, allowing developers to easily manage complex database queries. Whether your project requires simple tables or intricate multi-relational datasets, Eloquent streamlines operations, providing flexibility for a range of project requirements. This versatility enables developers to craft more tailored and functional applications that meet precise business goals.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/built_in_tools_that_supercharge_development.jpg",
    title: `Built-In Tools that Supercharge Development 
`,
    des: `Time is money, and Laravel understands that! Its built-in tools, particularly the Artisan CLI (Command Line Interface), are designed to make developers' lives easier. From automating repetitive tasks to troubleshooting with precision, Artisan helps streamline workflows, ensuring projects move from concept to completion faster. For startups rushing to market or companies looking to maintain rapid iterations, this is a game-changer.
`
  },
  {
    id: 3,
    link: "/service-3",
    img: "/assets/img/services/icon/a_clear_structure_via_mvc_architecture.jpg",
    title: `A Clear Structure via MVC Architecture`,
    des: `Laravel takes a structured approach with its MVC (Model-View-Controller) architecture. This framework ensures clean, organized, and maintainable code. For businesses, this translates into apps that don’t just work well now but are also easy to upgrade and expand as business needs evolve. No more messy codebases—Laravel sets your project up for long-term success.
`
  },


]

const local_service_data2 = [

  {
    id: 1,
    link: "/service-3",
    img: "/assets/img/services/icon/high_performance_applications (1).jpg",
    title: `High-Performance Applications`,
    des: `While Laravel performs admirably across a variety of use cases, it’s not the lightest framework out there. For applications that require lightning-fast speed and handle exceptionally high traffic, more lightweight PHP frameworks may offer a slight edge. If your project is all about ultra-low latency and high scalability, it’s worth considering options that specialize in such performance.
`
  },
  {
    id: 2,
    link: "/service-3",
    img: "/assets/img/services/icon/flexibility_in_visual_design.jpg",
    title: `Flexibility in Visual Design `,
    des: `Laravel sticks to its core strength of functionality, which means it doesn't come with native support for themes. Design-heavy projects that rely on diverse, visually striking templates might require additional packages or custom-coded solutions to achieve unique looks. While achievable, this can add extra development effort and timelines.
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
                    Is Laravel the Right Choice for Your Project?

                  </h2>
                  <p>Choosing the best framework for your digital project is much more than a technical decision—it’s a crucial step toward ensuring the success and scalability of your application. At its core, Laravel offers standout features that make it an excellent choice for a wide variety of projects. But, as with any technology, it’s worth weighing both its strengths and challenges to see if it truly fits your unique needs.
                  </p>
                  <p>When it comes to its advantages, Laravel shines in several key areas:
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

          <div className="row it-sv-counter">
            <p>However, it’s not all sunshine and smooth sailing. Depending on your specific needs, there are scenarios where Laravel might not be the best fit:
            </p>
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
                    Why Laravel Might Be Perfect for You


                  </h2>
                  <p>Laravel strikes a strong balance between robust functionality and ease of use. It empowers businesses with tools to deliver fast, dynamic, and highly customizable applications, all while setting a solid foundation for long-term sustainability. However, your project’s unique demands—whether focused on performance, UI design, or rapid prototyping—play a major role in determining whether Laravel is the perfect match.
                  </p>
                  <p>At the end of the day, the right framework is the one that aligns with your goals, resources, and long-term vision. Wondering if Laravel fits the bill? Our team is here to guide you, offering expert advice tailored specifically to your requirements.
                  </p>
                  <p>Get in touch to explore how Laravel—or another framework—can help you build smart, scalable, and future-ready applications.
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

