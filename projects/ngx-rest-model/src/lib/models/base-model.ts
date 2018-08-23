import { ModelFactory } from './model.factory';
import { Relationship } from './relationship';
import { Serializable } from './serializable.interface';
import { Model } from './model.interface';

import { Models } from './models';

export class BaseModel implements Model, Serializable {


     public modelConfig = {
         key: '',
         uri: '',
         hidden: [],
         relationships: {}
    };

    constructor() {}

    setConfig(config) {
        this.modelConfig = {...this.getConfig(), ...config};
    }

    getConfig() {
        return this.modelConfig;
    }

    getUri() {
        return this.modelConfig.uri;
    }

    getSelfUri() {
        return this.modelConfig.uri + '/' + this[this.modelConfig.key];
    }

    setUri(uri) {
        this.modelConfig.uri = uri;
    }

    getKey() {
        return this.modelConfig.key;
    }

    getRelationship(key) {
        return this.modelConfig.relationships[key];
    }

    deserialize(input) {

        let config = this.getConfig();
        let relationships = [];
        for(let prop in input) {
            if(! input.hasOwnProperty(prop)) {
                continue;
            }

            if(config.hidden.indexOf(prop) > -1) {
                continue;
            }

            if(typeof input[prop] === 'object') {

                if(config.relationships.hasOwnProperty(this.snakeToCamel(prop))) {
                    relationships.push({
                        key: this.snakeToCamel(prop),
                        value: (input[prop] ? input[prop].data : null)
                    });
                }

                continue;
            }

            this[this.snakeToCamel(prop)] = input[prop];
        }

        for(let relationship of relationships) {

            if(relationship.value === null) {
                continue;
            }

            let relationshipConfig = config.relationships[relationship.key];

            let related = Models.get(relationshipConfig.model);

            let relationshipObject = new Relationship(this, related, relationshipConfig.type);

            this[relationship.key] = ModelFactory.makeRelatedFromRelationship(relationshipObject, relationship.value);
        }

        return this;
    }

    snakeToCamel(string) {
        return string.replace(/_\w/g, function(m) {
            return m[1].toUpperCase();
        });
    }
}
