import * as React from 'react';
import styles from './LoginPage.module.css';
import {Button, Card, Typography, TextField, Radio, FormGroup, FormControlLabel} from "@mui/material";

function Login() {
    return (
        <div className={styles.root}>
            <Card className={styles.experience}>
                <Typography gutterBottom variant="h5" component="h2">Synchronize teaching resources</Typography>
                <Typography variant="body2" color="textSecondary" component="p">High quality basic education Synchronous resources, intelligent push</Typography>
                <Button variant="outlined">Experience now</Button>
            </Card>

            <Card className={styles.login}>
                <FormGroup className={styles.loginForm}>
                <Typography gutterBottom variant="h5" component="h2">Login</Typography>
                <TextField fullWidth placeholder="Please enter your account" />
                <TextField fullWidth placeholder="Please enter your password" />
                <div className={styles.verification}>
                    <TextField fullWidth placeholder="Please enter the verification code" />
                    <Button variant="contained" className={styles.verificationBtn}>Verification Code</Button>
                </div>
                <div className={styles.verification}>
                    <FormControlLabel control={<Radio />} label="Next automatic login" />
                    <Button variant="text">Register</Button>
                </div>
                <Button variant="outlined" className={styles.loginBtn}>Login</Button>
                </FormGroup>
            </Card>
        </div>
    );
}

export default Login;