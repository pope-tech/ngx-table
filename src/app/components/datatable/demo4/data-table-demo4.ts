import { Component } from '@angular/core';
import persons from './data-table-demo4-data';
import { DataTableResource } from '@popetech/ngx-table';

@Component({
    selector: 'app-data-table-demo-4',
    templateUrl: './data-table-demo4.html',
    styleUrls: ['./data-table-demo4.css']
})
export class DataTableDemo4Component {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
    }
}
