import styles from './styles.module.scss'

export function Card(){
    return(
        <div className={styles.card}>
        <span className={styles.card__type}>Bordado</span>
        <span className={styles.card__title}>Colete</span>
        <div className={styles.card__details}>
            <span className={styles.card__material}>Veludo, miçanga, canutilho</span>
            <span className={styles.card__tecnica}>Bordado à mão</span>
            <span className={styles.card__time}>Tempo est. 1 unid./ 3 meses</span>
        </div>
        </div>
    )
}