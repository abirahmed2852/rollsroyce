import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import gsap from "gsap";

export default function Parallel() {
  const container = useRef(null);
  const imagesRef = useRef([]); 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(
    mouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-2, 2]
  );
  const rotateY = useTransform(
    mouseX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    [2, -2]
  );

  const pictures = [
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home3.jpg?updatedAt=1720062343332",
      scale: scale4,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home1.jpg?updatedAt=1720062334706",
      scale: scale5,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home5.jpg?updatedAt=1720062335898",
      scale: scale6,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home2.jpg?updatedAt=1720062332508",
      scale: scale5,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home4.jpg?updatedAt=1720062332188",
      scale: scale6,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home6.jpg?updatedAt=1720062336255",
      scale: scale8,
    },
    {
      src: "https://ik.imagekit.io/sunnykurmi/images/home7.jpg?updatedAt=1720062335849",
      scale: scale9,
    },
  ];
  useEffect(() => {
    // Step 2 & 3: Animate images from opacity 0 to 1
    gsap.fromTo(imagesRef.current, { opacity: 0 }, { opacity: 1, duration: 1,delay:3, stagger: 0.2 });
  }, []);


  return (
    <div ref={container} className="containerr">
      <p className="absolute text-[19vw] whitespace-nowrap top-[82%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-950  max-[600px]:top-[95%] l ">
        PHANTOM
      </p>
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{
              scale,
              rotateX,
              rotateY,
              transformPerspective: 1000, // Adjust for more depth
            }}
            className="el"
          >
            <div className="imageContainer">
              <img 
               ref={(el) => (imagesRef.current[index] = el)} // Assign ref to each image
                src={src} alt="image" placeholder="blur" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
