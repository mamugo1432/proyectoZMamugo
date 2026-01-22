import { Component, computed, inject, Signal } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { Survivor } from '../../../types';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private service:BunkerService = inject(BunkerService);
  private http:HttpClient = inject(HttpClient);
  
  survivors = this.service.survivors$;
  countPeople: Signal<number> = computed(()=> this.survivors().length)

  constructor(){
    // this.survivors = this.service.survivors$;
    // this.countPeople = this.survivors().length;
  }
    
  addSurvivor(){
    this.service.addSurvivor()
  }
   

}
