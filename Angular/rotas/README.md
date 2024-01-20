## Módulo sobre rota, angular roda spa(single page application), ela não precisar recarregar para exibir um componente, ela apenas mostra os componentes de acordo com a rota que está "/rota/1" e "/rota/2".

---

## Rotas são compostas de objetos dentro de um array, um key seria o "path: 'caminho do componente'" e o outro o "componente: 'componente'" 
## Declaro links com ela com a diretiva [ routerLink="['caminho']" na tag "</a>" ] 
## Declaro as rotas e configs no arquivo "app.routes.ts" e pra usar importo o "RouterModule"
## tag "</router-outlet>" para ser onde o componente do path deve ser exibido. 
