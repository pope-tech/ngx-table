import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTable, DataTableResource } from '@popetech/ngx-table';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-table-demo-6',
  templateUrl: './data-table-demo6.html',
  styleUrls: ['./data-table-demo6.css']
})
export class DataTableDemo6Component implements OnInit {

    filmResource = new DataTableResource([]);
    people = [];
    peopleCount = 0;

    @ViewChild(DataTable) filmsTable;

    constructor(private http: HttpClient) {
        // this.filmResource.count().then(count => this.filmCount = count);
    }

    public ngOnInit() {
        this.peopleCount = 79;
        this.getPeople(); 
    }

    public getPeople(page = 1, limit = 10) {
        this.http.get('http://localhost:3000/people?_page=' + page + '&_limit=' + limit).subscribe((response: Array<any>) => {
            this.people = response;
        });
    }

    reloadPeople(params) {
        console.log(params);

        let page = 1; 

        if(params.offset !== 0) {
            page = (params.offset / params.limit) + 1;
        }

        this.getPeople(page, params.limit); 
    }

}
