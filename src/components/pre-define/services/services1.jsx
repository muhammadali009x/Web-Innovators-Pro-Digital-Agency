import React from 'react';

const Services1 = ({ title, description, services }) => {  // Correct destructuring of props
    return (
        <section className='mt-30 pt-50 pb-50'>
            <div className='container'>
                <h2 className='text-center'>{title}</h2>  {/* Dynamic title */}
                <p className='text-center fs-5'>{description}</p>  {/* Dynamic description */}

                <div className='row mt-70'>
                    {services.map((service, index) => (   // Map over services array
                        <div className='col-4 pb-30' key={index}>
                            <img className='w-25 rounded' src={service.image} alt={service.title} /> {/* Dynamic image */}
                            <h3 className='mt-10'>{service.title}</h3> {/* Dynamic title */}
                            <p className='fs-5'>{service.description}</p> {/* Dynamic description */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services1;
