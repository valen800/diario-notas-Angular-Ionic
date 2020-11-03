import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FechasService {

  constructor() { }

  convertirFechaFirebaseAFechaJavaScriptISO( fechaFirebaseISO: firebase.firestore.Timestamp ) {
    if( fechaFirebaseISO instanceof firebase.firestore.Timestamp ) {
      return fechaFirebaseISO.toDate().toISOString();
    }
    return fechaFirebaseISO;
  }

  convertirFechaJsISOAFechaFirebase( fechaIonicFormatoIso: Date ) {
    return new firebase.firestore.Timestamp(Math.round(new Date(fechaIonicFormatoIso).getTime() / 1000), 0);
  }

  formatearFechaFirebase_DDM( fechaFirebase: firebase.firestore.Timestamp ) {
    let fechaJs = this.convertirFechaFirebaseAFechaJavaScriptISO(fechaFirebase);
    return new Date(fechaJs).getDate() + "/" +(new Date(fechaJs).getMonth() + 1);
  }

  formatearFechaFirebase_DDMYYYY( fechaFirebase: firebase.firestore.Timestamp ) {
    let fechaJs = this.convertirFechaFirebaseAFechaJavaScriptISO(fechaFirebase);
    return new Date(fechaJs).getDate() + "/" +(new Date(fechaJs).getMonth() + 1) + "/" + 
    (new Date(fechaJs).getFullYear());
  }

  sortByDueDate(notas: any[]) {
    notas.sort((a: any, b: any) => {
        return a.dueDate.getTime() - b.dueDate.getTime();

    });
  }
}