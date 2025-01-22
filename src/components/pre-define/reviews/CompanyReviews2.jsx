import React from 'react';

const CompanyReviews2 = ({ title, description, rvimg, rvimgalt, rvtitle, rvtgline, rvdes, reviews }) => {
    return (
        <div className='mt-50 container text-center'>
            <h2>{title}</h2>
            <p className='fs-5'>{description}</p>

            <div className='row mt-60'>
                {reviews.map((element, index) => (
                    <div className='col-6' key={index}>
                        <img className='w-50' src={element.rvimg} alt={element.rvimgalt} />
                        <h3>{element.rvtitle}</h3>
                        <span>{element.rvtgline}</span>
                        <p className='fs-5'>{element.rvdes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyReviews2;
