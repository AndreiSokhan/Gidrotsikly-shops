import s from './Product.module.scss';
import { NavLink } from "react-router-dom";
import Label from '../../components/common/Label/Label';


//компонента для части ProductDesc (картинка, цена)


function Product(props) {

    return (
        <div className={s.productBox}>
                <Label label="SALE" style={{padding: '26px',borderRadius:'3px', width: '96px', letterSpacing: '0.12em', lineHeight: '18px', fontSize: '15px'}}/>
                    <img className={s.productImg} src={props.img} alt="img"/>
                    <span className={s.oldCost}>{props.span1}</span>
                    <span className={s.newCost}>{props.span2}</span>
                    <NavLink className={s.link} to="">Нашли дешевле? Снизим цену!</NavLink>
        </div>

    );
}


export default Product;