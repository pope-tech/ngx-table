import { BaseModel } from '@popetech/ngx-rest-model'; 

export class Bar extends BaseModel {

    name: string;
    id?: string;

    constructor() {
        super();
        this.setConfig({
            uri: 'bar',
            key: 'id',
            relationships: {
                'foo': {
                    'type': 'hasOne',
                    'model': 'foo'
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
