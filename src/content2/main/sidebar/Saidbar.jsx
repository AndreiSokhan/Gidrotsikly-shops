import s from './Sidebar.module.scss';
//import CheckboxLabels from '../../../components/common/CheckboxLabels/CheckboxLabels';
import { NavLink } from "react-router-dom";
//import { Accordion } from '@mui/material';
import SaidbarFilters from './saidbarFilters/SaidbarFilters';
import GreyButton from './../../../components/common/grey-button/GreyButton';


// блок с фильтрами на второй странице нашего проекта

function Sidebar() {

   const data1 ={
      link: "Options"
   }
   const data2 ={
      link: "By-brand"
   }

   return (

      <div className={s.sidebar}>

         <ul className={s.list}>
            <li className={`${s.item} ${s.active}`}><NavLink className={s.link} to={data1.link}>Параметры</NavLink></li>
            <li className={s.item}><NavLink className={s.link} to={data2.link}>По марке</NavLink></li>
         </ul>
         <SaidbarFilters/>
         <GreyButton/>
      </div>

   )

}

export default Sidebar;