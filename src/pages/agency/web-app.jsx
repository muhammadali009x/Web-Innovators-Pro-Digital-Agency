import React from 'react';
import Hero1 from '@/src/components/pre-define/top-hero-section/Hero-1';
import CompanyReviews1 from '@/src/components/pre-define/reviews/CompanyReviews1';
import CompanyReviews2 from '@/src/components/pre-define/reviews/CompanyReviews2';
import Cta1 from '@/src/components/pre-define/call-to-action/cta1';
import Services1 from '@/src/components/pre-define/services/services1';
import Portfolio1 from '@/src/components/pre-define/portfolios/portfolio1';
import MeetTeam from '@/src/components/pre-define/meet-our-team/meetTeam';
import Cta2 from '@/src/components/pre-define/call-to-action/cta2';
import Awards1 from '@/src/components/pre-define/awards/awards1';
import Cta3 from '@/src/components/pre-define/call-to-action/cta3';
import HeaderTwo from '@/src/layout/headers/header-2';
import HeaderThree from '@/src/layout/headers/header-3';
import FooterTwo from '@/src/layout/footers/footer-2';
import CompanyReviews3 from '@/src/components/pre-define/reviews/CompanyReviews3';

const index = () => {

  const Hero1_data = {
    img1: "/assets/img/preimages/web-app/img1.webp",
    img2: "/assets/img/preimages/web-app/img2.webp",
  }

  const CompanyReviews1_data = [{
    img: "/assets/img/preimages/web-app/img3.webp",
  },
  {
    img: "/assets/img/preimages/web-app/img4.webp",
  },
  {
    img: "/assets/img/preimages/web-app/img5.webp",
  },

  ]

  var companyreview2data = [
    {
      rvimg: "/assets/img/preimages/web-app/img1.webp",
      rvtitle: "Revolutionized Our Business Operations",
      rvtgline: 'Sarah Thompson, CEO of Tech Solutions',
      rvdes: '“Working with Web Innovators Pro has been a game-changer for our business. They took the time to truly understand our business model and needs. The web app they developed for us streamlined our entire sales process, improved team collaboration, and helped us achieve a 30% increase in revenue within the first six months. They are not just developers; they are strategic partners who genuinely care about our success.”'
    }, {
      rvimg: "/assets/img/preimages/web-app/img1.webp",
      rvtitle: "Revolutionized Our Business Operations",
      rvtgline: 'Sarah Thompson, CEO of Tech Solutions',
      rvdes: '“Working with Web Innovators Pro has been a game-changer for our business. They took the time to truly understand our business model and needs. The web app they developed for us streamlined our entire sales process, improved team collaboration, and helped us achieve a 30% increase in revenue within the first six months. They are not just developers; they are strategic partners who genuinely care about our success.”'
    },
  ]


  var companyreview3data = [
    {
      rvimg: "/assets/img/preimages/web-app/img1.webp",
      rvtitle: "A True Partner in Our Digital Transformation",
      rvsubtitle: "Emily Johnson, CTO of Innovate Labs",
      rvtgline: 'Tailored Solutions for Complex Business Needs',
      rvdes: '“Working with Web Innovators Pro has been a game-changer for our business. They took the time to truly understand our business model and needs. The web app they developed for us streamlined our entire sales process, improved team collaboration, and helped us achieve a 30% increase in revenue within the first six months. They are not just developers; they are strategic partners who genuinely care about our success.”'
    },  {
      rvimg: "/assets/img/preimages/web-app/img1.webp",
      rvtitle: "A True Partner in Our Digital Transformation",
      rvsubtitle: "Emily Johnson, CTO of Innovate Labs",
      rvtgline: 'Tailored Solutions for Complex Business Needs',
      rvdes: '“Working with Web Innovators Pro has been a game-changer for our business. They took the time to truly understand our business model and needs. The web app they developed for us streamlined our entire sales process, improved team collaboration, and helped us achieve a 30% increase in revenue within the first six months. They are not just developers; they are strategic partners who genuinely care about our success.”'
    },  {
      rvimg: "/assets/img/preimages/web-app/img1.webp",
      rvtitle: "A True Partner in Our Digital Transformation",
      rvsubtitle: "Emily Johnson, CTO of Innovate Labs",
      rvtgline: 'Tailored Solutions for Complex Business Needs',
      rvdes: '“Working with Web Innovators Pro has been a game-changer for our business. They took the time to truly understand our business model and needs. The web app they developed for us streamlined our entire sales process, improved team collaboration, and helped us achieve a 30% increase in revenue within the first six months. They are not just developers; they are strategic partners who genuinely care about our success.”'
    }, 
  ]

    var Services1data = [
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
    ]

    var portfolio1Data = [
      {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      }, {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      }, {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      }, {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      }, {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      }, {
        image: "/assets/img/preimages/web-app/img1.webp",
        title: "Custom Web App Development",
        description: "Our custom web design service ensures that your website is not only visually stunning but also aligned with your brand identity. We take into account your target audience, industry trends, and your business goals to create a website that stands out and drives results."
      },
    ]

 var teamembers1Data = [
  {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, {
    image: "/assets/img/preimages/web-app/img1.webp",
    name: "Sarah Johnson, Project Manager",
    role: "Sarah oversees all projects, ensuring they are delivered on time, within budget, and exceed client expectations. She’s the communication bridge between our clients and the development team."
  }, 
 ]


  var awards1data = [
    {
      image: "/assets/img/preimages/web-app/img1.webp",
      name: "Best Web Design Agency 2025",
      description: "Recognized for our outstanding contribution to the web development industry and our commitment to building cutting-edge, secure, and scalable web applications."
    },{
      image: "/assets/img/preimages/web-app/img1.webp",
      name: "Best Web Design Agency 2025",
      description: "Recognized for our outstanding contribution to the web development industry and our commitment to building cutting-edge, secure, and scalable web applications."
    },
    {
      image: "/assets/img/preimages/web-app/img1.webp",
      name: "Best Web Design Agency 2025",
      description: "Recognized for our outstanding contribution to the web development industry and our commitment to building cutting-edge, secure, and scalable web applications."
    },
  ]
  return (
    <div>
      <HeaderThree />
      <Hero1
        title="Main Title"
        subtitle="This is a subtitle"
        paragraph="This is the content of the paragraph. It could be a detailed description about the hero section."
        img1={Hero1_data.img1}
        img2={Hero1_data.img2}
        alt1="First image description"
        alt2="Second image description"
        srcset1={Hero1_data.img1}
        srcset2={Hero1_data.img2}
      />

      <CompanyReviews1 data={CompanyReviews1_data} />

      <CompanyReviews2
        title="Driving Transformational Results with Every Web App We Build"
        description="When you choose Web Innovators Pro, you’re choosing a web app agency that has a proven track record of delivering transformative digital experiences. We take pride in our ability to not only meet but exceed client expectations. Over the years, we’ve built applications that drive business growth, enhance customer engagement, and streamline internal operations. Our focus on performance, security, and innovation is what sets us apart and helps our clients succeed in the digital world."

        reviews={companyreview2data}
      />

      <CompanyReviews3
        title="What Our Customers Say"
        description="Read the feedback from our happy customers!"
        reviews={companyreview3data}
      />

      <Cta1
        title="Ready to Build Your Custom Web App with Us?"
        description="If you’re ready to take your business to the next level with a powerful, secure, and scalable web application, we’d love to help. As a full-service web app agency, we offer everything from initial concept design to post-launch support. No matter what your business challenges are, we have the expertise and experience to deliver a solution that works for you. Let’s discuss how we can bring your vision to life with a custom-built web app that meets your business objectives and engages your customers."
        buttonText="Start Your Project Today"
      />

      <Services1
        title="Comprehensive Web App Development Services"
        description="At Web Innovators Pro, we offer a complete range of services that cover every aspect of web app development. Whether you’re looking to create a brand-new web app or need to enhance an existing one, our team of experts can help you at every step of the process."
        services={Services1data}
      />


      <Portfolio1
        title="Our Web Apps Portfolios"
        description="showcases a diverse collection of web applications that demonstrate our expertise, innovation, and commitment to delivering seamless user experiences. From dynamic business solutions to intuitive interfaces, each project reflects our technical proficiency and understanding of client needs. Browse through our portfolio to discover how we bring ideas to life with cutting-edge web technologies and design strategies."
        projects={portfolio1Data}
      />

      <MeetTeam
        title="Meet Our Team"
        description="We are a group of passionate web innovators who bring your ideas to life."
        teamMembers={teamembers1Data}
      />

      <Awards1
        title="Our Awards"
        awards={awards1data}
      />

      {/* <Cta2
        imageUrl="cta-image.jpg"
        altText="Call to Action Image"
        text="Join us today and start your journey!"
      />
      <Cta3
        title="Get In Touch"
        image1="image1.jpg"
        description="We are here to assist you with any questions."
        image2="image2.jpg"
        image3="image3.jpg"
        phone="+1234567890"
        email="contact@example.com"
      /> */}

      <FooterTwo />

    </div>
  );
}

export default index;
