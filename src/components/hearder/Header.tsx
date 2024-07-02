import styles from './Header.module.css'
import imagemLogo from '../../assets/image-ignite.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Ignite</h1>
            <img src={imagemLogo} alt='Logotipo'/>
        </header>
    );
}