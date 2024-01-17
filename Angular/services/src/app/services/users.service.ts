import { Injectable } from "@angular/core";

@Injectable() export class searchUsers {
  getUsers() {
    return ['Fulano', 'Ciclano', 'Tirano'];
  }
}
