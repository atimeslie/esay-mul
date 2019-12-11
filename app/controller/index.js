'use strict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {

    async ssr() {
        await this.ctx.render('index/index.js');
    }

    async setCookie() {
        const { ctx } = this
        let url = `http://${ctx.app.config.apiHost}` +"/public/parseUser?passport="+ encodeURIComponent(ctx.query.passport) + "&targetUrl=" +encodeURIComponent(ctx.query.targetUrl)
        const { status, headers, res } = await ctx.curl(url, {
            method: ctx.method,
            contentType: ctx.method.toUpperCase() === 'POST' ? 'json' : undefined,
            data: ['POST', 'PUT'].includes(ctx.method.toUpperCase()) ? {
                ...ctx.request.body,
            } : null,
            dataType: 'json',
        })
        if (headers['set-cookie']) {
            ctx.cookies.set("SESSION", headers["set-cookie"][0].split(";")[0].replace(/SESSION=/,""));
        }
        let targetUrl = headers.location;
        ctx.unsafeRedirect(targetUrl)
    }
};

