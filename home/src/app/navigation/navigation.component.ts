import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() mandaDatiEvento = new EventEmitter<string>();
  @Output() mandaDatiEvento2 = new EventEmitter<string>();
  pagina = "home"

  onClickHome(){
    this.pagina = "home";
    this.mandaDatiEvento.emit(this.pagina);
  }

  onClickBiglietti(){
    this.pagina = "lista";
    this.mandaDatiEvento2.emit(this.pagina);
  }
}
