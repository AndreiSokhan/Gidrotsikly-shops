import s from './Header.module.scss';
import HeaderBottom from './headerBottom/HeaderBottom';
import {NavLink} from "react-router-dom";
import logo from "./../../assets/image/header/logo.svg" 
import location from "./../../assets/image/header/location.svg";
import heart from "./../../assets/image/header/heart.svg";
import person from "./../../assets/image/header/person.svg";
import basket from "./../../assets/image/header/basket.svg";



function Header(props) {

   const data1 ={
      link: "Shops"
   }
   const data2 ={
      link: "Stok"
   }
   const data3 ={
      link: "Shipping-and-payment"
   }
   const data4 ={
      link: "favorites"
   }
   const data5 ={
      link: "your-profile"
   }
   const data6 ={
      link: "basket"
   }
   const data7 ={
      link: "ATVs"
   }
   const data8 ={
      link: "Speedboats"
   }
   const data9 ={
      link: "Jet-skis"
   }
   const data10 ={
      link: "Boats"
   }
   const data11 ={
      link: "ATVs"
   }
   const data12 ={
      link: "Snowmobiles"
   }
   const data13 ={
      link: "Engines"
   }
   const data14 ={
      link: "Spare-parts"
   }


   return (
      <div className={s.header}>
         <div className={s.container}>
            <div className={s.headerTop}>
               <ul className={s.headerNavList}>
                  <li className={s.headerNavItem}><NavLink className={s.navLink} to={data1.link}>Магазины</NavLink></li>
                  <li className={s.headerNavItem}><NavLink className={s.navLink} to={data2.link}>Акции</NavLink></li>
                  <li className={s.headerNavItem}><NavLink className={s.navLink} to={data3.link}>Доставка и оплата</NavLink></li>
               </ul>
               <img className={s.logoImg} src={logo} alt="logo Img"/>
               <div className={s.rightBlock}>
                  <div className={s.location}>
                     <img className={s.locationImg} src={location} alt="location Img" />
                     <span className={s.locationAdress}>Москва,  ул. Науки  25</span>
                  </div>
                  <ul className={s.personalBlockList}>
                     <li className={s.personalBlockItem}>
                        <NavLink className={s.navLink} to={data4.link}>
                           <img className={s.heartImg} src={heart} alt="heart Img" />
                        </NavLink>
                     </li>
                     <li className={s.personalBlockItem}>
                        <NavLink className={s.navLink} to={data5.link}>
                           <img className={s.personImg} src={person} alt="person Img" />
                        </NavLink>
                     </li>
                     <li className={s.personalBlockItem}>
                        <NavLink className={s.navLink} to={data6.link}>
                           <img className={s.basketImg} src={basket} alt="basket Img" />
                           <span className={s.number}>1</span>
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
            <HeaderBottom data7={data7} data8={data8} data9={data9} data10={data10} data11={data11} data12={data12} data13={data13} data14={data14}/>
         </div>
      </div>
   );
}

export default Header;

