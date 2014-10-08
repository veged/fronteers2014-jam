modules.define( 'text-fx', ['i-bem__dom', 'functions'], function(provide, BEMDOM, functions) {

var TICK_INTERVAL = 650,
    global = this.global;

provide(BEMDOM.decl({ block : this.name }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._scheduledIndex = undefined;
            }
        },

        'progress' : {
            'true' : function() {
                this._schedule();
            },

            '' : function() {
                this._unschedule();
            }
        }
    },

    _schedule : function() {
        this._scheduledIndex = this.__self.start()._scheduledInstances.push(this) - 1;
    },

    _unschedule : function(i) {
        this.__self._scheduledInstances.splice(this._scheduledIndex, 1);
    },

    _onTick : function() {
        var _this = this;
        this.elem('symbol').each(function() {
            _this._changeSymbol($(this));
        });
    },

    _changeSymbol : functions.noop
}, {
    _isStarted : false,

    _scheduledInstances : [],

    start : function() {
        if(!this._isStarted) {
            this._isStarted = true;
            this._scheduleTick();
        }
        return this;
    },

    stop : function() {
        if(this._isStarted) {
            this._isStarted = false;
            global.clearTimeout(this._timer);
        }
        return this;
    },

    _scheduleTick : function() {
        var _this = this;
        this._timer = global.setTimeout(
            function() {
                _this._onTick();
            },
            TICK_INTERVAL);
    },

    _onTick : function() {
        var instances = this._scheduledInstances;
        if(instances.length) {
            instances.forEach(function(i) {
                i._onTick();
            });
            this._scheduleTick();
        } else this.stop();
    }
}));

});
