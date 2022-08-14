import React from "react";
import "./DetailModal.css";
import "swiper/css/pagination";
import SwiperCarousal from "./SwiperCarousal";

import "swiper/css";
import DetailedText from "./DetailText";
import RefreshBtn from "./RefreshBtn";
import PageWrapper from "./PageWrapper";

export default function DetailModal(props) {
  return (
    <PageWrapper>
      {/*header*/}
      <div className="p-2">
        {/*image and content*/}
        <SwiperCarousal />
        <DetailedText meal={props.meal}/>
      </div>
      {/*footer*/}
      <RefreshBtn handleClose={props.handleClose} />
    </PageWrapper>
  );
}
