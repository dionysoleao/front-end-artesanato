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
            <div id="map" className={styles.mapa}></div>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly&channel=2" async></script>
            <script src="./maps.js" async></script>
        </div>
    )
}
