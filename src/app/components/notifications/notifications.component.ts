import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'notifications-cmp',
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{

    showNotification(from, align){
        var type = ['','info','success','warning','danger'];

        var color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "pe-7s-bell",
        	message: "<b> Atenção </b> - Alguma Mensagem de Negócio / Alerta / Erro / Sucesso / Falha."

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}
}
