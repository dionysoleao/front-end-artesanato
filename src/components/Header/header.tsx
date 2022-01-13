import styles from './styles.module.scss'
import {Menu} from './menu/menu'
import { Busca } from './busca/busca'


export function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header}>
                <Menu />
                <Busca />
                
            </div>
            <img className={styles.mapa} src="/images/mapas.png" />
        </div>
    )
}