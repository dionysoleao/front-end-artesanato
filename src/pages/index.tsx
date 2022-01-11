import Head from 'next/head'
import {createServer} from 'miragejs'
import { Cards } from '../components/Card/cards';
import { Header } from '../components/header/header';

createServer({
  routes(){
    this.namespace="api/1.0";
    this.get('/pessoas', () => {
      return [{"@id":"50549","@type":"Person","@active":"1","@visible":"1","@name":"teste ","@status":"100","@dateCreation":"2022-01-06 18:59:35","@dateUpdate":"2022-01-06 18:59:35","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16976","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Pedro Costa Viana (Pedro Currupira)","@status":"100","@dateCreation":"2021-11-19 18:14:31","@dateUpdate":"2022-01-06 02:24:34","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55870","versions":["thumb","screen"]}],"@totalRelations":{"content":6,"relations":6,"summary":{"ImageObject":{"content":"1","relation":"1"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"17000","@type":"Person","@active":"1","@visible":"1","@name":"Sidinaldo Sousa Louzeiro e Louzeiro ","@status":"100","@dateCreation":"2021-11-19 18:14:38","@dateUpdate":"2022-01-06 02:24:02","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55900","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55903","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55906","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55909","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55912","versions":["thumb","screen"]}],"@totalRelations":{"content":10,"relations":10,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16993","@type":"Person","@active":"1","@visible":"1","@name":"Pedro Amorim (Ceber\u00e9)","@status":"100","@dateCreation":"2021-11-19 18:14:36","@dateUpdate":"2022-01-06 02:23:34","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55888","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55891","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55894","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55897","versions":["thumb","screen"]}],"@totalRelations":{"content":10,"relations":10,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16982","@type":"Person","@active":"1","@visible":"1","@name":"Mizael Cantanhede Barros ","@status":"100","@dateCreation":"2021-11-19 18:14:32","@dateUpdate":"2022-01-06 02:22:53","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55873","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55876","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55879","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55882","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/55885","versions":["thumb","screen"]}],"@totalRelations":{"content":16,"relations":16,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"10","relation":"10"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16941","@type":"Person","@active":"1","@visible":"1","@name":"Maria Ant\u00f4nia Martins","@status":"100","@dateCreation":"2021-11-19 18:14:21","@dateUpdate":"2022-01-06 02:20:16","_image":null,"@totalRelations":{"content":3,"relations":3,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16650","@type":"Person","@active":"1","@visible":"1","@name":"Erlan Vieira de Sousa (Homem do Jac\u00e1)","@status":"100","@dateCreation":"2021-11-19 18:12:58","@dateUpdate":"2022-01-06 00:47:51","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16358","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Raimundo Vieira da Silva (Medonh\u00e3o)","@status":"100","@dateCreation":"2021-11-19 18:11:40","@dateUpdate":"2022-01-05 23:32:44","_image":null,"@totalRelations":{"content":6,"relations":6,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16353","@type":"Person","@active":"1","@visible":"1","@name":"Jo\u00e3o Teixeira da Cruz","@status":"100","@dateCreation":"2021-11-19 18:11:38","@dateUpdate":"2022-01-05 23:32:25","_image":null,"@totalRelations":{"content":5,"relations":5,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"16344","@type":"Person","@active":"1","@visible":"1","@name":"Jo\u00e3o Alves da Silva (Jo\u00e3oz\u00e3o)","@status":"100","@dateCreation":"2021-11-19 18:11:36","@dateUpdate":"2022-01-05 23:32:00","_image":null,"@totalRelations":{"content":7,"relations":7,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"6","relation":"6"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"13637","@type":"Person","@active":"1","@visible":"1","@name":"Manuel C\u00e2ndido de Assun\u00e7\u00e3o","@status":"100","@dateCreation":"2021-11-19 18:01:05","@dateUpdate":"2022-01-02 15:02:13","_image":null,"@totalRelations":{"content":19,"relations":19,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"18","relation":"18"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"13959","@type":"Person","@active":"1","@visible":"1","@name":"Maria Francisca Ferreira (Chica)","@status":"100","@dateCreation":"2021-11-19 18:02:27","@dateUpdate":"2022-01-02 15:00:14","_image":null,"@totalRelations":{"content":12,"relations":12,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"11","relation":"11"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"13972","@type":"Person","@active":"1","@visible":"1","@name":"Teresa Miranda (Jal\u00e1)","@status":"100","@dateCreation":"2021-11-19 18:02:30","@dateUpdate":"2022-01-02 14:59:53","_image":null,"@totalRelations":{"content":4,"relations":4,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"3","relation":"3"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"13976","@type":"Person","@active":"1","@visible":"1","@name":"I\u00e2ndala Silva","@status":"100","@dateCreation":"2021-11-19 18:02:31","@dateUpdate":"2022-01-02 14:59:34","_image":null,"@totalRelations":{"content":7,"relations":7,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"6","relation":"6"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"5634","@type":"Person","@active":"1","@visible":"1","@name":"Sebastiana Vieira da Silva Ribeiro (Sess\u00e9)","@status":"100","@dateCreation":"2021-11-19 17:38:32","@dateUpdate":"2021-12-31 00:50:06","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"5718","@type":"Person","@active":"1","@visible":"1","@name":"Miguel dos Anjos Campelo","@status":"100","@dateCreation":"2021-11-19 17:38:42","@dateUpdate":"2021-12-31 00:43:14","_image":null,"@totalRelations":{"content":5,"relations":5,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"5593","@type":"Person","@active":"1","@visible":"1","@name":"Benedito de Nazar\u00e9 Ribeiro Verde (Calabar)","@status":"100","@dateCreation":"2021-11-19 17:38:26","@dateUpdate":"2021-12-31 00:34:51","_image":null,"@totalRelations":{"content":4,"relations":4,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"3","relation":"3"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"2382","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Joaquim Amorim Costa (Minho)","@status":"100","@dateCreation":"2021-11-19 17:31:33","@dateUpdate":"2021-12-21 16:22:25","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48379","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48394","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48391","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48388","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48385","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/48382","versions":["thumb","screen"]}],"@totalRelations":{"content":11,"relations":11,"summary":{"ImageObject":{"content":"6","relation":"6"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"34893","@type":"Person","@active":"1","@visible":"1","@name":"Antonio Jos\u00e9 Mendes Travasso (Z\u00e9 N\u00e3o Banha)","@status":"100","@dateCreation":"2021-11-19 21:17:03","@dateUpdate":"2021-12-20 23:03:25","_image":null,"@totalRelations":{"content":10,"relations":10,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"9","relation":"9"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"17223","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 de Ribamar Rodrigues Concei\u00e7\u00e3o (Rodrig\u00e3o)","@status":"100","@dateCreation":"2021-11-19 18:15:39","@dateUpdate":"2021-12-17 00:54:16","_image":null,"@totalRelations":{"content":2,"relations":2,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"23822","@type":"Person","@active":"1","@visible":"1","@name":"Deusirene Rodrigues Pereira (Ded\u00e9)","@status":"100","@dateCreation":"2021-11-19 18:58:39","@dateUpdate":"2021-12-11 18:50:49","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66976","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66979","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66982","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66985","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66988","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66991","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66994","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/66997","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67000","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67003","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67006","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67009","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67012","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67015","versions":["thumb","screen"]}],"@totalRelations":{"content":19,"relations":19,"summary":{"ImageObject":{"content":"14","relation":"14"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"722","@type":"Person","@active":"1","@visible":"1","@name":"Francisco Selvina","@status":"100","@dateCreation":"2021-11-19 17:28:45","@dateUpdate":"2021-12-07 01:08:34","_image":null,"@totalRelations":{"content":3,"relations":3,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"17616","@type":"Person","@active":"1","@visible":"1","@name":"Antonio Augustinho de Matos (Pedro) (Pedro)","@status":"100","@dateCreation":"2021-11-19 18:17:24","@dateUpdate":"2021-12-06 18:32:36","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58207","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58210","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58213","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58216","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58219","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58222","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58225","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58228","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58231","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58234","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/58237","versions":["thumb","screen"]}],"@totalRelations":{"content":14,"relations":14,"summary":{"ImageObject":{"content":"11","relation":"11"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"10282","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Reinaldo Gouveia","@status":"100","@dateCreation":"2021-11-19 17:50:13","@dateUpdate":"2021-12-06 18:31:10","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/50773","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/50776","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/50779","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/50782","versions":["thumb","screen"]}],"@totalRelations":{"content":6,"relations":6,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"28790","@type":"Person","@active":"1","@visible":"1","@name":"Manuel Alves de Oliveira","@status":"100","@dateCreation":"2021-11-19 19:51:48","@dateUpdate":"2021-12-06 18:29:44","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75649","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75652","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75655","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75658","versions":["thumb","screen"]}],"@totalRelations":{"content":18,"relations":18,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"13","relation":"13"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"28731","@type":"Person","@active":"1","@visible":"1","@name":"Lourival Nascimento Bernardo (Louro)","@status":"100","@dateCreation":"2021-11-19 19:51:07","@dateUpdate":"2021-12-06 17:15:16","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75481","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75484","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75487","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75490","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75493","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75496","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75499","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75502","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75505","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75508","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75511","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75514","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75517","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75520","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/75523","versions":["thumb","screen"]}],"@totalRelations":{"content":27,"relations":27,"summary":{"ImageObject":{"content":"15","relation":"15"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"11","relation":"11"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"27130","@type":"Person","@active":"1","@visible":"1","@name":"Maria Domingas Rodrigues da Silva (Maria Domingas do Pedro)","@status":"100","@dateCreation":"2021-11-19 19:31:54","@dateUpdate":"2021-12-06 17:13:03","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/71839","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/71842","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/71845","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/71848","versions":["thumb","screen"]}],"@totalRelations":{"content":7,"relations":7,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"2","relation":"2"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"4903","@type":"Person","@active":"1","@visible":"1","@name":"Nelma Alves Nunes Costa","@status":"100","@dateCreation":"2021-11-19 17:36:55","@dateUpdate":"2021-12-06 17:07:23","_image":null,"@totalRelations":{"content":5,"relations":5,"summary":{"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"6503","@type":"Person","@active":"1","@visible":"1","@name":"Francisco de Sales Vilar","@status":"100","@dateCreation":"2021-11-19 17:40:33","@dateUpdate":"2021-12-06 17:05:24","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43228","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43231","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43234","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43237","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43240","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43243","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43246","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43249","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43252","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43255","versions":["thumb","screen"]}],"@totalRelations":{"content":16,"relations":16,"summary":{"ImageObject":{"content":"10","relation":"10"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"6219","@type":"Person","@active":"1","@visible":"1","@name":"Francisca Maria Portela Silva","@status":"100","@dateCreation":"2021-11-19 17:39:50","@dateUpdate":"2021-12-06 17:05:02","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43771","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43774","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43777","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43780","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/43783","versions":["thumb","screen"]}],"@totalRelations":{"content":12,"relations":12,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"6","relation":"6"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"24785","@type":"Person","@active":"1","@visible":"1","@name":"Augusto Oliveira (Augusto Santeiro)","@status":"100","@dateCreation":"2021-11-19 19:07:41","@dateUpdate":"2021-12-06 16:59:46","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70162","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70165","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70168","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70171","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70174","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70177","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70180","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70183","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70186","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70189","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70192","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/70195","versions":["thumb","screen"]}],"@totalRelations":{"content":14,"relations":14,"summary":{"ImageObject":{"content":"12","relation":"12"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"1","relation":"1"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"35239","@type":"Person","@active":"1","@visible":"1","@name":"Maria Jos\u00e9 Mendon\u00e7a","@status":"100","@dateCreation":"2021-11-19 21:22:21","@dateUpdate":"2021-11-19 21:22:21","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67573","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67576","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67579","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67582","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67585","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67588","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67591","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67594","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67597","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/67600","versions":["thumb","screen"]}],"@totalRelations":{"content":16,"relations":16,"summary":{"ImageObject":{"content":"10","relation":"10"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"5","relation":"5"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"35234","@type":"Person","@active":"1","@visible":"1","@name":"Manuel Lu\u00eds Bezerra dos Santos (Muss\u00e3o)","@status":"100","@dateCreation":"2021-11-19 21:22:16","@dateUpdate":"2021-11-19 21:22:16","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62263","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62266","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62269","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62272","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62275","versions":["thumb","screen"]}],"@totalRelations":{"content":10,"relations":10,"summary":{"ImageObject":{"content":"5","relation":"5"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"4","relation":"4"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"35226","@type":"Person","@active":"1","@visible":"1","@name":"Jos\u00e9 Alves de Sales (Z\u00e9 Ur\u00fa)","@status":"100","@dateCreation":"2021-11-19 21:22:09","@dateUpdate":"2021-11-19 21:22:09","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62251","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62254","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62257","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62260","versions":["thumb","screen"]}],"@totalRelations":{"content":11,"relations":11,"summary":{"ImageObject":{"content":"4","relation":"4"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"6","relation":"6"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"},{"@id":"35215","@type":"Person","@active":"1","@visible":"1","@name":"Raimundo Celestino de Sousa Moraes (Car\u00e3o)","@status":"100","@dateCreation":"2021-11-19 21:22:00","@dateUpdate":"2021-11-19 21:22:00","_image":[{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62206","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62209","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62212","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62215","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62218","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62221","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62224","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62227","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62230","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62233","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62236","versions":["thumb","screen"]},{"url":"https:\/\/artesanato.plano-b.com\/api\/1.0\/assets\/62239","versions":["thumb","screen"]}],"@totalRelations":{"content":20,"relations":20,"summary":{"ImageObject":{"content":"12","relation":"12"},"Neighborhood":{"content":"1","relation":"1"},"Product":{"content":"7","relation":"7"}}},"@creatorInfo":{"userId":"1","login":"admin","group":"root","name":"Administrador"},"@userScope":"group"}]
    })
  }
})

export default function Home() {

  return (
    <>
      <Head>
        <title>Yeah!</title>
      </Head>
      <Header />
      <Cards />
    </>
  )
}
