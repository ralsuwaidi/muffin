import React from "react";
import "./DetailModal.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { BeakerIcon } from "@heroicons/react/solid";

// Import Swiper styles
import "swiper/css";

export default function DetailModal(props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto">
          {/*content*/}
          <div className="border-0 w-screen h-screen DetailModal-height shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="p-2">
              {/*image and content*/}

              <div className="mb-5">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  style={{
                    "--swiper-pagination-color": "white",
                    "--swiper-pagination-bullet-size": "5px",
                    "--swiper-pagination-bullet-vertical-gap": "500px",
                  }}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img
                      className="DetailModal-img rounded-xl"
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="DetailModal-img rounded-xl"
                      src="https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="py-4 px-8 DetailModal-text">
                <p className="text-gray-400">Dessert</p>
                <p className="text-xl font-semibold ">Pancake</p>
                <p className="text-gray-500 text-sm">
                  Additional text that describes what the food is and what makes
                  it so amazing, can be written manually or gathered as an api
                </p>
                <span class="bg-green-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                  <svg
                      aria-hidden="true"
                      class="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                 
                  vegan
                </span>
              </div>
            </div>
            {/*footer*/}
            <div className=" mx-auto  border-slate-200 rounded-b">
              <button
                className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
                onClick={props.handleClose}
              >
                Refresh (1/3)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
