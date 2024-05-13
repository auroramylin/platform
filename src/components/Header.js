import * as React from 'react';
import {routeMap} from "../routeMap";
import styles from './Header.module.css';
import Typography from '@mui/material/Typography';


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
            <div className={styles.header}>
                <div className={styles.logo}>logo</div>
                <div className={styles.menu}>
                    {headerContent.map(item => (
                        <a className={styles.link} href={item.url}>
                            <span>{item.title}</span>
                        </a>
                    ))}
                </div>
                <a href="/login" className={styles.login}>Login</a>
                <a href="/register" className={styles.login}>Register</a>
            </div>
            <div className={styles.content}><Typography variant="h3">Youth AI learning platform</Typography></div>
        </div>
    );
}

export default Header;
