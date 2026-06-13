import React from 'react';

const DescriptionContent = () => {
    return (
        <section id="content" className="py-12 md:py-20 px-4 md:px-6 bg-neo-bg">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
                        Short Introduction <br />
                        <span className="bg-neo-pink px-2 border-2 md:border-4 border-black">again :)</span>
                    </h2>
                    <div className="neo-card bg-white space-y-4 p-6 md:p-8">
                        <p className="text-lg md:text-xl font-bold">
                            Majoring Informatics with System Development as my concentration.
                        </p>
                        <p className="text-base md:text-lg font-medium leading-relaxed">
                            As an Informatics student, I have a deep curiosity for system development. 
                            My goal is to bridge the gap between architectural robustness and user-centric design.
                            Hope someday I can mix them together!
                        </p>
                    </div>
                </div>
                
                <div className="relative group mt-8 lg:mt-0">
                    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 rounded-none"></div>
                    <div className="relative border-2 md:border-4 border-black bg-neo-blue p-2">
                        <img
                            className="w-full h-auto object-cover border-2 md:border-4 border-black"
                            src="https://github.com/user-attachments/assets/6ba2e32a-8688-4e2b-be46-a225408358e5"
                            alt="dito image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DescriptionContent;
