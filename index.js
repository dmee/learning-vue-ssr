const Vue = require('vue');
const Express = require('express');
const VueServerRenderer = require('vue-server-renderer');

let server = Express();
let renderer = VueServerRenderer.createRenderer();

let a = 1;
server.get('/', (req, res) => {
    a++;
    let app = new Vue({
        data: {
            url: req.url,
            state: a
        },
        template: `<div>
                        <div>访问的 URL 是： {{ url }</div>
                        <div>{{state}}</div>
                    </div>`
    });

    renderer.renderToString(app, (err, html) => {
        if (err) {
            console.info(err);
            res.status(500).end('Internal Server Error');
            return false;
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8"/>
                    <title>Hello</title>
                </head>
                <body>${html}</body>
            </html>
        `);
    });
});

server.listen(3000);