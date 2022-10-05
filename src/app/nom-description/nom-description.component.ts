import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nom-description',
  templateUrl: './nom-description.component.html',
  styleUrls: ['../shared/shared-styles.css', './nom-description.component.css']
})
export class NomDescriptionComponent implements OnInit {
  @Input() nom? = ''; 
  @Input() description? = '';
    
  constructor() { }

  ngOnInit(): void {
  }

}
