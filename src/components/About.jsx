import styles from '../styles/components/about.module.css';
import { FaArrowCircleDown } from 'react-icons/fa';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.title}>
                <h3>About me</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img className={styles.img} src="/public/img/avatar.jpg" alt="" width="300px"/>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.h3}>I'am Alberto</h3>
                    <span className={styles.span}>Full Stack Developer</span>
                    {/* <p className={styles.p}>I am a Full-Stack developer from Córdoba, Argentina. I am self-taught from the beginning, relying on different educational platforms. Passionate about technology, I am passionate about improving my coding skills and developing applications, systems and websites. I build WebApps and Websites using PERN Stack, among other technologies.</p> */}
                    <p className={styles.p}>Soy un desarrollador de Córdoba, Argentina. Autodidacta desde mis inicios, me adentré en este mundo hace alrededor de 5 años, iniciando con cursos dictados por la Univesidad Tecnológica Nacional y apoyándome en distintas plataformas educativas online y creadores de contenido Tech. 
Soy un apasionado por la tecnología y por el aprendizaje, me mantengo en constante formación para mejorar mis habilidades de codificación y lograr mejores resultados en mis desarrollos.
He trabajo en equipos de hasta doce personas, ocupandome del Front-end, logrando llevar adelante distintas aplicaciones web entregadas en tiempo y forma; también he estado al frente de diversos proyectos haciendome cargo de las distintas etapas tales como el diseño, desarrollo e implementación.</p>
                    <button className={styles.button}>Download CV <span className={styles.span}><FaArrowCircleDown /></span></button>
                </div>
            </div>
        </div>
    )
}

export default About