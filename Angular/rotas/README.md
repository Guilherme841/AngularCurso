## Módulo sobre rota, angular roda spa(single page application), ela não precisar recarregar para exibir um componente, ela apenas mostra os componentes de acordo com a rota que está "/rota/1" e "/rota/2".

## Rotas são compostas de objetos dentro de um array, um key seria o "path: 'caminho do componente'" e o outro o "componente: 'componente'"

## Declaro links com ela com a diretiva [routerLink]="['caminho']" na tag "</a>"

## Posso passar um parâmetro para o array do routerLink [routerLink]="['caminho', 'parâmetro']"

## Para receber no app.routes é path /login'/:id'

## Tem que injetar a classe active router para dar certo, "para pegar o id"

## Declaro as rotas e configs no arquivo "app.routes.ts" e pra usar importo o "RouterModule"

## tag "</router-outlet>" para ser onde o componente do path deve ser exibido.

## Seguindo boas práticas sempre que usar o método "subscribe" declarar o "subscribe" também caso a classe seja destruída.
