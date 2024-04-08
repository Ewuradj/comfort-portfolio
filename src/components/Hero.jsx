import React from "react";
import heroic from "../assets/images/heroic.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/a_jaymakeover?igsh=MW8xYmRsODZ5eXJneA==",
    },
    {
      icon: "logo-whatsapp",
      link: "https://web.whatsapp.com/",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/comfort-ewudziwaa-arthur-559ba3198/",
    },
  ];

  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer.", "React Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex md:flex-row flex-col items-center gap-2">
      <div className="flex-1 flex items-center justify-center h-full py-24 overflow-hidden rounded-lg">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gray-800 shadow-xl flex justify-center items-center overflow-hidden">
          <img src={heroic} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white">
            Hello! <br />
          </h1>
          <span className="text-white md:text-4xl text-3xl mr-2">My Name is</span>
          <span className="text-cyan-600 md:text-6xl text-5xl font-bold">Comfort Arthur</span>
          {/* <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4> */}
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#BF0AC9" />
          </h2>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <div key={index} className="text-gray-600 hover:text-white cursor-pointer">
                <a href={icon.link}>
                  <ion-icon name={icon.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;