import Koa from 'koa';
import serve from "koa-static";
const app = new Koa();
app.use(serve("dist", {}));
app.listen(3000);