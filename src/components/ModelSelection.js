import { Card, Button, Divider, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './ModelSelection.module.css';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import AIText from '../components/AIText';

const buttonTexts = ['Model one', 'Model two', 'Model three'];

function ModelSelection() {

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
            <React.Fragment className={styles.leftCard}>
                <Card>
                    <div className={styles.buttonWrapper}>
                        <Button className={`${styles.button} ${styles.modelSelectionButton}`} variant="outlined" disabled>
                            Model Selection
                        </Button>
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
            <React.Fragment className={styles.rightCard}>
                <Card>
                    <AIText />
                    <div className={styles.textArea}>
                        <TextField
                            label="Please enter text"
                            value={inputText}
                            onChange={handleInputChange}
                            multiline
                            rows={18}
                            className={styles.textField} // 应用 CSS 样式
                            InputProps={{
                                className: styles.textFieldInput, // 应用输入框样式
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
            </React.Fragment>
        </div>
    );
}

export default ModelSelection;