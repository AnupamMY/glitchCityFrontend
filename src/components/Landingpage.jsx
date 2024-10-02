import { useEffect, useState } from "react";
import  "../App.css";
import { Link } from "react-router-dom";
import StarsCanvas from "./canvas/Stars";
import Nav from "./Navbar";

export default function Landingpage() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [ypos, setypos] = useState(window.innerHeight);

    useEffect(() => {
        window.scrollTo(0, 1);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        const handleWindowScroll = () => {
            setypos((window.scrollY / windowHeight) * 2 + 1);
        };

        window.addEventListener('scroll', handleWindowScroll);


        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleWindowScroll);

        }
    }, []);

    return (
        <div className=" h-[200vh] flex justify-center items-top text-center w-full "
        >
        <Nav data={ypos>1.2?'hidden':''} />
        
                     

        <div className=" fixed h-[100vh] w-full object-cover flex flex-col items-center justify-center " >

        <div className=" imgGlitch fixed h-[100vh] opacity-[1] w-full object-cover z-[-1]">
            
            <img src="./assets/background.jpg"
                className=" fixed h-[100vh]  w-full object-cover z-[-1] "
                style={{
                    scale: 1 + (ypos / 5) + ''
                }}
            />
            

            <img src="./assets/gbg/gbg1.png"
                className=" fixed h-[100vh] opacity-0 w-full object-cover z-[-1] "
                style={{
                    scale: 1 + (ypos / 5) + ''
                }}

            />

            <img src="./assets/gbg/gbg2.png"
                className=" fixed h-[100vh] opacity-0  w-full object-cover z-[-1] "
                style={{
                    scale: 1 + (ypos / 5) + ''
                }}

            />
                        

            <img src="./assets/gbg/gbg3.png"
                className=" fixed h-[100vh] opacity-0 w-full object-cover z-[-1] "
                style={{
                    scale: 1 + (ypos / 5) + ''
                }}
            />
            </div>
            <StarsCanvas/>

            <img src="./assets/bg.png" className=" fixed h-[100vh] w-full object-cover z-[-1] "
                style={{
                    scale: ypos + ''
                }}
            />
            
            <div className={` ${ypos<1.2?'hidden':''} top-20 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[80px] text-[60px] tracking-wider	 uppercase`} >
                <span aria-hidden >welcome!</span>
                <span aria-hidden>welcome!</span>
                <span aria-hidden>welcome!</span>
            </div>
            <div className={` ${ypos<1.5?'hidden':''} top-40 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[50px] text-[30px] tracking-wider uppercase text-white`} >
                <span aria-hidden >to</span>
                <span aria-hidden>to</span>
                <span aria-hidden>to</span>
            </div>
            <div className={` ${ypos<1.8?'hidden':''} top-60 flex items-center justify-center  glitch font-extrabold  fixed sm:text-[50px] text-[30px] tracking-wider uppercase text-[#FCEE0A]`} >
                <span aria-hidden >the</span>
                <span aria-hidden>the</span>
                <span aria-hidden>the</span>
            </div>
            <div className={` ${ypos<2?'hidden':''} top-80 text-[40px] flex items-center justify-center  glitch font-extrabold  fixed sm:text-[55px] tracking-wider text-[#FCEE0A] uppercase`} >

                <span aria-hidden >GlitchCity</span>
                <span aria-hidden>GlitchCity</span>
                <span aria-hidden>GlitchCity</span>
            </div>
            <div className="  top-96 fixed">
                
            <Link to='/home'  >
            <div className={` ${ypos<2.2?'hidden':''}  z-[1] cursor-pointer bg-[#4e42f5]  w-[100px] h-[100px] rounded-full  flex items-center justify-center `} >
                <img  src="../assets/play-button1.png" className=" imgGlitch h-[90px] w-[90px]" />
            </div>
            
            </Link>
            </div>
            
            </div>
        </div>

    );
}