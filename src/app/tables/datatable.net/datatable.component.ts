// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;

    ngOnInit() {
        this.dataTable = {
            headerRow: [ 'Data do Registro', 'CIF', 'ID', 'Responsável', 'Reais (R$)', 'Ação', 'Justificativa', '' ],
            footerRow: [ 'Data do Registro', 'CIF', 'ID', 'Responsável', 'Reais (R$)', 'Ação', 'Justificativa', '' ],

            dataRows: [
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['03/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/07/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c128354', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/09/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/08/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/12/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/03/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/12/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/01/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/03/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/03/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/10/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/11/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['03/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/07/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/09/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/08/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/12/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/03/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c128354', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/12/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/01/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/03/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/03/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/10/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/11/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['03/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/07/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/09/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/08/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/12/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/03/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/12/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/01/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/03/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['18/03/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['22/12/2021 17:31', '09.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['13/10/2021 11:21', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['25/11/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['03/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
                ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['16/07/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'c891146', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',''],
                ['17/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'c891145', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
                ['15/09/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
                ['15/08/2021 11:21', '08.01.07.001.0133.0000', '00004520211215l', 'c891148', 'R$0,00', 'Lançamento Genérico', 'asdfdgf','']
                
              
            ]
         };

    }

    ngAfterViewInit() {
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "Tudo"]
        ],
        responsive: true,
        language: {
          url: './assets/js/data_table_pt_br.json'
        }

      });

      const table = $('#datatables').DataTable();

      // Edit record
      table.on('click', '.btn-success', function(e) {
        let $tr = $(this).closest('tr');
        if ($($tr).hasClass('child')) {
          $tr = $tr.prev('.parent');
        }

        var data = table.row($tr).data();
        alert('aprovar: ' + data[0] + ' ' + data[1] + ' ' + data[2] );
        e.preventDefault();
      });

      // Delete a record
      table.on('click', '.btn-danger', function(e) {
        let $tr = $(this).closest('tr');

        if ($($tr).hasClass('child')) {
          $tr = $tr.prev('.parent');
        }

        var data = table.row($tr).data();
        alert('remover: ' + data[0] + ' ' + data[1] + ' ' + data[2] );

        table.row($tr).remove().draw();
        e.preventDefault();
      });

      //Like record
      table.on('click', '.btn-primary', function(e) {
        alert('clicou p detalhar');
        //e.preventDefault();
      });

      $('.card .material-datatables label').addClass('form-group');

    }
}
