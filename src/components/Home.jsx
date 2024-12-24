import React, { useEffect, useRef, useState } from "react";
import Pagetransition from "../PageTransition/Pagetransition";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StickyCursor from "../Cursor/StickyCursor";
import SplitType from "split-type";
import Nav from "./Nav";
import CarSwiper from "./CarSwiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Parallel from "./Parallel";
import { Canvas } from "@react-three/fiber";
import WaveImage from "./WaveImage";
import Hovermodel from "./Hovermodel";
import { projects } from "./Projects";
import Imageslider from "./Imageslider";
import WaveImage2 from "./WaveImage2";
import CarModels from "./CarModels";
import Headroom from "react-headroom";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiPauseFill,
  RiPlayFill,
  RiTwitterFill,
  RiVolumeMuteFill,
  RiVolumeUpFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const stickyelement = useRef(null);
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [videoloading, setVideoloading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("hasLoadedBefore", "false");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore") === "true";

    if (!hasLoadedBefore) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoadedBefore", "true");
      }, 3500);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    } else {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    // Apply mute state to video element
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]); // Depend on isMuted to re-apply when it changes

  const toggleMute = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current; // Reference to the video element

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Set isMuted to true if the video div is not in the viewport
        setIsMuted(!entry.isIntersecting);

        // Automatically pause or play the video based on visibility
        if (!entry.isIntersecting) {
          videoElement.pause();
          setIsPlaying(false); // Update isPlaying state to false when video is paused
        } else {
          videoElement.play();
          setIsPlaying(true); // Update isPlaying state to true when video starts playing
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup function to unobserve the video element when the component unmounts
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [setIsMuted, setIsPlaying]); // Add setIsPlaying to the dependency array if it's used elsewhere in the effect
  // Empty dependency array ensures this runs once on mount
  useEffect(() => {
    const splittext = new SplitType(".text", { types: " chars" });
    const splittext2 = new SplitType(".tt", { types: " chars" });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#videodiv",
        scrub: true,
        // markers: true,
      },
      width: "100%",
    });
    gsap.fromTo(
      splittext.chars,
      {
        y: "100%",
        scale: 1.2,
        opacity: 0,
      },
      {
        scrollTrigger: {
          // markers: true,
          trigger: "#textdiv",
          start: "top 50%",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.01,
      }
    );
    gsap.fromTo(
      ".wrapper",
      {
        y: 0,
      },
      {
        scrollTrigger: {
          // markers: true,
          trigger: "#textdiv",
          start: "20% 50%",
        },
        y: "-100%",
      }
    );
    gsap.fromTo(
      ".wrapper2",
      {
        y: 0,
      },
      {
        scrollTrigger: {
          // markers: true,
          trigger: "#textdiv",
          start: "80% 50%",
        },
        y: "-100%",
      }
    );

    gsap.fromTo(
      splittext2.chars,
      {
        y: "-90%",
      },
      {
        scrollTrigger: {
          // markers: true,
          trigger: "#ima",
          start: "100% 50%",
        },
        y: 0,
        stagger: 0.05,
        duration:.5
      }
    );

  }, []);

  return (

    <div className="bg-white  ">
      {/* {loading ? (
        <Loader />
      ) : (
      <Pagetransition> */}
      <Loader loading={loading}></Loader>
      <StickyCursor stickyelement={stickyelement} />
      <Headroom>
        <Nav ref={stickyelement} />
      </Headroom>
      <Parallel />
      <div
        id="videodiv"
        className="w-full h-[110vh] flex  relative  items-center justify-center max-[600px]:h-[50vh]"
      >
        {videoloading && (
          <div className="loaderparent text-2xl">
            <div className="loader"></div>
            Please wait Video is Rendering.....
          </div>
        )}
        <video
          id="video"
          ref={videoRef}
          loop
          onLoadedData={() => setVideoloading(false)}
          muted={isMuted}
          autoPlay
          className="h-[100%] object-cover origin-center  w-[40%]"
          src="https://ik.imagekit.io/sunnykurmi/images/Rolls-Royce%20Spectre.mp4?updatedAt=1720062645291"
        ></video>
        <button
          onClick={togglePlayPause}
          className="play-pause-button absolute w-16 h-16 flex items-center justify-center bg-white rounded-full bottom-20 right-28 max-[600px]:bottom-5"
        >
          {isPlaying ? (
            <RiPauseFill size={30} className="my-icon" />
          ) : (
            <RiPlayFill size={30} className="my-icon" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="mute-button absolute w-16 h-16 flex items-center justify-center bg-white rounded-full bottom-20 right-10 max-[600px]:bottom-5 "
        >
          {isMuted ? (
            <RiVolumeMuteFill
              size={30} // set custom `width` and `height`
              className="my-icon" // add custom class name
            />
          ) : (
            <RiVolumeUpFill
              size={30} // set custom `width` and `height`
              className="my-icon" // add custom class name
            />
          )}
        </button>
      </div>
      <div
        id="textdiv"
        className="w-[100%] p-10   z-[99] bg-white  flex justify-between max-[600px]:flex-col   "
      >
        <div className="w-[20%] relative overflow-hidden  max-[600px]:w-[100%] ">
          <div className="wrapper w-full h-[100%] z-[9] absolute bg-white "></div>
          <WaveImage></WaveImage>
        </div>
        <div className=" w-[78%] max-[600px]:w-[100%] ">
          <p className="text cursor-default w-full text-5xl text-pretty max-[600px]:text-3xl">
            Rolls-Royce embodies luxury, cutting-edge technology, and timeless
            elegance. The Spirit of Ecstasy symbolizes their pursuit of
            perfection. Rolls-Royce isn't just a car; it's a statement of
            unparalleled craftsmanship and power, setting the benchmark for
            luxury automobiles.
          </p>
          <br />
          <br />
          <div className="w-full flex   items-center justify-center">
            <div className="content__item">
              <button className=" h-12 w-36 rounded-full button button--calypso">
                <span>See More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="textdiv"
        className="w-[100%] p-10   z-[99] bg-white  flex justify-between  max-[600px]:flex-col   "
      >
        <div className="w-[100%] relative overflow-hidden min-[600px]:hidden  ">
          <div className="wrapper2 w-full h-[100%] absolute z-[99] bg-white "></div>
          <WaveImage2></WaveImage2>
        </div>
        <div className=" w-[78%] max-[600px]:w-[100%]">
          <p className="text cursor-default text-5xl text-wrap max-[600px]:text-3xl  ">
            When opened, the rear Picnic Tables gracefully reveal an inlay of
            orchids set into the sleek Piano Black veneer. A Bespoke One-of-One
            creation blending nature with sublime craft.Treadsplates depicting
            the ornamental plant are inviting additions for passengers stepping
            into the serene interior.
          </p>
          <br />
          <br />
          <div className="w-full flex   items-center justify-center">
            <div className="content__item">
              <button className=" h-12 w-36 rounded-full button button--calypso">
                <span>See More</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20%] relative overflow-hidden max-[600px]:hidden ">
          <div className="wrapper2 w-full h-[100%] absolute z-[99] bg-white "></div>
          <WaveImage2></WaveImage2>
        </div>
      </div>
      <CarModels />
      <div id="ima" className="w-full h-[110vh] max-[600px]:h-[37vh] ">

      <Imageslider />
      </div>
      <div 
      className='relative slidetext h-[100vh] max-[600px]:h-[68vh] '
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[100vh]  w-full max-[600px]:h-[68vh]'>
      <div>
      <div className="w-full h-[10vh]  flex  items-center justify-center bg-black ">
        <img className="w-[10%] max-[600px]:w-[15%]" src="https://play-lh.googleusercontent.com/YYfFGTYosocrE1eFwzHTxTXgv0TsSJEIjc-ywz78U-2g0j1idgoNINiCjDtllAeU3Rc" alt="" />
      </div>
      <div className="w-full h-full flex  p-10 text-[#c4c4c4f0] bg-black max-[600px]:flex-col">
        <div className="w-[50%]  h-[30vh] max-[600px]:w-full max-[600px]:h-fit   ">
          <div className="">
            <p className=" text-3xl" >Relax. we've got you</p>
            <p className=" text-3xl">Take a Test Drive</p><br />
            <div className="flex max-[600px]:w-full max-[600px]:items-center max-[600px]:justify-center">
              <input className="w-[20vw] max-[600px]:w-[60vw] h-12 bg-transparent text-white border-white border-[1px] rounded-full pl-5" type="text" name="" id="" placeholder="Enter Email Address" />
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
        <div className="w-[50%] text-xl h-[30vh] flex gap-10 items-center justify-center  max-[600px]:flex-col max-[600px]:w-full max-[600px]:h-fit max-[600px]:pt-10 ">
          <div className="flex gap-10 max-[600px]:hidden">
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
          <div className=" flex gap-5 justify-between text-[#a3a3a38f] max-[600px]:w-full max-[600px]:items-center max-[600px]:justify-center  ">
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
      <div id="te" className="w-full overflow-hidden flex items-center justify-center text-[15vw] border-t-2 border-white text-[white] bg-black ">
        <p className="tt">Rolls-Royce</p>
      </div>
    </div>
      </div>
    </div>
      {/* </Pagetransition>)}  */}
    </div>
  );
}

export default Home;
