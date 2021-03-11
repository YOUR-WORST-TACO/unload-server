import {Middleware} from "koa";
import {database as db} from '../resources';

export const add: Middleware = async(ctx, next) => {
    ctx.body = ctx.request.body;
    await next();
};

export const update: Middleware = async(ctx, next) => {

}

export const remove: Middleware = async(ctx, next) => {

}
