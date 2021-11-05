import s from './SectionCategories.module.scss';
import img from './../../assets/image/categories-img/image-1.png'

function SectionCategories() {
   return (
      <div className={s.sectionCategories}>
         <div>
            <h2 className={s.categoriesTitle}>Квадроциклы</h2>
            <a href={img}>Подробнее</a>
         </div>
         <img className={s.categoriesImg} src={img} alt="" />
      </div>
   );
}

export default SectionCategories;
