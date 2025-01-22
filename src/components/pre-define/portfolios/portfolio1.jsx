import React from 'react';

const Portfolio1 = ({ title, description, projects }) => {  // `projects`, `title`, aur `description` ko props ke roop mein pass kiya
    return (
        <section className='container text-center'>
            <h2>{title}</h2>  {/* Dynamic title */}
            <p className='fs-5'>{description}</p>  {/* Dynamic description */}

            <div className='row mt-50'>
                {projects.map((project, index) => (  // `projects` array ko map kar rahe hain
                    <div className='col-4 p-20 ' key={index}>
                        <img className='w-100' src={project.image} alt={project.title} />  {/* Dynamic image */}
                        <h3>{project.title}</h3>  {/* Dynamic project title */}
                        <p className='fs-5'>{project.description}</p>  {/* Dynamic project description */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio1;
