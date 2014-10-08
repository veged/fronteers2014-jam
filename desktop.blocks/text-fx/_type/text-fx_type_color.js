modules.define( 'text-fx', function(provide, textFx) {

var colors = ['#9c27b0', '#e91e63', '#cddc39', '#00bcd4', '#ff5722', '#009688', '#5677fc', '#056f00', '#9e9d24', '#795548', '#e51c23'],
    colorsLength = colors.length;

function getRndColor() {
    return colors[Math.floor(Math.random() * colorsLength)]
}

provide(textFx.decl({ modName : 'type', modVal : 'color' }, {
    _changeSymbol : function(symbol) {
        symbol.css({ color : getRndColor() });
    }
}));

});
