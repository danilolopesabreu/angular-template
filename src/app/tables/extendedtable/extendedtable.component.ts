import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

declare interface Table_With_Checkboxes {
    id?: number;
    name: string;
    job_position: string;
    salary: string;
    active?: boolean;
}
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
declare interface TableData2 {
    headerRow: string[];
    dataRows: Table_With_Checkboxes[];
}

@Component({
    moduleId: module.id,
    selector: 'extended-table-cmp',
    templateUrl: 'extendedtable.component.html'
})

export class ExtendedTableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;
    state_plain: boolean = true;

    ngOnInit(){

        this.tableData1 = {
            headerRow: [ '#', 'Cervejaria', 'Sede', 'Since', 'Faturamento', 'Ações'],
            dataRows: [
                ['1', 'Gran Bier', 'Gramado', '2013', '299,225',''],
                ['2', 'Baden Baden', 'Campos Jordão', '2012', '189,241', ''],
                ['3', 'Razen', 'Gramado', '2010', '162,144', ''],
                ['4','Go Brew', 'Anápolis', '2013', '49,990', ''],
                ['5', 'Backer', 'Belo Horizonte', '2015', '9,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: [ '#', 'Nome', 'Cargo', 'Salario', 'Ativo' ],
            dataRows: [
                {id: 1, name: 'João', job_position: 'Desenvolvedor', salary: '19,225', active: false},
                {id: 2, name: 'Maria', job_position: 'Scrum Master', salary: '15,241', active: false},
                {id: 3, name: 'Antonio', job_position: 'Design', salary: '15,144', active: true},
                {id: 4, name: 'Joe', job_position: 'Marketing', salary: '9,990', active: true}
            ]
        };
        this.tableData3 = {
            headerRow: [ 'Thumb', 'Blog Title', 'Description', 'Date', 'Views', ''],
            dataRows: [
                ['blog-1.jpg', '10 Things that all designers do', 'Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.', '30/08/2016', '1,225', ''],
                ['blog-2.jpg', 'Back to School Offer',  'Design is not just what it looks like and feels like. Design is how it works.', '17/07/2016', '49,302', ''],
                ['blog-3.jpg', 'First Dribbble Meetup in Romania', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '23/06/2016', '1,799', ''],
                ['blog-4.jpg', 'How we created our startup with 0$', 'A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...', '30/08/2016', '23,030', ''],
                ['blog-1.jpg', 'To use or not to use Bootstrap', 'The Office Chair adapts naturally to virtually every body and is a permanent fixture.', '10/05/2016', '13,763', '']
            ]
        };
    }

    ngAfterViewInit(){
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();

        $('.switch-plain').bootstrapSwitch({
            onColor:'',
            onText: '',
            offText: ''
        });
    }
}
