import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'regular-table-cmp',
    templateUrl: 'regulartable.component.html'
})

export class RegularTableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;

    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Coluna', 'Coluna', 'Coluna', 'Coluna'],
            dataRows: [
                ['1', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ'],
                ['2', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ'],
                ['3', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ'],
                ['4', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Coluna',  'Coluna', 'Coluna', 'Coluna' ],
            dataRows: [
                ['1', 'ZZZZZZZZZZ','ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['2', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ'],
                ['3', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['4', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ]
            ]
        };
        this.tableData3 = {
            headerRow: [ 'ID', 'Coluna',  'Coluna', 'Coluna', 'Coluna' ],
            dataRows: [
                ['1', 'ZZZZZZZZZZ (Success)','ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['2', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ'],
                ['3', 'ZZZZZZZZZZ (Info)', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['4', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['5', 'ZZZZZZZZZZ (Danger)', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['6', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ],
                ['7', 'ZZZZZZZZZZ (Warning)', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ', 'ZZZZZZZZZZ' ]
            ]
        };
    }
}
