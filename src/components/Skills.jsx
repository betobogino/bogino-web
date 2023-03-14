import styles from '../styles/components/skills.module.css';
import { listSkills } from '../services/listSkills.js';

const Skills = () => {
    return (
        <div className={styles.skills}>
            <h3 className={styles.h3}>Skills & Habilities</h3>
            <div className={styles.wrapper}>
                {listSkills.map(skill => {
                    return(
                        <div key={skill.id} className={styles.skill}>
                            <img className={styles.icon} src={skill.icon} alt="" />
                            <p className={styles.name}>{skill.name}</p>
                        </div>   
                    )}
                )}    
            </div>        
        </div>
    )
}

export default Skills