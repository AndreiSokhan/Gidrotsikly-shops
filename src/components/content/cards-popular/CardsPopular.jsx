import s from './CardsPopular.module.scss';
import BasicTabs from '../../common/product-tab/BasicTabs';
import CardsCatalog from '../cards-catalog/CardsCatalog'
import GreyButton from '../../common/grey-button/GreyButton';



//секция с популярными товарами 

function CardsPopular() {

    return (

        <section className={s.CardsPopular}>
            <h2 className={s.title}>Популярные товары</h2>
            <BasicTabs/>
            <CardsCatalog/>
            <GreyButton button="Показать еще"/>
        </section>
        
            
    )

}

export default CardsPopular;