import { Component, inject, Input } from '@angular/core';
import { BunkerService } from '../../service/bunker-service';
import { Survivor } from '../../../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-survivor-detail',
  imports: [],
  templateUrl: './survivor-detail.html',
  styleUrl: './survivor-detail.css',
})
export class SurvivorDetail {
  @Input() id!: string;
  
  private service:BunkerService = inject(BunkerService);

   survivor:Survivor|null = null;


   ngOnInit(){
      this.fetchSurvivor(this.id);
   }

   fetchSurvivor(id:string){
    this.service.getSurvivorById(id).subscribe({
      next:survivor => this.survivor = survivor
    })
   }
   


}
