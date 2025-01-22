import React from 'react';

const Awards1 = ({ title, awards }) => {  // `title` aur `awards` ko props ke roop mein pass kiya gaya
    return (
        <section className='mt-30 container text-center'>
            <h2>{title}</h2>  {/* Dynamic title */}

            <div className='row mt-50'>
                {awards.map((award, index) => (  // `awards` array ko map kar rahe hain
                    <div className='col-4' key={index}>
                        <img className='w-25' src={award.image} alt={award.name} />  {/* Dynamic image */}
                        <h3>{award.name}</h3>  {/* Dynamic award name */}
                        <p>{award.description}</p>  {/* Dynamic award description */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Awards1;
