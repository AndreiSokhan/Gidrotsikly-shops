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
import CheckboxLabels from '../../../../components/common/CheckboxLabels/CheckboxLabels';
import RadioButton from '../../../../components/common/radio-button/RadioButton';
import PriceSlider from './../../../../components/common/price-slider/PriceSlider';
import PowerFilters from './powerFilters/PowerFilters';
import StockButton from './../../../../components/common/stock-button/StockButton';



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
                  <div className={s.schoice} style={{ marginRight: 52 }}>
                     <CheckboxLabels className={s.catalogCheck} />
                     <p className={s.checkText}>В наличие</p>
                  </div>

                  <div className={s.schoice}>
                     <CheckboxLabels className={s.catalogCheck} />
                     <p className={s.checkText}>Под заказ</p>
                  </div>
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
                        <RadioButton className={s.catalogRadio}/> 
                        <p className={s.checkText}>Все</p>
                     </div>

                     <div className={s.schoice} style={{ marginRight: 19 }}>
                        <RadioButton className={s.catalogRadio}/>
                        <p className={s.checkText}>Новинки</p>
                     </div>

                     <div className={s.schoice}>
                        <RadioButton className={s.catalogRadio}/>
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
                     <div className={s.schoice} style={{marginRight: 91}}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>BRP</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Spark 2</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Spark 3</p>
                     </div>
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

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Sea-doo Spark 2</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>SeaDoo GTI 155</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>SeaDoo Spark 90</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>SeaDoo GTR 230</p>
                     </div>
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

                  <StockButton/>

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
                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Россия</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Китай</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>Германия</p>
                     </div>

                     <div className={s.schoice}>
                        <CheckboxLabels className={s.catalogCheck} />
                        <p className={s.checkText}>CША</p>
                     </div>

                  </div>
                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

