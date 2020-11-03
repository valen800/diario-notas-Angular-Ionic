import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NotasService } from '../../app/notas.service';
import { CrearNotas } from '../crear-notas/crear-notas';
import { HomePage } from '../home/home';
import { FechasService } from '../../app/fechas.service';

@Component({
  selector: 'notas-detalle',
  templateUrl: 'notas-detalle.html',
  styleUrls: ['./notas-detalle.scss' ]
})
export class NotasDetalles {

  private nota: any;
  private fecha_Firebase: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notasSrv: NotasService,
  private alertCtrl: AlertController, public fechasSrv: FechasService) {
    this.nota = navParams.get('nota');
    this.fechasSrv.convertirFechaFirebaseAFechaJavaScriptISO( this.nota.fecha );
  }

  modificarNota() {
    let nota = this.nota;

    let id = nota.id;
    let title = nota.title;
    let description = nota.description;
    let fecha;
    if(this.fecha_Firebase == null) {
      fecha = nota.fecha;
    } else {
      fecha = this.fechasSrv.convertirFechaJsISOAFechaFirebase( this.fecha_Firebase );
    }
    this.notasSrv.modicarNota_Firebase( fecha ,id, title, description);
    this.navCtrl.push(HomePage);
  }

  formatearFechaYYYY() {
    let fecha = this.nota.fecha;
    return this.fechasSrv.formatearFechaFirebase_DDMYYYY( fecha );
  }
}