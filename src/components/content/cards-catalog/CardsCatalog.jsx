import s from './CardsCatalog.module.scss';
import ProductCard from './product-card/ProductCard';


// 4 карточки, которые лежат в CardsPopular

function CardsCatalog(props) {


    return (
        <section className={s.CardsCatalog}>
                <ProductCard img={props.data1.img} title={props.data1.title} span={props.data1.span} buyButton={props.data1.buyButton}/>
                <ProductCard img={props.data2.img} title={props.data2.title} span={props.data2.span} label={props.data2.label} buyButton={props.data2.buyButton} />
                <ProductCard img={props.data3.img} title={props.data3.title} span={props.data3.span} buyButton={props.data3.buyButton}/>
                <ProductCard img={props.data4.img} title={props.data4.title} label={props.data4.label}  buyButton={props.data4.buyButton}/>
                
        </section>
    );
}

export default CardsCatalog;