import { BaseModel } from './base-model';

export class Relationship {

    constructor(protected model, protected related, protected type) {}

    setRelated(related) {
        this.related = related;
    }

    getRelated() {
        return this.related;
    }

    setModel(model) {
        this.model = model;
    }

    create() {
        // if the related model isn't instantiated,
        // instantiate it here
        if( ! (this.related instanceof BaseModel)) {
            this.related = new this.related();
        }

        if(this.type == 'hasMany' || this.type == 'hasOne') {
            this.related.setUri(this.model.getSelfUri() + '/' + this.related.getUri());
            return this.related;
        }

        if(this.type == 'belongsTo') {
            return this.related;
        }
    }

    getModel() {

    }

    getUri() {

    }
}