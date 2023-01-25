import { useState, useEffect } from 'react';
import '../App.css'
import Navbar from '../components/Navbar';
import info from '../assets/info.png';
import plus from '../assets/plus.png';
import pic from '../assets/background2.jpeg';
import NewProfessor from '../modals/NewProfessor';
import axios from 'axios';

const Professors = () => {

    const [professors, setProfessors] = useState([]);
    const [newProfessorModal, setNewProfessorModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8082/pmf/professors', {
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })
        .then((response) => {
            setProfessors(response.data);
        })
      }, []);
    

    return (
        <div style={{"height": "100%", "width": "100%"}}>
            <Navbar></Navbar>

            <div className='flex py-2 w-52 h-12 ml-auto mr-40 mt-12 rounded-xl bg-stone-900 text-white text-xl text-center cursor-pointer'
                onClick={() => setNewProfessorModal(true)}>
                <img className='h-5 w-5 ml-4 mt-1 opacity-90' src={plus} alt='New student' />
                <span className='ml-6'>New professor</span>
            </div>

            <div className='w-11/12 h-4/6 mt-5 rounded-xl'>
                <div className='h-20 ml-40 text-center bg-stone-900 text-white text-3xl font-bold rounded-t-xl'>
                    <div className='h-5'>   </div>
                    <div >PROFESSORS</div>
                </div>
                <div className='overflow-auto h-full ml-40 '>
                    {professors.map((professor, i) => (
                        <div className='flex h-40 bg-slate-50 text-xl font-bold  text-stone-900 border-b-2 border-stone-400 border-solid '>
                            <div className='h-full w-2/12  place-content-center  '>
                                <img className='h-32 w-32 rounded-3xl ml-8 mt-4' src={pic} alt="Student image" />
                            </div>
                            <div className='w-full h-full'>
                                <div className='flex w-full h-1/2 mt-6 ml-28 '>
                                    <div className='ml-auto mr-auto text-4xl text-left'>
                                        {professor.name} {professor.surname}
                                    </div>
                                    <div className='ml-auto mr-36 mt-11 text-s'>
                                        <img className='h-8 w-8 opacity-90' src={info} alt='Student info' />
                                    </div>
                                </div>
                                <div className='flex mr-64'>
                                    <span className='ml-auto mr-96'> JMBG: {professor.jmbg} </span>  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NewProfessor modalIsOpen={newProfessorModal} setModalIsOpen={setNewProfessorModal} />
            
        </div>
    )

}

export default Professors;