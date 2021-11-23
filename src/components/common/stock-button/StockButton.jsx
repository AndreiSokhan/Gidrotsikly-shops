import s from './StockButton.module.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';



export default function StockButton() {
   return (
      <Stack className={s.wrapperButton} direction="row" spacing={1}>
         <Button className={s.button} variant="contained" size="small">SALE</Button>
         <Button className={s.button} variant="contained" size="small" disabled>NEW</Button>
         <Button className={s.button} variant="contained" size="small" disabled>HIT</Button>
         <Button className={s.button} variant="contained" size="small">ДИЛЕР</Button>
      </Stack>
   );
}