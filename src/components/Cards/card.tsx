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
                <h1 className="data"> {props.name}</h1>
            </div>
        </div>
    )
} else{
    return null
}
}