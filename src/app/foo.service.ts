import { Injectable } from '@angular/core';

import { ApiService, BackendService } from '@popetech/ngx-rest-model'; 
import { Foo } from "./foo.model";

@Injectable()
export class FooService extends BackendService {

    constructor(apiService: ApiService) {
        super(apiService);
        this.setModel(Foo);
    }

}
