import { Component, OnInit,Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NotasService } from '../../app/notas.service';
import { HomePage } from '../home/home';
import { FechasService } from '../../app/fechas.service';

@Component({
  selector: 'crear-notas',
  templateUrl: 'crear-notas.html',
  styleUrls: ['./crear-notas.scss' ]
})

export class CrearNotas {

  private title_html: string;
  private description_html: string;
  private fecha_html: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notasSrv: NotasService,
  private alertCtrl: AlertController, public fechasSrv: FechasService) {
  }

  anyadirNotaNueva() {
    let title = this.title_html;
    let description = this.description_html;
    let fecha = this.fechasSrv.convertirFechaJsISOAFechaFirebase( this.fecha_html );
    let nota = {
        'fecha': fecha,
        'title': title,
        'description': description,
      };
    this.notasSrv.crearNotaConIdAutomaticoYCampoId( nota );
    this.navCtrl.push(HomePage);
  }
}