import React from 'react';

const CompanyReviews3 = ({ title, description, rvimg, rvimgalt, rvtitle, rvsubtitle, rvtgline, rvdes, reviews }) => {
    return (
        <div className='mt-50 container text-center'>
            <h2>{title}</h2>
            <p className='fs-5'>{description}</p>

            <div className='row mt-60'>
                {reviews.map((element, index) => (
                    <div className='col-4' key={index}>
                        <img className='w-50' src={element.rvimg} alt={element.rvimgalt} />
                        <h3>{element.rvtitle}</h3>
                        <h4 className='fs-5' >{element.rvsubtitle}</h4>
 
                            <span className='fs-4 text-theme' >{element.rvtgline}</span>
                        
                        <p className='fs-5'>{element.rvdes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyReviews3;
