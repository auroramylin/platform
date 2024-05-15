import * as React from 'react';
import { Card, Button, Divider, Typography } from '@mui/material';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import styles from './ModelSelectionCard.module.css';

const buttonTexts = ['Model one', 'Model two', 'Model three'];

function ModelSelectionCard() {

    return (
        <React.Fragment>
            <Card>
                <div className={styles.textDiv}>
                    <Typography
                        variant="h6"
                        component="div">
                        Model Selection
                    </Typography>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.buttonDiv}>
                    {buttonTexts.map((text, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            startIcon={<ModelTrainingIcon />}
                            className={`${styles.buttons} ${styles.modelButton}`}>
                            {text}
                        </Button>
                    ))}
                </div>
            </Card>
        </React.Fragment>
    )
}

export default ModelSelectionCard;