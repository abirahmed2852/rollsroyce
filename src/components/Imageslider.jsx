import React, { useState } from "react";
import Hovermodel from "./Hovermodel";
import { projects } from "./Projects";

export default function Imageslider() {
  const [activeProjects, setactiveProjects] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setactiveProjects(null);
      }}
    >
     
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            onMouseOver={() => {
              setactiveProjects(i);
            }}
            className=" h-[15vh] flex w-full px-10 items-center   text-6xl  max-[600px]:h-[5vh] max-[600px]:text-3xl max-[600px]:px-1  "
          >
            <div className="z-[99] h-full w-full p-t-[2vh]">
              <div className="w-full h-[2px] bg-[#00000046]"></div>
              <div className="w-full h-full   flex items-center justify-start">
              <p className=" text-[black] slidetext whitespace-nowrap" >
                {project.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <Hovermodel activeProjects={activeProjects} />
    </div>
  );
}
