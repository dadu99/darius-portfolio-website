
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
                        <br />   <span className="font-light text-2xl">Please take a look around.</span>
                  </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                        deserunt illum mollitia officiis qui exercitationem perferendis neque
                        quasi a recusandae necessitatibus tempora iusto! Blanditiis error
                        iste, totam fugiat recusandae rerum laborum perferendis molestiae
                        aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
                        ab mollitia voluptatibus, a nostrum eveniet laborum!
                    </p>

                <br />

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
                        pariatur, vel similique sint, nobis aspernatur ut praesentium
                        explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
                        quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                        Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
                        magni quo! Eum cupiditate debitis labore.
                    </p> 
                </div>
              </div>
          </div>
        </div>
      );
}
export default About