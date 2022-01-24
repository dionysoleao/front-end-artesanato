import { useEffect, useState } from 'react';
import { Card } from './card'
import styles from './styles.module.scss';


export function Cards(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic ZGlvbnlzb2xlYW9AZ21haWwuY29tOjEyMzQ1Ng==");

    
    const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://artesanato.plano-b.com/admin/conteudo/@type/Person/@pp/35?format=json", {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      })
    .then(response => response.json())
    .then(data => setCards(data))
    }, [])

    return(
        <div className={styles.cards__container}>
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
            <div className={styles.slide_balls}>
                <div className={styles.slide_balls__slideball___selected}></div>
                <div className={styles.slide_balls__slideball}></div>
                <div className={styles.slide_balls__slideball}></div>
                <div className={styles.slide_balls__slideball}></div>
                
            </div>
            <img className={styles.grafico} src="/images/grafico.png" />
        </div>

  ) 
}