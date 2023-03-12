import { BsWordpress, BsFacebook, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import styles from '../styles/components/header.module.css';

const Header = () => {
    return (
        <header>
            <a href="">
                Bogino Web
            </a>    
            <nav>
                <ul>
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