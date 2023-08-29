import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Tabs, Tab } from '@mui/material';

const AntTabs = styled(Tabs)({
    paddingLeft: '20px',
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
    },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    padding: '0.5rem 0.8rem',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'rgb(105, 108, 255)',
        borderRadius: '5px',
        fontWeight: theme.typography.fontWeightMedium,
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1.5 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export { AntTabs, AntTab, a11yProps, TabPanel };