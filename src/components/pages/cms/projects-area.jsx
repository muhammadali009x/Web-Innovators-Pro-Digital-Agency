import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: "/assets/img/project/project-1.jpg",
      sub_title: "Product Design, UI, UX",
      title: `Building an Industry-Level Career Portal for msg systems | 2020 `,
      des: `Our team collaborated with msg systems to create a comprehensive and user-focused career portal designed to meet the needs of a competitive and rapidly evolving job market. The project included a robust design and advanced functionality to improve the user experience for both job seekers and hiring managers. This platform allowed msg systems to attract top talent while streamlining the recruitment process.`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: "/assets/img/project/project-2.jpg",
      sub_title: "UX, Consultancy",
      title: `Redesigning and Relaunching the Metaphacts Website | 2021 `,
      des: `We partnered with Metaphacts to modernize their digital presence through a complete redesign and relaunch of their website. The redesign involved updating the visual identity, improving navigation, and enhancing content accessibility to better communicate their brand's value. The final result was a sleek, intuitive platform that effectively showcased Metaphacts' expertise and strengthened its position in the market.`,
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
                              <p>{item.des}</p>
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