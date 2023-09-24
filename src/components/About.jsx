import React from "react";
import Skills from "./Skills";



const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is MD MERAJ ALAM, i am a React developer, UI
        designer. I jhave honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
    
       <Skills/>  
    </div>
  );
};

export default About;
