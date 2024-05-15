import * as React from 'react';
import { chatgptContent, helloAI } from '../constants/general';
import { Typography } from '@mui/material';
import styles from './AIText.module.css';
function AIText() {

    return (
        <React.Fragment>
            <Typography fontWeight='bold' margin='2%' variant="h5" component="h2">{helloAI}</Typography>
            <div className={styles.textContent}>
                <Typography variant="body1" component="body1">
                    {chatgptContent}
                </Typography>
            </div>
        </React.Fragment>
    );
}

export default AIText;