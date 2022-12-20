import { verifyHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items: MenuItem[] = [];
    logedIn: boolean = false;
    hability: boolean = false;
    displayLoginSwitch = false;
    closer:boolean = false;

    ngOnInit() {
        this.items = [
            {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user',
                routerLink: ['usuarios-menu'],
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',
                        items: [
                            {
                                label: 'Docente',
                                icon: 'pi pi-fw pi-book',
                                routerLink: ['agregar-docentes'],
                            },
                            {
                                label: 'Estudiante',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['agregar-estudiantes'],
                            },

                        ]
                    },
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [{ label: 'Editar Docente', routerLink: 'ver-docentes', icon: 'pi pifw pi-book' },
                        { label: 'Editar Estudiante', routerLink: 'ver-estudiantes', icon: 'fas fa-school', disabled: this.hability }]
                    }
                ]
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-fw pi-database',
                items: [
                    {
                        label: 'Nuevo Proyecto',
                        icon: 'fas fa-upload', routerLink: 'new-proy'

                    },
                    {
                        label: 'Ver Mis Proyectos',
                        icon: 'pi pi-fw pi-bars', routerLink: 'list-proys'

                    }
                ]
            },
            {
                label: 'Acerca de',
                icon: 'fas fa-question-circle',
                items: [
                    {
                        label: 'Política de Tratamiento de Datos',
                        icon: 'fas fa-info-circle',
                        routerLink: 'tratamiento-datos'
                    }
                ]
            }

        ];
    }

    displayRegDoc: boolean = false;
    displayRegEst: boolean = false;
    displayLogin: boolean = false;
    displayModal:boolean= true;

    showModalRegDoc() {
        this.displayRegDoc = true;
    }
    showModalRegEst() {
        this.displayRegEst = true;
    }
    showModalLogin() {
        this.displayLogin = true;
        this.logedIn = true;
    }
    childToParent(closer: Boolean){
        this.displayRegEst = false;
        this.displayRegDoc = false;
        }

    logOff(){
        console.log("Salió")
    }
}