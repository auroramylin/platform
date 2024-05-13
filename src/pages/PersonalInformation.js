import * as React from 'react';
import styles from './PersonalInformation.module.css';
import {
    Button,
    Card,
    Typography,
    Checkbox,
    FormLabel,
    Tabs,
    Tab,
    Grid
} from "@mui/material";

function PersonalInformation() {
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
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>User Name:</FormLabel>
                            <Typography variant="body1" component="p">Zhang San</Typography>
                        </Grid>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>Account Password:</FormLabel>
                            <Typography variant="body1"  component="p">*************</Typography>
                        </Grid>
                        <Grid item xs={4} md={4}></Grid>
                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>User Attribute:</FormLabel>
                            <Typography variant="body1"  component="p">Student</Typography>
                        </Grid>

                        <Grid item xs={4} md={4} className={styles.item}>
                            <FormLabel>Mobile Number:</FormLabel>
                            <Typography variant="body1" component="p">131404225</Typography>
                        </Grid>
                    </Grid>
                <div className={styles.registerBtn}>
                    <Button variant="outlined">Modify Information</Button>
                    <div className={styles.registerCheckbox}>
                        <Checkbox/><Typography variant="body1" component="p">You have read and
                        agree to the "Youth AI Service Platform Service Terms"</Typography>
                    </div>
                </div>

            </Card>

        </div>
    );
}

export default PersonalInformation;