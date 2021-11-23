import CardsPopular from "../components/content/cards-popular/CardsPopular";
import s from "./Content3.module.scss";
import BreadCrumbs from '../components/common/bread-crumbs/BreadCrumbs';
import ProductDesc from "./product-decs/ProductDesc";




function Content3(props) {


    return (
        <div className={s.content}>
            <div className={s.container}>
            <BreadCrumbs/>
            <ProductDesc/>
            <CardsPopular title="Популярные товары"/>
            </div>
        </div>
    );
}


export default Content3;