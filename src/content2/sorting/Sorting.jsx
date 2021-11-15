import s from './Sorting.module.scss';
import img1 from './../../assets/image/sorting/img-1.svg';
import img2 from './../../assets/image/sorting/img-2.svg';

// панель сортировки (показыйет настроенные фильтры и способ отображения на странице каталога)

function Sorting() {

   return (

      <div className={s.sorting}>
         <span className={s.title}>Гидроциклы</span>
         <div className={s.filtres}>
            <ul className={s.filtresList}>
               <li className={s.filtresItem}>Полноприводные</li>
               <li className={s.filtresItem}>от 5000</li>
               <li className={s.filtresItem}>BRP</li>
               <li className={s.filtresItem}>еще</li>
            </ul>
            <div className={s.rightBlock}>
               <select className={s.dropDownList}>
                  <option className={s.dropDownItem}>По популярности</option>
                  <option className={s.dropDownItem}>По цене</option>
                  <option className={s.dropDownItem}>По количеству мест</option>
               </select>
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