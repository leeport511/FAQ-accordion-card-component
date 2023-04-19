import React from "react";

export const ArrowButton = ({isOpen, handleButtonOpen}) => {

   

    return (
        <button onClick={handleButtonOpen}>
            <img src="./images/icon-arrow-down.svg" alt="Arrow Button" className={`${isOpen && 'rotate-180'}`} />
        </button>
    );
};
