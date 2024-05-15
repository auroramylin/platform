import { Card, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './TextGeneratedImages.module.css';
import AIText from '../components/AIText';
import ModelSelectionCard from '../components/ModelSelectionCard';


function TextGeneratedImages() {

    const [inputText, setInputText] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleGenerate = () => {
        setGeneratedImage('generated_image.png');
    };
    return (
        <div className={styles.container}>
            <React.Fragment>
                <ModelSelectionCard />
            </React.Fragment>
            <Card>
                <AIText />
                <div className={styles.textArea}>
                    <TextField
                        label="Please enter text"
                        value={inputText}
                        onChange={handleInputChange}
                        multiline
                        rows={18}
                        className={styles.textField}
                        InputProps={{
                            className: styles.textFieldInput,
                        }}
                    />
                    <div className={styles.generateButton}>
                        <Button variant="contained" onClick={handleGenerate}>
                            Generate
                        </Button>
                    </div>
                    {generatedImage ? (
                        <img src={generatedImage} className={styles.img} alt="Generated" />
                    ) : (
                        <div className={styles.img}>
                            <span className={styles.placeholderText}>Generating effect display</span>
                        </div>)}
                </div>
            </Card>
        </div>
    );
}

export default TextGeneratedImages;