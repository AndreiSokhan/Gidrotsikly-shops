import s from './Sidebar.module.scss';
import CheckboxLabels from '../../../components/common/CheckboxLabels/CheckboxLabels';


// главный блок с контентом на второй странице нашего проекта

function Sidebar() {

   return (

      <div className={s.sidebar}>
         <CheckboxLabels/>
      </div>

   )

}

export default Sidebar;