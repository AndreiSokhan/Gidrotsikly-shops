import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';

function Category(props) {
   return (
      <div className={s.category}>
         <div className={s.description}>
            <h2 className={s.title}>{props.data.title}</h2>
            <NavLink to={props.data.link}>Подробнее</NavLink>
         </div>
         <div className={s.wrapperImg}>
            <img className={s.img} src={props.data.img} alt="categories-img" />
         </div>
      </div>
   );
}

export default Category;