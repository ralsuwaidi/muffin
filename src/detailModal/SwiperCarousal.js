import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export default function SwiperCarousal(){
    return (
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
        <SwiperSlide>
          <img
            className="DetailModal-img rounded-xl"
            src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    )
  }