import s from './Sorting.module.scss';
import {NavLink} from "react-router-dom";
import img1 from './../../assets/image/sorting/img-1.svg';
import img2 from './../../assets/image/sorting/img-2.svg';

// панель сортировки (показыйет настроенные фильтры и способ отображения на странице каталога)

function Sorting() {

   const data1 ={
      link: "4WD"
   }
   const data2 ={
      link: "from-5000"
   }
   const data3 ={
      link: "BRP"
   }
   const data4 ={
      link: "yet"
   }

   return (
      <div className={s.sorting}>
         <span className={s.title}>Гидроциклы</span>
         <div className={s.filtres}>
            <ul className={s.filtresList}>
               <li className={s.filtresItem}><NavLink className={s.searchLink} to={data1.link}>Полноприводные</NavLink></li>
               <li className={s.filtresItem}><NavLink className={s.searchLink} to={data2.link}>от 5000</NavLink></li>
               <li className={s.filtresItem}><NavLink className={s.searchLink} to={data3.link}>BRP</NavLink></li>
               <li className={s.filtresItem}><NavLink className={s.searchLink} to={data3.link}>еще</NavLink></li>
            </ul>
            <div className={s.rightBlock}>
               <select className={s.dropDownList}>
                  <option className={s.dropDownItem}>По популярности</option>
                  <option className={s.dropDownItem}>По цене</option>
                  <option className={s.dropDownItem}>По количеству мест</option>
               </select>
               
               {/* здесь  я постараюсь сделатть чекбокс как на макети и чтобы он работал */}

               
               {/*<label htmlFor="">
                  <input type="checkbox" />
               </label>*/}



               <div>
                  <button>
                     <img className={s.img} src={img1} alt="" />
                  </button>
                  <button>
                     <img className={s.img} src={img2} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </div>

   )

}

export default Sorting;