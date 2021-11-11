
import React, { Component } from "react";
import Slider from "react-slick";


// это слайдер для sectionSale
//пока просто его подключил и никак не стилизовал и вообще ничего не делал
//пока не совсем понимаю как его можно переиспользовать, или стоит для остальных блоков нашего сайта создавать свое? буду спрашивать.


      export default class SaleSlider extends Component {
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
               <h2> Single Item</h2>
               <Slider {...settings}>
                  <div>
                     <h3>1</h3>
                  </div>
                  <div>
                     <h3>2</h3>
                  </div>
                  <div>
                     <h3>3</h3>
                  </div>
                  <div>
                     <h3>4</h3>
                  </div>
                  <div>
                     <h3>5</h3>
                  </div>
                  <div>
                     <h3>6</h3>
                  </div>
               </Slider>
               </div>
            );
         }
         }
//}

//export default SaleSlider;