
export function About() {
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
                <div className='sm:text-right text-3xl font-bold'>
                  <p>Hi. I`m Darius, nice to meet you. 
                        <br />   
                        <span className="font-light text-2xl">Please take a look around.</span>
                  </p>
                </div>
                <div>
                    <p>
                    ✔️I`m skilled in web development with JavaScript as the main language and frontend frameworks such as Vue.js or React.js. 
                    Firstly I worked only with frontend technologies including WordPress, then I started learning backend development using Laravel, Node.js or Python/Django frameworks. <br></br>
                    ✔️ I have advanced knowledge about MySQL, MongoDB databases<br></br>
                    ✔️ Through my professional experience as web developer I also gained advanced knowledge of JQuery, Vuex, Pinia, Vite, PrimeVue, Tailwind, Bootstrap, Vuetify, Docker, Linux commands<br></br>
                    ✔️ MSc Advanced Computing Systems and Bachelor`s degree Computer Science<br></br>
                    ✔️ Enthusiast and ambitious person, who enjoys challenges, 
                          keen to learn new things and working with best professional people
                    </p>
                </div>
              </div>
          </div>
        </div>
      );
}
export default About