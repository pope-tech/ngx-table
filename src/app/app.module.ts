import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {NgxRestModelModule} from "@popetech/ngx-rest-model";

import { Foo } from "./foo.model";
import { Bar } from "./bar.model";
import { Models } from '@popetech/ngx-rest-model';
import { BarService } from './bar.service';
import { FooService } from './foo.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxRestModelModule.forRoot({ config: { api_root: 'http://api.mytest.test' }})
    ],
    providers: [
        BarService, FooService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        Models.add(Foo);
        Models.add(Bar);
    }

}
