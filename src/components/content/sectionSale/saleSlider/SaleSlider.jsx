
import React, { Component } from "react";
import Slider from "react-slick";
import slide from "./../../../../assets/image/sale/banner.png";
import "./SaleSlider.scss"

// это Slick S для sectionSale

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
   <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
   />
   );
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
   <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
   />
   );
}
export default class SimpleSlider extends Component {
   render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <>
         <Slider {...settings}>
         <div>
            <img src={slide} alt="slide" />
         </div>
         <div>
            <img src={slide} alt="slide" />
         </div>
         <div>
            <img src={slide} alt="slide" />
         </div>
         <div>
            <img src={slide} alt="slide" />
         </div>
         <div>
            <img src={slide} alt="slide" />
         </div>
         <div>
            <img src={slide} alt="slide" />
         </div>
         </Slider>
      </>
   );
   }
}