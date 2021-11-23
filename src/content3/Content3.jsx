import CardsPopular from "../components/content/cards-popular/CardsPopular";
import About from "./about/About";
import s from "./Content3.module.scss";




function Content3(props) {



    return (
        <div className={s.content}>
            <div className={s.container}>

            <About/>
            <CardsPopular/>
            </div>
        </div>
    );
}

export default Content3;