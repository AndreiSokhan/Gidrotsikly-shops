import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import s from './BasicTabs.module.scss';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className={s.box} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={s.title} label="запчасти" {...a11yProps(0)} />
          <Tab className={s.title} label="моторы" {...a11yProps(1)} />
          <Tab className={s.title} label="шины" {...a11yProps(2)} />
          <Tab className={s.title} label="электроника" {...a11yProps(3)} />
          <Tab className={s.title} label="инструменты" {...a11yProps(4)} />
          <Tab className={s.title} label="аксессуары" {...a11yProps(5)} />
        </Tabs>
      </Box>
    </Box>
  );
}

