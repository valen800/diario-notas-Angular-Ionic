import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class NotasService {

  private notas: any[] = [
    {
      "id": "prueba",
      "fecha" : "12/02/2018",
      "title": "pruebaPrueba",
      "description": "pruebaPruebapruebaPruebapruebaPruebapruebaPrueba"
    },
    {
      "id": "fefe",
      "fecha" : "12/02/2016",
      "title": "ewfgef",
      "description": "pruebaPruebapruebaPruebapruebaPruebapruebaPrueba"
    }
  ];

  constructor(private db: AngularFirestore) { 

  }

  obtenerListaNotas_Firebase( callback ) {
    this.db.collection('notas').valueChanges().subscribe( (notas) => {
      callback( notas );
    });
  }

  obtenerListaNotas() {
    return this.notas;
  }

  eliminarNota( nota: any) {
    let i= this.notas.indexOf(nota);
    if( i >= 0) {
      this.notas.splice(i, 1);
    }
  }

  eliminarNota_Firebase( nota: any ) {
    let id = nota.id;
    this.db.collection('notas').doc(`${id}`).delete();
  }

  crearNotaConIdAutomaticoYCampoId( nota ) {
    this.db.collection('notas').add(nota).then( (docGuardadoFirebase) => {
        let docId = docGuardadoFirebase.id;
        this.db.collection('notas').doc(`${docId}`).update({
            'id': docId,
        });
    });
  }

  modicarNota_Firebase(fecha: any, id: string, title: string, description: string) {
    this.db.collection('notas').doc(`${id}`).set({
        'id': id,
        'fecha':fecha,
        'title': title,
        'description': description,
    });
  }
}