import s from "./SectionCategories.module.scss";
import Category from "./Category/Category.jsx";




function SectionCategories(props) {

   return (
      <div className={s.sectionCategories}>
         <Category data={props.data1}/>
         <Category data={props.data2}/>
         <Category data={props.data3}/>
         <Category data={props.data4}/>
         <Category data={props.data5}/>
         <Category data={props.data6}/>
      </div>
   );
}


export default SectionCategories;
