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
    const [questions, setQuestions] = useState(faqQuestions);

    const handleButtonOpen = (id) => {
        const updatedOpenBox = questions.map((q) =>
            q.id === id ? { ...q, open: !q.open } : { ...q, open: false }
        );
        setQuestions(updatedOpenBox);
    };

    return (
        <main className="flex h-screen justify-center bg-gradient-to-b from-soft-violet to-soft-blue">
            <section className="xl:min-w-7xl relative flex flex-col items-center justify-center">
            <div
                    className="absolute hidden xl:block xl:w-[30%] xl:-left-24 xl:bottom-[32%] z-20"
                >
                    <img
                        src="./images/illustration-box-desktop.svg"
                        alt="Arroba Box"
                    />
                </div>
                <article className="relative w-80 justify-end rounded-3xl bg-white p-8 xl:z-10 xl:flex xl:w-[1100px] xl:flex-row xl:items-center xl:overflow-hidden xl:p-20">
                    <div className="absolute -top-2 left-[50%] max-h-[100%] max-w-[%100] translate-x-[-50%] translate-y-[-54%] xl:absolute xl:left-56 xl:top-80 xl:z-20">
                        <div className="relative w-56 xl:z-30 xl:w-[600px]">
                            <div>
                                <img
                                    src="./images/illustration-woman-online-desktop.svg"
                                    alt="mujer online"
                                    className="xl:relative xl:z-40"
                                />
                            </div>
                            <div className="absolute bottom-10 w-[35%] xl:hidden ">
                                <img
                                    src="./images/illustration-box-desktop.svg"
                                    alt="Arroba Box"
                                />
                            </div>
                            <div className="hidden xl:absolute xl:inline-block xl:w-[750px] xl:translate-x-[-38%] xl:translate-y-[-80%] xl:brightness-0 xl:filter">
                                <img
                                    src="./images/bg-pattern-desktop.svg"
                                    alt="Patron sombra imagen"
                                />
                            </div>
                            <div className="z-120 absolute w-[100%] translate-y-[-70%] xl:hidden  ">
                                <img
                                    src="./images/bg-pattern-mobile.svg"
                                    alt="Patron sombra imagen"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-24 xl:w-[60%] xl:p-0">
                        <h2 className="mb-6 text-center text-3xl font-bold xl:mb-20 xl:text-left">
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
