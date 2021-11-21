import s from './PowerFilters.module.scss';

function PowerFilters(props) {
   return (
      <div className={s.powerWrapper}>
         <div className={s.powerFilters}>
            <span className={s.title}>Мощность, л.с.</span>
               <select className={s.dropDownList}>
                  <option className={s.dropDownItem}>90</option>
                  <option className={s.dropDownItem}>130</option>
                  <option className={s.dropDownItem}>154</option>
                  <option className={s.dropDownItem}>230</option>
                  <option className={s.dropDownItem}>300</option>
               </select>
         </div>
         <div className={s.powerFilters}>
            <span className={s.title}>Мощность двигателя, л.с.</span>
               <select className={s.dropDownList}>
                  <option className={s.dropDownItem}>90</option>
                  <option className={s.dropDownItem}>40</option>
                  <option className={s.dropDownItem}>80</option>
               </select>
         </div>
         <div className={s.powerFilters}>
            <span className={s.title}>Макс. скорость</span>
               <select className={s.dropDownList}>
                  <option className={s.dropDownItem}>50</option>
                  <option className={s.dropDownItem}>60</option>
                  <option className={s.dropDownItem}>80</option>
                  <option className={s.dropDownItem}>100</option>
               </select>
         </div>
         
      </div>
   );
}

export default PowerFilters;
