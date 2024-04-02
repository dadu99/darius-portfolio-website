import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
  <footer className="bg-gradient-to-b from-gray-800 from-9% to-black via-91%">
    <div className="w-full mx-auto max-w-screen-xl py-6">
      <div className="flex flex-col gap-1 text-sm text-white sm:text-center">
          <span className="flex justify-center gap-2 dark:text-gray-400">
            Created by <span className="italic">Darius Baciu</span>
          </span>

          <div className="flex justify-center gap-2 text-sm text-white sm:text-center">

            <a href="https://www.instagram.com/dariusbaciu_/" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer duration-200">
              <FaInstagram size={20}/>
            </a>

            <a href="https://twitter.com/DariusDarius01" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer duration-200">
              <FaXTwitter size={20}/>
            </a>

            <a href="https://www.facebook.com/baciu.darius01/" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer duration-200">
              <FaFacebookF  size={20}/>
            </a>

        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer