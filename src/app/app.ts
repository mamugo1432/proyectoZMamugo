import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Route } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoZ');
  router:Router = inject(Router);
  resultClicks = signal<string>("");
  theme = signal<string>("");

ngOnInit(){
  if(localStorage.getItem("preferenceStyle")) this.theme.set(localStorage.getItem("preferenceStyle")!);
}

  handleKonamiCode(){
    const url = this.router.url;
    if(url === "/dashboard"){
      if(localStorage.getItem("countClicksKonami")){
        const actualCounts:number = Number.parseInt(localStorage.getItem("countClicksKonami")!);
        if(actualCounts==9){
          this.resultClicks.set("CÓDIGO KONAMI DESCUBIERTO");
          localStorage.clear();
          return;
        }
        const newValue = actualCounts + 1
        localStorage.setItem("countClicksKonami", ""+newValue);
      } else{
        localStorage.setItem("countClicksKonami", ""+1);
      }
}
  }

  changeStyle(){
    this.theme.set(this.theme() == "btn btn-primary" ? "btn btn-danger" : "btn btn-primary");
    localStorage.setItem("preferenceStyle", this.theme());
  }
}
