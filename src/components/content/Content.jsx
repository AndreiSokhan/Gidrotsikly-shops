import CardsCatalog from "./cards-catalog/CardsCatalog";
import s from "./Content.module.scss";
import SectionCategories from "./sectionCategories/SectionCategories";



function Content() {

   return (
      <div className={s.content}>
         <SectionCategories/>
         <CardsCatalog/>
      </div>
   );
}


export default Content;