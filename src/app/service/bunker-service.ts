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
    this.httpClient.get<Survivor[]>(this.API_URL + "/supervivientes/")
    .subscribe({
      next: survivors => this._survivorsSubject.update(() => survivors)
    })                                          
  }

  getSurvivorById(idSurvivor:string) :Observable<Survivor>{
    return this.httpClient.get<Survivor>(this.API_URL + "/supervivientes/" + idSurvivor);
  }


}
