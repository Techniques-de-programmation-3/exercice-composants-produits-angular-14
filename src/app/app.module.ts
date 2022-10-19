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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
