import s from "./Content2.module.scss";
import BreadCrumbs from "../components/common/bread-crumbs/BreadCrumbs";
import Sorting from "./sorting/Sorting";
import Main from "./main/Main";



//import img1 from "./../../assets/image/categories-img/image-1.png";
//import img2 from "./../../assets/image/categories-img/image-2.png";
//import img3 from "./../../assets/image/categories-img/image-3.png";
//import img4 from "./../../assets/image/categories-img/image-4.png";
//import img5 from "./../../assets/image/categories-img/image-5.png";
//import img6 from "./../../assets/image/categories-img/image-6.png";
//import SectionSale from "./sectionSale/SectionSale";
//import SectionSearch from "./sectionSearch/SectionSearch";
//import SectionCategories from "./sectionCategories/SectionCategories";
//import CardsPopular from "./cards-popular/CardsPopular";
//import Banner from './banner/Banner';
// import GreyButton from './../common/grey-button/GreyButton';



function Content2(props) {

   //const data1 ={
   //   title: "Квадроциклы",
   //   img: img1,
   //   link: "ATVs"
   //}
   //const data2 ={
   //   title: "Гидроциклы",
   //   img: img2,
   //   link: "Jet-skis"
   //}
   //const data3 ={
   //   title: "Катера",
   //   img: img3,
   //   link: "Speedboats"
   //}
   //const data4 ={
   //   title: "Снегоходы",
   //   img: img4,
   //   link: "Snowmobiles"
   //}
   //const data5 ={
   //   title: "Вездеходы",
   //   img: img5,
   //   link: "ATVs"
   //}
   //const data6 ={
   //   title: "Двигатели",
   //   img: img6,
   //   link: "Engines"
   //}

   //const data7 = {
   //   GreyButton: true,
   //}


   //return (
   //   <div className={s.content}>
   //      <SectionSale/>
   //      <SectionSearch/>
   //      <SectionCategories data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6}/>
   //      <CardsPopular GreyButton={data7} title={"Популярные товары"} />
   //      <Banner bannerText="CКИДКИ на все запчасти до 70%"/>
   //      <CardsPopular title={"С этим товаром покупают"}/>
   //   </div>
   //);



   return (
      <div className={s.content}>
         <div className={s.container}>
            <BreadCrumbs/>
            <Sorting/>
            <Main/>
         </div>
      </div>
   );
}


export default Content2;