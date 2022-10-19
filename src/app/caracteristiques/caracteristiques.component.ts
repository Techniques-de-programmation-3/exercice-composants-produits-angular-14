import { Component, Input, OnInit } from '@angular/core';
import { Caracteristiques } from '../caracteristiques';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['../shared/shared-styles.css', './caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {
  @Input() caracteristiques?: Caracteristiques;

  constructor() { }

  ngOnInit(): void {
  }

}
