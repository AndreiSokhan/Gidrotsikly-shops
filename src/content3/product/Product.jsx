import s from './Product.module.scss';
import { NavLink } from "react-router-dom";
import Label from '../../components/common/Label/Label';

//компонента для левой части ProductDesc (картинка, цена)


function Product(props) {

    return (
        <div className={s.productBox}>
                <Label label="SALE"/>
            <img className={s.productImg} src={props.img} alt="img"/>
            <span className={s.oldCost}>{props.span1}</span>
            <span className={s.newCost}>{props.span2}</span>
            <NavLink className={s.link} to="">Нашли дешевле? Снизим цену!</NavLink>
        </div>

    );
}


export default Product;