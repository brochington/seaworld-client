const fs = require('fs');
const _ = require('lodash');
const koa = require('koa');
const serve = require('koa-static');
const koaRouter = require('koa-router');
const logger = require('koa-logger');

const app = koa();
const router = koaRouter();
const port = process.env.PORT || 8081;

const templateFile = 'src/templates/index.html';
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

/* Routes */

router.get('/', function *() {
	this.body = template();
});

app.use(router.routes())
   .use(router.allowedMethods())
   .use(serve(__dirname + '/static'));

console.log("running on port", port);
console.log("__dirname", __dirname + '/static');

app.listen(port);
