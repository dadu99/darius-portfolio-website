import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"

export function SocialLinksMobile() {

    const links = [
        {
          id: 1,
          child: (
            <>
            <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/baciu-nicolae-darius-a5a91a15a/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
            <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/dadu99",
        },
        {
          id: 3,
          child: (
            <>
            <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:baciu.darius01@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
            <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/JS.pdf",
          style: "rounded-br-md",
          download: true,
        },
    ];

return (
    <div className="relative z-[100] top-20 right-4">
        <ul className="flex flex-nowrap justify-between items-center">
            {links.map(({ id, child, href, style, download }) => (
                <li key={id} className={ "px-4 hover:duration-300 " + " " + style}>

                        <a href={href} className=" text-gray-500e text-center"
                            download={download}
                            target="_blank"
                            rel="noreferrer">
                            {child}
                        </a>
                </li>
            ))}
        </ul>
    </div>
)
}

export default SocialLinksMobile
