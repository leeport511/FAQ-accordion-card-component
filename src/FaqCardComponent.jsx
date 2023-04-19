import React, { useState } from "react";
import { ArrowButton } from "./components/ArrowButton";



export const FaqCardComponent = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleButtonOpen = () => {
        setIsOpen(!isOpen);
        
    }



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
                        <h2 className="text-center mb-6 text-3xl font-bold">FAQ</h2>
                        <div className="text-xs">
                            <div className="mb-3">
                                <div className="flex justify-between items-center">
                                    <p className={`text-very-dark-desaturated-blue mb-1 hover:text-soft-red cursor-pointer ${isOpen && 'font-bold'}`}>How many team members can i invite?</p>
                                    <ArrowButton isOpen={isOpen} handleButtonOpen={handleButtonOpen}/>
                                </div>

                                {

                                <p className={`text-dark-grayish-blue mb-2  transition-all duration-500 ${!isOpen ? 'scale-y-0 h-0' : 'scale-y-100 ' }`}>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Rem ducimus doloremque!
                                    Reprehenderit!
                                </p>

                                }
                                <hr className="border-light-grayish-blue"/>

                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between items-center">
                                    <p className={`text-very-dark-desaturated-blue mb-1 hover:text-soft-red cursor-pointer ${isOpen && 'font-bold'}`}>How many team members can i invite?</p>
                                    <ArrowButton isOpen={isOpen} handleButtonOpen={handleButtonOpen}/>
                                </div>

                                {

                                <p className={`text-dark-grayish-blue mb-2  transition-all duration-500 ${!isOpen ? 'scale-y-0 h-0' : 'scale-y-100 ' }`}>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Rem ducimus doloremque!
                                    Reprehenderit!
                                </p>

                                }
                                <hr className="border-light-grayish-blue"/>

                            </div>
                            <div className="mb-3">
                                <div className="flex justify-between items-center">
                                    <p className={`text-very-dark-desaturated-blue mb-1 hover:text-soft-red cursor-pointer ${isOpen && 'font-bold'}`}>How many team members can i invite?</p>
                                    <ArrowButton isOpen={isOpen} handleButtonOpen={handleButtonOpen}/>
                                </div>

                                {

                                <p className={`text-dark-grayish-blue mb-2  transition-all duration-500 ${!isOpen ? 'scale-y-0 h-0' : 'scale-y-100 ' }`}>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Rem ducimus doloremque!
                                    Reprehenderit!
                                </p>

                                }
                                <hr className="border-light-grayish-blue"/>

                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};
