import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  viaggi = [
    
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "25 milioni di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Marte", Sistemasolare: "Sistema solare", Durata: "Circa 6-9 mesi", Distanza: "meno di 0,01 anni luce (Tra 54,6 milioni di km e 401 milioni di km)", Spazioporto: "Cape Canaveral, Stati Uniti", partenza: "2025-09-11", arrivo: "2026-07-19", Costo : "27 milioni di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Giove", Sistemasolare: "Sistema solare", Durata: "Circa 5 anni", Distanza: "meno di 5 anni luce (Tra 588 milioni di km e 968 milioni di km)", Spazioporto: "Kourou, Guyana francese", partenza: "2028-11-14", arrivo: "2033-01-14", Costo : "10 miliardi di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Saturno", Sistemasolare: "Sistema solare", Durata: "Circa 4-5 anni", Distanza: "meno di 1 anni luce (Tra 1,2 miliardi di km e 1,8 miliardi di km)", Spazioporto: "Baikonur Cosmodrome, Kazakistan", partenza: "2026-11-14", arrivo: "2031-06-16", Costo : "10,5 miliardi di dollari" , img: "assets/video/luna.mp4"},

    {nome: "Nettuno", Sistemasolare: "Sistema solare", Durata: "Circa 8-10 anni", Distanza: "meno di 5 anni luce (Tra 4,5 miliardi di km e 5 miliardi di km)", Spazioporto: "Jiuquan Satellite Launch Center, Cina", partenza: "2028-09-19", arrivo: "2036-07-08", Costo : "11 miliardi di dollari" , img: "assets/video/luna.mp4"},
  ]
}
