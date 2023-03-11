import { BsWordpress, BsFacebook, BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <header>
            <a href="">
                <BsWordpress />
                Bogino
            </a>    
            <nav>
                <img src="/public/img/logo.png" alt="" width="50px"/>
                <ul>
                    <li>Home</li>
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