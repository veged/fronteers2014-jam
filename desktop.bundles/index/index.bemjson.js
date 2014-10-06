(function() {

return {
    block : 'page',
    title : 'Colors and Shapes: Ideas for work with JavaScript syntax',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }],
    mods : { theme: 'normal' },
    content : {
        block : 'slides',
        content : [
            { block : 'yajsh', content : 'var a = 2;' },
            2
        ].map(function(c) { return { block : 'slide', content : c } })
    }
}

})()

