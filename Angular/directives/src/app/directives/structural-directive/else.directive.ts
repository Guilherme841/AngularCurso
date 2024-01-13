import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// TemplateRef armazena um template em uma variável para criar uma nova view.
// ViewContainerRef marca um lugar para a view ser exibida/inserida.
@Directive({
  selector: '[appElse]',
  standalone: true,
})
export class ElseDirective {
  // Método set do typescript
  // Input property para expor o método
  @Input() set appElse(condition: boolean) {
    if (!condition) {
      // Cria uma nova visualização dentro do contêiner especificado, usando o template armazenado na variável this._TemplateRef.
      this._ViewContainerRef.createEmbeddedView(this._TemplateRef);
    } else {
      // Esta linha de código remove todas as visualizações embutidas
      // (embedded views) que estão atualmente presentes dentro do contêiner de
      // visualizações especificado por this._ViewContainerRef.
      this._ViewContainerRef.clear();
    }
  }
  constructor(
    private _TemplateRef: TemplateRef<any>,
    private _ViewContainerRef: ViewContainerRef
  ) {}
}
