import JetSkisCatalog from './jetSkisCatalog/JetSkisCatalog';
import s from './Main.module.scss';
import Sidebar from './sidebar/Saidbar';


// главный блок с контентом на второй странице нашего проекта

function Main() {

   return (

      <div className={s.main}>
         <Sidebar/>
         <JetSkisCatalog/>
      </div>

   )

}

export default Main;