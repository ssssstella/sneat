import * as React from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';





export default function CircularWithValueLabel({ value }) {

    return <Box sx={{ position: 'relative', display: 'inline-flex' }} >
        <CircularProgress
            variant="determinate"
            sx={{
                color: (theme) =>
                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                position: 'absolute',
               
            }}
            size={60}
            thickness={5}
            value={100}
        />
        <CircularProgress variant="determinate" 
        sx={{
            position: 'relative',
            
        }}
        size={60} thickness={5} value={value / 100} style={{ color: 'rgb(105, 108, 255)'}} />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="body1" component="div" color="text.secondary">
                {`${(value / 1000).toFixed(1)}k`}
            </Typography>
        </Box>
    </Box>


}