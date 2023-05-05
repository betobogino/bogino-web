import { BsArrowDown, BsLinkedin, BsInstagram, BsFacebook, BsGithub, BsWhatsapp } from 'react-icons/bs';
import styles from '../styles/components/home.module.css';

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <h1 className={styles.h1}>Hi there, I am Alberto Bogino</h1>
                <p className={styles.p}>I am into <span className={styles.span}>development web</span></p>
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
        </section>
    )
}

export default Home;