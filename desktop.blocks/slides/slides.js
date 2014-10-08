modules.define( 'slides', ['i-bem__dom', 'keyboard__codes'],
    function(provide, BEMDOM, keyCodes) {

provide(BEMDOM.decl({ block : this.name }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._slides = this.findBlocksInside('slide');
                this
                    .bindToDoc('keydown', this._onKeyDown)
                    .bindToDoc('click dblclick', this._onClick)
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

    _onKeyDown : function(e) {
        var keyCode = e.keyCode,
            isNext = keyCode === keyCodes.DOWN || keyCode === keyCodes.RIGHT,
            isPrev = keyCode === keyCodes.UP || keyCode === keyCodes.LEFT;

        if((isPrev || isNext) && !e.shiftKey) {
            e.preventDefault();

            isPrev && this.prev();
            isNext && this.next();
        }
    },

    _onClick : function(e) {
        var view = $(e.view),
            width = view.width(),
            height = view.height(),
            width3 = width / 3,
            height3 = height / 3,
            x = e.pageX,
            y = e.pageY;

        if(x > width3 && x < width3 * 2) {
            if(y < height3)
                    this.prev();
                else if(y > height3 * 2)
                    this.next();
        }

        if(y > height3 && y < height3 * 2) {
            if(x < width3)
                    this.prev();
                else if(x > width3 * 2)
                    this.next();
        }
    },

    _onHashChange : function(e) {
        return this.setCurrent(getSlideFromLocation());
    }
}));

function getSlideFromLocation() {
    var hash = window.location.hash,
        match = hash.match(/^#(\d+)$/);
    return match? Number(match[1]) : 0
}

});
