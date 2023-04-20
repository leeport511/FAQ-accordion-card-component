import React from "react";

export const ArrowButton = ({question, handleButtonOpen}) => {



    return (
        <button onClick={() => handleButtonOpen(question.id)}>
            <img src="./images/icon-arrow-down.svg" alt="Arrow Button" className={`${question.open && 'rotate-180'}`} />
        </button>
    );
};
