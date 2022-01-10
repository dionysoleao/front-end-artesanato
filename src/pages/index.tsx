import Head from 'next/head'
import { Card } from '../components/card'
import {createServer} from 'miragejs'
import { useEffect, useState } from 'react';

createServer({
  routes(){
    this.namespace="api/1.0";
    this.get('/pessoas', () => {
      return [{"@id":"50549","@type":"Person","@active":"1","@visible":"1","@name":"teste ","@status":"100","@dateCreation":"2022-01-06 18:59:35","@dateUpdate":"2022-01-06 18:59:35","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16976","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Pedro Costa Viana (Pedro Currupira)","@status":"100","@dateCreation":"2021-11-19 18:14:31","@dateUpdate":"2022-01-06 02:24:34","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55870","versions":["thumb","screen"]}],"@totalRelations":{"content":6,"relations":6,"summary":{"ImageObject":{"content":"1","relation":"1"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"17000","@type":"Person","@active":"1","@visible":"1","@name":"Sidinaldo Sousa Louzeiro e Louzeiro ","@status":"100","@dateCreation":"2021-11-19 18:14:38","@dateUpdate":"2022-01-06 02:24:02","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55900","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55903","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55906","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55909","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55912","versions":["thumb","screen"]}],"@totalRelations":{"content":10,"relations":10,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16993","@type":"Person","@active":"1","@visible":"1","@name":"Pedro Amorim (Ceber\u00e9)","@status":"100","@dateCreation":"2021-11-19 18:14:36","@dateUpdate":"2022-01-06 02:23:34","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55888","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55891","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55894","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55897","versions":["thumb","screen"]}],"@totalRelations":{"content":10,"relations":10,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16982","@type":"Person","@active":"1","@visible":"1","@name":"Mizael Cantanhede Barros ","@status":"100","@dateCreation":"2021-11-19 18:14:32","@dateUpdate":"2022-01-06 02:22:53","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55873","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55876","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55879","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55882","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55885","versions":["thumb","screen"]}],"@totalRelations":{"content":16,"relations":16,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"10","relation":"10"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16941","@type":"Person","@active":"1","@visible":"1","@name":"Maria Ant\u00f4nia Martins","@status":"100","@dateCreation":"2021-11-19 18:14:21","@dateUpdate":"2022-01-06 02:20:16","_image":null,"@totalRelations":{"content":3,"relations":3,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16650","@type":"Person","@active":"1","@visible":"1","@name":"Erlan Vieira de Sousa (Homem do Jac\u00e1)","@status":"100","@dateCreation":"2021-11-19 18:12:58","@dateUpdate":"2022-01-06 00:47:51","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16358","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Raimundo Vieira da Silva (Medonh\u00e3o)","@status":"100","@dateCreation":"2021-11-19 18:11:40","@dateUpdate":"2022-01-05 23:32:44","_image":null,"@totalRelations":{"content":6,"relations":6,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16353","@type":"Person","@active":"1","@visible":"1","@name":"Jo\u00e3o Teixeira da Cruz","@status":"100","@dateCreation":"2021-11-19 18:11:38","@dateUpdate":"2022-01-05 23:32:25","_image":null,"@totalRelations":{"content":5,"relations":5,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16344","@type":"Person","@active":"1","@visible":"1","@name":"Jo\u00e3o Alves da Silva (Jo\u00e3oz\u00e3o)","@status":"100","@dateCreation":"2021-11-19 18:11:36","@dateUpdate":"2022-01-05 23:32:00","_image":null,"@totalRelations":{"content":7,"relations":7,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"6","relation":"6"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"}]
    })
  }
})

export default function Home() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/1.0/pessoas')
    .then(response => response.json())
    .then(data => setCards(data))
}, [])

  return (
    <>
      <Head>
        <title>Yeah!</title>
      </Head>
      <div className="Cards">
        {cards.map(card => {
          return(       
            <Card 
              key={card.id}
              id={card['@id']} 
              name={card['@name']}
              imageURL={card['_image']['url'] || ""} />
          )
        })}
      </div>
    </>
  )
}
