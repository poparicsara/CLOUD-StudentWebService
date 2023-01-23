import { useState } from "react";

export default function NewProfessor({ modalIsOpen, setModalIsOpen, addProfessor }) {

    const [professor, setProfessor] = useState({
        name: "",
        surname: "",
        jmbg: "",
    })

    return(
        <>
            {modalIsOpen && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-stone-900">
                                        New professor
                                    </h3>
                                    <div className="ml-auto bg-transparent border-0 opacity-4 float-right text-3xl leading-none font-semibold cursor-pointer"
                                        onClick={() => setModalIsOpen(false)} >
                                        <span className="bg-transparent text-gray-900 font-semibold h-6 w-6 text-4xl block outline-none ">x</span>
                                    </div>
                                </div>

                                {/*body*/}
                                <div className="w-96 text-sm">
                                    <div className="w-96 md:flex items-center mb-6 mt-4 ml-6">
                                        <div className="">
                                            <label
                                            className="block text-gray-500 font-bold md:text-right pr-4"
                                            for="inline-full-name"
                                            >
                                                Name:
                                            </label>
                                        </div>
                                        <div className="md:w-2/3 ml-auto mr-2">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900 text-xl"
                                            id="inline-full-name"
                                            type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-96 md:flex items-center mb-6 mt-4 ml-6">
                                        <div class="">
                                            <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="inline-full-name"
                                            >
                                                Surname:
                                            </label>
                                        </div>
                                        <div className="md:w-2/3 ml-auto mr-2">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 text-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                                            id="inline-full-name"
                                            type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-96 md:flex items-center mb-6 mt-4 ml-6">
                                        <div class="">
                                            <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="inline-full-name"
                                            >
                                                JMBG:
                                            </label>
                                        </div>
                                        <div className="md:w-2/3 ml-auto mr-2">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 text-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
                                            id="inline-full-name"
                                            type="text"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div
                                        className="text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-lg  mr-1 mb-1 ease-linear cursor-pointer"
                                        type="button"
                                        onClick={() => setModalIsOpen(false)}
                                    >
                                        Close
                                    </div>
                                    <div
                                        className="bg-white text-stone-900 font-bold uppercase text-lg outline-none mr-1 mb-1 ease-linear cursor-pointer"
                                        type="button"
                                    >
                                        Save
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )

}