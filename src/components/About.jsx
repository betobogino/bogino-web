import styles from '../styles/components/about.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.top}>
                <h2 className={styles.h2}>About Me</h2>
                <img className={styles.img} src="/public/img/avatar.jpg" alt="" width="350px"/>
            </div>
            <div className={styles.bottom}>
                <h3>I'am Alberto</h3>
                <span>Full Stack Developer</span>
                <p>I am a Full-Stack developer from Córdoba, Argentina. I am self-taught from the beginning, relying on different educational platforms. Passionate about technology, I am passionate about improving my coding skills and developing applications, systems and websites. I build WebApps and Websites using PERN Stack, among other technologies.</p>
                {/* <p>Soy un desarrollador Full-Stack de Córdoba, Argentina. Soy autodidacta desde mis inicios, apoyandome en distintas plataformas educativas. Apasionado por la tecnología, me apasiona mejorar mis habilidades de codificación y desarrollar aplicaciones, sistemas y sitios web. Construyo WebApps y Sitios Web usando PERN Stack, entre otras tecnologías.</p> */}
            </div>
        </div>
    )
}

export default About