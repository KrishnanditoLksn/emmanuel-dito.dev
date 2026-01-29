const DescriptionContent = () => {
    return (
        <section className="bg-white dark:bg-white">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 mt-52 mb-52">
                <div>
                    <div className="font-light text-black sm:text-lg dark:text-gray-400 mb-8">
                        <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-black dark:text-black">
                            Short Introduction again :)
                        </h2>
                        <p className="mb-4 dark:text-black font-normal">
                            Majoring Informatics with System Development as my concentration
                        </p>
                        <p className="mb-4 dark:text-black font-normal">
                            As Informatics student, I have a curiosity in system development.
                            Hope someday I can mix them together xD
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                    <div className="mb-8">
                        <img
                            className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md rounded-lg"
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
