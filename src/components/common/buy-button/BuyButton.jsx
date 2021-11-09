import s from './BuyButton.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function BuyButton() {

    return (

        <button className={s.BuyButton}>
            <ShoppingCartIcon className={s.img}/>
        </button>

    )

}

export default BuyButton;