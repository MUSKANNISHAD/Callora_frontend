import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';



export default function Authentication() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [formState, setFormState] = useState(0);

    const router = useNavigate();

    const defaultTheme = createTheme();

    const [open, setOpen] = useState(false);

    const { handleRegister, handleLogin } = useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin({ username, password });
            }
            if (formState === 1) {
                let result = await handleRegister({ username, password, name });
                console.log(result);
                setUserName("")
                setError("")
                setPassword("");
                setFormState(0);
                setOpen(true);
                setMessage(result);
            }

        } catch (err) {
            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            router("/home")
        }
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    size={{ xs: 0, sm: 4, md: 7 }}
                    sx={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1721628643532-9842e0867fd6?auto=format&fit=crop&fm=jpg&q=80&w=2000)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid size={{ xs: 12, sm: 8, md: 5 }} component={Paper}
                    elevation={6}
                    square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <div>

                            <Button variant={formState === 0 ? "contained" : ""} onClick={() => setFormState(0)} >
                                Sign In
                            </Button>
                            <Button variant={formState === 1 ? "contained" : ""} onClick={() => setFormState(1)} >
                                Sign Up
                            </Button>
                        </div>
                        <Box component="form" noValidate sx={{ mt: 1 }} >
                            {formState === 1 && <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='name'
                                name="name"
                                autoFocus
                                value={name}
                                label="enter name"
                                onChange={e => setName(e.target.value)} />}

                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='username'
                                name="username"
                                autoFocus
                                value={username}
                                label="enter Username"
                                onChange={e => setUserName(e.target.value)} />

                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='password'
                                name="password"
                                value={password}
                                label="enter Password"
                                onChange={e => setPassword(e.target.value)} />

                            <p style={{ color: 'red' }}>{error}</p>

                            {formState === 0 ? <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> : <></>}


                            <Button
                                variant='contained'
                                fullWidth
                                type='button'
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}>
                                {formState === 0 ? "Login" : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid >

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
                onClose={() => setOpen(false)}
            />

        </ThemeProvider>
    )
}
