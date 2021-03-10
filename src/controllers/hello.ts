import {Middleware} from "koa";
import {database as db} from "../resources";

export const greet: Middleware = async (ctx, next) => {
    let query = await db.query('select now()', []);
    ctx.body = {
        message: query
    };
    await next();
};

export const slander: Middleware = async (ctx, next) => {
    ctx.body = {
        message: 'You smell funny'
    };
    await next();
};
