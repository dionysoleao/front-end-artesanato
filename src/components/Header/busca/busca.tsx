import styles from './styles.module.scss'

export function Busca () {
    return (
        <div className={styles.busca}>
            <div className={styles.busca__campo}>
                <form>
                    <input className={styles.busca__campo___input} type="text" placeholder='Buscar por' />
                    <select className={styles.busca__campo___select}>
                        <option value="artesaos">Artesãos</option>
                        <option value="produtos">Produtos</option>
                        <option value="povoado">Povoado</option>
                        <option value="cidade">Cidade</option>
                        <option value="material">Material</option>
                        <option value="Técnica">Técnica</option>
                    </select>
                </form>
            </div>
        </div>
    )
}