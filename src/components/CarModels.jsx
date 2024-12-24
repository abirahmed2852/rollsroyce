import React, { useEffect } from "react";
import Nav from "./Nav";
import StickyCursor from "../Cursor/StickyCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Pagetransition from "../PageTransition/Pagetransition";
gsap.registerPlugin(ScrollTrigger);
export default function CarModels() {
  const stickyelement = React.useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#parent",
        start: "top top",
        end:"+=" + (window.innerHeight *5),
        pin: true,
        // markers: true,
        scrub: 4,
      },
    });
    tl.to("#slide2", { y: "-100%" }, "hello");
    tl.fromTo(
      "#slide2 img",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello"
    );
    tl.fromTo(
      "#slide2 p",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello"
    );
    tl.to("#slide3", { y: "-100%" }, "hello1");
    tl.fromTo(
      "#slide3 img",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello1"
    );
    tl.fromTo(
      "#slide3 p",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello1"
    );
    tl.to("#slide4", { y: "-100%" }, "hello2");
    tl.fromTo(
      "#slide4 img",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello2"
    );
    tl.fromTo(
      "#slide4 p",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello2"
    );
    tl.to("#slide5", { y: "-100%" }, "hello3");
    tl.fromTo(
      "#slide5 img",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello3"
    );
    tl.fromTo(
      "#slide5 p",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello3"
    );
    tl.to("#slide6", { y: "-100%" }, "hello4");
    tl.fromTo(
      "#slide6 img",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello4"
    );
    tl.fromTo(
      "#slide6 p",
      {
        y: -730,
      },
      {
        y: 0,
      },
      "hello4"
    );
  }, []);

  return (
    <div>
      <div id="parent" className="w-full cursor-default h-[100vh]  relative">
        <div
          id="slide1"
          className="w-full h-full  overflow-hidden z-[1] top-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0000003b] absolute"></div>
          <p className="absolute text-[12vw] text-white max-[600px]:text-[20vw]">Ghost</p>
          <img
            className="w-full h-full object-cover"
            src="https://ik.imagekit.io/sunnykurmi/images/model1.webp?updatedAt=1720062346173"
            alt=""
          />
        </div>

        <div
          id="slide2"
          className="w-full h-full overflow-hidden z-[2]  absolute top-100% flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#0000003b] absolute"></div>
          <p className="absolute z-[2] text-[12vw] text-white max-[600px]:text-[20vw] ">Spectre</p>
          <img
            className="w-full h-full object-cover"
            src="https://ik.imagekit.io/sunnykurmi/images/model2.webp?updatedAt=1720062346716"
            alt=""
          />
        </div>

        <div id='slide3' className="w-full h-full overflow-hidden z-[3] absolute top-100% flex items-center justify-center">
                <div className="w-full h-full bg-[#0000003b] absolute"></div>
                <p className='absolute  z-[3]  text-[12vw] text-white max-[600px]:text-[20vw] '>Cullinan</p>
                <img className='w-full h-full object-cover'
            src="https://ik.imagekit.io/sunnykurmi/images/model3.webp?updatedAt=1720062346156"
            alt="" />
            </div>

            <div id='slide4' className="w-full h-full overflow-hidden z-[4] absolute  top-100% flex items-center justify-center">
                <div className="w-full h-full bg-[#0000003b] absolute"></div>
                <p className='absolute  z-[4]  text-[12vw] text-white max-[600px]:text-[20vw] '>Phantom</p>
                <img className='w-full h-full object-cover translate-y-[-10vh] scale-x-[-1] max-[600px]:hidden ' src="https://ik.imagekit.io/sunnykurmi/images/model4.jpg?updatedAt=1720062347136" alt="" />
                <img className='w-full h-full object-cover translate-y-[-10vh] scale-x-[-1] min-[600px]:hidden  ' src="https://ik.imagekit.io/sunnykurmi/images/model8.jpg?updatedAt=1720153391474" alt="" />
            </div>
            <div id='slide5' className="w-full h-full overflow-hidden z-[5] absolute top-100% flex items-center justify-center">
                <div className="w-full h-full bg-[#0000003b] absolute"></div>
                <p className='absolute  z-[5]  text-[12vw] text-white max-[600px]:text-[20vw] '>Boat Tail</p>
                <img className='w-full h-full object-cover scale-x-[-1] max-[600px]:hidden' src="https://ik.imagekit.io/sunnykurmi/images/model5.jpg?updatedAt=1720062355147" alt="" />
                <img className='w-full h-full object-cover  min-[600px]:hidden ' src="https://ik.imagekit.io/sunnykurmi/images/model10.jpg?updatedAt=1720153387590" alt="" />
                
            </div>

             <div id='slide6' className="w-full h-full overflow-hidden z-[6] absolute top-100% flex items-center justify-center">
                <div className="w-full h-full bg-[#0000003b] absolute"></div>
                <p className='absolute  z-[6]  text-[12vw] text-white max-[600px]:text-[20vw] '>Wraith</p>
                <img className='w-full h-full object-cover scale-x-[-1] max-[600px]:hidden' src="https://ik.imagekit.io/sunnykurmi/images/,odel6.jpg?updatedAt=1720062334352" alt="" />
                <img className='w-full h-full object-cover  min-[600px]:hidden ' src="https://ik.imagekit.io/sunnykurmi/images/model9.jpg?updatedAt=1720153386836" alt="" />
            </div>
      </div>
    </div>

  );
}
