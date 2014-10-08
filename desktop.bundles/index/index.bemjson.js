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
                    {
                        tag : 'h1',
                        content : [
                            { block : 'text-fx', mods : { type : 'color' }, content : 'Colors' },
                            ' and ',
                            { block : 'text-fx', mods : { type : 'case' }, content : 'Shapes' },
                        ]
                    },
                    { tag : 'h2', content : 'ideas for work with JavaScript syntax' },
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
                        { tag : 'h2', content : 'Sergey Berezhnoy' },
                        { tag : 'h3', content : '@veged' }
                    ]
                },
            ],
                {
                    elem : 'side-by-side',
                    attrs : { style : 'height: 290px;' },
                    left : { tag : 'img', attrs : { src : 'yandex.svg', height : 150 } },
                    right : { tag : 'img', attrs : { src : 'b_.svg', height : 200 } }
                },
            { tag : 'h1', content : { block : 'text-fx', mods : { type : 'color' }, content : 'Colors' } },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'colors_1.jpg',
                    content : { tag : 'h1', content : 'the days of black and white code' }
                },
                { block : 'slide', mods : { image: true }, image : 'colors_2.jpg' },
                { block : 'slide', mods : { image: true }, image : 'colors_3.jpg' },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'colors_4.jpg',
                    content : {
                        tag : 'h1',
                        content : [
                            { block : 'text-fx', mods : { type : 'color' }, content : 'colors' },
                            ' bring happines'
                        ]
                    }
                },
                [
                    { tag : 'h1', content : 'Yet Another JavaScript Highlighter' },
                    { tag : 'h2', content : { tag : 'a', attrs : { href : 'https://github.com/veged/yajsh' }, content : 'github.com/veged/yajsh' } },
                    { tag : 'br' }, { tag : 'br' },
                    {
                        tag : 'h2',
                        content : [
                            { block : 'text-fx', mods : { type : 'color' }, content : 'highlighting' },
                            ' can be more detailed and nuanced'
                        ]
                    },
                    { tag : 'h1', content : 'semantics aware!' }
                ],
                    [
                            { tag : 'h1', content: 'square brackets' },
                            { block : 'yajsh', content : '[1, 2, 3]' },
                            { block : 'yajsh', content : '[1, 2, 3][2]' }
                    ],
                    [
                        { tag : 'h1', content: 'curly braces' },
                        { block : 'yajsh', content : '{ a: 1 }' },
                        { block : 'yajsh', content : 'function() { return { a: 1 } }' }
                    ],
                    [
                        { tag : 'h1', content: 'parentheses' },
                        { block : 'yajsh', content : 'alert(1)' },
                        { block : 'yajsh', content : 'alert((1 + 2) * 3)' }
                    ],
                    [
                        { tag : 'h1', content: 'declarations' },
                        { block : 'yajsh', content : 'var a = 1, b = 2;' },
                        { block : 'yajsh', content : 'function f(x) { return x }' }
                    ],
                    [
                        { tag : 'h1', content: 'commas' },
                        { block : 'yajsh', content : '[1, 2, 3]' },
                        { block : 'yajsh', content : '{ a: 1, b: 2, c: 3 }' },
                        { block : 'yajsh', content : 'var a = 1, b = 2;' },
                        { block : 'yajsh', content : 'function f(x, y) { return x + y }' }
                    ],
                    [
                        { tag : 'h1', content: 'statements' },
                        { block : 'yajsh', content : 'if(a) f(1) else f(2)' },
                        { block : 'yajsh', content : 'while(true) f()' },
                        { block : 'yajsh', content : 'try { f() } catch(e) { console.log(e) }' }
                    ],
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'colors_5.jpg',
                    content : { tag : 'h1', content : 'same idea for different editors and tools' }
                },
            { tag : 'h1', content : { block : 'text-fx', mods : { type : 'case' }, content : 'Shapes' } },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'shapes_1.jpg',
                    content : { tag : 'h1', content : 'the are a lot of different code-styles' }
                },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'shapes_2.jpg',
                    content : { tag : 'h1', content : 'well known tools for simple checks' }
                },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'shapes_3.jpg',
                    content : { tag : 'h1', content : 'some tools for trivial reformatting' }
                },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'shapes_4.jpg',
                    content : {
                        tag : 'h1',
                        content : [
                            'very few tools for deeper structural code ',
                            { block : 'text-fx', mods : { type : 'case' }, content : 'shaping' },
                        ]
                    }
                },
                [
                    { tag : 'h1', content : 'Krasota.js' },
                    { tag : 'h2', content : { tag : 'a', attrs : { href : 'https://github.com/veged/krasota.js' }, content : 'github.com/veged/krasota.js' } },
                    { tag : 'br' }, { tag : 'br' },
                    {
                        tag : 'h2',
                        content : [
                            'code can be ',
                            { block : 'text-fx', mods : { type : 'case' }, content : 'reshaped' },
                            ' intelligently'
                        ]
                    },
                    { tag : 'h1', content : 'automagically!' }
                ],
                    [
                        { tag : 'h3', content : 'indents and trailing spaces' },
                        {
                            elem : 'side-by-side',
                            left : { block : 'yajsh', content : '{\n    a: 1,\n     b: 2,\n    c: 3\n}' },
                            right : { block : 'yajsh', content : '{\n    a: 1,\n    b: 2,\n    c: 3\n}' },
                        },
                    ],
                    [
                        { tag : 'h3', content : 'all kind of spaces' },
                        {
                            elem : 'side-by-side',
                            left : { block : 'yajsh', content : '{ a: 1, b: 2 };\n\n[1, 2, 3];\n\nwhile(true) f();' },
                            right : { block : 'yajsh', content : '{ a : 1, b : 2 };\n\n[ 1, 2, 3 ];\n\nwhile ( true ) f();' },
                        },
                    ],
                    [
                        { tag : 'h3', content : 'single and multiple vars' },
                        {
                            elem : 'side-by-side',
                            left : { block : 'yajsh', content : 'var a = 1;\nvar b = 2; // xxx\nvar c = 3;' },
                            right : { block : 'yajsh', content : 'var a = 1,\n    b = 2, // xxx\n    c = 3;' }
                        },
                    ],
                    [
                        { tag : 'h3', content : 'comma-first' },
                        {
                            elem : 'side-by-side',
                            left : { block : 'yajsh', content : 'var a = 1;\nvar b = 2;\nvar c = 3;' },
                            right : { block : 'yajsh', content : 'var a = 1\n  , b = 2\n  , c = 3' }
                        },
                    ],
                    { block : 'slide', mods : { image: true }, image : 'shapes_5.jpg' },
                {
                    block : 'slide',
                    mods : { image: true },
                    image : 'shapes_6.jpg',
                    content : [
                        {
                            tag : 'h2',
                            content : [
                                'you can personalise code ',
                                { block : 'text-fx', mods : { type : 'case' }, content : 'shape' }
                            ]
                        },
                        { tag : 'h2', content : 'for different viewers' },
                        {
                            tag : 'h1',
                            content : [
                                'as well as ',
                                { block : 'text-fx', mods : { type : 'color' }, content : 'highlighting' },
                                '!'
                            ]
                        }
                    ]
                },
            [
                { tag : 'h1', content : 'Thank you!' },
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

