import React from 'react';

const Services1 = ({ title, description, services }) => {  // Correct destructuring of props
    return (
        <section>
            <div>
                <h2>{title}</h2>  {/* Dynamic title */}
                <p>{description}</p>  {/* Dynamic description */}

                <div className='row'>
                    {services.map((service, index) => (   // Map over services array
                        <div className='col-4' key={index}>
                            <img src={service.image} alt={service.title} /> {/* Dynamic image */}
                            <h3>{service.title}</h3> {/* Dynamic title */}
                            <p>{service.description}</p> {/* Dynamic description */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
