import React from 'react';

const Cta1 = ({ title, description, buttonText }) => {
    return (
        <section className='mt-50 pt-40 pb-40 container-fluid background-color'>
            <div className='container text-center'>
                <h2 className='text-white'>{title}</h2>
                <p className='fs-5 text-white'>{description}</p>
                <button className='bg-primary w-25 fs-5 pt-10 pb-10 fw-bold text-white border '>{buttonText}</button>
            </div>
        </section>
    );
}

export default Cta1;
