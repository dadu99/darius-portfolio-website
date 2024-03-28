import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


export function Home() {

    useGSAP(() => {
        //gsap.to(".box", { rotation: "+=360", duration: 3 });
        const tl = gsap.timeline();

        tl.from("h2", 1.8, {
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    })  
});

    return (
        <div name="home"className="w-full bg-gradient-to-b from-black from-90% via-black to-gray-800 via-10%">
            <div className="h-[calc(140vh-25px)] max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row px-4 sm:h-[calc(100vh-80px)]">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-5xl sm:text-7xl font-bold text-white text-center sm:text-left">
                        I`m a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md text-center sm:text-left">
                    I`m an UI developer skilled in JavaScript Framework: Vue 3/Vue2, JQuery, HTML, CSS, Vuetify, Vuex, Pinia, Vite, PrimeVue | Advanced knowledge in PHP Framework: Laravel | Knowledge in WordPress
                    </p>
        
                <div className="flex items-center justify-center sm:justify-start">
                    <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                    </Link>
                </div>
                </div>
    
                <div>
                <img src={HeroImage} alt="My profile picture" className="rounded-2xl object-cover object-center w-full pt-6 sm:w-96"/>
            </div>
        </div>
    </div>
    );
}
export default Home