import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { PrixComponent } from './prix/prix.component';
import { ImageComponent } from './image/image.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    FicheProduitComponent,
    LienDetailsComponent,
    ListeProduitsComponent,
    NomDescriptionComponent,
    PiedPageComponent,
    PrixComponent,
    ImageComponent,
    CaracteristiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
