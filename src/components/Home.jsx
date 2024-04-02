import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);


export function Home() {
    useEffect(() => {
        
const canvas = document.getElementById("canvas");
canvas.width = 320;
canvas.height = 320;
const ctx = canvas.getContext("2d");

class Vec2 extends Array {
  
  constructor (...values) {
    switch(values.length) {
      case 2:{
        const v = values[0];
        super(v, values[1]);
        break;
      }
      case 1: {
        const v = values[0];
        super(v, v);
        break;
      }
      default: {
        super(2);
        break;
      }
        
  }
  }
  
  get x(){ return this[0]; }
  set x(value) { this[0] = value; }

  get y() { return this[1]; }
  set y(value) { this[1] = value; }
  
  add (b) {
    this[0] += b[0];
    this[1] += b[1];
  }
  
  distance (b) {
    return Vec2.distance(this, b);
  }
  
  static distance(a, b) {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  }
}

class Particle {
  
  constructor() {
    this.speed = new Vec2(Math.random(), Math.random());
    this.position = new Vec2(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    this.radius = Math.random() * 4 + 1;
  }
  
  update() {
    if (this.position.x > window.innerWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }
    if (this.position.y > window.innerHeight || this.position.y < 0) {
      this.speed.y *= -1;
    }
    this.position.add(this.speed);
  }
}

const particles = [];

for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

const update = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const MAX_DISTANCE = (window.innerWidth + window.innerHeight) / 20;
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    
    for (let j = i; j < particles.length; j++) {
      const distance = particles[i].position.distance(particles[j].position);
      if (distance < MAX_DISTANCE) {
          
         ctx.strokeStyle = `rgba(3,233,210, ${1 - distance/MAX_DISTANCE})`;
         ctx.beginPath();
         ctx.moveTo(...particles[i].position);
         ctx.lineTo(...particles[j].position);
         ctx.stroke();
      }
    }
    
    ctx.fillStyle = "rgba(3,233,210,255)";
    ctx.beginPath();

    ctx.arc(
      ...particles[i].position,
      particles[i].radius,
      0, 2 * Math.PI);
    ctx.fill();
  }
  requestAnimationFrame(update);
}

update();
    })

    useGSAP(() => {
        gsap.to(".box-rotation ", {   //animation heading description
          rotation: "+=360", 
          duration: 3 
        });  

        const tl = gsap.timeline();  //title animation
        tl.from("h1", 1.8, {  
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    })  
});

    return (
      <div id="hero" name="home" className="relative w-full h-screen bg-gradient-to-b from-black from-90% via-black to-gray-800 via-10%">
        
        <canvas id="canvas" className="absolute w-full h-screen"/>
              <div className="max-w-[1000px] px-8 py-8 mx-auto flex flex-col items-center justify-center md:flex-row h-full">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl sm:text-7xl font-bold text-white text-center sm:text-left z-50">
                        I`m a Full Stack Developer
                    </h1>
                    <p className="text-gray-300 z-60 box-rotation relative py-4 max-w-md text-center sm:text-left z-50">
                    I`m an UI developer skilled in JavaScript Framework: Vue3/Vue2, JQuery, HTML, CSS, Vuetify, Vuex, Pinia, Vite, PrimeVue | Advanced knowledge in PHP Framework: Laravel | Knowledge in WordPress
                    </p>
        
                <div className="flex items-center justify-center sm:justify-start z-50">
                    <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer sm:z-50">
                    View my Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                    </Link>
                </div>
                </div>
    
                <div>
                <img src={HeroImage} alt="My profile picture" className="rounded-2xl relative object-cover object-center w-full pt-6 sm:w-96 z-50"/>
            </div>

            </div> 
      </div>
    );
}
export default Home