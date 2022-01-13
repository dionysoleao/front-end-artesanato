import { Card } from './card/card'
import styles from './styles.module.scss'

export function Artigos(){
    return (
        <div className={styles.artigos__container}>
            <div className={styles.artigos}>
                <h2 className={styles.artigos__title}>Artigos</h2>
                <div className={styles.cards}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                   

                </div>
            </div>
        </div>
    )
}