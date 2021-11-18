import s from './Sidebar.module.scss';
<<<<<<< HEAD
import CheckboxLabels from '../../../components/common/CheckboxLabels/CheckboxLabels';
=======
import { NavLink } from "react-router-dom";
>>>>>>> 52b1319d743aba0be6179db2f98ade22ccd9c066


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
<<<<<<< HEAD
         <CheckboxLabels/>
=======
         <div className={s.filter}>
            <NavLink className={s.navLink} to={data1.link}>Параметры</NavLink>
            <NavLink className={s.navLink} to={data2.link}>По марке</NavLink>
         </div>
         
>>>>>>> 52b1319d743aba0be6179db2f98ade22ccd9c066
      </div>

   )

}

export default Sidebar;