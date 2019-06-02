import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListLastPoissonComponent } from './home/list-last-poisson/list-last-poisson.component';
import { LastPoissonPublicationComponent } from './home/list-last-poisson/last-poisson-publication/last-poisson-publication.component';
import { ListBestLocationComponent } from './home/list-best-location/list-best-location.component';
import { BestLocationPublicationComponent } from './home/list-best-location/best-location-publication/best-location-publication.component';

import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { DescriptionProfilComponent } from './profil/description-profil/description-profil.component';
import { ListPostUserComponent } from './profil/list-post-user/list-post-user.component';
import { PostUserComponent } from './profil/list-post-user/post-user/post-user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { MapsComponent } from './maps/maps.component';
import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharePictureComponent } from './share-picture/share-picture.component';
import { MapsVisualComponent } from './maps/maps-visual/maps-visual.component';
import { InformationMakerComponent } from './maps/information-maker/information-maker.component';


  

const appRoutes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'profil', component: ProfilComponent},
  { path: 'carte', component: MapsComponent},
  { path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListLastPoissonComponent,
    LastPoissonPublicationComponent,
    ListBestLocationComponent,
    BestLocationPublicationComponent,
    ProfilComponent,
    DescriptionProfilComponent,
    ListPostUserComponent,
    PostUserComponent,
    MapsComponent,
    SharePictureComponent,
    MapsVisualComponent,
    InformationMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)



export class AppModule {
  
 }
