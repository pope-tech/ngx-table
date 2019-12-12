import { Component, OnInit } from '@angular/core';
import persons from '../demo1/data-table-demo1-data';
import { DataTableResource } from '@popetech/ngx-table';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class DataTableDemo7Component {

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  limits = [10, 20, 40, 80];

  constructor() {
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.jobTitle;
  }

}
