import s from "./Content.module.scss";
import SectionCategories from "./sectionCategories/SectionCategories";



function Content() {

   return (
      <div className={s.content}>
         <SectionCategories/>
      </div>
   );
}


export default Content;