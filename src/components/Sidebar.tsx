import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
            />

            <div className={styles.profile}>
                <Avatar src='https://www.github.com/erickggarcia.png' />
                <strong>Erick Garcia</strong>
                <span>Web Developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}