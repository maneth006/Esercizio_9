import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavigationComponent, ListComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
  pagina: string ="home";

  onRiceviDati(value: any){
    this.pagina = value;
    console.log(value)
  }

  onRiceviDati2(value: any){
    this.pagina = value;
    console.log(value)
  }
  
}
