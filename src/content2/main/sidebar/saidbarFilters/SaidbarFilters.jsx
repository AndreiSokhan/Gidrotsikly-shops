//import s from './Accordion.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { NavLink } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
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

const MyAccordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   '&': {
      border: 0,
   },
}));


const MyAccordionSummary = styled((props) => (
   <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}

   />
))(({ theme }) => ({

   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(270deg)',

   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
   '&.Mui-focused hover': {
      borderColor: '#007AFF'
   },
}));


const MyAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(1),


}));


const BottomAccordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));

const BottomAccordionSummary = styled((props) => (
   <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}

   />
))(({ theme }) => ({


   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(270deg)',

   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
   '&.Mui-focused hover': {
      borderColor: '#007AFF'
   },
}));


const BottomAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(1),
}));



export default function SaidbarFilters(props) {

   return (
      <div>

         <MyAccordion className={s.accordion}>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography>Наличие</Typography>
            </MyAccordionSummary>

            <MyAccordionDetails>

               <div className={s.categoriesWrap}>
                  <div style={{ marginRight: "29px" }}>
                     <CheckboxLabel label="В наличие" />
                  </div>
                  <CheckboxLabel label="Под заказ" />
               </div>

            </MyAccordionDetails>

         </MyAccordion>

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Новинки</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
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
            </MyAccordionDetails>
         </MyAccordion>

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Цена</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
               <Typography>
                  <PriceSlider />
                  <div className={s.price}>
                     <div className={s.range}>
                        <span className={s.value}>от <span className={s.cost}> 100 000</span></span>
                     </div>
                     <div className={s.range}>
                        <span className={s.value}>до <span className={s.cost}> 500 000</span></span>
                     </div>
                  </div>
               </Typography>
            </MyAccordionDetails>
         </MyAccordion>

         <PowerFilters />
         {/*Сюда мы добавим компоненту в которой будет отображаться
         мощность, мощность двигателя и макс скорость чтобы не разбивать на 2 отдельных аккордиона */}

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Бренд</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
               <Typography>

                  <div className={s.checkboxBrend}>
                     <div style={{ marginRight: "91px" }}>
                        <CheckboxLabel label="BRP" />
                     </div>
                     <CheckboxLabel label="Spark 2" />
                     <CheckboxLabel label="Spark 3" />
                  </div>
                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>

               </Typography>
            </MyAccordionDetails>
         </MyAccordion>

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Модель</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
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
            </MyAccordionDetails>
         </MyAccordion>

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Акции</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
               <Typography>
                  <StockButton />
               </Typography>
            </MyAccordionDetails>
         </MyAccordion>

         <MyAccordion>
            <MyAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Страна</Typography>
            </MyAccordionSummary>
            <MyAccordionDetails>
               <Typography>

                  <div className={s.countryWrap}>
                     <CheckboxLabel label="Россия" />
                     <CheckboxLabel label="Германия" />
                     <CheckboxLabel label="Китай" />
                     <CheckboxLabel label="США" />
                  </div>

                  <NavLink className={s.linkMore} to="">Показать еще</NavLink>
               </Typography>
            </MyAccordionDetails>
         </MyAccordion>

      </div>
   );
}

