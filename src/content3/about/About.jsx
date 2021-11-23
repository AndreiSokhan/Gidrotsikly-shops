import s from "./About.module.scss";
import AboutTop from "./aboutTop/AboutTop";



function About(props) {

   const data1 ={
      link: "About-product"
   }
   const data2 ={
      link: "Specifications"
   }
   const data3 ={
      link: "Reviews"
   }
   const data4 ={
      link: "Pickup"
   }
   const data5 ={
      link: "Delivery"
   }
   const data6 ={
      link: "Service"
   }
   const data7 ={
      link: "Guarantee"
   }


   return (
      <div className={s.about}>
         <AboutTop data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7}/>
      </div>
   );
}

export default About;