export class Models {

    static models = {};

    static add(model) {
        let modelName = new model().constructor.name.toLowerCase();
        if(!Models.models[modelName]) {
            Models.models[modelName] = model;
        }
    }

    static get(model) {
        return Models.models[model];
    }
}