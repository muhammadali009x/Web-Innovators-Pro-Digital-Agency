import React from 'react';

const Portfolio1 = ({ title, description, projects }) => {  // `projects`, `title`, aur `description` ko props ke roop mein pass kiya
    return (
        <section>
            <h2>{title}</h2>  {/* Dynamic title */}
            <p>{description}</p>  {/* Dynamic description */}

            <div className='row'>
                {projects.map((project, index) => (  // `projects` array ko map kar rahe hain
                    <div className='col-4' key={index}>
                        <img src={project.image} alt={project.title} />  {/* Dynamic image */}
                        <h3>{project.title}</h3>  {/* Dynamic project title */}
                        <p>{project.description}</p>  {/* Dynamic project description */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio1;
