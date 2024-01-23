import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  static sendId: EventEmitter<any> = new EventEmitter();
  constructor() {}
  id!: unknown;
  getId(idReceived: unknown) {
    IdService.sendId.emit(idReceived);
    return (this.id = idReceived);
  }
}
