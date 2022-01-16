import styles from './styles.module.scss'
import {Menu} from './menu/menu'
import { Busca } from './busca/busca'
export function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header}>
                <Menu />
                <Busca />
                <iframe className={styles.mapa} src="https://api.mapbox.com/styles/v1/dionysoleao/ckydjqpfb6knv14ru3adduamv.html?title=false&access_token=pk.eyJ1IjoiZGlvbnlzb2xlYW8iLCJhIjoiY2t5ZGpuYWVtMDJwcDJ3cGg2cXlycTc4biJ9.x4wBIGutG9Bz3DvfmssDNw&zoomwheel=false#9.37/-2.2917/-44.7871" title="Basic" ></iframe>
            </div>
        </div>
    )
}