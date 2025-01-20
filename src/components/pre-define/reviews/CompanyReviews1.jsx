import React from 'react';

const CompanyReviews1 = ({ data }) => {
    return (
        <div className='container d-flex bg-red' style={{ background: 'red', justifyContent: 'space-between' }}>
            {data.map((element, index) => {
                return (
                    <div>
                        <img className='w-100' src={element.img} alt={element.alt} key={index} />
                        <span class="fa fa-star checked"></span> 
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                         </div>
                );
            })}
        </div>
    );
}

export default CompanyReviews1;

