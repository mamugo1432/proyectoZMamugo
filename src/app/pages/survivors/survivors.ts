import { Component, computed, inject, signal } from '@angular/core';
import { Survivor } from '../../../types';
import { HttpClient } from '@angular/common/http';
import { BunkerService } from '../../service/bunker-service';
import { SurvivorCard } from "../../survivor-card/survivor-card";

@Component({
  selector: 'app-survivors',
  imports: [SurvivorCard],
  standalone:true,
  templateUrl: './survivors.html',
  styleUrl: './survivors.css',
})
export class Survivors {

  private _survivors = signal<Survivor[]>([]);
  filtrerSurvivors = signal<Survivor[]>([]);
  survivors = this._survivors.asReadonly();
  private service:BunkerService = inject(BunkerService);

  constructor(){
    this.survivors = this.service.survivors$
    this.filtrerSurvivors.set(this._survivors());
  }

  filtrerList(e:Event){
    const input = e.target as HTMLInputElement;
    const value = input.value;

    this.filtrerSurvivors.set(computed(() => this._survivors().filter(s => s.nombre.startsWith(value)))());
  }

}
