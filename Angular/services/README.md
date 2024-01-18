Compartilhei eventos e dados entre componente/serviço, fiz isso usando
"event emitter" e para escutar esse evento usei o método "subscribe", para o
subscribe funcionar o event emitter precisar estar declarado como static,
caso contrário não iŕa funcionar.

---

Injetei um serviço dentro de outro para usar através de um só,
por exemplo: "this.serviço1.serviço2.função()", atenção na hora de
declarar no constructor, caso o serviço seja declarado como "private",
não será possível acessa-lo, apenas se for público será possível.

---
