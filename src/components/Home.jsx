import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import '../Home.css'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { StarsCanvas } from './canvas';
import Nav from './Navbar';



const services = [

    {
        title: "ReactJs",
        icon: '../assets/tech/reactjs.png',
    },
    {
        title: "NodeJs",
        icon: '../assets/tech/nodejs.png',
    },
    {
        title: "Tailwind",
        icon: '../assets/tech/tailwind.png',
    },

    {
        title: "MongoDB",
        icon: '../assets/tech/mongodb.png',
    },
    {
        title: "Git",
        icon: '../assets/tech/git.png',
    },
    {
        title: "ThreeJs",
        icon: '../assets/tech/threejs.svg',
    },
];


const projects = [
    {
        name: "Landing page",
        description:
            "Captivating Parallax 3D effect on this stunning landing page crafted using CSS and React",
        tags: [
            {
                name: "react",
                color: "font-bold text-blue-500",
            },

            {
                name: "css",
                color: "font-bold text-red-500",
            },
        ],
        image: '../web/landing.png',
        project_link: '/'
    },
    {
        name: "Chat Page",
        description:
            "A sleek and responsive chat page crafted with React, styled with Tailwind CSS, and powered by the ChatEngine API for seamless real-time communication.",
        tags: [
            {
                name: "react",
                color: "font-bold text-green-500",
            },
            {
                name: "tailwind",
                color: "font-bold text-white-500",
            },
            {
                name: "nodejs",
                color: "font-bold text-red-500",
            },
        ],
        image: '../web/chat.png',
        project_link: '/chat'
    },
    {
        name: "Event Page",
        description:
            "Collaborative event page effortlessly with Node.js, React, and Tailwind CSS for seamless sharing and quick reference.",
        tags: [
            {
                name: "react",
                color: "font-bold text-yellow-500",
            },
            {
                name: "tailwind",
                color: "font-bold text-red-500",
            },
            {
                name: "node",
                color: "font-bold text-pink-500",
            },
        ],
        image: '../web/cheatsheet.png',
        project_link: '/cheatsheet'
    },
    {
        name: "Schedule Page",
        description:
            'A React Scheldue page with Tailwind CSS styling, state management, and hosted on localhost for efficient task organization.',
        tags: [
            {
                name: "react",
                color: "font-bold text-green-500",
            },
            {
                name: "tailwind",
                color: "font-bold text-gray-500",
            },
            {
                name: "node",
                color: "font-bold text-blue-500",
            },
        ],
        image: '../web/dash.png',
        project_link: '/dashboard'
    },

];




const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {

    return (

        <div
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className=" bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div
                    className='relative w-full h-[230px]'
                >
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div
                        className=' absolute inset-0 flex justify-end m-3 '
                    >

                    </div>
                </div>

                <div
                    className='mt-5'
                >
                    <h3
                        className='text-white font-bold text-[24px]'
                    >{name}</h3>
                    <p
                        className=' text-secondary text-[14px]'
                    >{description}</p>
                </div>
                <div
                    className='mt-4 flex flex-wrap gap-2'
                >
                    {
                        tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))
                    }
                    <Link
                        to={project_link}
                        style={{

                            WebkitTapHighlightColor: 'transparent',
                            WebkitTouchCallout: 'none',
                            WebkitUserSelect: 'none',
                            KhtmlUserSelect: 'none',
                            MozUserSelect: 'none',
                            msUserSelect: 'none',
                            userSelect: 'none',
                            outline: 'none !important'

                        }}
                        className={`${name === "home page" ? 'hidden' : 'block'} text-black bg-[#915eff] p-1 rounded-full cursor-pointer px-2 border-white font-bold hover:text-white
             hover:border-[3px]  `}

                    >Visit</Link>
                </div>
            </Tilt>
        </div>

    )
}



const ServiceCard = ({ index, title, icon }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const sprx = useSpring(x);
    const spry = useSpring(y);

    const rotateX = useTransform(spry, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
    const rotateY = useTransform(sprx, [-0.5, 0.5], ['-17.5deg', '17.5deg']);



    const handlemove = (e) => {
        const rect = e?.target?.getBoundingClientRect?.();

        const width = rect?.width;
        const height = rect?.height;

        const mouseX = e.clientX - rect?.left;
        const mouseY = e.clientY - rect?.top;

        const xptn = mouseX / width - 0.5;
        const yptn = mouseY / height - 0.5;

        x.set(xptn);
        y.set(yptn);

    }

    const handleleave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <Tilt className=' sm:w-[200px] w-full pb-5 touch-none mb-10 mr-7 sm:mb-0 sm:mr-0 select-none' >
            <motion.div

                onPointerDown={handleleave}
                onPointerMove={handlemove}
                onPointerLeave={handleleave}
                onPointerUp={handleleave}
                onPointerDownCapture={(e) => handlemove(e.pointerId)}
                className='rounded-xl inset-4 relative sm:w-[200px] min-h-[200px]  w-full bg-[#151030]'
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: 'preserve-3d',

                }}>
                <div

                    style={{
                        transform: 'translateZ(80px)',
                        transformStyle: 'preserve-3d'
                    }}
                    className='absolute inset-4 fl rounded-xl bg-[#7a40f8f9] shadow-lg flex justify-evenly items-center flex-col'
                >
                    <img
                        style={{
                            transform: "translateZ(80px)",
                        }}
                        src={icon}
                        alt='web-development'
                        className='w-20 h-20 object-contain'
                    />

                    <h3 style={{
                        transform: "translateZ(70px)",
                    }}
                        className='text-white text-[28px] font-bold text-center '>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}


function Home() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

  
    return (
        <>
        <div className='h-full w-full text-white bg'><Nav/>
            <header className='flex w-fit justify-center pt-20 m-auto '  >
                <div className='border-4 border-[#ae09dc5f] bg-[#4c20b1] bg-opacity-[0.3]  rounded-xl w-fit p-10 flex flex-col lg:flex-row '>
                    <div>
                            <span className='sm:text-[80px] text-[60px] font-bold capitalize' >
                                the <br />
                            </span>
                            <span className='sm:text-[80px] text-[60px] text-yellow-300 font-bold capitalize'>
                                glitch
                            </span>
                            <span className='sm:text-[80px] text-[60px] font-bold text-yellow-300 capitalize'>
                                city
                            </span>

                        </div>
                        <div className='' >
                            <img src="../assets/hero/hero1.png" className='lg:h-[80vh]' />
                        </div>
                    </div>
                </header>
                <section className='p-2 sm:px-20 mt-8 sm:mx-20 border-4  border-[#ae09dc5f] bg-[#360c99] bg-opacity-[0.6]  rounded-xl ' >
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]"
                    >Introduction</p>
                    <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Overview.</h2><br />

                    <div className='mt-4 capitalize text-[17px] max-w-3xl leading-[30px]' >
                        ultimate academic companion powered by the MERN stack!
                        <br />
                        <br />
                        Organize Effortlessly:
                        Stay on top of tasks with our intuitive to-do lists. Prioritize assignments, set deadlines, and track your progress—all in one place.
                        <br /><br />
                        Collaborate Seamlessly:
                        Streamline group projects with integrated chat. Discuss ideas, share resources, and work together effortlessly.
                        <br /><br />
                        Boost Your Studies:
                        Accelerate learning with cheatsheet sharing. Access and exchange valuable cheatsheets with your peers.
                        <br /><br />
                        Instant Assistance:
                        Stuck on a concept? Our 24/7 bot support provides quick answers and helpful resources.
                        <br /><br />
                        Sign up now and experience the simplicity of [Website Name]—where MERN technology meets academic excellence!

                    </div>



                    <div
                        className='mt-20 flex  gap-10 w-full h-full flex-wrap'
                    >

                        {services.map((service, index) => (
                            <ServiceCard key={service.title} index={index} {...service} />
                        ))}
                    </div>

                    <div>
                        <div>
                            <p className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]"
                            >My Work</p>
                            <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Projects.</h2>
                        </div>
                        <div className='mt-4 capitalize text-[17px] max-w-3xl leading-[30px]' >

                            Welcome to our cutting-edge website! Immerse yourself in the captivating parallax 3D landing page, chat seamlessly using React, CSS, and Tailwind with ChatEngine API, explore a collaborative cheatsheet with Node.js, React, and Tailwind, and boost productivity with our React, Tailwind-powered todo page—all hosted locally. Elevate your online experience with innovation and efficiency at your fingertips.                        </div>
                        <div
                            className='mt-20 flex flex-wrap gap-10 '
                        >
                            {projects.map((project, index) => (
                                <ProjectCard key={`project-${index}`} index={index} {...project} />
                            ))}
                        </div>
                    </div>



                </section>
                <footer className="bg-gray-800 text-white mt-8 py-8">
                    <div className="container px-20 mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm">&copy; 2024 The GlitchCity . All rights reserved.</p>
                        </div>
                        <div>
                            <ul className="flex justify-center space-x-4">
                                <li>
                                    <a href="/" className="text-sm hover:text-gray-300">Home</a>
                                </li>
                                <li>
                                    <a href="/about" className="text-sm hover:text-gray-300">About</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-sm hover:text-gray-300">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className='p-4' >
                            <p className="text-sm">Follow Us: </p>
                            <div className="flex space-x-2">
                                <a href="#" className="text-blue-500 hover:text-blue-300">
                                    Linkdin
                                </a>
                                <a href="#" className="text-blue-500 hover:text-blue-300">
                                    Facebook
                                </a>
                                <a href="#" className="text-blue-500 hover:text-blue-300">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                <StarsCanvas/>
            </div>
        </>
    )
}

export default Home