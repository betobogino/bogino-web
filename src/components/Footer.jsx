import styles from '../styles/components/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <span>Bogino Web Enterprise</span>
                    <p>
                        Gracias por visitar mi portfolio web. Sígueme en mis redes sociales y no dudes en contactarme si lo crees necesario.
                    </p>
                </div>
                <div className={styles.right}>
                    <span>Información de contacto</span>
                    <p>boginoweb@gmail.com</p>
                    <p>+54 9 3571 638789</p>
                    <div>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>Disegned with ♥ by Alberto Bogino</p>
            </div>
        </div>
    )
}

export default Footer