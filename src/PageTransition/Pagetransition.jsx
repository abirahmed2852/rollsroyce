// Pagetransition.js

import React, { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import "./Pagetransition.scss";
import { useLocation } from "react-router-dom";

const usePreviousLocation = () => {
  const location = useLocation();
  const prevLocationRef = useRef();

  useEffect(() => {
    prevLocationRef.current = location.pathname;
  }, [location.pathname]);

  return prevLocationRef.current;
};

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/models": "Models",
};
const Pagetransition = ({ children }) => {
  const { pathname } = useLocation();

  const previousPathname = usePreviousLocation();

  const upcomingPage = routes[location.pathname] || "Unknown";

  useEffect(() => {
    console.log(pathname); // Log pathname only when component mounts
  }, []); // Empty dependency array ensures it's only executed once when component mounts

  const [dimensions, setdimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resize = () => {
      setdimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const text = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
      transitionEnd: {
        top: "47.5%",
      },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className=" w-full h-[100vh] curve">
      <div className="route ">
        <motion.p {...anim(text)} className="text-6xl text-white">
          {upcomingPage}
        </motion.p>
      </div>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

const SVG = ({ width, height }) => {
  const initialPath = `

        M0 300 

        Q${width / 2} 0 ${width} 300

        L${width} ${height + 300}

        Q${width / 2} ${height + 600} 0 ${height + 300}

        L0 0

    `;
  const targetPath = `

        M0 300 

        Q${width / 2} 0 ${width} 300

        L${width} ${height}

        Q${width / 2} ${height} 0 ${height}

        L0 0

    `;
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};

export default Pagetransition;
