import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function CarSwiper() {
  return (
    <>
      <div className="w-full  flex flex-col pt-[11vh] items-center justify-center">
        <div className="   w-full h-[73vh] flex font-thin   items-center pt-[5vh] justify-center relative ">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper bg-white w-[100%] relative h-[100vh] flex flex-col items-center justify-center"
          >
            <SwiperSlide>
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://images.unsplash.com/photo-1607892378625-68c08a8e038d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="w-full flex items-center justify-center">
                <div className="w-[75%] h-[22vh] bg-[#ffffff9a] shadow-2xl rounded-2xl absolute bottom-5  z-10 flex ">
                  <div className="h-full w-[20%] flex items-center  justify-center flex-col">
                    <p className="font-bold text-2xl">Rolls-Royce</p>
                    <p className="font-bold text-4xl text-[#0000007e] ">
                      GHOST
                    </p>
                  </div>
                  <div className="h-full w-[40%] flex items-center justify-evenly  ">
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[18%]"
                          src="https://elginflameproofing.co.za/wp-content/uploads/2018/11/cropped-Diesel-Engine-icon.png"
                          alt=""
                        />{" "}
                        Engine
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">
                        6.7Ltr V12
                      </p>
                    </div>
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[18%] shrink-0 "
                          src="https://static.thenounproject.com/png/32465-200.png"
                          alt=""
                        />{" "}
                        0-100kmph
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">4.9s</p>
                    </div>
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[25%] scale-[.8] shrink-0 "
                          src="https://t3.ftcdn.net/jpg/03/19/21/68/360_F_319216851_f56pdjd7DEzZ8DqWaG3toIsydNy6VCl1.jpg"
                          alt=""
                        />{" "}
                        Torque
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">820Nm</p>
                    </div>
                  </div>
                  <div className="w-[37%] h-full flex items-center justify-evenly">
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        className=" absolute w-[40%]"
                        src="../../public/icons/video.png"
                        alt=""
                      />
                      <video src="../../public/videos/rolls royce1.mp4"></video>
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        src="https://imageio.forbes.com/specials-images/imageserve/664154d0c8b246228833e7da/Rolls-Royce-Ghost-Black-Badge-Ekleipsis/960x0.jpg?format=jpg&width=1440"
                        alt=""
                      />
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        src="https://imageio.forbes.com/specials-images/imageserve/664155156fc13cf3fddde6c2/Rolls-Royce-Ghost-Black-Badge-Ekleipsis/960x0.jpg?format=jpg&width=1440"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[100%] h-[100%] object-cover"
                src="https://images.pexels.com/photos/18509925/pexels-photo-18509925/free-photo-of-white-rolls-royce-dawn-convertible-in-the-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="w-full flex items-center justify-center">
                <div className="w-[75%] h-[22vh] bg-[#ffffff9a] shadow-2xl rounded-2xl absolute bottom-5  z-10 flex ">
                  <div className="h-full w-[20%] flex items-center  justify-center flex-col">
                    <p className="font-bold text-2xl">Rolls-Royce</p>
                    <p className="font-bold text-4xl text-[#0000007e] ">
                      GHOST
                    </p>
                  </div>
                  <div className="h-full w-[40%] flex items-center justify-evenly  ">
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[18%]"
                          src="https://elginflameproofing.co.za/wp-content/uploads/2018/11/cropped-Diesel-Engine-icon.png"
                          alt=""
                        />{" "}
                        Engine
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">
                        6.7Ltr V12
                      </p>
                    </div>
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[18%] shrink-0 "
                          src="https://static.thenounproject.com/png/32465-200.png"
                          alt=""
                        />{" "}
                        0-100kmph
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">4.9s</p>
                    </div>
                    <div className="w-[30%]">
                      <p className="font-semibold text-base  flex gap-2">
                        {" "}
                        <img
                          className="w-[25%] scale-[.8] shrink-0 "
                          src="https://t3.ftcdn.net/jpg/03/19/21/68/360_F_319216851_f56pdjd7DEzZ8DqWaG3toIsydNy6VCl1.jpg"
                          alt=""
                        />{" "}
                        Torque
                      </p>
                      <p className="font-bold text-xl text-[#000000] ">820Nm</p>
                    </div>
                  </div>
                  <div className="w-[37%] h-full flex items-center justify-evenly">
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        className=" absolute w-[40%]"
                        src="../../public/icons/video.png"
                        alt=""
                      />
                      <video src="../../public/videos/rolls royce1.mp4"></video>
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        src="https://imageio.forbes.com/specials-images/imageserve/664154d0c8b246228833e7da/Rolls-Royce-Ghost-Black-Badge-Ekleipsis/960x0.jpg?format=jpg&width=1440"
                        alt=""
                      />
                    </div>
                    <div className="w-[30%] h-full flex items-center justify-center relative ">
                      <img
                        src="https://imageio.forbes.com/specials-images/imageserve/664155156fc13cf3fddde6c2/Rolls-Royce-Ghost-Black-Badge-Ekleipsis/960x0.jpg?format=jpg&width=1440"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
