import React from 'react';
import { Grid, Paper, Divider, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DrawTable from './DrawTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2.5, 3),
  color: theme.palette.text.secondary,
}));

export default function CRM() {
  return (
    <div className='crm container'>
      <Grid item xs={12} className=''>
          <Item className=''>
            <div className=''>
              <h4>Congratulations</h4>
              <p>You have done 72% more sales today. Check your new badge in your profile.</p>
              <button>VIEW BADGES</button>
            </div>
             </Item>
        </Grid>
    </div>
  )
}
