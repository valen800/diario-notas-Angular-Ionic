import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { ViewEncapsulation } from '@angular/core';
import { NotasDetalles } from '../pages/notas-detalle/notas-detalle';
import { NotasService } from './notas.service';

platformBrowserDynamic().bootstrapModule(AppModule,[
    {
        //Para que funcionen correctamente los selectores CSS
        defaultEncapsulation: ViewEncapsulation.None
    }
]).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));