import React from 'react';

const CompanyReviews2 = ({ title, description, rvimg, rvimgalt, rvtitle, rvtgline, rvdes, reviews }) => {
    return (
        <div className='container text-center'>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className='row'>
                {reviews.map((element, index) => (
                    <div className='col-6' key={index}>
                        <img src={element.rvimg} alt={element.rvimgalt} />
                        <h3>{element.rvtitle}</h3>
                        <span>{element.rvtgline}</span>
                        <p>{element.rvdes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyReviews2;
