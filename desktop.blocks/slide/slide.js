modules.define( 'slide', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name }, {
    onSetMod : {
        'current' : function(modName, modVal) {
            (this._textFxs || (this._textFxs = this.findBlocksInside('text-fx')))
                .forEach(function(t) { t.setMod('progress', modVal) });
        }
    }
}, {
    live : true
}));

});
