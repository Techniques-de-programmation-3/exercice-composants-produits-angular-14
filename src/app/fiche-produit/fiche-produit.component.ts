import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['../shared/shared-styles.css', './fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  @Input() produit?: Produit; // Ou autre type selon la propriété 

  constructor() { }

  ngOnInit(): void {
  }

}

