import s from "./SectionSale.module.scss";
import SeleCard from "./saleCard/SaleCard";
import SaleSlider from "./saleSlider/SaleSlider";



//секция со слайдером и предложением по акции

function SectionSale(props) {


   return (
      <div className={s.sectionSale}>
         <div className={s.container}>
            <div className={s.wrapper}>
            <SaleSlider/>
            <SeleCard title="Лодочный мотор Suzuki DF9.9BRS" specialOffer="Акция действует до" dataOffer="31.12.2021"/>
            </div>
         </div>
      </div>
   );
}

export default SectionSale;