import { Igroup } from './../models/igroup';
import { Carreras } from './../models/carreras';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfireService {

  constructor(private afs: AngularFirestore) {
  } 

  public getAllCarreras(collection: string): Observable<any[]>{
    return this.afs.collection(collection).snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Carreras;
      const id = a.payload.doc.id;
      return { id, ...data }
    })));
  }

  public getAllIGroups(collection: string): Observable<any[]>{
    return this.afs.collection(collection).snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Igroup;
      const id = a.payload.doc.id;
      return { id, ...data }
    })));
  }
}
