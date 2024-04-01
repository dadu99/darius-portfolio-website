
import portfolio from "../assets/testReact.png"

export function Portfolio() {
    const portfolios = [
        {
          id: 1,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 2,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 3,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 4,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 5,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 6,
          name: "Project x",
          imageProject: portfolio,
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
      ];

      //console.log(portfolios);
      return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
          <div className="max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 animate-pulse">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
                </p>
                <p className="py-4">
                Check out some of my work right here
                </p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0">

              {portfolios.map((item) => (

                    <div key={item.id} className="shadow-lg shadow-[#040c16] group container rounded-lg hover:scale-105 cursor-pointer duration-200">
                      <img src={item.imageProject} alt="portfolio projects"
                          className="flex justify-center text-center items-center mx-auto"
                      />
                      <div className="group-hover:opacity-100 text-center py-5">
                            <span className="text-2xl font-light text-white tracking-wider">
                              {item.name}
                            </span>
                      </div>

                      <div className="flex items-center justify-center">
                        <a href={item.live} target='_blank' rel="noreferrer">
                          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                          </button>
                        </a>

                        <a href={item.github} target='_blank' rel="noreferrer">
                          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                          </button>
                        </a>
                      </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio
