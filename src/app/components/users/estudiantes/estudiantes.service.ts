import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Estudiante } from 'src/app/shared/models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private afs: AngularFirestore) {   }
  //Obtiene todos los items de una colección dado el nombre de la colección de forma ascendente por su name
  public getAllUsers(user: string):Observable<any[]>{
    return this.afs.collection(user, ref => ref.orderBy('name', 'asc')).snapshotChanges().pipe(map(actions=>actions.map(a =>{
      const data = a.payload.doc.data() as Estudiante;
      const id = a.payload.doc.id;
      return {id, ... data}
    })))
  }

  //Obtiene todos los items de una colección dado el nombre de la colección de forma ascendente por su name hasa el limit
  public getUsersPaginate(user: string, limit: number):Observable<any[]>{
    return this.afs.collection(user, ref => ref.orderBy('name', 'asc').limit(limit)).snapshotChanges().pipe(map(actions=>actions.map(a =>{
      const data = a.payload.doc.data() as Estudiante;
      const id = a.payload.doc.id;
      return {id, ... data}
    })))
  }
  //Buca todos los items de una colección dado el nombre de la colección
  public getUsersSearch(user: string, name: string | null):Observable<any[]>{
    return this.afs.collection(user, ref => ref.where('name', 'in', [name])).snapshotChanges().pipe(map(actions=>actions.map(a =>{
      const data = a.payload.doc.data() as Estudiante;
      const id = a.payload.doc.id;
      return {id, ... data}
    })))
  }

    //Obtiene un solo item de una colección dada su id
    public getOneUser(id: string): Observable<Estudiante | undefined> {
      return this.afs.doc<Estudiante>(`ESTUDIANTES/${id}`).valueChanges();
    }
    //Edita un estudiante con su id y su objeto estudiante
    public editUser(id: string | undefined, estudiante: any): Promise<any> {
      return this.afs.doc<Estudiante>(`ESTUDIANTES/${id}`).update(estudiante);
    }
  
    //Agrega un estudiante con su objeto estudiante
    public crearUser(estudiante: any) {
      return this.afs.collection("ESTUDIANTES").add(estudiante);
    }
  
    //Elimina estudiante
    public borraUser(id: string){
      return this.afs.collection("ESTUDIANTES").doc(id).delete();
    }
}
