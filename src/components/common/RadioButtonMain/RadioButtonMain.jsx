import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';



// стилизация значка в не нажатом состоянии

const BpIcon = styled('span')(({ theme }) => ({

    width: 10,
    height: 10,
    marginRight: 15,
    outline: '2px auto #C4C4C4',
    outlineOffset: 3,

}));

// стилизация значка в нажатом состоянии

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#1C62CD',
    outline: '2px auto #1C62CD',
    display: 'block',
    width: 10,
    height: 10,
});

// Inspired by blueprintjs
function BpRadio(props) {
    return (
        <Radio
            disableRipple
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

export default function RadioButtonMain() {
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                <FormControlLabel style={{ marginRight: 55, color: '#2F3035', fontFamily: 'SF Pro Display', fontSize: 17}} value="female" control={<BpRadio />} label="Забрать сегодня" />
                <FormControlLabel style={{ marginRight: 55, color: '#2F3035', fontFamily: 'SF Pro Display', fontSize: 17}} value="male" control={<BpRadio />} label="Забрать в течение недели"/>
            </RadioGroup>
        </FormControl>
    );
}