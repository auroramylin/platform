import * as React from 'react';
import styles from './RegisterPage.module.css';
import {
    Button,
    Card,
    Typography,
    TextField,
    Checkbox,
    FormGroup,
    FormLabel,
    Tabs,
    Tab,
    Grid
} from "@mui/material";

function RegisterPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.root}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Student"/>
                <Tab label="Parent"/>
            </Tabs>

            <Card className={styles.register}>
                <FormGroup>
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>User Name: </FormLabel>
                            <TextField fullWidth placeholder="Please enter your username"/></Grid>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>Set Password:</FormLabel>
                            <TextField fullWidth placeholder="Please enter your password"
                                       helperText="Prompt: The password contains 8 to 20 characters"/></Grid>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>Confirm Password:</FormLabel>
                            <TextField fullWidth placeholder="Please enter your password"
                                       helperText="Prompt: Please re-enter your password"/></Grid>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>Mobile Number:</FormLabel>
                            <TextField fullWidth placeholder="Please enter your phone number"/></Grid>
                        <Grid item xs={6} md={6} className={styles.item}>
                            <FormLabel>Verification Code:</FormLabel>
                            <div className={styles.verification}>
                                <TextField fullWidth placeholder="Please enter the verification code"/>
                                <Button variant="contained" className={styles.verificationBtn}>Verification
                                    Code</Button>
                            </div>
                        </Grid>
                    </Grid>
                </FormGroup>
                <div className={styles.registerBtn}>
                    <Button variant="outlined">Register Now</Button>
                    <div className={styles.registerCheckbox}>
                        <Checkbox/><Typography variant="body1" component="p">You have read and
                        agree
                        to the "Youth AI Service Platform Service Terms"</Typography>
                    </div>
                </div>

            </Card>

        </div>
    );
}

export default RegisterPage;