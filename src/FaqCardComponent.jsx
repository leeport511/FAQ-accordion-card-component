import React, { useState } from "react";
import { FaqQuestionBox } from "./components/FaqQuestionBox";

const faqQuestions = [
    {
        id: 1,
        question: "How many team members can i invite?",
        response: "You can invite only 5 members of your team",
        open: false,
    },
    {
        id: 2,
        question: "What is the maximun file upload size?",
        response:
            "No mere than 2GB. All files in your account must fit your alloted storage space.",
            open: false,
    },
    {
        id: 3,
        question: "How do i reset my password?",
        response:
            "You must click the reset password button and we will send you an email with a link for reset password.",
            open: false,
    },
    {
        id: 4,
        question: "Can i cancel my subscription?",
        response: "Yes of course, whenever you want.",
        open: false,
    },
    {
        id: 5,
        question: "Do you provide additional ?",
        response:
            "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
            open: false,
    },
];

export const FaqCardComponent = () => {

    const [questions, setQuestions] = useState(faqQuestions)


    const handleButtonOpen = (id) => {
        const updatedOpenBox = questions.map((q) =>
          q.id === id ? { ...q, open: !q.open } : { ...q, open: false }
        );
        setQuestions(updatedOpenBox);
      };

    return (
        <main className="flex h-screen justify-center bg-gradient-to-b from-soft-violet to-soft-blue">
            <section className="flex flex-col items-center justify-center">
                <article className="relative w-80 rounded-3xl bg-white p-8">
                    <div className="absolute -top-2 left-[50%] max-h-[100%] max-w-[%100] translate-x-[-50%] translate-y-[-54%]">
                        <div className="relative w-56">
                            <img
                                src="./images/illustration-woman-online-desktop.svg"
                                alt="mujer online"
                                className=""
                            />
                            <img
                                src="./images/illustration-box-desktop.svg"
                                alt="Arroba Box"
                                className="absolute bottom-10 w-[35%]"
                            />

                            <img
                                src="./images/bg-pattern-mobile.svg"
                                alt="Patron sombra imagen"
                                className="absolute w-[100%] translate-y-[-70%]"
                            />
                        </div>
                    </div>
                    <div className="pt-24">
                        <h2 className="mb-6 text-center text-3xl font-bold">
                            FAQ
                        </h2>
                        <div className="text-xs">
                            <FaqQuestionBox
                                handleButtonOpen={handleButtonOpen}
                                questions={questions}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};
