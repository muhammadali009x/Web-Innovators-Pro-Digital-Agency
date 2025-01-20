import React from 'react';

const Cta1 = ({ title, description, buttonText }) => {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        </section>
    );
}

export default Cta1;
