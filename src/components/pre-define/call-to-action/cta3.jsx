import React from 'react';

const Cta3 = ({ title, image1, description, image2, image3, phone, email }) => {  // `title`, `image1`, `description`, `image2`, `image3`, `phone`, `email` ko props ke roop mein pass kiya
    return (
        <section>
            <h2>{title}</h2>  {/* Dynamic title */}

            <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={image1} alt="Image 1" />  {/* Dynamic image 1 */}
                    <p>{description}</p>  {/* Dynamic paragraph */}
                </div>
                <div className='col-6'>
                    <div className='flex'>
                        <img src={image2} alt="Image 2" />  {/* Dynamic image 2 */}
                        <img src={image3} alt="Image 3" />  {/* Dynamic image 3 */}
                    </div>
                    <span>Call: </span>
                    <strong>{phone}</strong>  {/* Dynamic phone number */}
                    <span>Email: </span>
                    <strong>{email}</strong>  {/* Dynamic email */}
                </div>
            </div>
            </div>
        </section>
    );
}

export default Cta3;
