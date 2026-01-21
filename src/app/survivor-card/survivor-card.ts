import { Component } from '@angular/core';
import { Survivor } from '../../types';
import { Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-survivor-card',
  imports: [RouterLink],
  templateUrl: './survivor-card.html',
  styleUrl: './survivor-card.css',
})
export class SurvivorCard {

  @Input() survivor!:Survivor;
}
