import * as React from 'react';
import { Grid, Typography, Button, Card, Autocomplete, TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./CourseDetails.module.css";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import courseImage from '../images/AI.jpeg';


const courses = [
    { title: 'Course 1' },
    { title: 'Course 2' },
    { title: 'Course 3' },
    { title: 'Course 4' },
    { title: 'aa' },
];


const treeData = [
    {
        id: 'chapter1',
        label: 'Chapter 1 Artificial Intelligence is Everywhere',
        children: [
            { id: 'section1.1', label: 'Section 1 Artificial Intellifence in Life' },
            { id: 'section1.2', label: 'Section 2' },
            { id: 'section1.3', label: 'Section 3' },
        ]
    },
    {
        id: 'chapter2',
        label: 'Chapter 2',
        children: [
            { id: 'section2.1', label: 'Section 1' },
            { id: 'section2.2', label: 'Section 2' },
        ]
    },
    {
        id: 'chapter3',
        label: 'Chapter 2',
        children: [
            { id: 'section3.1', label: 'Section 1' },
            { id: 'section3.2', label: 'Section 2' },
        ]
    },
    {
        id: 'chapter4',
        label: 'Chapter 2',
        children: [
            { id: 'section4.1', label: 'Section 1' },
            { id: 'section4.2', label: 'Section 2' },
        ]
    },
    {
        id: 'chapter5',
        label: 'Chapter 2',
        children: [
            { id: 'section5.1', label: 'Section 1' },
            { id: 'section5.2', label: 'Section 2' },
        ]
    },
    {
        id: 'chapter6',
        label: 'Chapter 2',
        children: [
            { id: 'section6.1', label: 'Section 1' },
            { id: 'section6.2', label: 'Section 2' },
        ]
    },
    {
        id: 'chapter7',
        label: 'Chapter 2'
    },
    {
        id: 'chapter8',
        label: 'Chapter 2'
    },

];

const renderTree = (nodes, handleTreeItemClick) => (
    <React.Fragment>
        {nodes.map((node) => (
            <TreeItem key={node.id} itemId={node.id} label={node.label}>
                {/* 只渲染第一层子节点，并阻止进一步展开 */}
                {Array.isArray(node.children) && node.children.length > 0
                    ? node.children.map((child) => (
                        <TreeItem
                            key={child.id}
                            itemId={child.id}
                            label={child.label}
                            onClick={() => handleTreeItemClick(child.label)}
                        />
                    ))
                    : null}
            </TreeItem>
        ))}
    </React.Fragment>
);

function CourseDetails() {

    const [selectedContent, setSelectedContent] = React.useState('');

    const handleTreeItemClick = (content) => {
        setSelectedContent(content);
    };

    return (
        <React.Fragment>
            <div className={styles.container}>
                <Card className={styles.catalogue}>
                    <Box className={styles.search}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            options={courses.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search for courses"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            sx={{ width: 300 }}
                        />
                    </Box>
                    <Typography className={styles.boldTypography} margin='4%' variant="h5" component="h2">Primary School</Typography>
                    <Box className={styles.tree}>
                        <SimpleTreeView>{renderTree(treeData, handleTreeItemClick)}</SimpleTreeView>
                    </Box>
                </Card>
                <div className={styles.rightContainer}>
                    <Card className={styles.introduction}>
                        <div className={styles.introductionHeader}>
                            <Typography className={styles.boldTypography} variant="h5" component="h2">{selectedContent}</Typography>
                            <Button className={styles.appointmentButton} variant="outlined">make an appointment</Button>
                        </div>
                        <p>content</p>
                    </Card>
                    <Card className={styles.details}>
                        <img src={courseImage} alt="courseImage"></img>
                        <div className={styles.detailsContent}>
                            <Typography className={styles.boldTypography} variant="h5" component="h2">Teaching Design for AI in Life</Typography>
                            <Typography marginTop='5%' variant="body1">Course start time: </Typography>
                            <Typography marginTop='5%' variant="body1">Lesson: 5 hours</Typography>
                            <Grid container spacing={2} style={{ marginTop: '70%' }}>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        Number of Reservations: 5
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        Number of Collections: 5
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CourseDetails;