import React, { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../Cursor/Magnetic";
import Sidemenu from "./Sidemenu";

const Nav = React.forwardRef(function nav(props, ref) {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
  
    <div>
      <motion.div
        initial={{ y: -100, opacity: 0}}
        animate={{ y:0,  opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="w-full flex  items-center  bg-white justify-between z-[999] pl-8  h-20 "
      >
        <img
          className="w-44"
          src="https://ik.imagekit.io/sunnykurmi/images/rolls-royce-logo-black-and-white-1.png?updatedAt=1720062729574"
          alt=""
        />
        <div className=" h-[100%] w-32 overflow-hidden    ">
          <Magnetic>
            <div onClick={() => {setIsActive(!isActive)}} className=  {`${"burger"} ${isActive ? "burgerActive" : ""}`}>
              <div ref={ref} className="bounds"></div>
            </div>
          </Magnetic>
        </div>
      </motion.div>
      <AnimatePresence >
      {isActive && <Sidemenu/>}
      </AnimatePresence>
    </div>
  </>
  );
});

export default Nav;
