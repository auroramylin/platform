import React, { useState } from 'react';
import styles from './TextBox.module.css';
import { InputAdornment, IconButton, TextareaAutosize } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function TextBox() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            console.log('Submitted value:', inputValue);
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
    );
}

export default TextBox;