
import React, { Component } from "react";
import Slider from "react-slick";
import slide from "./../../../../assets/image/sale/banner.png";


// это слайдер для sectionSale
//пока просто его подключил и никак не стилизовал и вообще ничего не делал
//пока не совсем понимаю как его можно переиспользовать, или стоит для остальных блоков нашего сайта создавать свое? буду спрашивать.


export default class SimpleSlider extends Component {
   render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <div>
         <Slider {...settings}>
         <div className="s.sliderItem">
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
      </div>
   );
   }
}
//}

//export default SaleSlider;