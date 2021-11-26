import BlueButton from "../../../components/common/blue-button/BlueButton";
import s from "./AboutTable.module.scss"



function AboutTable() {

      return (
      <>
         <table className={s.aboutTable} cellspacing="0">
            <tr className={s.rowTitle}>
               <td className={s.address}>Адрес</td>
               <td className={s.working}>Режим работы</td>
               <td className={s.available}>Доступно</td>
               <td className={s.number}>Количество</td>
               <td></td>
            </tr>
            <tr className={s.row}>
               <td className={s.cell}>Москва, ул. Науки 25</td>
               <td className={s.cell}>
                  <div className={s.workingHours}>
                     <div className={s.days}><span>пн-сб:</span><span> вс:</span></div>
                     <div className={s.time}><span>08:00-19:00</span><span>09:00-17:00</span></div>
                  </div>
               </td>
               <td className={s.cell}>В наличии</td>
               <td className={s.cell}>1</td>
               <td className={s.button}><BlueButton/></td>
            </tr>
            <tr className={s.row}>
               <td className={s.cell}>Москва, ул.  Южная 134</td>
               <td className={s.cell}>
                  <div className={s.workingHours}>
                     <div className={s.days}><span>пн-сб:</span><span> вс:</span></div>
                     <div className={s.time}><span>08:00-19:00</span><span>09:00-17:00</span></div>
                  </div>
               </td>
               <td className={s.cell}>В наличии</td>
               <td className={s.cell}>2</td>
               <td className={s.button}><BlueButton/></td>
            </tr>
            <tr className={s.row}>
               <td className={s.cell}>Санкт-Петербург, ул. Красная 19</td>
               <td className={s.cell}>
                  <div className={s.workingHours}>
                     <div className={s.days}><span>пн-сб:</span><span> вс:</span></div>
                     <div className={s.time}><span>08:00-19:00</span><span>09:00-17:00</span></div>
                  </div>
               </td>
               <td className={s.cell}>Нет в наличии</td>
               <td className={s.cell}>0</td>
               <td className={s.button}><BlueButton/></td>
            </tr>
            <tr className={s.row}>
               <td className={s.cell}>Киев, ул Шевченко 167</td>
               <td className={s.cell}>
                  <div className={s.workingHours}>
                     <div className={s.days}><span>пн-сб:</span><span> вс:</span></div>
                     <div className={s.time}><span>08:00-19:00</span><span>09:00-17:00</span></div>
                  </div>
               </td>
               <td className={s.cell}>Нет в наличии</td>
               <td className={s.cell}>0</td>
               <td className={s.button}><BlueButton/></td>
            </tr>
         </table>
      </>
   );
}

export default AboutTable;