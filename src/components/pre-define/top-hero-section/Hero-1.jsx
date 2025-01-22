import React from 'react';

const Hero1 = ({ title, subtitle, paragraph, img1, img2, alt1, alt2, srcset1, srcset2 }) => {
    return (
        <section className='container-fluid bg-hero'>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h1 className="text-white">{title}</h1>
                        <h2 className="text-white">{subtitle}</h2>
                        <div className='d-flex mt-2 mb-15 justify-content-between'>
                            <img className="w-50 mr-13" src={img1} alt={alt1} srcset={srcset1} />
                            <img className="w-50" src={img2} alt={alt2} srcset={srcset2} />
                        </div>
                        <p className="text-white fs-5"> {paragraph}</p>
                    </div>
                    <div className='col-5'>
                        {/* Other content can go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero1;
