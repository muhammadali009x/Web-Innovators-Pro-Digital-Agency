import React from 'react';

const Cta2 = ({ imageUrl, altText, text }) => {  // `imageUrl`, `altText`, aur `text` ko props ke roop mein pass kiya
    return (
        <section>
            <img src={imageUrl} alt={altText} />  {/* Dynamic image URL and alt text */}
            <p>{text}</p>  {/* Dynamic paragraph text */}
        </section>
    );
}

export default Cta2;
