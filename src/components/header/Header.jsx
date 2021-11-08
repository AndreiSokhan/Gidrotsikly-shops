import s from './Header.module.scss';
import HeaderBottom from './headerBottom/HeaderBottom';
import logo from "./../../assets/image/header/logo.svg" 
import location from "./../../assets/image/header/location.svg";
import heart from "./../../assets/image/header/heart.svg";
import person from "./../../assets/image/header/person.svg";
import basket from "./../../assets/image/header/basket.svg";



function Header(props) {

   //const data? ={
   //   title: "Квадроциклы",
   //   img: img1,
   //   link: "ATVs"
   //}

   const data1 ={
      link: "ATVs"
   }
   const data2 ={
      link: "Speedboats"
   }
   const data3 ={
      link: "Jet-skis"
   }
   const data4 ={
      link: "Boats"
   }
   const data5 ={
      link: "ATVs"
   }
   const data6 ={
      link: "Snowmobiles"
   }
   const data7 ={
      link: "Engines"
   }
   const data8 ={
      link: "Spare-parts"
   }

   

   return (
      <div className={s.header}>
         <div className={s.headerTop}>
            <ul className={s.headerNavList}>
               <li className={s.headerNavItem}>Магазины</li>
               <li className={s.headerNavItem}>Акции</li>
               <li className={s.headerNavItem}>Доставка и оплата</li>
            </ul>
            <img className={s.logoImg} src={logo} alt="logo Img" />
            <div className={s.location}>
               <img className={s.locationImg} src={location} alt="location Img" />
               <span className={s.locationAdress}>Москва,  ул. Науки  25</span>
            </div>
            <ul className={s.rightBlockList}>
               <li className={s.rightBlockItem}><img className={s.heartImg} src={heart} alt="heart Img" /></li>
               <li className={s.rightBlockItem}><img className={s.personImg} src={person} alt="person Img" /></li>
               <li className={s.rightBlockItem}><img className={s.basketImg} src={basket} alt="basket Img" /></li>
            </ul>
         </div>
         <HeaderBottom data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8}/>
      </div>
   );
}

export default Header;

