import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../app.module.css'
import logo from '../logo.svg';


const Header = () => {
    return (   
        <div className={styles.header}>
            <MenuIcon style={{'width':'50px', 'height':'50px', 'padding':'10px', 'color':'white'}}/>
            <img className={styles.logo} src={logo} alt="complex" width='75px' height='75px'/>
            <div/>
        </div>
    )
}

export default Header;