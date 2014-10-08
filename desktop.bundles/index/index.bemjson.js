(function() {

var title = 'Colors and Shapes: Ideas for work with JavaScript syntax';

return {
    block : 'page',
    title : title,
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
            {
                tag : 'center',
                content : [
                    { tag : 'h1', content : 'Colors and Shapes' },
                    { tag : 'h2', content : 'Ideas for work with JavaScript syntax' },
                    { tag: 'br' }, { tag: 'br' }, { tag: 'br' }, { tag: 'br' },
                    { tag : 'h3', content : 'Sergey @veged Berezhnoy' },
                    { tag : 'h4', content : 'Fronteers 2014 Jam Session, October 8' },
                ]
            },
            [
                { tag : 'h1', content: 'Hello!' },
                {
                    elem : 'side-by-side',
                    left : { tag : 'img', attrs : { src : 'veged.jpg', height : 254 } },
                    right : [
                        { tag : 'h3', content : 'Sergey Berezhnoy' },
                        { tag : 'h4', content : '@veged' }
                    ]
                },
            ],
                {
                    elem : 'side-by-side',
                    attrs : { style : 'height: 290px;' },
                    left : { tag : 'img', attrs : { src : 'yandex.svg', height : 150 } },
                    right : { tag : 'img', attrs : { src : 'b_.svg', height : 200 } }
                },
            { tag : 'h1', content: 'Colors' },
                { block : 'slide', mods : { image: true }, image : 'colors_1.jpg' },
                { block : 'slide', mods : { image: true }, image : 'colors_2.jpg' },
                { block : 'slide', mods : { image: true }, image : 'colors_3.jpg' },
                { block : 'slide', mods : { image: true }, image : 'colors_4.jpg' },
                [
                    { tag : 'h2', content : 'Yet Another JavaScript Highlighter' },
                    { tag : 'h3', content : { tag : 'a', attrs : { href : 'https://github.com/veged/yajsh' }, content : 'github.com/veged/yajsh' } }
                ],
                    { tag : 'h3', content: 'Square brackets' },
                        { block : 'yajsh', content : '[1, 2, 3]' },
                        { block : 'yajsh', content : '[1, 2, 3][2]' },
                    { tag : 'h3', content: 'Curly brackets' },
                        { block : 'yajsh', content : '{ a: 1 }' },
                        { block : 'yajsh', content : 'function() { return { a: 1 } }' },
                    { tag : 'h3', content: 'Round brackets' },
                        { block : 'yajsh', content : 'alert(1)' },
                        { block : 'yajsh', content : 'alert((1 + 2) * 3)' },
                    { tag : 'h3', content: 'Declarations' },
                        { block : 'yajsh', content : 'var a = 1, b = 2;' },
                        { block : 'yajsh', content : 'var a = 1, b = 2;\n\nfunction f(x) { return x }' },
                    { tag : 'h3', content: 'Commas' },
                        { block : 'yajsh', content : '[1, 2, 3]' },
                        { block : 'yajsh', content : '{ a: 1, b: 2, c: 3 }' },
                        { block : 'yajsh', content : 'var a = 1, b = 2;' },
                        { block : 'yajsh', content : 'function f(x, y) { return x + y }' },
                    { tag : 'h3', content: 'Statements' },
                        { block : 'yajsh', content : 'if(a) f(1) else f(2)' },
                        { block : 'yajsh', content : 'if(a) f(1) else f(2)\n\nwhile(true) f()' },
                        { block : 'yajsh', content : 'if(a) f(1) else f(2)\n\nwhile(true) f()\n\ntry { f() } catch(e) { console.log(e) }' },
                    { tag : 'h3', content: 'Operators' },
                { block : 'slide', mods : { image: true }, image : 'colors_5.jpg' },
            { tag : 'h1', content: 'Shapes' },
                { block : 'slide', mods : { image: true }, image : 'shapes_1.jpg' },
                { block : 'slide', mods : { image: true }, image : 'shapes_2.jpg' },
                { block : 'slide', mods : { image: true }, image : 'shapes_3.jpg' },
                { block : 'slide', mods : { image: true }, image : 'shapes_4.jpg' },
                [
                    { tag : 'h2', content : 'Krasota.js' },
                    { tag : 'h3', content : { tag : 'a', attrs : { href : 'https://github.com/veged/krasota.js' }, content : 'github.com/veged/krasota.js' } }
                ],
                    { tag : 'h4', content : 'indents and trailing spaces' },
                    { tag : 'h4', content : 'all kind of spaces' },
                    { tag : 'h4', content : 'single and multiple vars' },
                    { tag : 'h4', content : 'comma-first' },
                    { block : 'slide', mods : { image: true }, image : 'shapes_5.jpg' },
                { block : 'slide', mods : { image: true }, image : 'shapes_6.jpg' },
            [
                { tag : 'h1', content : 'Thank you!' },
                { tag : 'br'},
                { tag : 'h2', content : 'Sergey Berezhnoy' },
                { tag : 'h3', content : '@veged' },
                { tag : 'br'},
                { tag : 'h2', content : 'Yet Another JavaScript Highlighter' },
                { tag : 'h3', content : { tag : 'a', attrs : { href : 'https://github.com/veged/yajsh' }, content : 'github.com/veged/yajsh' } },
                { tag : 'br'},
                { tag : 'h2', content : 'Krasota.js' },
                { tag : 'h3', content : { tag : 'a', attrs : { href : 'https://github.com/veged/krasota.js' }, content : 'github.com/veged/krasota.js' } }
            ],
        ].map(function(c) {
            return c.block === 'slide'?
                c :
                { block : 'slide', content : c };
        })
    }
}

})()

