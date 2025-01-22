import React from 'react';

const CompanyReviews1 = ({ data }) => {
    return (
        <div className='container-fluid background-color pt-15 pb-15' >
            <div className='container d-flex justify-content-around'>
                {data.map((element, index) => {
                    return (
                        <div className='text-center'>
                            <img className='w-100' src={element.img} alt={element.alt} key={index} />
                            <div>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CompanyReviews1;

