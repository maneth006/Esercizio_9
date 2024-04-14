import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  viaggi = [
    
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: 0.0025 , Distanza1: "384.400", Distanza2: "384.400", Spazioporto: "Centro spaziale Kennedy, USA", partenza1 : new Date(2024, 11, 14), arrivo: new Date(2024, 11, 26), Costo : "25000000", img: "assets/img/luna.png"},
 
    {nome: "Marte", Sistemasolare: "Sistema solare", Durata: "Circa 6-9 mesi", Distanza: 0.000024, Distanza1: "54,6 milioni", Distanza2: "401 milioni", Spazioporto: "Cape Canaveral, Stati Uniti", partenza1 : new Date(2025, 9, 11), arrivo: new Date(2026, 7, 19), Costo : "27000000" , img: "assets/img/marte.png"},
 
    {nome: "Giove", Sistemasolare: "Sistema solare", Durata: "Circa 5 anni", Distanza: 0.000083, Distanza1: "588 milioni", Distanza2: "968 milioni", Spazioporto: "Kourou, Guyana francese", partenza1 : new Date(2028, 11, 14), arrivo: new Date(2033, 1, 14), Costo : "10000000000" , img: "assets/img/giove.png"},
 
    {nome: "Saturno", Sistemasolare: "Sistema solare", Durata: "Circa 4-5 anni", Distanza: 0.00151, Distanza1: "1,2 miliardi", Distanza2: "1,8 miliardi", Spazioporto: "Baikonur Cosmodrome, Kazakistan", partenza1 : new Date(2026, 11, 14), arrivo: new Date(2031, 6, 16), Costo : "10500000000" , img: "assets/img/saturno.png"},

    {nome: "Nettuno", Sistemasolare: "Sistema solare", Durata: "Circa 8-10 anni", Distanza: 0.000476, Distanza1: "4,5 miliardi", Distanza2: "5 miliardi", Spazioporto: "Jiuquan Launch Center, Cina", partenza1 : new Date(2028, 9, 19), arrivo: new Date(2036, 7, 8), Costo : "11000000000" , img: "assets/img/nettuno.png"},
  ]
}
