import { Card, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from './ImageGeneratedText.module.css';
import AIText from '../components/AIText';
import ModelSelectionCard from '../components/ModelSelectionCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextBox from '../components/TextBox';

function ImageGeneratedText() {
    const [generatedText, setGeneratedText] = useState('');

    const handleGenerate = () => {
        const text = 'Generated text goes here...';
        setGeneratedText(text);
    };

    return (
        <div className={styles.container}>
            <React.Fragment>
                <ModelSelectionCard />
            </React.Fragment>
            <Card>
                <AIText />
                <div className={styles.generateArea}>
                    <div className={styles.uploadArea}>
                        <label htmlFor="uploadInput" className={styles.uploadLabel}>
                            <div className={styles.uploadContent}>
                                <CloudUploadIcon className={styles.uploadIcon} />
                                <span className={styles.uploadText}>Upload Image</span>
                            </div>
                            <input id="uploadInput" type="file" accept="image/*" className={styles.uploadInput} />
                        </label>
                    </div>
                    <div className={styles.generateButton}>
                        <Button variant="contained" onClick={handleGenerate}>
                            Generate
                        </Button>
                    </div>
                    <div className={styles.textDisplayArea}>{generatedText}</div>
                </div>
                <div className={styles.textBoxWrapper}>
                    <TextBox />
                </div>
            </Card>
        </div>
    );
}

export default ImageGeneratedText;