import s from './ProductCard.module.scss';
import Label from '../../../common/Label/Label';



//комонента самой карточки товара

function ProductCard (props) {

    return (
        <div className={s.ProductCard}>
            {props.label ? <Label label={props.label}/> : null} 
            <img className={s.ProductImg} src={props.img} alt="product-img" />
            <h3 className={s.ProductTitle}>{props.title}</h3>
            <span className={s.ProductDesc}>{props.span}</span>
        </div>
    );
}

export default ProductCard;