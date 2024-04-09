import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";

import neon from "../assets/images/neon.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Movie App",
      icon: "logo-github",
      github_link: "https://github.com/mrkabby/CineMate",
      // live_link: "https://cine-mate-3dlx6sdsg-mrkabbys-projects.vercel.app/",
    },
    {
      img: project2,
      name: "To Do App",
      icon: "logo-github",
      github_link: "https://github.com/Ewuradj/todo-app",
      // live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Recipe App",
      icon: "logo-github",
      github_link: "https://github.com/Ewuradj/recipe",
      // live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      icon: "logo-github",
      name: "Agro Ecommerce Market",
      github_link:
        "https://github.com/CodeSphereMest/MarketAgroProduct-App",
      // live_link: "https://reacttailwindnavbar.netlify.app",
    },
    // {
    //   img: project5,
    //   name: "Vue Country",
    //   github_link: "https://github.com/Sridhar-C-25",
    //   live_link: "https://vuecountry05.netlify.app",
    // },
  ];
  return (
    <section id="projects" className="py-10 text-white bg-gray-800">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slides-per-view="1"
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-72 w-full p-4 bg-slate-600 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3  ">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className=" bg-slate-600 px-2 py-1 inline-block"
                    >
                      <ion-icon size='large' name="logo-github"></ion-icon>
                    </a>
                    {/* <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-slate-600 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={neon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
