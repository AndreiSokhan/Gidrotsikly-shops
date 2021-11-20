//import s from './Accordion.module.scss';
//import {NavLink} from "react-router-dom";
import * as React from 'react';
import Filters from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//ниже импорты компонент
import CheckboxLabels from '../../../../components/common/CheckboxLabels/CheckboxLabels';
import RadioButton from '../../../../components/common/radio-button/RadioButton';




// полный блок аккардиона с чекбоксом ссылкой и поиском


 export default function Filters () {


   //const data1 ={
   //   link: "Options"
   //}
   //const data2 ={
   //   link: "By-brand"
   //}


   return (
      <div>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
               <Typography>Наличие</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <CheckboxLabels/>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>

{/*Сюда мы добавим компоненту в которой будет отображаться
мощность, мощность двигателя и макс скорость чтобы не разбивать на 2 отдельных аккордиона */}

         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
               <Typography>Бренд</Typography>
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
               <Typography>Модель</Typography>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}

