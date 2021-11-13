import s from "./SectionSearch.module.scss";
import {NavLink} from "react-router-dom";


//секия поиска по сайту

function SectionSearch(props) {

   const data1 ={
      link: "Search-by-number"
   }
   const data2 ={
      link: "Search-by-brand"
   }
   const data3 ={
      link: "Search-by-product-name"
   }
   

   return (

      <div className={s.sectionSearch}>
         <div className={s.container}>
            <div className={s.searchTypes}>
               <ul className={s.searchList}>
                  <li className={s.searchItem}><NavLink className={s.searchLink} to={data1.link}>Поиск по номеру</NavLink></li>
                  <li className={s.searchItem}><NavLink className={s.searchLink} to={data2.link}>Поиск по марке</NavLink></li>
                  <li className={s.searchItem}><NavLink className={s.searchLink} to={data3.link}>Поиск по названию товара</NavLink></li>
               </ul>
            </div>
            <form className={s.searchForm} action="">
               <input className={s.searchInput} type="search" placeholder="Введите марку "/>
               <button className={s.searchBtn} type="submit">искать</button>
            </form>
         </div>
      </div>
   );
}

export default SectionSearch;