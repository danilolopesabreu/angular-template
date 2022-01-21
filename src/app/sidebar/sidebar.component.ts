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
export const ROUTES: RouteInfo[] = [
    {
        path: '/pesquisar-cif',
        title: 'Pesquisar CIF',
        type: 'link',
        icontype: 'pe-7s-search'
    },{
        path: '/formulario',
        title: 'Formulário',
        type: 'link',
        icontype: 'pe-7s-note2'
    },{
        path: '/formulario-lote',
        title: 'Formulário Lote',
        type: 'link',
        icontype: 'pe-7s-box2'
    },{
        path: '/cif-coreografia',
        title: 'CIF x Coreografia',
        type: 'link',
        icontype: 'pe-7s-link'
    },{
        path: '/validar-formulario',
        title: 'Validar Formulário',
        type: 'link',
        icontype: 'pe-7s-check'
    },{
        path: '/opcoes',
        title: 'Opções',
        type: 'link',
        icontype: 'pe-7s-config'
    }
];

@Component({
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
