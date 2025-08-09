"use client";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Brackets,
  House,
  Brain,
  GraduationCap,
} from "lucide-react";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar";
import { useRouter } from "next/navigation";

// Menu items.

export function AppSidebar() {
  const router = useRouter();
  const homeSectionPush = () => {
    router.push("/");
  };

  const languages = [
    {
      label: "React",
      icon: <FaReact />,
    },
    {
      label: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      label: "Git",
      icon: <FaGitAlt />,
    },
    {
      label: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      label: "Express",
      icon: <SiExpress />,
    },
    {
      label: "MongoDb",
      icon: <DiMongodb />,
    },
    {
      label: "C",
      icon: <TbBrandCpp />,
    },
    {
      label: "Python",
      icon: <FaPython />,
    },
  ];
  return (
    <Sidebar className={``}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel
            className={`  font-medium tracking-wide text-[1.4rem] mb-5 text-primary border-b border-thirdcolor w-full px-3`}
          >
            console.mahfuj {`( ? )`}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={`px-2`}>
              <div
                onClick={homeSectionPush}
                className="group  resources_-article cursor-pointer  flex gap-3 items-center border-b pb-4 border-thirdcolor "
              >
                <div className="icon p-2 bg-[#18191A] text-text rounded-md transition-all duration-300  group-hover:text-white">
                  <Brackets size={20} />
                </div>
                <div className="data translate-y-0.5">
                  <p className="text-white text-[.9rem] font-medium">Core</p>
                  <p className="text-text text-[.8rem] -translate-y-0.5">
                    console.mahfuj.com
                  </p>
                </div>
              </div>
              <div className="Home-sidebar mt-3">
                <div className="group  resources_-article cursor-pointer  flex gap-3 items-center ">
                  <div className="icon p-2 bg-[#18191A] text-text rounded-md transition-all duration-300  group-hover:text-white">
                    <House size={20} />
                  </div>
                  <div className="data">
                    <p className="text-white text-[.9rem] font-medium">Home</p>
                  </div>
                </div>{" "}
                <div className="group  resources_-article cursor-pointer  flex gap-3 items-center border-b pb-4 border-thirdcolor ">
                  <div className="icon p-2 bg-[#18191A] text-text rounded-md transition-all duration-300  group-hover:text-white">
                    <Brain size={20} />
                  </div>
                  <div className="data">
                    <p className="text-white text-[.9rem] font-medium">
                      Quick Learn
                    </p>
                  </div>
                </div>
              </div>
              <div className="tutorial__sidebar mt-2">
                <div className="group  resources_-article cursor-pointer  flex gap-3 items-center ">
                  <div className="icon p-2 bg-[#18191A] text-text rounded-md transition-all duration-300  group-hover:text-white">
                    <GraduationCap size={20} />
                  </div>
                  <div className="data">
                    <p className="text-white text-[1rem] font-medium ">
                      Tutorials
                    </p>
                  </div>
                </div>
                <div className="languages overflow-hidden">
                  {
                    languages.map((language, index) => (
                      <div key={index} className="group  resources_-article cursor-pointer  flex gap-2 items-center translate-x-3 ">
                  <div key={index} className="icon p-2 bg-[#18191A] text-text rounded-md transition-all duration-300  group-hover:text-white text-[1.3rem]">
                   {language.icon}
                  </div>
                  <div className="data">
                    <p className="text-white text-[.9rem] font-medium">
                      {language.label}
                    </p>
                  </div>
                </div>
                    ))
                  }
                </div>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
