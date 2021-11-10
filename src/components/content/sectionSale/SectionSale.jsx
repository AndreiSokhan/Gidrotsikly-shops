import s from "./SectionSale.module.scss";
import SeleCard from "./saleCard/SaleCard";



//секция со слайдером и предложением по акции

function SectionSale(props) {


   return (
      <div className={s.sectionSale}>
         <div className={s.container}>
            
            <SeleCard title="Лодочный мотор Suzuki DF9.9BRS" specialOffer="Акция действует до" dataOffer="31.12.2021"/>
         </div>
      </div>
   );
}

export default SectionSale;