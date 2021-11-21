import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
   return (
      <FormControl component="fieldset">
      {/*<FormLabel component="legend"></FormLabel>*/}
         <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="" />
            {/* <FormControlLabel value="male" control={<Radio />} label="" />
            <FormControlLabel value="other" control={<Radio />} label="" /> */}
         </RadioGroup>
      </FormControl>
   );
}