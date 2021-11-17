import s from "./Pagination.module.scss"
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
   return (
      <Stack spacing={2}>
      <Pagination className={s.pagination} count={11}  shape="rounded" hidePrevButton hideNextButton variant="outlined" color="primary"/>
      </Stack>
   );
}