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
    hability: boolean = false;

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
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            },

                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}