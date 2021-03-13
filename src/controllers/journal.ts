import {Middleware} from "koa";

// TODO list method
export const list: Middleware = async(ctx, next) => {
    ctx.body = "list"
}

// TODO add method
export const add: Middleware = async(ctx, next) => {
    ctx.body = "add"
};

// TODO remove method
export const remove: Middleware = async (ctx, next) => {

};

// TODO add Entry method
export const addEntry: Middleware = async (ctx, next) => {

};

// TODO lock journal entry method (might not need)
export const lockEntry: Middleware = async(ctx, next) => {

};

// TODO get entry list, date range to load specific entries
export const getEntries: Middleware = async (ctx, next) => {

};
