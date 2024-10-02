import { useState,useEffect } from "react";
function TopBtn() {
    const [btn,setbtn] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 
            ? setbtn(true)
            : setbtn(false)
           
        })
    });
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return(
        <button
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
        className= {`${ btn?'fixed': 'hidden'} flex justify-center items-center rounded-full bg-[#1f0a4e] bottom-[20px] right-[10px] w-11 h-11 cursor-pointer border-[#00ffff] border-[4px] hover:border-[#ffffff] hover:bg-white`}
        onClick={scrollUp}
        >

            <img src='../assets/up.png' alt="up" className=" rounded-full w-9 h-9 "/>
        </button>
    );
}
export default TopBtn;