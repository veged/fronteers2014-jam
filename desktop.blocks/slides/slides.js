modules.define( 'slides', ['i-bem__dom', 'keyboard__codes'],
    function(provide, BEMDOM, keyCodes) {

provide(BEMDOM.decl({ block : this.name }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._slides = this.findBlocksInside('slide');
                this.bindToDoc('keydown', this._onKeyDown)
                    .bindToWin('hashchange', this._onHashChange)
                    ._onHashChange();
            }
        }
    },

    setCurrent : function(i) {
        var oldIndex = this._currentSlideIndex,
            newIndex = this._currentSlideIndex = Math.max(0, Math.min(i, this._slides.length - 1));

        if(oldIndex !== newIndex) {
            var slides = this._slides;
            typeof oldIndex !== 'undefined' && slides[oldIndex].delMod('current');
            newIndex <= slides.length - 1 && slides[newIndex].setMod('current');
            window.location.hash = newIndex;
        }
    },

    next : function() {
        return this.setCurrent(this._currentSlideIndex + 1);
    },

    prev : function() {
        return this.setCurrent(this._currentSlideIndex - 1);
    },

    _onHashChange : function(e) {
        return this.setCurrent(getSlideFromLocation());
    },

    _onKeyDown : function(e) {
        var keyCode = e.keyCode,
            isNext = keyCode === keyCodes.DOWN || keyCode === keyCodes.RIGHT,
            isPrev = keyCode === keyCodes.UP || keyCode === keyCodes.LEFT;

        if((isPrev || isNext) && !e.shiftKey) {
            e.preventDefault();

            isPrev && this.prev();
            isNext && this.next();
        }
    }
}));

function getSlideFromLocation() {
    var hash = window.location.hash,
        match = hash.match(/^#(\d+)$/);
    return match? Number(match[1]) : 0
}

});
