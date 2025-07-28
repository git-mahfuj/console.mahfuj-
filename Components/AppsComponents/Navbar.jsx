"use client";

import React, { useState } from "react";
import gsap from "gsap";
import {
  ScanSearch,
  CodeXml,
  CircleX,
  BookText,
  GraduationCap,
  Workflow,
  CloudAlert,
  Code,
  Users,
  Instagram,
  Facebook,
  Github,
} from "lucide-react";

import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const toggleSidebar = () => {
    gsap.to("#sidebar", { right: 0, duration: 0.5 });
  };

  const closeSidebar = () => {
    gsap.to("#sidebar", { right: "-120%", duration: 0.5 });
  };
  useGSAP(() => {
    gsap.to(".nav__logo", { x: 0, duration: 0.5, opacity: 1 });
    gsap.to(".toggle__btns", { x: 0, duration: 0.5, opacity: 1 });
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const updatePage = () => {
    // You can set a state to show "Coming Soon" or use alert for now
    if (!isClicked) {
      alert("Coming Soon");
    }
    setIsClicked((prev) => !prev);
  };

  const router = useRouter()

  const tutorialsSection = () => {
    router.push("/tutorials");
  }

  return (
    <header className="text-white w-full h-18 bg-fourth fixed z-50 bg-black top-0 border-b border-[#18191A]">
      <nav className="flex justify-between items-center p-5 w-full  ">
        <div className="cursor-pointer nav__logo text-primary text-3xl font-medium -translate-x-10 opacity-0 ">{` $ { console.mahfuj()
 } `}</div>
        <div className="shadcn__nav hidden lg:flex ">
        </div>
        <div className="toggle__btns flex items-center gap-6 opacity-0 translate-x-10">
          <div className="search__btn text-text flex items-center gap-2">
            {" "}
            <ScanSearch /> Ctrl K
          </div>
          <div
            id="toggleicon"
            onClick={toggleSidebar}
            className="sidebar__btn text-text flex items-center translate-y-1 cursor-pointer lg:hidden"
          >
            {" "}
            <span>
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/yvaxaowk.json"
                trigger="hover"
                stroke="bold"
                state="hover-roll"
                colors="primary:#ffffff,secondary:#FF0B55"
                style={{ width: "2rem", height: "2rem" }}
              ></lord-icon>
            </span>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <button className="px-5 py-1.5 bg-[#18191A] text-white rounded-lg font-medium ">
              Login
            </button>
            <button className="px-5 py-1.5 bg-secondary text-white rounded-lg font-medium ">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      {/* Sidebar  */}
      <aside
        id="sidebar"
        className="h-screen w-3/4 bg-black absolute -right-[120%] top-0 p-3 border border-[#18191A] overflow-hidden"
      >
        <div className="sidebar-btns flex w-full justify-between items-center border-b border-[#18191A] pb-3">
          <div className="flex flex-row gap-3 items-center">
            <button
              onClick={updatePage}
              className="cursor-pointer px-5 py-1.5 bg-[#18191A] text-white rounded-lg font-medium "
            >
              Login
            </button>
            <button
              onClick={updatePage}
              className="cursor-pointer px-5 py-1.5 bg-secondary text-white rounded-lg font-medium "
            >
              Sign up
            </button>
          </div>
          <div className="close__sidebar flex items-center text-text cursor-pointer">
            <CircleX onClick={closeSidebar} />
          </div>
        </div>
        <div className="features mt-5 border-b border-[#18191A] pb-3 cursor-pointer">
          <span className="flex  items-center gap-2 font-medium text-white">
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/nfuackpv.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#CF0F47"
              style={{ width: "2rem ", height: "2rem" }}
            ></lord-icon>{" "}
            Features
          </span>
        </div>
        <div className="Resources py-3">
          <p className="tracking-wider text-text font-medium">RESOURCES</p>
          <div className="reasources__data flex flex-col justify-center translate-x-4 translate-y-3 gap-2">
            <div className="resources_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <GraduationCap size={18} />
              </div>
              <div className="data" onClick={tutorialsSection}>
                <p className="text-white text-[1.1rem] font-medium">
                  Tutorials
                </p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
            <div className="resources_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <BookText size={18} />
              </div>
              <div className="data">
                <p className="text-white text-[1.1rem] font-medium">
                  Quick Learn
                </p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
            <div className="resources_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <Workflow size={18} />
              </div>
              <div className="data">
                <p className="text-white text-[1.1rem] font-medium">Blogs</p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
            <div className="resources_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <CloudAlert size={18} />
              </div>
              <div className="data">
                <p className="text-white text-[1.1rem] font-medium">
                  Error Resolving
                </p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Developers py-3">
          <p className="tracking-wider text-text font-medium">DEVELOPERS</p>
          <div className="Develoepers__data flex flex-col justify-center translate-x-4 translate-y-3 gap-2">
            <div className="developers_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <Code size={18} />
              </div>
              <div className="data">
                <p className="text-white text-[1.1rem] font-medium">
                  Developer Docs
                </p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
            <div className="developers_-article cursor-pointer transition-all duration-300 hover:translate-x-2 flex gap-3 items-center">
              <div className="icon p-2 bg-[#18191A] text-text rounded-md">
                <Users size={18} />
              </div>
              <div className="data">
                <p className="text-white text-[1.1rem] font-medium">
                  Community
                </p>
                <p className="text-text text-[.8rem]">lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>

        <div className="icons-social mt-12">
          <div className="social__container flex flex-col gap-4 translate-x-3">
            <Link href="https://github.com/git-mahfuj"  className="social__data flex items-center gap-3">
              <div className="icon p-3 bg-[#18191A] text-primary rounded-xl">
                <Github />
              </div>
              <div className="data">
                <p className="text-xl font-medium">Github</p>
                <p className="text-text text-[.8rem]">Lorem ipsum</p>
              </div>
            </Link>
            <Link href="https://www.facebook.com/mahfujur.rahman.949195"  className="social__data flex items-center gap-3">
              <div className="icon p-3 bg-[#18191A] text-primary rounded-xl">
                <Facebook />
              </div>
              <div className="data">
                <p className="text-xl font-medium">Facebook</p>
                <p className="text-text text-[.8rem]">Lorem ipsum</p>
              </div>
            </Link>
            <Link href="https://www.instagram.com/gorib_mahfuj/?hl=en"  className="social__data flex items-center gap-3">
              <div className="icon p-3 bg-[#18191A] text-primary rounded-xl">
                <Instagram />
              </div>
              <div className="data">
                <p className="text-xl font-medium">Instagram</p>
                <p className="text-text text-[.8rem]">Lorem ipsum</p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
