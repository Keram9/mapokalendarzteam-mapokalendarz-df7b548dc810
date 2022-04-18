import React from 'react';
import styles from '@styles/Home.module.css'

interface FooterProps extends React.ButtonHTMLAttributes<HTMLElement> { }

export default (props: FooterProps) => (<footer {...props} className={styles.footer}></footer>);