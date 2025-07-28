import React from "react";
import Cards from "../imported/Cards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const CardsSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#dataone", {
      x: 0,
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: "#dataone",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to("#datatwo", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#datatwo",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to("#datathree", {
      x: 0,
      duration: 1,
      opacity: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#datathree",
        start: "top 100%",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to("#heading", {
      opacity: 1,
      duration: 1.5,
      y: 0,
      ease: "power2.Out",
      scrollTrigger: {
        trigger: "#heading",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="section cards__section text-white w-full h-auto">
      <div className="relative ">
        <h1
          id="heading"
          className="opacity-0 translate-y-10 text-center mb-4 text-4xl font-medium"
        >
          Hate Coding ???
        </h1>
        <div className="translate-y-28 px-6 md:hidden">
          <p
            id="dataone"
            className="opacity-0 -translate-x-10 text-2xl w-3/4 tracking-wide font-medium"
          >
            Get the best code snippets for your project
          </p>
          <p
            id="datatwo"
            className="opacity-0 translate-x-10 translate-y-10 right-7 absolute font-medium text-xl text-thirdcolor md:left-6"
          >
            With the best solutions
          </p>
          <p
            id="datathree"
            className="opacity-0 -translate-x-10 translate-y-30  font-medium text-lg text-thirdcolor "
          >
            This platform will be updated soon stay tuned !
          </p>
        </div>
        {/* second  */}

        <div className="hidden md:flex md:flex-col  translate-y-28 px-6">
          <p className="opacity-1  text-2xl w-3/4 tracking-wide font-medium md:text-3xl">
            Get the best code snippets for your project
          </p>
          <p className="opacity-1  translate-y-10  font-medium text-xl text-thirdcolor md:text-2xl">
            With the best solutions
          </p>
          <p className="card_text opacity-1  translate-y-20  font-medium text-lg text-thirdcolor">
            This platform will be updated soon stay tuned !
          </p>
        </div>

        <div className="card__container">
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
