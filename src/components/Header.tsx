import styles from './Header.module.css'
import igniteLogo from '../img/ignite-logo.svg'
console.log(styles.header)
export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logotipo do ignite' />
        </header>
    )
}