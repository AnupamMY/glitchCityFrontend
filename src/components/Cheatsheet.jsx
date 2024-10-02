import React, { useEffect, useState } from 'react'
import { StarsCanvas } from './canvas'
import axios from "axios";
import Nav from './Navbar';

function Cheatsheet() {

    const [photos, setphotots] = useState([])
    const [sub, setsub] = useState('all')
    const [upl, setupl] = useState(false)
    const [user,setuser] = useState('')


    useEffect(() => {
        setuser(localStorage.getItem('user'))
        console.log(localStorage.getItem('user'));
        axios.get('https://glitchcitybackend1.onrender.com/api/get').then((res) => {
            setphotots(res.data)
        }).catch((e) => console.log(e))

    }, [])

    const search = () => {

        axios.post('https://glitchcitybackend1.onrender.com/api/search', { subject: sub }).then((res) => {
            console.log(sub);
            setphotots(res.data)
        }).catch((e) => console.log(e))
    }

    const handlechange = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('photo', e.target.files[0])
        formData.append('subject', sub)


        axios.post('https://glitchcitybackend1.onrender.com/api/save', formData, { subject: sub })
            .then((res) => {
                setupl(false)
            }).catch((e) => console.log(e))
    }

    return (
        <>
            <div className=' flex items-center justify-between fixed main w-[100vw] h-[100vh]' >
                <div className='z-10' ><Nav/></div>
               <StarsCanvas/> </div>
            <div className=' w-full flex flex-col items-center justify-center h-auto' >

                <div className={`${upl ? '' : 'hidden'}  fixed flex flex-col w-fit h-fit p-4  bg-[#461ca7] border-4 rounded-xl border-[#ae09dc9f] bg-opacity-[0.95] z-10 top-[50%] left-[50%]`} style={{ transform: 'translate(-50%,-50%)' }} >



                    <div>
                        <label className='p-4 text-[25px] text-white font-bold' htmlFor="">Subject</label>
                        <button className='fixed right-8 top-4 ' onClick={() => setupl(false)}  ><img src="./assets/close.svg" className=' w-[25px] h-[25px] ' /></button>
                        <br />
                        <select name="class" onChange={e => setsub(e.target.value)} className={`  font-bold m-4 ml-4 p-1 rounded`} id="class">
                            <option value="all">All</option>
                            <option value="DSA">Cricket</option>
                            <option value="Algorithm">Baseball</option>
                            <option value="Computer-Networks">IT Event</option>
                            <option value="Digital-Electronics">Sport Event</option>
                            <option value="Python-programming">Game Events</option>
                            <option value=">Web-Technology">Dance</option>
                            <option value="Advanced-JAVA-Programming">Singing</option>
                            <option value="Software-Testing">Stand-up</option>

                        </select>

                    </div>

                    <div>
                        <label htmlFor='file_picker' className=' p-4 border-4   text-white font-bold cursor-pointer absolute bg-[#461ca7] rounded-xl hover:bg-white hover:text-black ' >upload file</label>
                        <input className='hidden' type="file" name='file_picker' id='file_picker' onChange={(e) => handlechange(e)} />
                    </div>
                </div>

                <div className={`z-10 ${user=='student'?'hidden':''} `} >
                    <button onClick={() => setupl(!upl)} className=' fixed right-8 bottom-20 text-white font-bold cursor-pointer border bg-[#461ca7] p-4 rounded-xl hover:bg-white hover:text-black '>{upl ? "Cancel" : "upload file"}</button>
                </div>

                <div className=' relative p-4 mt-20 mx-4  max-w-[600px] sm:max-w-[800px] bg-[#461ca7] border-4 rounded-xl w-[100%] border-[#ae09dc9f] bg-opacity-[0.9] z-[1] ' >
                    <div className=" flex h-[100px] ">
                        <div className="flex flex-col w-full ">
                            <label className='text-white font-bold  text-[18px]' >Subject</label>
                            <select name="class" onChange={e => setsub(e.target.value)} className=' font-bold rounded mx-2 p-2 mt-[10px]' id="class">
                            <option value="all">All</option>
                            <option value="DSA">Cricket</option>
                            <option value="Algorithm">Baseball</option>
                            <option value="Computer-Networks">IT Event</option>
                            <option value="Digital-Electronics">Sport Event</option>
                            <option value="Python-programming">Game Events</option>
                            <option value=">Web-Technology">Dance</option>
                            <option value="Advanced-JAVA-Programming">Singing</option>
                            <option value="Software-Testing">Stand-up</option>

                            </select>
                        </div>

                        <div className=" flex items-center text-black ">
                            <button
                                onClick={() => search()}
                                className="rounded bg-white p-2 mt-3 w-fit sm:w-[100px] font-bold hover:text-white hover:bg-black "
                                type="button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className={ ` ${photos.length==0? 'hidden' : '' } relative mt-20 mx-4 max-w-[600px] sm:max-w-[800px] bg-[#461ca7] border-4 rounded-xl w-fit border-[#ae09dc9f] bg-opacity-[0.9]`} >
                    <div className=' relative flex flex-wrap items-start justify-start p-14 gap-10' >
                        <>
                            {photos.map(({subject, photo, _id }) => (
                                <div key={_id} className=" flex flex-col items-center justify-center  w-[250px] border-2 p-4 rounded-md bg-[#ae09dc46] ">
                                    {console.log(photo, _id)}
                                    <a href={`https://glitchcitybackend1.onrender.com/uploads/${photo}`} target='_blank' >
                                        <img
                                            src={`https://glitchcitybackend1.onrender.com/uploads/${photo}`}
                                            alt=""
                                        />
                                        </a>
                                        <div className='text-white p-4' >
                                            {subject}
                                        </div>
                                </div>
                            ))}
                        </>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cheatsheet
