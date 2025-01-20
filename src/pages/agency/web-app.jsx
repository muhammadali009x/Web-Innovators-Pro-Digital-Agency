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



  return (
    <div>
      <HeaderThree/>
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
        title="Our Company Reviews"
        description="Here's what our customers say about us."

        reviews={[{/* Review 1 data */ }, {/* Review 2 data */ }, /* ... */]}
      />

      <Cta1
        title="Call to Action Title"
        description="This is a description for the CTA section."
        buttonText="Click Me"
      />

      <Services1
        title="Our Services"
        description="We offer a wide range of services to suit your needs."
        services={[]}
      />


      <Portfolio1
        title="Our Portfolio"
        description="Here are some of the amazing projects we have worked on."
        projects={[]}
      />

      <MeetTeam
        title="Meet Our Team"
        description="We are a group of passionate web innovators who bring your ideas to life."
        teamMembers={[]}
      />

      <Awards1
        title="Our Awards"
        awards={[]}
      />

      <Cta2
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
      />

        <FooterTwo/>

    </div>
  );
}

export default index;
