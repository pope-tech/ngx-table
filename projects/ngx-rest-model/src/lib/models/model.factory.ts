import { Relationship } from './relationship';
import { Models } from "./models";

export class ModelFactory {

    static make(model, data) {
        return new model().deserialize(data);
    }

    static makeFromArray(model, array) {
        let models = [];
        for(let ii = 0; ii < array.length; ++ii) {
            models.push(new model().deserialize(array[ii]));
        }
        return models;
    }

    static makeRelated(model, related, key) {
        let relationshipConfig = model.getRelationship(key);

        let relationship = new Relationship(model, related, relationshipConfig.type);

        model[key] = relationship.create();

        model.setUri(model[key].getSelfUri() + '/' + model.getUri());

        return model;
    }

    static makeRelatedFromRelationship(relationship, input) {
        if(relationship.type == 'hasOne' || relationship.type == 'belongsTo') {
            return relationship.create().deserialize(input);
        } else if(relationship.type == 'hasMany') {
            const related = relationship.getRelated();
            // let constructor = Models.get(related.key);
            return ModelFactory.makeFromArray(related, input);
        }

    }

}