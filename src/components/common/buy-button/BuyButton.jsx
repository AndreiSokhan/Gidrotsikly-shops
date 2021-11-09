import s from './BuyButton.module.scss';
import img from '../../../assets/image/BuyButton/buyButton.svg';

function BuyButton(props) {

    return (

        <button className={s.BuyButton}>
            <svg className={s.ButtonImg} src={img}></svg>
        </button>

    )

}

export default BuyButton;