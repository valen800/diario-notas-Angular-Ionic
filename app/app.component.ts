import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { NotasDetalles } from '../pages/notas-detalle/notas-detalle';
import { CrearNotas } from '../pages/crear-notas/crear-notas';
import { NotasService } from './notas.service';
import { FechasService } from './fechas.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Plataforma lista. Plugins disponibles.
    });
  }
}