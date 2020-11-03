import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NotasDetalles } from '../notas-detalle/notas-detalle';
import { CrearNotas } from '../crear-notas/crear-notas';
import { NotasService } from '../../app/notas.service';
import { FechasService } from '../../app/fechas.service';
//import { sortBy } from '@angular/sort-by';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {

  private notas: any[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, 
  public notasSrv: NotasService, public fechasSrv: FechasService) {
    this.notasSrv.obtenerListaNotas_Firebase( ( notas ) => {
      this.notas = notas;
    });
    //this.notas = notasSrv.obtenerListaNotas();
  }

  irCrearNota() {
   this.navCtrl.push(CrearNotas);
  }

  irNotasDetalles(nota: any) {
    this.navCtrl.push(NotasDetalles, {"nota": nota});
  }

  eliminarNota(nota: any) {
    this.notasSrv.eliminarNota_Firebase(nota);
  }

  formatearFecha(nota: any) {
    return this.fechasSrv.formatearFechaFirebase_DDM( nota.fecha );
  }
}