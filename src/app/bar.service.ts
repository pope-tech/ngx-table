import { Injectable } from '@angular/core';

import { ApiService, BackendService } from '@popetech/ngx-rest-model';
import { Bar } from "./bar.model";

@Injectable()
export class BarService extends BackendService {

    constructor(apiService: ApiService) {
        super(apiService);
        this.setModel(Bar);
    }

}
