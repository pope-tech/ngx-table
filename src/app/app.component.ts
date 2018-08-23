import { Component, OnInit } from '@angular/core';
import {FooService} from "./foo.service";
import {BarService} from "./bar.service";
import {Foo} from "./foo.model";
import {Bar} from "./bar.model";

import { ModelFactory, Models } from '@popetech/ngx-rest-model'

@Component({
  selector: 'app-root',
  template: `{{ fooModel | json }} <br /><br /> {{ barModel | json }} <br /><br /> {{ fooCollection | json }} <br /><br /> {{ barCollection | json }}`
})
export class AppComponent implements OnInit {
  public header: string = 'ngx-models';

  public fooModel;
  public barModel;

  public fooCollection;
  public barCollection;

  constructor(private fooService: FooService, private barService: BarService) {}

  ngOnInit() {
    const foo = {
      name: 'Foo1'
    };

    const bar = {
      name: 'Bar1'
    };

    // this.fooModel = ModelFactory.make(Foo, foo);
    // this.barModel = ModelFactory.make(Bar, bar);

    const foos = [
        {
          'id': 1,
          'name': 'Foo1',
          'bars': {
            'data': [
                {
                    'id': 1,
                    'name': 'Bar1'
                }
            ]
          }
        }, {
          'id': 2,
          'name': 'Foo2'
        }
    ];

    const bars = [
        {
            'id': 1,
            'name': 'Bar1',
            'foo': {
                'data': {
                    'id': 1,
                    'name': 'Foo1'
                }
            }
        }, {
            'id': 2,
            'name': 'Bar2'
        }
    ];

    this.fooCollection = ModelFactory.makeFromArray(Models.get(Foo.key), foos);
    // this.barCollection = ModelFactory.makeFromArray(Bar, bars);

    // console.log(this.fooModel);
    // console.log(this.barModel);
    console.log(this.fooCollection);
    // console.log(this.barCollection);
  }

}
