import { Component } from '@angular/core';

declare var $:any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    icon:string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'pe-7s-graph'
    },{
        path: '/components',
        title: 'Componentes',
        type: 'sub',
        icontype: 'pe-7s-plugin',
        children: [
            {path: 'buttons', title: 'Botões', ab:'', icon: 'fa fa-mouse-pointer'},
            {path: 'grid', title: 'Grids', ab:'GS', icon: 'fa fa-table'},
            {path: 'panels', title: 'Accordion/Tabs', ab:'', icon: 'fa fa-list-ul'},
            {path: 'sweet-alert', title: 'Alertas', ab:'', icon: 'fa fa-warning'},
            {path: 'notifications', title: 'Notificações', ab:'', icon: 'fa fa-bell'},
            {path: 'icons', title: 'Icones', ab:'I', icon: 'fa fa-fonticons'},
            {path: 'typography', title: 'Tipografia', ab:'', icon: 'fa fa-file-text'}
        ]
    },{
        path: '/forms',
        title: 'Formulários',
        type: 'sub',
        icontype: 'pe-7s-note2',
        children: [
            {path: 'regular', title: 'Básico', ab:'', icon: 'fa fa-wpforms'},
            {path: 'extended', title: 'Complementos', ab:'fa fa-', icon: 'fa fa-wpforms'},
            {path: 'validation', title: 'Validação', ab:'fa fa-', icon: 'fa fa-wpforms'},
            {path: 'wizard', title: 'Wizard', ab:'', icon: 'fa fa-magic'}
        ]
    },{
        path: '/tables',
        title: 'Tabelas',
        type: 'sub',
        icontype: 'pe-7s-news-paper',
        children: [
            {path: 'regular', title: 'Básica', ab:'', icon: 'fa fa-table'},
            {path: 'extended', title: 'Com Ações', ab:'', icon: 'fa fa-table'},
            {path: 'datatables.net', title: 'Datatables.net', ab:'', icon: 'fa fa-table'}
        ]
    }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
           $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
           $('html').addClass('perfect-scrollbar-on');
       } else {
           $('html').addClass('perfect-scrollbar-off');
       }
    }
    ngAfterViewInit(){
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

        var collapseId = $sidebarParent.siblings('a').attr("href");

        $(collapseId).collapse("show");
    }
}
