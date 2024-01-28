## Módulo sobre rota, angular roda spa(single page application), ela não precisar recarregar para exibir um componente, ela apenas mostra os componentes de acordo com a rota que está "/rota/1" e "/rota/2".

## Rotas são compostas de objetos dentro de um array, um key seria o "path: 'caminho do componente'" e o outro o "componente: 'componente'"

## Declaro links com ela com a diretiva [routerLink]="['caminho']" na tag "</a>"

## Posso passar um parâmetro para o array do routerLink [routerLink]="['caminho', 'parâmetro']"

## Para receber no app.routes é path /login'/:id'

## Tem que injetar a classe active router para dar certo, "para pegar o id"

## Declaro as rotas e configs no arquivo "app.routes.ts" e pra usar importo o "RouterModule"

## tag "</router-outlet>" para ser onde o componente do path deve ser exibido.

## Seguindo boas práticas sempre que usar o método "subscribe" declarar o "subscribe" também caso a classe seja destruída.

## para pegar a rota uso this.\_activatedRoute.params.subscribe((rota) => {});

## para pegar o parâmetro de consulta/opcional é this.\_activatedRoute.queryParams.subscribe(() => {})

## para direcionar para uma rota usando typescript é this.\_router.navigate(['/home']) - posso passar variáveis e query aqui |

## this.\_router.navigate(['/cursos'] {queryParams: { pagina: ++this.pagina },});

## Posso passar children nas rotas do app.routes.ts para a rota ser filha da rota e ser renderizada no seu componente pai.
