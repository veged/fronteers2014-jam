var BEM = require('bem'),
    bemUtil = require('bem/lib/util'),
    environ = require('bem-environ'),
    PATH = require('path'),
    FS = require('fs'),
    VM = require('vm');

exports.baseTechPath = BEM.require.resolve('./techs/v2/bemdecl.js')

exports.techMixin = {

    getCreateResult: function(path, suffix) {
        var basename = this.getPath(PATH.basename(path, '.' + suffix),
                                    'bemjson.js'),
            bemjsonPath = PATH.join(PATH.dirname(path), basename),
            bemjson = bemUtil.isFile(bemjsonPath) ? FS.readFileSync(bemjsonPath) : '[]';

        try {
            bemjson = VM.runInNewContext(
                bemjson,
                { require: require, console: console },
                bemjsonPath);
        } catch(e) {
            console.log(bemjson.toString());
            throw e;
        }

        return 'exports.blocks = ' +
            JSON.stringify(this.buildBemdeclByBemjson(bemjson), null, 4) +
            ';\n';
    }

};
