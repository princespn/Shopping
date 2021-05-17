import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplayerService {

  constructor() { }
  multiplay(price: any){
    return price * 0.01;
  }
}
