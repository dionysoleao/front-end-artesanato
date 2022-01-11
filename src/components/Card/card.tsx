import styles from './styles.module.scss';

interface CardProps{
    key: number;
    imageURL?: string;
    name: string;
}

export function Card(props: CardProps){
    return(
        <div className={styles.card}>
            {props.imageURL ? <img src={props.imageURL} /> : <div className={styles.blankImg}></div>}
            <div></div><h1 className="data"> {props.name}</h1>
        </div>
    )
}