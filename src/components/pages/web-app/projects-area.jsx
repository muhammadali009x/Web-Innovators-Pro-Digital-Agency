import ImagePopup from '@/src/Modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from 'react';


const project_data = [
   {
      id: 1,
      img: " ",
      sub_title: "Product Design, UI, UX",
      title: "Back-Office System for an Online Language School | 2022",
      des: `Behind every successful online language school is a robust back-end system that keeps operations in sync. For this project, we designed and implemented a streamlined back-office platform that simplifies everything from scheduling classes to tracking student progress. The result? A smart, user-friendly system that empowers educators and helps students achieve their language-learning goals without a hitch.`,
      link: "/portfolio-details",
      col: "col-lg-8",
      project_cls: "tp-project__item"
   },
   {
      id: 2,
      img: " ",
      sub_title: "UX, Consultancy",
      title: "Building a Career Portal for msg systems | 2020 ",
      des: `Finding the right job should be as intuitive as your favorite app. That was our focus when creating a cutting-edge career portal for msg systems, an industry leader in IT solutions. This portal was designed to seamlessly connect job seekers with exciting career opportunities, complete with personalized job recommendations, easy navigation, and tools tailored for professional growth. It’s a gateway to building meaningful, successful careers.`,
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
         <div className="tp-bs-project pt-100 pb-10">
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
                              <img src={item.img} alt="" />
                           </div>
                           <div className="tp-bs-project__details wow tpfadeUp">
                                  
                              <h3 className="tp-bs-project__title">{item.title}</h3>
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
                        <Link href="/portfolio" className="tp-common-btn tp-btn-hover alt-color">more works
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