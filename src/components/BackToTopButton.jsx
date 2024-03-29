import { useEffect, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

export function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
                if(window.scrollY > 100) {
                    setBackToTopButton(true);
                } else {
                    setBackToTopButton(false)
                }
            })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div>
      {backToTopButton && (
        <button className='fixed bottom-[40px] right-[20px] p-3 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out' 
        onClick={scrollUp}>
            <FaArrowCircleUp size={25} />
        </button>
      )}
    </div>
  )
}
export default BackToTopButton
