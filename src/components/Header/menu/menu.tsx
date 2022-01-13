import styles from './styles.module.scss'

export function Menu () {
    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li><a href="">Sobre o Projeto</a></li>
                <li><a href="">Artesãos</a></li>
                <li><a href="">Artigos</a></li>
                <li><a href="">Glosário</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </div>
    )
}