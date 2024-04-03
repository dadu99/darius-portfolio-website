
import portfolio from "../assets/testReact.png"
import appLaravel from "../assets/portfolio/app_laravel_landing.png"
import university from "../assets/portfolio/university.png"
import portfolioVue from "../assets/portfolio/portfolio.png"
import quizVue from "../assets/portfolio/quiz.png"

export function Portfolio() {
    const portfolios = [
        {
          id: 1,
          name: "Management users from library ",
          imageProject: appLaravel,
          shortDescription: 'Developed in Laravel',
          github:"https://github.com/dadu99/app_laravel8",
          live:"https://github.com/dadu99",
        },
        {
          id: 2,
          name: "Fictional University",
          imageProject: university,
          shortDescription: 'Developed in Wordpress',
          github:"https://github.com/dadu99/fictional-university-WP",
          live:"https://github.com/dadu99",
        },
        {
          id: 3,
          name: "Curriculum Vitae ",
          imageProject: portfolioVue,
          shortDescription: 'Developed in Vue 3 and Vuetify 3',
          github:"https://github.com/dadu99/vue3-vuetify3-resume",
          live:"https://dariusbaciu.netlify.app/",
        },
        {
          id: 4,
          name: "Quiz",
          imageProject: quizVue,
          shortDescription: 'Developed in Vue3',
          github:"https://github.com/dadu99/vue-quizz-app",
          live:"https://quiz-school.netlify.app/",
        },
        {
          id: 5,
          name: "Project x",
          imageProject: portfolio,
          shortDescription: 'Developed in Laravel',
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
        {
          id: 6,
          name: "Project x",
          imageProject: portfolio,
          shortDescription: 'Developed in Laravel',
          github:"https://github.com/dadu99",
          live:"https://github.com/dadu99",
        },
      ];

      //console.log(portfolios);
      return (
        <div name="portfolio" className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
          <div className="max-w-[1000px] px-4 py-8 mx-auto flex flex-col justify-center w-full h-full">
            <div className="py-4">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 animate-pulse">
                  Portfolio
                </p>

                <p className="py-4">
                  Check out some of my work right here
                </p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

              {portfolios.map((item) => (

                    <div key={item.id} className="bg-gray-800 shadow-lg shadow-teal-500 rounded-lg hover:scale-105 cursor-pointer duration-500">

                        <img src={item.imageProject} alt="personal portfolio powered by darius baciu"
                          className="flex justify-center w-full portfolio-image object-cover items-center mx-auto rounded-lg"/>

                      <div className="group-hover:opacity-100 text-center py-5">
                            <span className="text-2xl font-light text-white tracking-wider">
                              {item.name}
                            </span>
                      </div>
                      <div className="text-center">

                      <span className="text-sm font-light text-white tracking-wider">
                              {item.shortDescription}
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
