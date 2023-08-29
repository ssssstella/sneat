import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUp() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })


    const navigate = useNavigate();
    const handle = (path) => {
        navigate(path)
    }

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [key]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user);
        axios.post('https://sneatvercel.vercel.app/api/register', user).then(response => {
            console.log('sign up', response.data);
            if (response.data.message !== 'registration failed') {
                handle('/');
            }
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div className='login'>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(/assets/girl-with-laptop-light.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 10,
                                mx: 14,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div className='login--title'>
                                <img src="assets/logo.png" alt="logo" />
                                <h2>sneat</h2>
                            </div>
                            <div className='login--subtitle'>
                                <h4>Adventure starts here 🚀</h4>
                                <p>Make your app management easy and fun!</p>
                            </div>
                            <Box component="form" method='post' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="agreement" color="primary" />}
                                    label="I agree to privacy policy & terms"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    style={{ backgroundColor: 'rgb(105, 108, 255)' }}
                                >
                                    Sign Up
                                </Button>
                            </Box>
                            <Grid container>
                                <Grid item>
                                    <p>Already have an account? <Link to="/login" variant="body2" className='login--link'>
                                         Sign in instead
                                    </Link></p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>

        </div>
    )
}
