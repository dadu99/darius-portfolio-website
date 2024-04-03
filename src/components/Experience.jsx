import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import vue from "../assets/vue.svg";
import node from "../assets/node.png";
import laravel  from "../assets/laravel.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/mysql.png"
import bootstrap from "../assets/bootstrap.svg";
import vuetify from "../assets/vuetify.svg";
import vuex from "../assets/vuex.svg"
import express from "../assets/express.svg";
import vitejs from "../assets/vitejs.svg";
import pinia from "../assets/pinia.svg"
import wordpress from "../assets/wp.png";

export function Experience() {

    const techs = [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-400",
    },
    {
        id: 4,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-green-500"
    },
    {
      id: 6,
      src: express,
      title: "Express.js",
      style: "shadow-white"
    },
    {
      id: 7,
      src: vue,
      title: "Vue",
      style: "shadow-green-500"
    },
    {
      id: 8,
      src: vuex,
      title: "Vuex",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: pinia,
      title: "Pinia Store",
      style: "shadow-yellow-500",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500",
    },
    {
      id: 13,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-blue-500"
    },
    {
      id: 14,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500"
    },
    {
      id: 15,
      src: sql,
      title: "MySQL",
      style: "shadow-sky-400",
    },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: vuetify,
      title: "Vuetify",
      style: "shadow-sky-400",
    },
    {
      id: 18,
      src: vitejs,
      title: "Vite",
      style: "shadow-orange-400",
    },
    ];
    
      return (
        <div name="experience" className="w-full bg-gradient-to-b from-gray-800 to-black text-gray-300">
          <div className="max-w-[1000px] mx-auto px-4 py-8 flex flex-col justify-center w-full h-full">
            <div className="py-4">
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline animate-pulse">Experience</p>
              <p className="py-4">These are the technologies I`ve worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-1 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt="skills logos" className="w-20 mx-auto skills-container" />
                  <p className="my-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
            }

export default Experience