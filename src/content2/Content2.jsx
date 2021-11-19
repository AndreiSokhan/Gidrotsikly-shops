import s from "./Content2.module.scss";
import BreadCrumbs from "../components/common/bread-crumbs/BreadCrumbs";
import Sorting from "./sorting/Sorting";
import Main from "./main/Main";




function Content2(props) {



   return (
      <div className={s.content}>
         <div className={s.container}>
            <BreadCrumbs/>
            <Sorting/>
            <Main/>
         </div>
      </div>
   );
}


export default Content2;