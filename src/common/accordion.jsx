import React from 'react';






const Accordion = ({accordion_data}) => {
  return (
    <>
      {accordion_data.map((item, i) => (
        <div key={i} className="accordion-item">
          <h2 className="accordion-header" id={item.accordion_id}>
            <button
              className={`accordion-button ${item.collapsed}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.data_bs_target}
              aria-expanded={item.aria_expanded}
              aria-controls={item.aria_controls}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={item.aria_controls}
            className={`accordion-collapse collapse ${item.show}`}
            aria-labelledby={item.accordion_id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;