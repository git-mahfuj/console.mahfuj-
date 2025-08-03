"use client";
import React from "react";

import RotatingText from "../imported/Rotating";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const Profile = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  useGSAP(() => {

    gsap.to("#hehe", {
      opacity: 1,
      y: 3,
      stagger: 0.05,
      ease: "power4.out",
      duration: 0.6,
      scrollTrigger: {
        trigger:"#hehe",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
      }
    });
  }, []);
  return (
    <section className="profile_section section text-white w-full ">
      <div className="px-[2rem] relative">
        <h1 className="text-4xl mb-3 font-medium">Hi there</h1>
        <h2 className="text-3xl mb-3 font-[400]">I'm Mahfujur Rahman</h2>
        <div className="text-2xl font-[300]">
          <span className="flex items-center  bg-transparent">
            The Coder{" "}
            <RotatingText
              texts={["is a Noob", "or better call him", "a Newbie Developer"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-transparent overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
          <span
            id="hehe"
            className="absolute opacity-0 right-5 font-medium translate-y-10 md:text-4xl lg:-translate-x-20 "         >
            Hehe!
          </span>
        </div>
        <div className="mt-12">
          <p className="text-4xl font-medium pt-5">Why i made this ??? </p>
          <p className="text-lg font-[300] mt-5 w-3/4 sm:pb-2 ">
            Umm This is my simple portfolio with some basic info about me. My
            purpose is to make this website a better place for the beginners
            because i am also a beginner. Here you can learn the basic things
            about web development to Advance web dev . The complete web dev
            Roadmap will be given here . So Farewell
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
