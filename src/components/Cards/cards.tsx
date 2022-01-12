import { useEffect, useState } from 'react';
import { Card } from './card'
import styles from './styles.module.scss';


export function Cards(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch('https://61df66c3dde77d6d33aaf15a--xenodochial-kilby-f3a1c4.netlify.app/api/1.0/pessoas')
    .then(response => response.json())
    .then(data => setCards(data))
    }, [])

    return(
        <>
            <h1 className={styles.cards__header}>353 artesãos encontrados</h1>
            <div className={styles.cards}>
                {cards.map(card => {
                return(       
                    <Card 
                    key={card['@id']} 
                    name={card['@name']}
                    imageURL={card['_image'] ? card['_image'][0].url : "" } />
                )
                })}
            </div>
        </>

  ) 
}