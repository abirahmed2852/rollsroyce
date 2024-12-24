import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";


function Loader() {
  return (
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: "-110%",opacity:0 }}
    transition={{ duration: 0.7, delay: 3 }}

     className="w-full h-[100vh] fixed top-0 z-[999] bg-black">
      <div className="w-full flex items-center justify-center bg-black">
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3.1 }}
          className="w-52"
          src="https://static.vecteezy.com/system/resources/previews/020/500/405/original/rolls-royce-brand-logo-car-symbol-with-name-white-design-british-automobile-illustration-with-black-background-free-vector.jpg"
          alt=""
        />
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "90%" }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="w-[90%] h-[.1vh] absolute left-20 max-[600px]:left-5 top-[36vh] max-[600px]:top-[37.5vh] z-[999] bg-white max-[600px]:hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-[100%] h-[.1vh]  bg-black absolute z-[9999] max-[600px]:hidden "
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 3.1 }}
        className="w-full h-[60vh] flex items-center justify-center bg-black  "
      >
        <div className="w-[25vw] max-[600px]:w-[100vw] h-[35vh] max-[600px]:h-[20vh] relative overflow-hidden   ">
          <div className="w-[100%] h-[100%] bg-[#0000005b] absolute left-0 top-0 z-[99] "></div>
          <motion.div className="w-full h-full overflow-hidden top-[0%] absolute">
            <img
              className="w-[100%] object-cover h-[100%] absolute "
              src="https://ik.imagekit.io/sunnykurmi/images/loader1.jpg?updatedAt=1720062337209"
              alt=""
            />
          </motion.div>
          <motion.div
            className="w-full h-full overflow-hidden z-10 absolute"
            initial={{ top: 250 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.img
              initial={{ top: -250, scale: 1.2 }}
              animate={{ top: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[100%] object-cover h-[100%] absolute"
              src="https://ik.imagekit.io/sunnykurmi/images/loader2.jpg?updatedAt=1720062337485"
              alt=""
            />
          </motion.div>
          <motion.div
            className="w-full h-full overflow-hidden  z-20 absolute"
            initial={{ top: 250 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.img
              initial={{ top: -250, scale: 1.2 }}
              animate={{ top: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-[100%] object-cover h-[100%] absolute "
              src="https://ik.imagekit.io/sunnykurmi/images/loader3.jpg?updatedAt=1720062348468"
              alt=""
            />
          </motion.div>
          <motion.div
            className="w-full h-full overflow-hidden  z-30 absolute"
            initial={{ top: 250 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.img
              initial={{ top: -250, scale: 1.2 }}
              animate={{ top: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="w-[100%] object-cover h-[100%] absolute "
              src="https://ik.imagekit.io/sunnykurmi/images/loader4.jpg?updatedAt=1720062345786"
              alt=""
            />
          </motion.div>
          <motion.div
            className="w-full h-full overflow-hidden  z-40 absolute"
            initial={{ top: 250 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <motion.img
              initial={{ top: -250, scale: 1.2 }}
              animate={{ top: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="w-[100%] object-cover h-[100%] absolute "
              src="https://ik.imagekit.io/sunnykurmi/images/loader5.jpg?updatedAt=1720062346127"
              alt=""
            />
          </motion.div>
          <motion.div
            className="w-full h-full overflow-hidden  z-50 absolute"
            initial={{ top: 250 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <motion.img
              initial={{ top: -250, scale: 1.2 }}
              animate={{ top: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="w-[100%] object-cover h-[100%] absolute "
              src="https://ik.imagekit.io/sunnykurmi/images/loader6.jpg?updatedAt=1720062346406"
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "90%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-[90%] h-[.1vh] absolute left-20 max-[600px]:left-5 bottom-[30vh] max-[600px]:bottom-[41vh] z-[999] bg-white max-[600px]:hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="w-[100%] h-[.1vh]  bg-black absolute z-[9999] max-[600px]:hidden "
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 3.1 }}
        className="w-[100%] text-[#a7a7a7be] text-xl max-[600px]:text-3xl h-5   flex gap-1 items-center justify-center "
      >
        <p>Loading </p>
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2%] max-[600px]:w-[10%]"
          src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/21-style-670-alloy-wheels/component-assets/accessories-product-wheels-670-part-polished.jpg"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}

export default Loader;
