"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { CodeBlock } from "../imported/Codeblock";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

const Hero = () => {

  useGSAP(() => {
    gsap.to(".hero__alert", {
      y: 0,
      duration: 1,
      ease: "power2.out",
      opacity: 1,
      delay: 0.1,
    });
    gsap.to(".hero__heading", {
      y: 0,
      duration: 1,
      ease: "power2.out",
      opacity: 1,
      delay: 0.2,
    });
    gsap.to(".hero__subheading", {
      y: 0,
      duration: 1,
      ease: "power2.out",
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".hero__btns", {
      y: 0,
      duration: 1,
      ease: "power2.out",
      opacity: 1,
      delay: 0.4,
    });
    gsap.to(".hero__codeblock", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
  }, []);
  const router = useRouter();
  const tutorialsSection = () => {
    router.push("/tutorials");
  }
  return (
    <section className="section hero__section px-3 mt-16 overflow-hidden w-full 2xl:flex 2xl:justify-between 2xl:items-center 2xl:h-screen 2xl:mt-0 2xl:w-[1700px] ">
      <div className="text-white  w-full flex flex-col justify-center items-center gap-3 2xl:flex 2xl:flex-col 2xl:justify-baseline 2xl:text-start">
        <p className="hero__alert opacity-0 translate-y-10 text-white text-[1.1rem] text-center font-medium">
          Empower Your{" "}
          <span className="bg-[#7F8C8D] px-2 rounded-full text-center">
            Code
          </span>{" "}
          . Ignite Your Future.
        </p>
        <span className="hero__heading opacity-0 translate-y-10 text-white mt-5 text-5xl text-center font-[400] md:text-6xl lg:text-7xl ">
          Code with Clarity <br />
          <p className="px-3 text-center">
            <span className="text-secondary font-medium"> {`{`} </span> Learn
            with Purpose{" "}
            <span className="text-secondary font-medium"> {`}`} </span>
          </p>{" "}
          <span className="text-3xl">Join thousands of devs building the future.</span> 
        </span>
        <p className="hero__subheading opacity-0 translate-y-10 mt-5 px-4 text-center font-medium text-text lg:w-3/4 mx-auto lg:text-lg">
          Your journey to pro development starts here. Free resources. Real
          projects. Endless potential. {`  [ Level up ] `} with hands-on dev
          knowledge free, structured, and powerful.
        </p>
        <div className="hero__btns opacity-0 translate-y-10 mt-5 flex items-center gap-3">
          <button className="hero__btn px-6 py-2 bg-secondary text-white rounded-lg font-medium  cursor-pointer 2xl:px-8 2xl:py-3.5 2xl:text-xl">
            Get started
          </button>
          <button onClick={tutorialsSection} className="hero__btn px-6 py-2 bg-transparent font-medium flex items-center cursor-pointer 2xl:px-8 2xl:py-3.5 2xl:text-xl">
            Dive into Dev Lessons{" "}
            <span className="text-secondary">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
      <div className="hero__codeblock opacity-0 text-white mt-10 flex flex-col justify-center items-center">
        <p className="text-white font-medium text-xl 2xl:text-3xl">
          {" "}
          Fuel Your Future with Learning
        </p>
        <p className="text-text font-medium pb-4 mt-1 tracking-wide 2xl:text-xl">
          {" "}
          Unleash Your Inner Developer
        </p>
        <div className="codeblock w-full mx-auto md:w-[650px] lg:w-[800px]2xl:w-[650px]">
          <CodeBlock
            filename="devmahfuj.Jsx"
            language="Jsx"
            code={`import React from 'react';\nimport { useState } from "react";\nconst DummyComponent = () => {\n const [task , addTask] = useState([]);\n  const addTask() => { \n   setTask(prev = > [...prev , "New Task"]);\n  };\nreturn (\n <div className="p-4 border rounded-lg">\n  <h2>Todo List</h2>\n   <ul>\n    {task.map((task , index ) => (\n     <li key={index}>{task}</li>\n     ))}\n   </ul>\n  <button onClick={addTask}>Add Task</button>\n </div>\n );\n};
              `}
            highlightLines={[2, 4, 13, 16]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
