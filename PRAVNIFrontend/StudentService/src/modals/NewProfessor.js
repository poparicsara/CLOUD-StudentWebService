import { useState } from "react";

export default function NewProfessor({ modalIsOpen, setModalIsOpen }) {

    const [professor, setProfessor] = useState({
        name: "",
        surname: "",
        jmbg: "",
    });
    const [uploadedImage, setUploadedImage] = useState("");
    const [base64, setBase64] = useState("");

    const nameChangeHandler = (e) => {
        const value = e.target.value;
        setProfessor(() => {return {...professor, name: value}});
        if (!value) {
          return;
        }
    };

    const surnameChangeHandler = (e) => {
        const value = e.target.value;
        setProfessor(() => {return {...professor, surname: value}});
        if (!value) {
          return;
        }
    };

    const jmbgChangeHandler = (e) => {
        const value = e.target.value;
        setProfessor(() => {return {...professor, jmbg: value}});
        if (!value) {
          return;
        }
    };

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
            setUploadedImage(reader.result);
            setBase64(reader.result);
            console.log(reader.result);
        }
        reader.readAsDataURL(e.target.files[0])
    };

    const addProfessor = () => {
        console.log(professor);
    }

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
                                    <div className="w-96 md:flex items-center mb-6 mt-10 ml-6">
                                        <div className="">
                                            <label
                                            className="block text-gray-500 font-bold md:text-right pr-4"
                                            for="inline-full-name"
                                            >
                                                Name:
                                            </label>
                                        </div>
                                        <div className="md:w-2/3 ml-auto mr-5">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900 text-xl text-left"
                                            id="inline-full-name"
                                            type="text"
                                            onChange={nameChangeHandler}
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
                                        <div className="md:w-2/3 ml-auto mr-5">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 text-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-900 text-left"
                                            id="inline-full-name"
                                            type="text"
                                            onChange={surnameChangeHandler}
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
                                        <div className="md:w-2/3 ml-auto mr-5">
                                            <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 text-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-900 text-left"
                                            id="inline-full-name"
                                            type="text"
                                            onChange={jmbgChangeHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-11/12 md:flex items-center mb-6 ml-4 rounded-xl border-2 border-solid border-stone-300">
                                        <div class="">
                                            <input className="w-80 border-0" type="file" name="image" accept="image/png, image/jpeg" onChange={(e) => imageHandler(e)} />
                                            <img className="ml-12 mb-8" alt='preview' src={uploadedImage} width="250" height="250"/>
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
                                        onClick={() => addProfessor()}
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