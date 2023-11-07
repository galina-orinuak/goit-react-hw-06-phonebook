import { Link, NavLink } from "react-router-dom";
// import { BiCameraMovie } from "react-icons/bi";
import styles from './Header.module.css'



export const Header =()=>{
    return <header className={styles.header}>

        <Link to="/">
            <div className={styles.headerIcon}>
                  </div>
            </Link>
            <nav className={styles.headerNav}> 
                <div><NavLink className={styles.headerLinkHome} to='/'>Home</NavLink></div>
                <div><NavLink className={styles.headerLinkMovies} to='/movies'>Movies</NavLink></div>
            </nav>

    </header>
};