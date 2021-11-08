//блок Nav из Header буду выносить в общие 

import s from './HeaderBottom.module.scss';
import {NavLink} from "react-router-dom";

function HeaderBottom(props) {
   return (
            <ul className={s.list}>
               <li className={s.item}><NavLink to={props.data1.link}>Квадроциклы</NavLink></li>
               <li className={s.item}><NavLink to={props.data2.link}>Катера</NavLink></li>
               <li className={s.item}><NavLink to={props.data3.link}>Гидроциклы</NavLink></li>
               <li className={s.item}><NavLink to={props.data4.link}>Лодки</NavLink></li>
               <li className={s.item}><NavLink to={props.data5.link}>Вездеходы</NavLink></li>
               <li className={s.item}><NavLink to={props.data6.link}>Снегоходы</NavLink></li>
               <li className={s.item}><NavLink to={props.data7.link}>Двигатели</NavLink></li>
               <li className={s.item}><NavLink to={props.data8.link}>Запчасти</NavLink></li>
            </ul>
   );
}

export default HeaderBottom;