import React from 'react';
import styles from './HomePage.module.css';
import { Grid, Typography, Tabs, Tab } from '@mui/material';
import CourseCard from "../components/CourseCard";
import ChatgptPage from './ChatgptPage';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleCardClick = (title) => {
        if (title === 'Text generated images') {
            navigate('/text-generated-images');
        } else if (title === 'Image generation image') {
            navigate('/image-generated-text');
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Typography gutterBottom variant="h5" component="h2" className={styles.title}>
                    Course resources
                </Typography>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="AI Art" />
                    <Tab label="chatgpt" />
                </Tabs>
            </div>

            <div role="tabpanel" hidden={value !== 0}>
                <Grid container spacing={6}>
                    {[0, 1, 2].map((index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <CourseCard showDetail title="Course Name" />
                        </Grid>
                    ))}
                </Grid>
                <div className={styles.split}></div>
                <Grid container spacing={6}>
                    {["Image generation image", "Text generated images"].map((title) => (
                        <Grid item key={title} xs={12} sm={6} md={4}>
                            <CourseCard showDetail={false} title={title}
                                onClick={() => handleCardClick(title)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div role="tabpanel" hidden={value !== 1}><ChatgptPage /></div>

        </div>
    );
};

export default HomePage;