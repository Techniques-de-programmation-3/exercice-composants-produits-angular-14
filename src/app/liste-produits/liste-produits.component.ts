import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared-styles.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produit1: Produit = { 
    nom: 'Produit 1',
    description: 'Description du produit 1...',
    prix: 10
  };
  
  produit2: Produit = {
    nom: 'Produit 2',
    description: 'Description du produit 2...',
    prix: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

}
