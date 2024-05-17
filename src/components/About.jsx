import SplitType from 'split-type'
import {gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function About() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  
    useEffect(() => {
      const handleScroll = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
          setIsVisible(isVisible);
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
    let text = new SplitType('#text');
    console.log(text);
    let characters = document.querySelectorAll('.char');
    //console.log(characters);
  
    for(var i = 0; i<characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }
  
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    })

    return (
        <div name='about' className='w-full h-[calc(130vh-25px)] bg-gradient-to-b from-gray-800 to-black text-white sm:h-[calc(110vh-80px)]'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 animate-pulse'>
                  About
                </p>
              </div>

              <div></div>

              </div>
              
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 py-8'>
                <div  ref={elementRef} className='sm:text-right text-3xl font-bold'>
                  <p id="text">Hi. I`m Darius, nice to meet you. 
                        <br />   
                        <span className="font-light text-2xl">Please take a look around.</span>
                  </p>
                </div>
                <div>
                    <ul>
                      <li>
                      ✔️ I`m skilled in web development with JavaScript as the main language and frontend frameworks such as Vue.js or React.js. 
                          Firstly I worked only with frontend technologies including WordPress, then I started learning backend development using Laravel, Node.js or Python/Django frameworks.
                      </li>
                      <li>
                        ✔️ I have advanced knowledge about MySQL, MongoDB databases
                      </li>
                      <li>
                        ✔️ Through my professional experience as web developer I also gained advanced knowledge of JQuery, Vuex, Pinia, Vite, PrimeVue, Tailwind, Bootstrap, Vuetify, Docker, Linux commands
                      </li>
                      <li>
                      ✔️ MSc Advanced Computing Systems and Bachelor`s degree Computer Science
                      </li>
                      <li>
                      ✔️ Enthusiast and ambitious person, who enjoys challenges, 
                        keen to learn new things and working with best professional people
                      </li>
                      <li>
                      ✔️  I`m also flexible and easiliy adapting to new technologies and situations, eager to develop my skills further
                      </li>
                    </ul>   
                </div>
              </div>
          </div>
        </div>
      );
}
export default About