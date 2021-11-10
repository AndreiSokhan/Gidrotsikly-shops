import s from './ProductCard.module.scss';
import Label from '../../../common/Label/Label';
import BuyButton from '../../../common/buy-button/BuyButton';
import NotAvailiable from '../../../common/not-availabile/NotAvailiable';



//комонента самой карточки товара

function ProductCard (props) {

    return (
        <div className={s.ProductCard}>
            {props.label ? <Label label={props.label}/> : null} 
            <img className={s.ProductImg} src={props.img} alt="product-img" />
            <h3 className={s.ProductTitle}>{props.title}</h3>
            {props.buyButton ?
                <>
                    <span className={s.ProductDesc}>{props.span}</span>
                    <BuyButton />
                </>
                :
                <>
                <NotAvailiable/>
                </>
            }

                <>
                    <button className={s.ProductBtn}>
                        <p className={s.ProductBtnText}>посмотреть товар</p>
                    </button>
                </>
        </div>
    );
}

export default ProductCard;