//import s from './Accordion.module.scss';
import { NavLink } from "react-router-dom";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './SaidbarFilters.module.scss';
//ниже импорты компонент
import RadioButton from '../../../../components/common/radio-button/RadioButton';
import PriceSlider from './../../../../components/common/price-slider/PriceSlider';
import PowerFilters from './powerFilters/PowerFilters';
import StockButton from './../../../../components/common/stock-button/StockButton';
import CheckboxLabel from '../../../../components/common/CheckboxLabel/CheckboxLabel';


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

         <Accordion className={s.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography>Наличие</Typography>
            </AccordionSummary>

            <AccordionDetails>

               <div className={s.categoriesWrap}>
                  <div style={{ marginRight: "29px" }}>
                     <CheckboxLabel label="В наличие"  />
                  </div>
                  <CheckboxLabel label="Под заказ" />
               </div>

            </AccordionDetails>

         </Accordion>

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Новинки</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>

                  <div className={s.choiceWrap}>

                     <div className={s.schoice} style={{ marginRight: 19 }}>
                        <RadioButton className={s.catalogRadio} />
                        <p className={s.checkText}>Все</p>
                     </div>

                     <div className={s.schoice} style={{ marginRight: 19 }}>
                        <RadioButton className={s.catalogRadio} />
                        <p className={s.checkText}>Новинки</p>
                     </div>

                     <div className={s.schoice}>
                        <RadioButton className={s.catalogRadio} />
                        <p className={s.checkText}>Акции</p>
                     </div>

                  </div>
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Цена</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <PriceSlider />
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

         <PowerFilters />
         {/*Сюда мы добавим компоненту в которой будет отображаться
         мощность, мощность двигателя и макс скорость чтобы не разбивать на 2 отдельных аккордиона */}

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Бренд</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>

                  <div className={s.checkboxBrend}>
                     <div style={{ marginRight: "91px" }}>
                        <CheckboxLabel label="BRP"  />
                     </div>
                        <CheckboxLabel label="Spark 2" />
                        <CheckboxLabel label="Spark 3" />
                  </div>
                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>

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
                     <input className={s.modelInput} type="search" placeholder="Введите модель" />
                     {/* <button className={s.modelBtn} type="submit">искать</button> */}
                  </form>

                  <div className={s.modelBox}>
                     <CheckboxLabel label="Sea-doo Spark 2" />
                     <CheckboxLabel label="SeaDoo GTI 155" />
                     <CheckboxLabel label="SeaDoo Spark 90" />
                     <CheckboxLabel label="SeaDoo GTR 230" />
                  </div>

                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>

               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Акции</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>

                  <StockButton />

               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Страна</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>

                  <div className={s.countryWrap}>
                     <CheckboxLabel label="Россия" />
                     <CheckboxLabel label="Германия" />
                     <CheckboxLabel label="Китай" />
                     <CheckboxLabel label="США" />
                  </div>

                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

