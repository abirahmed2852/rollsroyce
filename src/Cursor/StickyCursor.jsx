/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  distance,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function StickyCursor({ stickyelement }) {
  const cursorRef = useRef();
  const [ishovered, setishovered] = useState(false);
  const cursorsize = ishovered ? 70 : 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothoptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothmouse = {
    x: useSpring(mouse.x, smoothoptions),
    y: useSpring(mouse.y, smoothoptions),
  };
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  };
  const managemousemove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyelement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (ishovered) {
      rotate(distance);
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(center.x - cursorsize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorsize / 2 + distance.x * 0.1);
    } else {
      mouse.x.set(clientX - cursorsize / 2);
      mouse.y.set(clientY - cursorsize / 2);
    }
  };

  const managemouseover = () => {
    setishovered(true);
  };
  const managemouseleave = () => {
    setishovered(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" }
    );
  };
  useEffect(() => {
    stickyelement.current.addEventListener("mouseenter", managemouseover);
    stickyelement.current.addEventListener("mouseleave", managemouseleave);
    window.addEventListener("mousemove", managemousemove);
    return () => {
      stickyelement.current.removeEventListener("mouseenter", managemouseover);
      stickyelement.current.removeEventListener("mouseleave", managemouseleave);
      window.removeEventListener("mousemove", managemousemove);
    };
  });
  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  return (
    <motion.div
      transformTemplate={template}
      ref={cursorRef}
      style={{
        left: smoothmouse.x,
        top: smoothmouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorsize, height: cursorsize }}
      className="fixed pointer-events-none bg-white h-3 w-3 z-[9999] mix-blend-difference rounded-full"
    ></motion.div>
  );
}
