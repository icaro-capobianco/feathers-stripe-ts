import { Params } from '@feathersjs/feathers';
import { Stripe } from 'stripe';
import Base from './base';
export default class Service extends Base {
    find: (params: Params) => Promise<Stripe.Price[]>;
    get: (id: string) => Promise<Stripe.Response<Stripe.Price>>;
    create: (data: Stripe.PriceCreateParams) => Promise<Stripe.Response<Stripe.Price>>;
    patch: (args_0: any, args_1: any) => Promise<Stripe.Response<Stripe.Price>>;
    update: (id: string, data: any) => Promise<Stripe.Response<Stripe.Price>>;
}
