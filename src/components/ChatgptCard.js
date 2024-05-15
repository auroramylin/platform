import { Card, Typography } from '@mui/material';
import * as React from 'react';
import styles from './ChatgptCard.module.css';

function ChatgptCard({ searchHistory }) {
    return (
        <React.Fragment>
            <div className={styles.cardContainer}>
                {searchHistory.map((item, index) => (
                    <Card key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <img className={styles.img} src={item.image} alt={item.image} />
                            <Typography className={styles.textContent} gutterBottom variant="body1" component="div">
                                {item.text}
                            </Typography>
                        </div>
                    </Card>
                ))}
            </div>
        </React.Fragment>
    );
}

export default ChatgptCard;