import { BsArrowDown, BsLinkedin, BsInstagram, BsFacebook, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { FaArrowCircleDown } from 'react-icons/fa'
import styles from '../styles/components/home.module.css';

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.homeLeft}>
                <h2 className={styles.h2}>Hi there, I am Alberto Bogino</h2>
                <p className={styles.p}>I am into <span className={styles.span}>development web</span></p>
                <button className={styles.button}>Download CV <span className={styles.span}><FaArrowCircleDown /></span></button>
                <div className={styles.div}>
                    <ul className={styles.ul}>
                        <li>
                            <BsLinkedin className={styles.icon}/>
                        </li>
                        <li>
                            <BsGithub className={styles.icon}/>
                        </li>
                        <li>
                            <BsInstagram className={styles.icon}/>
                        </li>
                        <li>
                            <BsFacebook className={styles.icon}/>
                        </li>
                        <li>
                            <BsWhatsapp className={styles.icon}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.homeRight}>
                <div className={styles.photo}>
                    <img src="/public/img/avatar.jpg" alt="Photo" width="250px" className={styles.img}/>               
                </div>
            </div>
        </section>
    )
}

export default Home;