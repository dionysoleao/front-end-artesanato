import styles from './styles.module.scss';

interface CardProps{
    key: number;
    imageURL?: string;
    name: string;
}

export function Card(props: CardProps){
    if(props.imageURL){
    return(
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img className={styles.card__image___img} src={props.imageURL} />
            </div>
            
            <div className={styles.card__description}>
                <h2 className={styles.description__name}> {props.name}</h2>
                <h3 className={styles.description__nickname}>(Ceberé)</h3>
                <h4 className={styles.description__local}>genipaúba / guimarães</h4>
            </div>
        </div>
    )
} else{
    return null
}
}