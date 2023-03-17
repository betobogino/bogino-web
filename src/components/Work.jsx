import styles from '../styles/components/work.module.css';
import { projects } from '../services/projects.js';

const Work = () => {
    return (
        <div className={styles.work}>
            <div className={styles.header}>
                <h3 className={styles.title}>My projects</h3>
            </div>
            <div className={styles.body}>
                {
                    projects.map(project => {
                        return (
                            <div key={project.id} className={styles.project}>
                                <img src={project.img} alt="" className={styles.img}/>
                                <div className={styles.content}>
                                    <div className={styles.name}>
                                        <h4>{project.name}</h4>
                                    </div>
                                    <div className={styles.description}>
                                        <p>{project.description}</p>
                                        <div>
                                            <a href="">View</a>
                                            <a href="">Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work