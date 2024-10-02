import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Nav from './Navbar';
import { StarsCanvas } from './canvas';


function Help() {

    const formref = useRef();
    const [form, setform] = useState({

        name: '',
        email: '',
        message: '',
    })
    const [loading, setloading] = useState(false)
    const [pop, setpop] = useState(false)
    const [err, seterr] = useState(false)
    const [wrginput, setwrginput] = useState(false)



    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        seterr(false);
        setpop(false);
        setwrginput(false);
        if ((form.email === '') ? true : (form.name === '') ? true : (form.message === '') ? true : false) {
            setwrginput(true)
        }
        else {
            setloading(true);
            emailjs.send('service_vzeve3i', 'template_ur4kqfo',
                {
                    from_name: form.name,
                    to_name: 'nikhil',
                    from_email: form.email,
                    t0_email: 'nikhilgupta@gmail.com',
                    message: form.message,
                },
                'SmNlCMQ0qdnWVrNc3'
            ).then(
                () => {
                    setpop(true)
                    setloading(false);
                    setform({
                        name: '',
                        email: '',
                        message: '',
                    })
                }, (error) => {
                    seterr(true)
                    setloading(false)
                    console.log(error);
                }
            )
        };

    }
    return (
        <div className="main flex items-center justify-center bg-[#222020] w-[100vw] h-[100vh] gap-10"  > <Nav />
            <div className='border-4  border-[#ae09dc9f] bg-[#4c20b1] lg:w-[50vw] w-[80vw] h-auto px-10 bg-opacity-[0.7]  rounded-xl'>

                <form
                    ref={formref}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your Name
                        </span>
                        <input
                            required
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className=' py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your Email
                        </span>
                        <input
                            required
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your Email?"
                            className=' py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your Message
                        </span>
                        <textarea
                            style={{
                                resize: 'none'
                            }}
                            required
                            rows={4}
                            name='message'
                            onChange={handleChange}
                            value={form.message}
                            placeholder=" What do you want to say ?"
                            className=' py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        onClick={(e) => handleSubmit(e)}
                        className=' bg-gray-500 py-3 hover:text-black hover:bg-white px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl'
                    >
                        {loading ? 'sending...' : 'send'}
                    </button>
                    <div>

                        <p className={`${!pop ? 'hidden' : (wrginput) ? 'hidden' : 'block'} sm:text-[18px] text-[14px] text-green-500 tracking-wider`}>
                            <span className='text-[30px]'>Thank you.</span><br />I will contact you as soon as possible.
                        </p>
                        <p className={`${err ? 'block' : 'hidden'} sm:text-[18px] text-[14px] text-red-500 tracking-wider`}>
                            <span className='text-[30px]'>Something went wrong.</span>
                        </p>
                        <p className={`${wrginput ? 'block' : 'hidden'} sm:text-[18px] text-[14px] text-yellow-500 tracking-wider`}>
                            <span className='text-[30px]'>Please Enter Right Details.</span>
                        </p>

                    </div>
                </form>

            </div>
            <StarsCanvas/>
        </div>
    )
}

export default Help
