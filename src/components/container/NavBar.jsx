import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDB from '../../assets/dbLogo.jpg'
import { Link } from "react-scroll";
import $ from "jquery"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"

export function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
            {
            id: 3,
            link: "portfolio",
        },
            {
            id: 4,
            link: "experience",
        },
            {
            id: 5,
            link: "contact",
        },
    ];

    function handleMenuLink () {
        setNav(!nav);
    }
    function handleHamburger() {
        setNav(!nav);
        $('body').css('overflow', $('body').css('overflow') == 'hidden' ? 'auto' : 'hidden');
    }

  return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 z-[100] text-white bg-black">
            <div>
                <img src={logoDB} width={80} height={25} alt="logo nav" className="object-fit relative m-0 w-[80px] h-[25px]' z-50"  /> 
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize relative z-50 font-medium text-teal-500 hover:scale-105 duration-300 hover:underline decoration-teal-500">
                        <Link to={link} 
                            smooth={true} 
                            duration={500}>
                        {link}
                    </Link>
                    </li>
                ))}
            </ul>

            <div onClick={handleHamburger}
                className="cursor-pointer pr-4 relative z-[105] text-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute z-[100] top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link onClick={handleMenuLink}
                                to={link}
                                smooth
                                duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <ul className="flex flex-nowrap justify-between items-center gap-2 pt-10">
                        <li className="px-2 hover:duration-300 -translate-y-6">
                            <a href= "https://github.com/dadu99" target="_blank" rel="noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="px-2 hover:duration-300 -translate-y-6">
                            <a href= "https://www.linkedin.com/in/baciu-nicolae-darius-a5a91a15a/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                        </li>   
                        <li className="px-2 hover:duration-300 -translate-y-6">
                            <a href= "/JS.pdf" target="_blank" rel="noreferrer">
                                <BsFillPersonLinesFill size={30} />
                            </a>
                        </li> 
                        <li className="px-2 hover:duration-300 -translate-y-6">
                            <a href= "mailto:baciu.darius01@gmail.com" target="_blank" rel="noreferrer">
                                <HiOutlineMail size={30} />
                            </a>
                        </li>  
                    </ul>
                    
                </ul>
            )}
        </div>
);
}

export default NavBar