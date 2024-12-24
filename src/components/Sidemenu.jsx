import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiHeartFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";

function Sidemenu() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Models",
      href: "/*",
    },
    {
      title: "About",
      href: "/*",
    },
    {
      title: "Contact",
      href: "/*",
    },
  ];

  return (
    <div className="w-[100%] fixed flex  top-20 right-0 z-[10000] h-[100vh] ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
        }}
        exit={{ opacity: 0 }}
        className="w-[70%] h-full bg-[#000000ba] max-[600px]:w-0"
      ></motion.div>

      <motion.div
        initial={{ transform: "translateX(125%)" }}
        animate={{
          transform: "translateX(0%)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        exit={{
          transform: "translateX(125%)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="w-[30%] h-full flex relative items-center justify-evenly text-black text-5xl bg-[white]   max-[600px]:w-full"
      >
        <svg className="w-[100px] h-[100vh] absolute top-0 left-[-99px] fill-white stroke-none">
          <motion.path
            variants={curve}
            initial="initial"
            animate="enter"
            exit="exit"
          ></motion.path>
        </svg>
        <div className="flex-col gap-10  pt-10 flex justify-top h-full">
          <div className="">
            <div className="text-xl link link--iocaste text-[white] ">
              Navigations
              <svg
                className="link__graphic link__graphic--slide"
                width="300%"
                height="100%"
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
              >
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </div>
          </div>
          {navItems.map((data, index) => {
            return (
              <a
                className="link link--iocaste"
                key={index}
                data={{ ...data, index }}
                href={data.href}
              >
                <p className="slidetext">{data.title}</p>

                <svg
                  className="link__graphic link__graphic--slide"
                  width="300%"
                  height="100%"
                  viewBox="0 0 1200 60"
                  preserveAspectRatio="none"
                >
                  <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                </svg>
              </a>
            );
          })}

          <div className="w-full flex justify-between  ">
            <div className="link link--helike">
              <span>
                <RiInstagramFill
                  size={25} // set custom `width` and `height`
                  className="my-icon" // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike">
              <span>
                <RiYoutubeFill
                  size={25} // set custom `width` and `height`
                  className="my-icon" // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike">
              <span>
                <RiTwitterFill
                  size={25} // set custom `width` and `height`
                  className="my-icon" // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike">
              <span>
                <RiFacebookBoxFill
                  size={25} // set custom `width` and `height`
                  className="my-icon" // add custom class name
                />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidemenu;
