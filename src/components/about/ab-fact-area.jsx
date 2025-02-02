import Count from '@/src/common/count';
import React from 'react';

const about_feature_data = [
  {
    id: 1,
    count: 328,
    title: `20+ years of experience 
`,
    description: `For two decades, we’ve successfully delivered web projects for startups, global enterprises, government agencies, and national charities. While technology evolves, the essential skills—like expert project management, clear communication, attention to detail, and excellent customer service—remain at the core of what we do. 
`,
  },
  {
    id: 2,
    count: 522,
    title: `Expert knowledge`,
    description: `From trusted CMS platforms like Drupal, Joomla, and Contao to advanced frameworks like Laravel, Angular, and React, we have the tools to bring your vision to life. Need accessibility solutions? We’ve got that covered too.
`,
  },
  {
    id: 3,
    count: 1020,
    title: `Transparency every step of the way 
`,
    description: `We take pride in open communication and providing visibility into our processes. You’ll have a full understanding of the work as it happens, ensuring we’re always on the same page.
`,
  },
  {
    id: 4,
    count: 256,
    title: `Ongoing support`,
    description: `Our work doesn’t end with project delivery. We’re here for the long haul, ensuring your site stays updated, secure, and optimized with our dedicated support and maintenance services.
`,
  },
]

const AbFactArea = () => {
  return (
    <>
     
      <div
        className="tp-ab-fact-area fact-overlay p-relative pt-120 pb-85"
        style={{
          backgroundImage: `url(/assets/img/about/about-fact-bg.jpg)`
        }}
      >
        <div className="container">
        <h2 style={{color: 'white', zIndex: 9999, position: 'relative'}}>Why Choose HV Digital?
        </h2>
          <div className="row">
           
            {about_feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="ab-fact-item mb-30">
                  <Count number={item.count} />
                  <h3 className="ab-fact-item__title">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AbFactArea;