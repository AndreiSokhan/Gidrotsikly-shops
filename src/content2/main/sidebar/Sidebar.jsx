import s from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";


// главный блок с контентом на второй странице нашего проекта

function Sidebar(props) {

   const data1 ={
      link: "Options"
   }
   const data2 ={
      link: "By-brand"
   }

   return (

      <div className={s.sidebar}>
         <div className={s.filter}>
            <NavLink className={s.navLink} to={data1.link}>Параметры</NavLink>
            <NavLink className={s.navLink} to={data2.link}>По марке</NavLink>
         </div>
         
      </div>

   )

}

export default Sidebar;