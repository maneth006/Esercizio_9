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
    
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "100 milioni di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "100 milioni di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "100 milioni di dollari" , img: "assets/video/luna.mp4"},
 
    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "100 milioni di dollari" , img: "assets/video/luna.mp4"},

    {nome: "Luna", Sistemasolare: "Sistema solare", Durata: "12 giorni", Distanza: "0,0025 anni luce (384.400 km)", Spazioporto: "Centro spaziale Kennedy, Florida, USA", partenza: "2024-11-14", arrivo: "2024-11-26", Costo : "100 milioni di dollari" , img: "assets/video/luna.mp4"},
  ]
}
