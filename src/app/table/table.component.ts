import {Component} from '@angular/core';

export interface Element {
  driver: string;
  customer: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  dataSource :Element[] = [];

  refreshTable(data: Element[]) {
    this.dataSource = data;
  }
}
