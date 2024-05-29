import appLaravel from "../assets/portfolio/app_laravel_landing.png"
import university from "../assets/portfolio/university.png"
import portfolioVue from "../assets/portfolio/portfolio.png"
import quizVue from "../assets/portfolio/quiz.png"
import bookLibrary from "../assets/portfolio/book_library.png"
import mern from "../assets/portfolio/mern.png"
import todo from "../assets/portfolio/todo.png"
import primeVuePinia from "../assets/portfolio/primevuePinia.png"
import nike from "../assets/portfolio/nike.png"
import promptopia from "../assets/portfolio/promptopia.png"

export function Portfolio() {
  const portfolios = [
    {
      id: 1,
      name: "Quiz",
      imageProject: quizVue,
      shortDescription: 'Developed in Vue3',
      github: "https://github.com/dadu99/vue-quizz-app",
      live: "https://quiz-school.netlify.app/",
    },
    {
      id: 2,
      name: "Curriculum Vitae ",
      imageProject: portfolioVue,
      shortDescription: 'Developed in Vue 3 and Vuetify 3',
      github: "https://github.com/dadu99/vue3-vuetify3-resume",
      live: "https://dariusbaciu.netlify.app/",
    },
    {
      id: 3,
      name: "PrimeVue & Pinia App",
      imageProject: primeVuePinia,
      shortDescription: 'Developed in Vue3/PrimeVue/Pinia',
      github: "https://github.com/dadu99/vue3-primevue",
      live: "https://prime-vue-pinia.netlify.app/",
    },
    {
      id: 4,
      name: "Promptopia AI",
      imageProject: promptopia,
      shortDescription: 'Modern fullstack developed in Next.js/MongoDB/Tailwind ',
      github: "https://github.com/dadu99/app_next_ai",
      live: "https://project-next-js-ai.vercel.app/",
    },
    {
      id: 5,
      name: "Book Library",
      imageProject: bookLibrary,
      shortDescription: 'Developed in Nodejs/Express.js',
      github: "https://github.com/dadu99/book-library-nodejs",
      live: "https://booklibrary-edc2051ee8c2.herokuapp.com/",
    },
    {
      id: 6,
      name: "Mern Blog Posts",
      imageProject: mern,
      shortDescription: 'Developed in MongoDB/Express.js/React/Node.js',
      github: "https://github.com/dadu99/mern-blog-posts",
      live: "",
    },
    {
      id: 7,
      name: "Nike Website Clone",
      imageProject: nike,
      shortDescription: 'Developed in React & Tailwind, for better understanding tailwind concepts',
      github: "",
      live: "",
    },
    {
      id: 8,
      name: "Small ToDo App",
      imageProject: todo,
      shortDescription: 'Developed in React',
      github: "https://github.com/dadu99/todo-list-react",
      live: "https://todo-react-8b0166.netlify.app/",
    },
    {
      id: 9,
      name: "Management users from library",
      imageProject: appLaravel,
      shortDescription: 'Developed in Laravel 8',
      github: "https://github.com/dadu99/app_laravel8",
      live: "",
    },
    {
      id: 10,
      name: "Fictional University",
      imageProject: university,
      shortDescription: 'Developed in WordPress with custom Theme',
      github: "https://github.com/dadu99/fictional-university-WP",
      live: "",
    },
  ];

  return (
    <>
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

                <div style={{ backgroundImage: `url(${item.imageProject})` }}
                  className="group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                </div>

                <div className="group-hover:opacity-100 text-center py-5">
                  <span className="text-2xl font-light text-white tracking-wider">
                    {item.name}
                  </span>
                </div>
                <div className="text-center py-2">
                  <span className="text-sm font-light text-white tracking-wider">
                    {item.shortDescription}
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  {item.live !== "" && (
                    <a href={item.live} target='_blank' rel="noreferrer">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                      </button>
                    </a>
                  )
                  }

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
    </>
  );
}

export default Portfolio
