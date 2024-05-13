import * as React from 'react';
import {routeMap} from "../routeMap";
import styles from './Header.module.css';
import {Toolbar, Button,Typography} from "@mui/material";
import bannerImage from '../images/course3.jpeg';


const headerContent = [
    {
        title: 'Home page',
        url: routeMap.homepage
    },
    {
        title: 'Course resources',
        url: routeMap.courseResources
    },
    {
        title: 'Function usage',
        url: routeMap.functionUsage
    },
    {
        title: 'Contact us',
        url: routeMap.contactUs
    }
]

function Header() {
    return (
        <div>
        <div className={styles.container}>
            <Toolbar className={styles.toolbar}>
                <div className={styles.logoPlaceholder} />
                <div className={styles.menu}>
                    {headerContent.map(item => (
                        <Button color="inherit" href={item.url}>
                           {item.title}
                        </Button>
                    ))}
                </div>
                <div className={styles.login}>
                    <Button  variant="text" href={routeMap.login}>Login</Button>
                    <Button  variant="text" href={routeMap.register}>Register</Button>
                    <Button  variant="text" href={routeMap.personalInfo}>Info</Button>
                </div>
            </Toolbar>
        </div>
            <div className={styles.media}>
                <img src={bannerImage} alt="Banner" />
                <Typography variant="h3" component="p">Youth AI Learning Platform</Typography>
            </div>
        </div>
    );
}

export default Header;
