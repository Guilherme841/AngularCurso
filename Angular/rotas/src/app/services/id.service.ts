import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  static sendId: EventEmitter<any> = new EventEmitter();
  constructor() {}
  id!: string | number;
  getId(idReceived: string | number) {
    this.id = idReceived;
    IdService.sendId.emit(idReceived);
    return (this.id = idReceived);
  }
}
