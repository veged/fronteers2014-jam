modules.define( 'text-fx', function(provide, textFx) {

provide(textFx.decl({ modName : 'type', modVal : 'case' }, {
    _changeSymbol : function(symbol) {
        var text = symbol.text(),
            lower = text.toLowerCase(),
            upper = text.toUpperCase();

        symbol.text(Math.round(Math.random())? lower : upper);
    }
}));

});
