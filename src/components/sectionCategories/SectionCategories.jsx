import s from "./SectionCategories.module.scss";
import Category from "./Category/Category.jsx";
import img1 from "./../../assets/image/categories-img/image-1.png"
import img2 from "./../../assets/image/categories-img/image-2.png"
import img3 from "./../../assets/image/categories-img/image-3.png"
import img4 from "./../../assets/image/categories-img/image-4.png"
import img5 from "./../../assets/image/categories-img/image-5.png"
import img6 from "./../../assets/image/categories-img/image-6.png"


function SectionCategories() {
   const data1 ={
      title: "Квадроциклы",
      img: img1,
      link: "ATVs"
      }
   const data2 ={
      title: "Гидроциклы",
      img: img2,
      link: "Jet-skis"
   }
   const data3 ={
      title: "Катера",
      img: img3,
      link: "Speedboats"
   }
   const data4 ={
      title: "Снегоходы",
      img: img4,
      link: "Snowmobiles"
   }
   const data5 ={
      title: "Вездеходы",
      img: img5,
      link: "ATVs"
   }
   const data6 ={
      title: "Двигатели",
      img: img6,
      link: "Engines"
   }

   return (
      <div className={s.SectionCategories}>
         <Category data={data1}/>
         <Category data={data2}/>
         <Category data={data3}/>
         <Category data={data4}/>
         <Category data={data5}/>
         <Category data={data6}/>
      </div>
   );
}

export default SectionCategories;
