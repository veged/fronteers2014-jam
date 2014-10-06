var BEM = require('bem'),
    environ = require('bem-environ'),
    PATH = require('path'),
    VM = require('vm'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');

exports.baseTechPath = BEM.require.resolve(PATH.resolve(BEMCORE_TECHS, 'html.js'));

exports.techMixin = {

    getBemhtml: function(prefix) {

        var path = this.getPath(prefix, 'bemhtml.js');
        return BEM.util.readFile(path)
            .then(function(c) {
                var ctx = VM.createContext({ require: require, console: console });
                VM.runInContext(c, ctx, path);
                return ctx.BEMHTML;
            });

    },

    getBemjson: function(prefix) {

        var path = this.getPath(prefix, 'bemjson.js');
        return BEM.util.readFile(path)
            .then(function(c) {
                return VM.runInNewContext(
                    c,
                    { require: require, console: console },
                    path);
            });

    }

};
