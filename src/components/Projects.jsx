import React from "react";
import Eshopping from "../assets/projects/ecart.png";
import Todo from "../assets/projects/todo.png";
import Lazy from "../assets/projects/lazy.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Eshopping,
      title: "E-commerce",
      description: "A online shopping app with payment integration.",
      tools: "Technology used :-",
      technology:
        "React js, Tailwindcss,React-Router-Dom, Redux, Context Api, Firebase, Razorpay",
      github: "https://github.com/MerajAlam-07/skeletion-api-loading",
      demo: "https://merajalam-07.github.io/Meraj-Portfolio",
    },

    {
      id: 2,
      image: Todo,
      title: "Todo App",
      description:
        "React Todo App project  include full CRUD functionality: create, read, update, and delete with LocalStorage.",
      tools: "Technology used :-",
      technology: "React js, CustomHook,React-heroicons ",
      github: "https://github.com/MerajAlam-07/Todo-App",
      demo: "https://merajalam-07.github.io/Todo-App",
    },
    {
      id: 3,
      image: Lazy,
      title: "Lazy loading",
      description: "Skeletion-Api-Loading",
      tools: "Technology used :-",
      technology:
        "React js, Axios, Random Api,  Joe Schome Api,  React loading Skeleton",
      github: "https://github.com/MerajAlam-07/skeletion-api-loading",
      demo: "https://merajalam-07.github.io/skeletion-api-loading",
    },
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer.
        Here are a few of my projects
      </p>

      {/* projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map(
          ({
            id,
            image,
            title,
            description,
            github,
            technology,
            tools,
            demo,
          }) => {
            return (
              <div
                key={id}
                className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
              >
                  <img src={image} alt={title} />
                <h3 className="text-primary font-semibold text-lg">{title}</h3>
                <p className=" text-white mt-1">{description}</p>
                <h5 className="text-primary font-semibold text-lg mt-5">
                  {tools}
                </h5>
                <p className=" text-white mt-1">{technology}</p>

                <div className="mt-5">
                  <a
                    href={github}
                    className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white "
                  >
                    Live Project
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
