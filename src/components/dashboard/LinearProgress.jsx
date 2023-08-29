import * as React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '75%', mr: 1 }}>
                <LinearProgress variant="determinate" value={props.value.percent}
                    sx={{
                        height: 10, borderRadius: 2,
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                            backgroundColor: '#eeeeee',
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                            borderRadius: 5,
                            backgroundColor: props.value.color,
                        },
                    }} />
            </Box>
            <Box sx={{ minWidth: 30 }}>
                <Typography variant="body2" color="text.secondary">{`${props.value.percent}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function LinearWithValueLabel(percent, color) {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={percent} color={color}/>
        </Box>
    );
}