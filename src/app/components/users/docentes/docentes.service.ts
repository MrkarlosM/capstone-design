import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Docente } from 'src/app/shared/models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(private afs: AngularFirestore) { }
  //Obtiene todos los items de una colección dado el nombre de la colección de forma ascendente por su name
  public getAllUsers(user: string): Observable<any[]> {
    return this.afs.collection(user, ref => ref.orderBy('name', 'asc')).snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Docente;
      const id = a.payload.doc.id;
      return { id, ...data }
    })))
  }

  //Obtiene todos los items de una colección dado el nombre de la colección de forma ascendente por su name hasa el limit
  public getUsersPaginate(user: string, limit: number): Observable<any[]> {
    return this.afs.collection(user, ref => ref.orderBy('name', 'asc').limit(limit)).snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Docente;
      const id = a.payload.doc.id;
      return { id, ...data }
    })))
  }
  //Buca todos los items de una colección dado el nombre de la colección
  public getUsersSearch(user: string, name: string | null): Observable<any[]> {
    return this.afs.collection(user, ref => ref.where('name', 'in', [name])).snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Docente;
      const id = a.payload.doc.id;
      return { id, ...data }
    })))
  }

  //Obtiene un solo item de una colección dada su id
  public getOneUser(id: string): Observable<Docente | undefined> {
    return this.afs.doc<Docente>(`PROFESORES/${id}`).valueChanges();
  }
  //Edita un docente con su id y su objeto docente
  public editDocente(id: string | undefined, docente: any): Promise<any> {
    return this.afs.doc<Docente>(`PROFESORES/${id}`).update(docente);
  }

  //Agrega un docente con su objeto docente
  public crearDocente(docente: any) {
    return this.afs.collection("PROFESORES").add(docente);
  }

  //Agrega un docente con su objeto estudiante y id
  public crearUserWithId(docente: any, id: string) {
    return this.afs.doc(`PROFESORES/${id}`).set(docente);
  }

  //Elimina docente
  public borraDocente(id: string) {
    return this.afs.collection("PROFESORES").doc(id).delete();
  }
}
