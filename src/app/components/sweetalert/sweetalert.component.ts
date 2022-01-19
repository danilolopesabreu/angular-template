import { Component } from '@angular/core';
import swal from 'sweetalert2';

declare var $:any;

@Component({
    selector: 'sweetalert-cmp',
    templateUrl: 'sweetalert.component.html'
})

export class SweetAlertComponent{

    showSwal(type){
      if (type == 'basic') {
          swal.fire({
              title: "Titulo/Mensagem",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-fill btn-success"
              }
          })

      }else if (type == 'title-and-text') {
          swal.fire({
              title: "Titulo/Mensagem",
              text: "Mensagem...",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-fill btn-info"
              }
          })

      }else if (type == 'success-message') {
          swal.fire({
              title: "Sucesso!",
              text: "Mensagem...",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-fill btn-success",
              },
              icon: "success"
          })

      }
      else if(type == 'warning-message-and-confirmation'){
        swal.fire({
          title: 'Tem Certeza?',
          text: "Mensagem de alerta na operação",
          icon: 'warning',
          showCancelButton: true,
          customClass:{
            confirmButton: 'btn btn-fill btn-success btn-mr-5',
            cancelButton: 'btn btn-fill btn-danger',
          },
          confirmButtonText: 'Sim',
          cancelButtonText: 'Cancelar',
           buttonsStyling: false,

        }).then((result) => {
          if (result.value) {
            swal.fire(
              {
                title: 'Sucesso',
                text: 'A operação foi concluida.',
                icon: 'success',
                customClass:{
                  confirmButton: "btn btn-fill btn-success",
                },
                buttonsStyling: false
              }
            )
          }
        })

    	}else if(type == 'warning-message-and-cancel'){
          swal.fire({
              title: 'Tem Certeza?',
              text: 'Mensagem de alerta na operação',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Sim',
              cancelButtonText: 'Cancelar',
              customClass:{
                confirmButton: "btn btn-fill btn-success btn-mr-5",
                cancelButton: "btn btn-fill btn-danger",
              },
              buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal.fire({
                  title: 'Sucesso',
                  text: 'Alguma mensagem de negócio',
                  icon: 'success',
                  customClass:{
                    confirmButton: "btn btn-fill btn-success",
                  },
                  buttonsStyling: false
              })
            } else {
              swal.fire({
                  title: 'Você Cancelou',
                  text: 'Mensagem de negócio',
                  icon: 'error',
                  customClass:{
                    confirmButton: "btn btn-fill btn-info",
                  },
                  buttonsStyling: false
              })
            }
          })
    	}else if(type == 'custom-html'){
        swal.fire({
            title: 'Com HTML no corpo',
            buttonsStyling: false,
            customClass:{
              confirmButton: "btn btn-fill btn-success",
            },
            html: 'Texto com bold <b>negrito</b>, ' +
                '<a href="http://google.com.br">link</a>' 
                
        })

    	}else if(type == 'auto-close'){
        swal.fire({
            title: "Fechamento automático",
            text: "fechar em 2 segundos.",
            timer: 2000,
            showConfirmButton: false
        })
    	} else if(type == 'input-field'){
        swal.fire({
            title: 'Digitar algo',
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" />' +
                '</div>',
            showCancelButton: true,
            customClass:{
              confirmButton: 'btn btn-fill btn-success btn-mr-5',
              cancelButton: 'btn btn-fill btn-danger',
            },
            buttonsStyling: false
        }).then((result)  => {
            if (result.value) {
            swal.fire({
                icon: 'success',
                html: 'Voce digitou: <strong>' +
                    $('#input-field').val() +
                    '</strong>',
                customClass:{
                  confirmButton: 'btn btn-fill btn-success',
                },
                buttonsStyling: false

            })
            }
        })
      }
    }
}
