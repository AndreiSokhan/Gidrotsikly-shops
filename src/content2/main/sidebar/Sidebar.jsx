import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import s from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";
import SaidbarFilters from './saidbarFilters/SaidbarFilters';
import SidebarBottom from './sidebarBottom/SidebarBottom';



const MyTabs = styled(Tabs)({

   '& .MuiTab-root': {
      fontFamily: 'SFProDisplayRegular',
      fontSize: 16,
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: '19px',
      opacity: 0.6,
      letterSpacing: 2,
      padding: '0!important',
   }
   ,
   '& .Mui-selected': {
      fontFamily: 'SFProDisplayRegular',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '19px',
      textTransform: 'uppercase',
      color: '#2F3035 !important',
      padding: '0!important',
      opacity: 1,
      letterSpacing: 2
   },

   '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#1C62CD',
      height: '2px !important',
   },
   '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
   },

   '& .MuiTabs-flexContainer' : {
      display: 'flex',
      gap: '40px',
      width: '250px'
   }

});

// блок с фильтрами на второй странице нашего проекта

function Sidebar() {

   const data1 = {
      link: "Options"
   }
   const data2 = {
      link: "By-brand"
   }

   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (

      <div className={s.sidebar}>

         <div className={s.SidebarTab}>
            <MyTabs 
               value={value}
               onChange={handleChange}
            >
               <Tab label="Параметры" />
               <Tab label="По марке" />
            </MyTabs>
         </div>

         {/* <ul className={s.list}>
            <li className={`${s.item} ${s.active}`}><NavLink className={s.link} to={data1.link}>Параметры</NavLink></li>
            <li className={s.item}><NavLink className={s.link} to={data2.link}>По марке</NavLink></li>
         </ul> */}

         <SaidbarFilters />
         <SidebarBottom />
      </div>

   )

}

export default Sidebar;