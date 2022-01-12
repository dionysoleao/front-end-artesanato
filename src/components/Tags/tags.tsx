import styles from './styles.module.scss'

export function Tags() {
    return (
        <div className={styles.tags}>
            <div className={styles.tags__content}>
                <span className={styles.tag}>
                    Jenipaúba
                    <span className={styles.tag__complement}>POVOADO</span>
                    <span className={styles.tag__complement___close}>X</span>
                </span>
                
            </div>
        </div>
    )
}