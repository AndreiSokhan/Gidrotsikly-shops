//import s from './Accordion.module.scss';
//import {NavLink} from "react-router-dom";
import * as React from 'react';
import Accordion  from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './SaidbarFilters.module.scss';
//ниже импорты компонент
import CheckboxLabels from '../../../../components/common/CheckboxLabels/CheckboxLabels';
import RadioButton from '../../../../components/common/radio-button/RadioButton';
import PriceSlider from './../../../../components/common/price-slider/PriceSlider';
import PowerFilters from './powerFilters/PowerFilters';


// полный блок аккардиона с чекбоксом ссылкой и поиском


export default function SaidbarFilters(props) {


   //const data1 ={
   //   label: "в Наличии"
   //}
   //const data2 ={
   //   label: "Под заказ"
   //}


   return (
      <div>
         
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography>Наличие</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <div className={s.availa}>
                     <CheckboxLabels/>
                     <CheckboxLabels/>
                  </div>
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Новинки</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <RadioButton/>
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Цена</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <PriceSlider/>
                     <div className={s.price}>
                        <div className={s.range}>
                           <span className={s.value}>от<span className={s.cost}>100 000</span></span>
                        </div>
                        <div className={s.range}>
                           <span className={s.value}>до<span className={s.cost}>500 000</span></span>
                        </div>
                     </div>
               </Typography>
            </AccordionDetails>
         </Accordion>

         <PowerFilters/>
         {/*Сюда мы добавим компоненту в которой будет отображаться
         мощность, мощность двигателя и макс скорость чтобы не разбивать на 2 отдельных аккордиона */}

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Бренд</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <div className={s.checkboxBrend}>
                     <CheckboxLabels/>
                     <CheckboxLabels/>
                     <CheckboxLabels/> 
                  </div>
                  
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Модель</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
               <form className={s.modelForm} action="">
                  <input className={s.modelInput} type="search" placeholder="Введите модель"/>
                  <button className={s.modelBtn} type="submit">искать</button>
               </form>
                  <CheckboxLabels/>
                  <CheckboxLabels/>
                  <CheckboxLabels/> 
                  <CheckboxLabels/> 
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Акции</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Страна</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <CheckboxLabels/>
                  <CheckboxLabels/>
                  <CheckboxLabels/> 
                  <CheckboxLabels/> 
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

