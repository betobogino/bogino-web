import { BsWordpress, BsFacebook, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import styles from '../styles/components/header.module.css';

const Header = () => {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            header.style.backgroundColor = "black";
        } else {
            header.style.backgroundColor = "transparent";
        }
    })
    return (
        <header className={styles.header}>
            <a href="" className={styles.a}>
                Bogino Web
            </a>    
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.active}>Home</li>    
                    <li>About</li>
                    <li>Skills</li>
                    <li>Education</li>
                    <li>Work</li>
                    <li>Experience</li>
                    <li>Contact</li>  
                </ul>
            </nav>
        </header>
    )
}

export default Header