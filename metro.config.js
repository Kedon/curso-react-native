const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const config = mergeConfig(defaultConfig, {
    // Adicione outras configurações aqui
});

module.exports = wrapWithReanimatedMetroConfig(config);
