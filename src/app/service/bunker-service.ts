import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Survivor } from '../../types';
import { signal} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BunkerService {
  
  private API_URL:string = "http://localhost:3000";

  private _survivorsSubject = signal<Survivor[]>([]);

  survivors$:Signal<Survivor[]> = this._survivorsSubject.asReadonly();
  private httpClient:HttpClient = inject(HttpClient);
  
  constructor(){
    this.fetchSurvivors();
  }


  fetchSurvivors(){
    this.httpClient.get<Survivor[]>(this.API_URL + "/supervivientes")
    .subscribe({
      next: survivors => {
        console.log("Survivors: ", survivors)
        this._survivorsSubject.set(survivors)
      }
    })                                          
  }

  getSurvivorById(idSurvivor:string) :Observable<Survivor>{
    return this.httpClient.get<Survivor>(this.API_URL + "/supervivientes/" + idSurvivor);
  }

  addSurvivor(){
    this.httpClient.post("http://localhost:3000/supervivientes", {
    "nombre": "Sarah Connor",
    "rango": "Comandante",
    "estado": "ESTABLE",
    "ubicacion": "Ala Norte",
    "email": "s.connor@resistance.net",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  }).subscribe({
    next: () => this.fetchSurvivors()
  })
  }

}
