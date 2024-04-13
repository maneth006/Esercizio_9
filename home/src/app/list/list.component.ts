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
    
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza1 : new Date(2024, 11, 14), arrivo: new Date(2024, 11, 26), Costo : "25 milioni", img: "assets/img/luna.png"},
 
    {nome: "Marte", Sistemasolare: "Sistema solare", Durata: "Circa 6-9 mesi", Distanza: "meno di 0,01 anni luce (Tra 54,6 milioni di km e 401 milioni di km)", Spazioporto: "Cape Canaveral, Stati Uniti", partenza1 : new Date(2025, 9, 11), arrivo: new Date(2026, 7, 19), Costo : "27 milioni" , img: "assets/img/marte.png"},
 
    {nome: "Giove", Sistemasolare: "Sistema solare", Durata: "Circa 5 anni", Distanza: "meno di 5 anni luce (Tra 588 milioni di km e 968 milioni di km)", Spazioporto: "Kourou, Guyana francese", partenza1 : new Date(2028, 11, 14), arrivo: new Date(2033, 1, 14), Costo : "10 miliardi" , img: "assets/img/giove.png"},
 
    {nome: "Saturno", Sistemasolare: "Sistema solare", Durata: "Circa 4-5 anni", Distanza: "meno di 1 anni luce (Tra 1,2 miliardi di km e 1,8 miliardi di km)", Spazioporto: "Baikonur Cosmodrome, Kazakistan", partenza1 : new Date(2026, 11, 14), arrivo: new Date(2031, 6, 16), Costo : "10,5 miliardi" , img: "assets/img/saturno.png"},

    {nome: "Nettuno", Sistemasolare: "Sistema solare", Durata: "Circa 8-10 anni", Distanza: "meno di 5 anni luce (Tra 4,5 miliardi di km e 5 miliardi di km)", Spazioporto: "Jiuquan Satellite Launch Center, Cina", partenza1 : new Date(2028, 9, 19), arrivo: new Date(2036, 7, 8), Costo : "11 miliardi" , img: "assets/img/nettuno.png"},
  ]
}
