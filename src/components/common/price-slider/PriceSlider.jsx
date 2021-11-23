import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import s from './PriceSlider.module.scss'; 



function valuetext(value) {
   return `${value}$`;
}

export default function PriceSlider() {
   const [value, setValue] = React.useState([10, 45]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: 290 }}>
      <Slider
         size="small"
         getAriaLabel={() => 'Price range'}
         value={value}
         onChange={handleChange}
         valueLabelDisplay="auto"
         getAriaValueText={valuetext}
      />
      </Box>
   );
}