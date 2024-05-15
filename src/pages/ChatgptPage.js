import React, { useState } from 'react';
import {Card, Button, Autocomplete, TextField, InputAdornment, List, ListItem, ListItemText, IconButton, TextareaAutosize } from "@mui/material";
import styles from "./ChatgptPage.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatgptCard from '../components/ChatgptCard';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import AIText from '../components/AIText';

const searchHistory = [
    {
        image: '',
        text: 'What is Youth AIWhat is Youth AIWhat is Youth AIWhat is Youth AIWhat is Youth AIWhat is Youth AI'
    },
    {
        image: '',
        text: 'How to use Youth AI'
    },
    {
        image: '',
        text: 'Benefits of Youth AI'
    },
    {
        image: '',
        text: 'Search Result 4'
    }
];

function ChatgptPage() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const navigate = useNavigate();

    const handleModelSelectionClick = () => {
        navigate('/model-selection');
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            console.log('Submitted value:', inputValue);
            // 在这里处理提交的逻辑
            setInputValue('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    };
    return (
        <React.Fragment>
            <div className={styles.container}>
                {/* left card */}
                <Card>
                    <div className={styles.buttonWrapper}>
                        <Button className={styles.button} onClick={handleModelSelectionClick} variant="outlined">Model Selection</Button>
                    </div>
                    <div className={styles.searchWrapper}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            options={[]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search History"
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
                            sx={{ width: 350 }}
                        />
                    </div>
                    <div className={styles.list}>
                        <List>
                            {searchHistory.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Card>
                {/* right card */}
                <Card className={styles.mainSection}>
                    <AIText />
                    <ChatgptCard searchHistory={searchHistory} />
                    {/* text box */}
                    <div className={styles.textAreaDiv}>
                        <TextareaAutosize
                            className={styles.textArea}
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Please Enter"
                            minRows={1}
                            maxRows={4}
                        />
                        {inputValue.trim() !== '' && (
                            <InputAdornment position="end" className={styles.inputAdornment}>
                                <IconButton onClick={handleSubmit} edge="end" color="primary">
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        )}
                    </div>
                </Card>
            </div>
        </React.Fragment>
    );
}
export default ChatgptPage;
