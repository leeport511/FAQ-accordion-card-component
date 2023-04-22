import React from "react";
import { ArrowButton } from "./ArrowButton";

export const FaqQuestionBox = ({ handleButtonOpen, questions }) => {


    return (
        <div className="mb-3 ">
            {questions.map((q) => {
                return (
                  
                    <div key={q.id}>
                        <div
                            
                            className="flex items-center justify-between"
                        >
                            <p
                                className={`mb-2 cursor-pointer text-very-dark-desaturated-blue font-medium hover:text-soft-red ${
                                    q.open && "font-bold"
                                }`}
                            >
                                {q.question}
                            </p>
                            <ArrowButton
                                question={q}
                                handleButtonOpen={handleButtonOpen}
                            />
                        </div>

                        {
                            <p
                                className={`mb-3 text-dark-grayish-blue w-[87%] transition-all duration-500 ${
                                    
                                    !q.open ? "h-0 scale-y-0" : "h-100 scale-y-100 "
                                }`}
                            >
                            {q.response}
                            </p>
                        }
                        <hr className="border-light-grayish-blue mb-5" />

                    </div>
                   
                );
            })}
        </div>
    );
};
