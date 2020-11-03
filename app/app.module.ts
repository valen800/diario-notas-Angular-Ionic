import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NotasDetalles } from '../pages/notas-detalle/notas-detalle';
import { CrearNotas } from '../pages/crear-notas/crear-notas';
import { NotasService } from './notas.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { FechasService } from './fechas.service';

const firebaseConfig = {
  apiKey: "AIzaSyCwfNUFBbYYS-XhoWujB6XY9AAxxcHpbnk",
  authDomain: "app-diarionotas.firebaseapp.com",
  databaseURL: "https://app-diarionotas.firebaseio.com",
  projectId: "app-diarionotas",
  storageBucket: "app-diarionotas.appspot.com",
  messagingSenderId: "301843685618",
  appId: "1:301843685618:web:b142342657463dbf"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotasDetalles,
    CrearNotas
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotasDetalles,
    CrearNotas
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFirestore,
    NotasService,
    FechasService,
  ]
})
export class AppModule {}