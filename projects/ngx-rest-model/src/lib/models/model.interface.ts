export interface ModelConfig {
    key;
    uri;
    hidden?;
    relationships?;
};

export interface Model {
    modelConfig: ModelConfig;
}