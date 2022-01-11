import { useEffect, useState } from 'react';
import { Card } from './card'
import styles from './styles.module.scss';


export function Cards(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/api/1.0/pessoas')
    .then(response => response.json())
    .then(data => setCards(data))
    }, [])


    const [data, setdata] = useState({});

let reqBody = JSON.stringify({
      "search": {
        "@type": "CreativeArtworkFurnas",
        "@status": ["{$content.status.public}", "{$content.status.private}"]
      },
      "fields": {
        "@id": {},
        "@type": {},
        "@name": {},
        ":properties": {
          "fields": {
            "@language": {},
            "@label": {}
          }
        },
        ":relations": {
          "fields": {
            "@id":{},
            "@type":{},
            "@name":{}, 

          }
        },
        "@relations": {
          "search": {
            "@type": {
              "or": [
                "ImageObject",
                "VideoObject"
              ]
            }
          },
          "fields": {
            "thumbnailUrl": {}
          },
          "filter": {
            "pp": 1,
            "orderBy": "@.order",
            "orderDir": "asc"
          }
        }
      },
      "filter": {
        "pp": 8,
        // "orderBy": "@relevance",
        // "orderDir": "asc",
      }
    });

        useEffect(() => {
    fetch(`https://staging.memoriadaeletricidade.com.br/api/1.0/legacy-query?query=${reqBody}`)
    .then(response => response.json())
    .then(data => setData(data), console.log(data))
    }, [])


    return(
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
  ) 
}