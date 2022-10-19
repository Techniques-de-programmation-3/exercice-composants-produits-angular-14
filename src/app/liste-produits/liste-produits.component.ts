import { Component, OnInit } from '@angular/core';
import { PRODUITS } from '../mock-produits';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared-styles.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits = PRODUITS

  constructor() { }

  ngOnInit(): void {
  }

}
