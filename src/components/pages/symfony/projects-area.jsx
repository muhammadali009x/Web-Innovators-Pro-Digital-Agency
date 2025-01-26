import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: "/assets/img/project/project-1.jpg",
      sub_title: "Product Design, UI, UX",
      title: `Streamlined Back-office System | Online Language School | 2022 
`,
      des: `We collaborated with an online language school to develop a seamless back-office system designed to enhance efficiency and user experience. The system integrated scheduling, payment processing, and student-teacher communication into one cohesive platform. This project empowered the school to better manage its growing community of global learners while ensuring smooth day-to-day operations. 
`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: "/assets/img/project/project-2.jpg",
      sub_title: "UX, Consultancy",
      title: `Building an Industry-Level Career Portal | msg systems | 2020 
`, des: `Partnering with msg systems, we created an advanced career portal tailored to meet industry standards. The portal offers personalized job recommendations, an intuitive application process, and seamless integration with internal HR tools. By bridging the gap between opportunity and talent, this platform has helped msg systems connect with top-tier candidates worldwide, strengthening its workforce with ease.
`,
      link: "/portfolio-details",
      col: "col-lg-4",
      project_cls: "tp-bs-project__item"
   },


]
const ProjectsArea = () => {


   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);

   // image open state
   const [isOpen, setIsOpen] = useState(false);

   // handleImagePopup
   const handleImagePopup = (i) => {
      setPhotoIndex(i);
      setIsOpen(true);
   };

   //  images
   const img = project_data.map((item) => item.img);



   return (
      <>
         <div className="tp-bs-project pt-180 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wraper">
                        <div className="tp-section">
                           <span className="tp-section__subtitle white-bg mb-15 wow tpfadeUp"><i className="before-border"></i> Portfolio</span>
                           <h2 className="tp-section__title mb-80 wow tpfadeUp" data-wow-delay=".3s">Our Recent Projects.</h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {project_data.map((item, i) =>
                     <div key={i} className={item.col}>
                        <div className={`${item.project_cls} mb-65 wow tpfadeUp`}>
                           <div className="tp-bs-project__img w-img fix mb-35">
                              <a href="#" onClick={() => handleImagePopup(i)} className="bs-project-popup">
                                 <img src={item.img} alt="" /></a>
                           </div>
                           <div className="tp-bs-project__details wow tpfadeUp">
                              <span className="mb-10 d-inline-block"> <a href="#">{item.sub_title}</a></span>
                              <h3 className="tp-bs-project__title"><Link href={item.link}>{item.title}</Link></h3>
                           </div>
                        </div>
                     </div>
                  )
                  }

               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="project-more-btn">
                        <Link href="/portfolio-3" className="tp-common-btn tp-btn-hover alt-color">more works
                           <span>
                              <i className="fal fa-long-arrow-right"></i>
                              <i className="fal fa-long-arrow-right"></i>
                           </span>
                           <b></b>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* image light box start */}
         {isOpen && (
            <ImagePopup
               images={img}
               setIsOpen={setIsOpen}
               photoIndex={photoIndex}
               setPhotoIndex={setPhotoIndex}
            />
         )}
         {/* image light box end */}
      </>
   );
};

export default ProjectsArea;