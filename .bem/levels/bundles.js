var PATH = require('path'),
    environ = require('bem-environ'),
    getTechResolver = environ.getTechResolver,

    PRJ_TECHS = PATH.resolve(__dirname, '../techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = this.__base();

    // Use techs from lib bem-core
    ['browser.js+bemhtml'].forEach(getTechResolver(techs, BEMCORE_TECHS));
    ['html', 'bemdecl.js'].forEach(getTechResolver(techs, PRJ_TECHS));

    return techs;
};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
