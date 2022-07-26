import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ListeComponent } from './liste/liste.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ListeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ],

  exports:[
    CardComponent,
    ListeComponent
  ]
})
export class CatalogueModule { }
