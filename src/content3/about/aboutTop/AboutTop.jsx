import s from "./AboutTop.module.scss";
import {NavLink} from "react-router-dom";



function AboutTop(props) {

   return (
      <ul className={s.list}>
         <li className={s.item}><NavLink className={s.link} to={props.data1.link}>О товаре</NavLink></li>
         <li className={s.item}><NavLink className={s.link} to={props.data2.link}>Характеристики</NavLink></li>
         <li className={s.item}><NavLink className={s.link} to={props.data3.link}>Отзывы</NavLink></li>
         <li className={`${s.item} ${s.active}`}><NavLink className={s.link} to={props.data4.link}>Самовывоз</NavLink></li>
         <li className={s.item}><NavLink className={s.link} to={props.data5.link}>Доставка</NavLink></li>
         <li className={s.item}><NavLink className={s.link} to={props.data6.link}>Cервис</NavLink></li>
         <li className={s.item}><NavLink className={s.link} to={props.data7.link}>Гарантия</NavLink></li>
      </ul>
   );
}


export default AboutTop;