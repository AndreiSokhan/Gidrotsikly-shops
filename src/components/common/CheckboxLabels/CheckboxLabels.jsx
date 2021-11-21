import s from './CheckboxLabels.module.scss';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//компонента с чекбоксом для сайдбара

export default function CheckboxLabels() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Сюда значение" />
        </FormGroup>
    );
}
