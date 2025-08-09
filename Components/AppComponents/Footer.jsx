import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-19 text-white border-t border-fourthcolor flex flex-col justify-center gap-4 p-6">
      <div className="w-full flex justify-between items-center mb-5 lg:w-3/4 mx-auto">
        <Image
          src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/518613508_667384206356718_7737047525869500714_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFPwwndojpUUCOWO4y8Ec2i0MJ3M7_owjrQwnczv-jCOsNSHzv1VSKPhQOD_tr38HfVmjEmU00AGtRF6V9Iq9P6&_nc_ohc=C8gLnb214bgQ7kNvwEgmnEa&_nc_oc=AdnCDp-lpksOU8gbAafhe_kYzYYb2pbkL0ZPvtzHemHEYDiczBUTlBEDLkjxuArBMVg&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=awJQ0COd1mh8whc3unJZVQ&oh=00_AfT5LoVwO5Le-L_1xwkbNi8GjgicDAosmBOsIg8YOyKUOA&oe=688D8B44"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="newsletter flex justify-center items-center gap-4 text-text font-medium ">
          THE DEVELOPER NEWSLETTER{" "}
          <button className="px-3 py-1.5 bg-primary rounded-md font-medium cursor-pointer text-white">
            Subscribe
          </button>
        </span>
      </div>
      <div className="w-full mx-auto grid grid-cols-2 justify-between gap-6 px-1 md:grid md:grid-cols-3 lg:w-3/4">
        <div className="flex flex-col gap-3">
          <p className="text-gray-300 font-medium">TUTORIALS</p>
          <ul className="flex flex-col gap-2">
            {[
              "React",
              "Next.JS",
              "Devops",
              "Cpp",
              "Git",
              "Monepro",
              "Advance JS",
            ].map((item, i) => (
              <li className="text-text font-medium" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 px-6">
          <p className="text-gray-300 font-medium">QUICK LEARN</p>
          <ul className="flex flex-col gap-2">
            {["Html", "CSS", "TAILWIND", "JAVASCRIPT"].map((item, i) => (
              <li className="text-text font-medium" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-300 font-medium">SUPPORT</p>
          <ul className="flex flex-col gap-2">
            {["Developer Docs", "Community", "Discord"].map((item, i) => (
              <li className="text-text font-medium" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-6">
        <ul className="flex justify-center items-center w-full gap-7 text-text font-medium">
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms</Link>
          </li>
          <li>
            <Link href="/">DMCA</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <p className="font-medium text-text">
          devmahfuj.com &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
