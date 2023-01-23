import { useState } from 'react';
import '../App.css'
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import info from '../assets/info.png';
import plus from '../assets/plus.png';

const Students = () => {

    const [students, setStudents] = useState([
        {
            name: "Sara",
            surname: "Poparic",
            jmbg: "2809999815155",
            index: "RA 60/2018"
        },
        {
            name: "Ognjen",
            surname: "Bogdanovic",
            jmbg: "1206999815155",
            index: "RA 101/2018"
        },
        {
            name: "Ognjen",
            surname: "Bogdanovic",
            jmbg: "1206999815155",
            index: "RA 101/2018"
        },
        {
            name: "Ognjen",
            surname: "Bogdanovic",
            jmbg: "1206999815155",
            index: "RA 101/2018"
        },
    ])

    return (
        <div style={{"height": "100%", "width": "100%"}}>
            <Navbar></Navbar>

            <div className='flex py-2 w-52 h-12 ml-auto mr-40 mt-20 rounded-xl bg-stone-900 text-white text-xl text-center'>
                <img className='h-5 w-5 ml-4 mt-1 opacity-90' src={plus} alt='New student' />
                <span className='ml-6'>New student</span>
            </div>

            <div className='w-11/12 h-1/5 mt-5 '>
                <div className='h-1/4 ml-40 text-center bg-stone-900 text-white text-3xl font-bold'>
                    <div className='h-1'>   </div>
                    <div className='mt-'>STUDENTS</div>
                </div>
                <div className='ml-40 h-3/4'>
                    {students.map((student, i) => (
                        <div className='flex h-40 bg-slate-50 text-xl font-bold  text-gray-800 border-b-2 border-stone-400 border-solid '>
                            <div className='h-full w-2/12 place-content-center '>
                                <img className='h-32 w-32 ml-8 mt-4' src={logo} alt="Student image" />
                            </div>
                            <div className='w-full h-full'>
                                <div className='flex w-full h-1/2 mt-6 '>
                                    <div className='text-4xl ml-96 text-center'>
                                        {student.name} {student.surname}
                                    </div>
                                    <div className='ml-auto mr-8 mt-11 text-s'>
                                        <img className='h-8 w-8 opacity-90' src={info} alt='Student info' />
                                    </div>
                                </div>
                                <div className='flex ml-56'>
                                    <span>JMBG: {student.jmbg} </span>  
                                    <span className='ml-48'>Index: {student.index} </span>   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )

}

export default Students;