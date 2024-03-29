
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

      console.log(portfolios);
      return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8 animate-pulse">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Portfolio
                </p>
                <p className="py-6">
                Check out some of my work right here
                </p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0">

              {portfolios.map((item, index) => (

                    <div key={index.id} className="shadow-md shadow-gray-600 rounded-lg">
                      <img src={item.imageProject} alt="portfolio projects"
                          className="cursor-pointer rounded-md duration-200 hover:scale-105"
                      />

                      <div className="group-hover:opacity-100 text-center py-5">
                            <span className="text-2xl font-light text-white tracking-wider ">
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
