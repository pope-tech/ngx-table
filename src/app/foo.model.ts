import { BaseModel } from '@popetech/ngx-rest-model';

export class Foo extends BaseModel {

    public static key = 'foo';

    name: string;
    id?: string;

    constructor() {
        super();
        this.setConfig({
            uri: 'foo',
            key: 'id',
            relationships: {
                'bars': {
                    'type': 'hasMany',
                    'model': 'bar'
                }
            }
        });
    }

    serialize() {
        return {
            'name': this.name,
        }
    }

}
