import { BaseModel } from './base-model';
import { ModelConfig } from './model.interface';
import Expected = jasmine.Expected;
import {ModelFactory} from './model.factory';
import {Models} from './models';

export class
SampleModel extends BaseModel {
    public id: number;
    public name?: string;

    public relatedModels?;

    constructor() {
        super();
        this.setConfig({
            uri: 'model',
            key: 'id',
            hidden: [
                'sensitive_field'
            ],
            relationships: {
                'relatedModels': {
                    'type': 'hasMany',
                    'model': 'samplerelatedmodel'
                }
            }
        });
    }

    public serialize() {
        return {};
    }
}

export class SampleRelatedModel extends BaseModel {
    public id: number;
    public name?: string;
    public sampleModel?;

    constructor() {
        super();
        this.setConfig({
            uri: 'related-model',
            key: 'id',
            hidden: [],
            relationships: {
                'sampleModel': {
                    'type': 'hasOne',
                    'model': 'samplemodel'
                }
            }
        });
    }

    public serialize() {
        return {};
    }
}



describe('BaseModel', () => {
    let model: BaseModel;
    Models.add(SampleModel);
    Models.add(SampleRelatedModel);

    beforeEach(() => {
        model = new BaseModel();
    });

    it('#setConfig should set the config', () => {
        const config: ModelConfig = {
            key: 'id',
            uri: 'model',
            hidden: [
                'sensitive_field'
            ],
            relationships: {}
        };

        model.setConfig(config);
        expect(model.getConfig() as Expected<ModelConfig>).toEqual(config);
    });

    it('#setUri should set the uri', () => {
        const config: ModelConfig = {
            key: 'id',
            uri: 'model',
            hidden: [
                'sensitive_field'
            ],
            relationships: {}
        };

        model.setConfig(config);
        model.setUri('override');
        expect(model.getUri()).toEqual('override');
    });

    it('#getSelfUri should get the unique resource path', () => {
        const instance = new SampleModel();
        instance.id = 1;

        expect(instance.getSelfUri()).toEqual('model/1');
    });

    it('#deserialize should convert json to model instances', () => {
        const json = [
            {
                id: 1,
                name: 'Model 1'
            }
        ];

        const models = ModelFactory.makeFromArray(SampleModel, json);

        expect(models[0].id).toEqual(1);
        expect(models[0].name).toEqual('Model 1');
    });

    it('#deserialize should hide fields defined in the hidden array in the config', () => {
        const json = [
            {
                id: 1,
                name: 'Model 1',
                sensitive_field: "Don't deserialize me!"
            }
        ];

        const models = ModelFactory.makeFromArray(SampleModel, json);

        expect(models[0].sensitiveField).toBeUndefined();
    });


    it('#deserialize should recognize and deserialize related entities', () => {
        const json = [
            {
                id: 1,
                name: 'Model 1',
                related_models: {
                    data: [
                        {
                            id: 1,
                            name: 'Related Model 1'
                        }
                    ]
                }
            }
        ];

        const models = ModelFactory.makeFromArray(SampleModel, json);

        expect(models[0].relatedModels[0].id).toEqual(1);
        expect(models[0].relatedModels[0].name).toEqual('Related Model 1');
    });
});