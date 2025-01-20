import React from 'react';

const Hero1 = ({ title, subtitle, paragraph, img1, img2, alt1, alt2, srcset1, srcset2 }) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className='d-flex'>
                        <img  class="w-50" src={img1} alt={alt1} srcset={srcset1} />
                        <img  class="w-50" src={img2} alt={alt2} srcset={srcset2} />
                    </div>
                    <p>{paragraph}</p>
                </div>
                <div className='col-6'>
                    {/* Other content can go here */}
                </div>
            </div>
        </div>
    );
}

export default Hero1;
