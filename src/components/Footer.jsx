import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "@remixicon/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  useEffect(() => {
    const splittext = new SplitType(".tt", { types: " chars" });
    gsap.fromTo(
      ".char",
      {
        y: "100%",
      },
      {
        scrollTrigger: {
          markers: true,
          trigger: "#te",
          start: "top 50%",
        },
        y: 0,
        stagger: 0.01,
      }
    );
  }, [])
  
  return (
    <div>
      <div className="w-full h-[10vh] flex items-center justify-center bg-black ">
        <img className="w-[10%]" src="https://play-lh.googleusercontent.com/YYfFGTYosocrE1eFwzHTxTXgv0TsSJEIjc-ywz78U-2g0j1idgoNINiCjDtllAeU3Rc" alt="" />
      </div>
      <div className="w-full h-full flex pt-[10vh] p-10 text-[#c4c4c4f0] bg-black">
        <div className="w-[50%]  h-[30vh]   ">
          <div className="">
            <p className=" text-3xl" >Relax. we've got you</p>
            <p className=" text-3xl">Take a Test Drive</p><br />
            <div className="flex">
              <input className="w-[20vw] h-12 bg-transparent text-white border-white border-[1px] rounded-full pl-5" type="text" name="" id="" placeholder="Enter Email Address" />
              <div className="">

              <div className="content__item">
              <button className=" text-xl h-12 w-32 rounded-full  button button--calypso  border-white">
                <span>Subscribe</span>
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] text-xl h-[30vh] flex gap-10 items-center justify-center   ">
          <div className="flex gap-10">
          <div className=" flex flex-col">
            <p>Pre-Owned</p>
            <p>Find A Dealer</p>
            <p>Carrers</p>
            <p>Site Map</p>
          </div>
          <div className="flex flex-col">
            <p>Legal</p>
            <p>Contact</p>
            <p>Language</p>
            <p>Complaints</p>
          </div>
          </div>
          <div className=" flex gap-5 justify-between text-[#a3a3a38f]  ">
            <div className="link link--helike hover:text-white">
              <span>
                <RiInstagramFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike hover:text-white">
              <span>
                <RiYoutubeFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike hover:text-white">
              <span>
                <RiTwitterFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
            <div className="link link--helike hover:text-white">
              <span>
                <RiFacebookBoxFill
                  size={35} // set custom `width` and `height`
                  className="my-icon  " // add custom class name
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="te" className="w-full flex items-center justify-center text-[15vw] border-t-2 border-white text-[white] bg-black ">
        <p className="tt">Rolls-Royce</p>
      </div>
    </div>
  );
}

export default Footer;
