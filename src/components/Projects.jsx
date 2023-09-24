import React from "react";

const Projects = () => {


  const projects = [
    {
      title: "E-commerce",
      description:
        "A online shopping app .",
        tools:"Technology used :-",
        technology:"React js, Tailwindcss,React-Router-Dom, Redux, Context Api, Firebase, Razorpay",
      photo: "/src/assets/projects/img1.png",
      // button:`${<a href="https://merajalam-07.github.io/Todo-App/"></a>}`,
    },
   
    {
      title: "Todo App",
      description:
        "React Todo App project  include full CRUD functionality: create, read, update, and delete with LocalStorage.",
        tools:"Technology used :-",
        technology:"React js, CustomHook,React-heroicons ",
      photo: "/src/assets/projects/img3.png" ,
      // button:`"<a href="https://merajalam-07.github.io/Todo-App/"></a>"`,
   
    },
    {
      title: "Lazy loading",
      description:
        "Skeletion-Api-Loading",
        tools:"Technology used :-",
        technology:"React js, Axios, Random Api,  Joe Schome Api,  React loading Skeleton",
      photo: "/src/assets/projects/img2.png",
      // button:`${<a href="https://merajalam-07.github.io/skeletion-api-loading/"></a>}`,
     
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
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.href} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <h5 className="text-primary font-semibold text-lg mt-5">
                {project.tools}
              </h5>
              <p className=" text-white mt-1">{project.technology}</p>
              {/* <a href={project.button}
                target="_blank"
                rel="noreferrer"  >
                <button className="btn outline py-1.5 px-9 rounded border-none mt-5 ml-5 text-white " >
                  Live Project
                </button>
                
                </a> */}
              <div className="mt-5  flex items-center" >
                {/* <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  About me
                </button> */}
                 <button className="btn outline py-1.5 px-9 rounded border-none  ml-5 text-white " >
                  Live Project
                </button>

               
                
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;