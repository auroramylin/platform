import * as React from 'react';
import {Typography} from "@mui/material";
import styles from "./ContactUsPage.module.css";


function ContactUsPage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <Typography gutterBottom variant="h5" component="h2">Contact us</Typography>
                <Typography variant="body1" component="p">
                    We're always here to help and answer any questions you might have. Feel free to reach out to us
                    through
                    any of the following channels:
                </Typography>
            </div>

            <div className={styles.content}>
                <Typography variant="body1" component="p">Phone: </Typography>
                <Typography variant="body1" component="p">+61 (08) XXXX XXXX</Typography>
            </div>
            <div className={styles.content}>
                <Typography variant="body1" component="p">Email: </Typography>
                <Typography variant="body1" component="p">info@gmail.com</Typography>
            </div>
            <div className={styles.content}>
                <Typography variant="body1" component="p">Address: </Typography>
                <Typography variant="body1" component="p">123 Your Street, Adelaide SA 5000,
                    Australia</Typography>
            </div>
        </div>
    )
}

export default ContactUsPage;