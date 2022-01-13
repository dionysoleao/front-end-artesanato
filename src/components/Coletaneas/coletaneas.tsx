import { Card } from './card/card'
import styles from './styles.module.scss'

export function Coletaneas(){
    return(
        <div className={styles.coletaneas}>
                <h2 className={styles.coletaneas__title}>Coletâneas de Personalidades</h2>
                <div className={styles.cards}>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                   
                </div>
        </div>
    )
}