import { Component, inject, signal } from '@angular/core';
import { Survivor } from '../../../types';
import { HttpClient } from '@angular/common/http';
import { BunkerService } from '../../service/bunker-service';

@Component({
  selector: 'app-survivors',
  imports: [],
  templateUrl: './survivors.html',
  styleUrl: './survivors.css',
})
export class Survivors {

  private _survivors = signal<Survivor[]>([]);

  survivors = this._survivors.asReadonly();
  private service:BunkerService = inject(BunkerService);

  constructor(){
    this.survivors = this.service.survivors$
  }


}
