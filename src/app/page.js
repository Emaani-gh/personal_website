"use client";

import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

import Image from "next/image";
import Seidu from "/public/seidu.png";
import websiteIcon from "/public/web-icon.png";
import webApp from "/public/web-App.png";
import blog from "/public/blog.png";
import noteApp from "/public/noteApp.png";
import weatherApp from "/public/weatherApp.png";
import web1 from "/public/web1.png";
import ecommerceApp from "/public/ecommerceApp.png";

export default function Home() {
  const [openMenu, setOpenmenu] = useState(false);

  const toggleMenu = () => {
    setOpenmenu((prev) => !prev);
  };
  return (
    <main className="px-6 md:container md:mx-auto font-poppins ">
      <nav className=" flex justify-between items-center py-6 relative">
        {/* ---------LOGO----------------- */}
        <div className="logo">
          <h2 className=" font-prism font-bold text-2xl cursor-pointer">
            SEIDU
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <BsFillMoonStarsFill className=" cursor-pointer text-lg" />

          {/* ==================================MOBILE MENUS======================================= */}
          <ul
            className={`menus flex flex-col items-center w-full gap-6 absolute 
            left-0 top-20 md:hidden ${openMenu ? "openMobile" : ""}`}
          >
            <li>
              <a className="text-black text-xl" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-black text-xl" href="#">
                Projects
              </a>
            </li>

            <li>
              <a className="text-black text-xl" href="#">
                Blogs
              </a>
            </li>
            <li>
              <a
                className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
          {/* ==================================DESK MENUS======================================= */}
          <ul
            className={`hidden md:flex gap-4  ${openMenu ? "openMobile" : ""}`}
          >
            <li>
              <a className="text-black text-xl" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-black text-xl" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="text-black text-xl" href="#">
                Blogs
              </a>
            </li>

            <li>
              <a
                className="text-xl bg-cyan-500 px-4 py-2 rounded-md text-white"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
          {/* ==================================HAMBURGER======================================= */}
          <div
            className={`hamburger w-8 md:hidden cursor-pointer ${
              openMenu ? "showMobile" : ""
            }`}
            onClick={toggleMenu}
          >
            <div className="line-1 w-full h-[3px] bg-black "></div>
            <div className="line-2 w-full h-[3px] bg-black my-1"></div>
            <div className="line-3 w-full h-[3px] bg-black "></div>
          </div>
        </div>
      </nav>
      {/* ==================================END OF NAV=======================================-=============================================================== */}

      {/* ==================================HERO SECTION======================================= */}

      <section id="hero" className=" h-[calc(100vh-80px)] flex py-20">
        <div className="md:flex w-full justify-around items-center gap-4 mx-auto px-4 md:mx-0 md:shadow-md rounded-lg">
          <div className="flex flex-col items-center md:items-start md:w-1/2 ">
            <h2 className="text-teal-600 text-4xl font-bold py-2 text-center md:text-left">
              Seidu Abdul Salam
            </h2>
            <h4 className=" py-2 text-gray-500 font-semibold text-xl">
              Web Developer
            </h4>
            <p className="max-w-lg text-center md:text-left text-gray-500 text-lg py-4 font-medium">
              Full Stack developer with passion for creating new things. I love
              to learn new skills and technology and also enjoy football.
            </p>
            <div className="social-icons flex justify-center gap-10 py-5 text-4xl text-gray-500">
              <a href="#">
                <AiFillLinkedin className=" cursor-pointer" />
              </a>
              <a href="#">
                <AiFillGithub className=" cursor-pointer" />
              </a>
              <a href="#">
                <AiFillInstagram className=" cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="relative flex w-80 h-80  rounded-full bg-gradient-to-b from-teal-500 mt-16 overflow-hidden mx-auto md:mx-0 md:mt-0 ">
            <Image src={Seidu} layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      {/* =========================SECTION SERVICES========================= */}
      <section id="service" className="min-h-screen py-20 flex items-cente">
        <div>
          <h2 className="py-8 mb-6 text-2xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500  ">
            What I Do
          </h2>
          <div className="cards lg:flex gap-10">
            <div className=" flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 ">
              <Image src={websiteIcon} className="py-6" />
              <h3 className="text-2xl text-gray-600 font-medium py-4 text-center">
                Frontend Development
              </h3>
              <p className="text-gray-600 text-lg font-medium py-4 text-center">
                I build responsive and interactive frontend Websites and Apps
                using modern technologies
              </p>
              <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                Skills & Technologies
              </h4>
              <ul className="text-center">
                <li className=" text-gray-700 font-medium py-1">HTML</li>
                <li className=" text-gray-700 font-medium py-1">
                  CSS, Tailwind, Bootstrap
                </li>
                <li className=" text-gray-700 font-medium py-1">JavaScript</li>
                <li className=" text-gray-700 font-medium py-1">React</li>
              </ul>
            </div>

            <div className=" flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 bg-white">
              <Image src={websiteIcon} className="py-6" />
              <h3 className="text-2xl text-gray-600 font-medium py-4 text-center">
                Design
              </h3>
              <p className="text-gray-600 text-lg font-medium py-4 text-center">
                I build responsive and interactive Designs
              </p>
              <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                Skills & Technologies
              </h4>
              <ul className="text-center">
                <li className=" text-gray-700 font-medium py-1">Figma</li>
                <li className=" text-gray-700 font-medium py-1">
                  Adobe Illustrator
                </li>
              </ul>
            </div>

            <div className=" flex-1 flex flex-col items-center shadow-md p-8 rounded-lg mb-16 bg-white">
              <Image src={webApp} className="py-6" />
              <h3 className="text-2xl text-gray-600 font-medium py-4 text-center">
                Backend Development
              </h3>
              <p className="text-gray-600 text-lg font-medium py-4 text-center">
                I build optimized backend applications using modern technologies
              </p>
              <h4 className="text-lg text-teal-500 font-bold py-2 text-center">
                Skills & Technologies
              </h4>
              <ul className="text-center">
                <li className=" text-gray-700 font-medium py-1">
                  Nodejs,Express,Nest js
                </li>
                <li className=" text-gray-700 font-medium py-1">Amazon S3</li>
                <li className=" text-gray-700 font-medium py-1">
                  MySQL,MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------PROJECTS SECTION============================================================================*/}
      <section id="portfolio" className="min-h-screen py-20 ">
        <div>
          <h2 className="py-8 mb-6 text-2xl text-gray-600 font-medium text-center underline underline-offset-8 decoration-teal-500  ">
            Projects
          </h2>
        </div>
      </section>
    </main>
  );
}
