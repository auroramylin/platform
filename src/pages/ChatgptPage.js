import React from 'react';
import { Card, Autocomplete, TextField, InputAdornment, List, ListItem, ListItemText, Button } from "@mui/material";
import styles from "./ChatgptPage.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatgptCard from '../components/ChatgptCard';
import AIText from '../components/AIText';
import TextBox from '../components/TextBox';

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

    return (
        <React.Fragment>
            <div className={styles.container}>
                {/* left card */}
                <Card>
                    <div className={styles.buttonWrapper}>
                        <Button className={styles.button} variant="outlined">Model Selection</Button>
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
                <Card>
                    <AIText />
                    <ChatgptCard searchHistory={searchHistory} />
                    {/* text box */}
                    <div className={styles.textBoxWrapper}>
                        <TextBox />
                    </div>
                </Card>
            </div>
        </React.Fragment>
    );
}
export default ChatgptPage;
