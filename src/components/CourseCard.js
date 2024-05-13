import * as React from 'react';
import Typography from "@mui/material/Typography";
import {Button, Card, CardContent} from "@mui/material";
import styles from './CourseCard.module.css';

function CourseCard({showDetail,title}) {
    return (
        <div>
            <Card className={styles.card}>
                <img className={styles.img}></img>
                <div className={styles.content}>
                    <CardContent className={styles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        {showDetail && <Typography variant="body2" color="textSecondary" component="p">
                            Course Introduction
                        </Typography> }
                    </CardContent>
                    {showDetail && <div className={styles.cardActions}>
                        <Typography variant="body2" color="textSecondary" className={styles.text}>
                            Number of class hours: 1
                        </Typography>
                        <Button size="small" variant="outlined" className={styles.button}>
                            MAKE AN APPOINTMENT
                        </Button>
                    </div> }
                </div>
            </Card>
        </div>
    );
}

export default CourseCard;