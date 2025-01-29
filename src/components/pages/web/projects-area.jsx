 import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: "/assets/img/project/project-1.jpg",
      sub_title: "Product Design, UI, UX",
      title: `Back-Office System for an Online Language School | 2022 `,
      des: `We developed a comprehensive back-office system that streamlined administrative tasks for an online language school. This included features such as automated scheduling, enrollment tracking, and integrated communication tools to improve efficiency and user experience for both educators and students. The system was built with scalability in mind, accommodating future growth and evolving educational needs.
`, link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: "/assets/img/project/project-2.jpg",
      sub_title: "UX, Consultancy",
      title: `Building an Industry-Level Career Portal for msg systems | 2020 
`,
      des: `Our team collaborated with msg systems to create a cutting-edge career portal tailored to enhance recruitment processes. This platform included advanced features like personalized job recommendations, a seamless application experience, and integration with msg systems' HR tools. Designed with an intuitive interface and robust backend, the portal significantly improved user engagement while optimizing talent acquisition workflows.
`, link: "/portfolio-details",
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
         <div className="tp-bs-project pt-180 pb-10">
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
                              <p className="text-lily wow tpfadeUp"> {item.des}</p>
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