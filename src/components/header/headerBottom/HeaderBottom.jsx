//блок Nav из Header буду выносить в общие 

import s from './HeaderBottom.module.scss';
import {NavLink} from "react-router-dom";

function HeaderBottom(props) {
   return (
            <ul className={s.list}>
               <li className={s.item}><NavLink className={s.link} to={props.data7.link}>Квадроциклы</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data8.link}>Катера</NavLink></li>
               <li className={`${s.item} ${s.active}`}><NavLink className={s.link} to={props.data9.link}>Гидроциклы</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data10.link}>Лодки</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data11.link}>Вездеходы</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data12.link}>Снегоходы</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data13.link}>Двигатели</NavLink></li>
               <li className={s.item}><NavLink className={s.link} to={props.data14.link}>Запчасти</NavLink></li>
            </ul>
   );
}

export default HeaderBottom;