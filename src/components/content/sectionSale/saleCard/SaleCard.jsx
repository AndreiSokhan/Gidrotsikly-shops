import s from "./SaleCard.module.scss";
import Label from '../../../common/Label/Label';
import saleIcon from '../../../../assets/image/sale/engine.png';

//карточка товара на скидке

function SaleCard(props) {

   return (
      <div className={s.saleCard}>
         <Label label="АКЦИЯ" />
         <div className={s.price}>
            <span className={s.salePrice}>190 000 ₽</span>
            <span className={s.oldPrice}>225 000 ₽</span>
         </div>
         <img className={s.saleIcon} src={saleIcon} alt="like-icon"/>
         <span className={s.title}>{props.title}</span>
         <div className={s.offer}>
            <span className={s.specialOffer}>{props.specialOffer}</span>
            <span className={s.dataOffer}>{props.dataOffer}</span>
         </div>
      </div>
   );
}

export default SaleCard;