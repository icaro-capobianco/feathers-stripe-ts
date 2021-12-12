import { Params } from '@feathersjs/feathers';
import { Stripe } from 'stripe';
import Base from './base';
export default class Service extends Base {
    find: (params: Params) => Promise<Stripe.Response<Stripe.ApiList<Stripe.Customer>>>;
    get: (id: string) => Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>>;
    create: (data: Stripe.CustomerCreateParams) => Promise<Stripe.Response<Stripe.Customer>>;
    patch: (args_0: any, args_1: any) => Promise<Stripe.Response<Stripe.Customer>>;
    update: (id: string, data: any) => Promise<Stripe.Response<Stripe.Customer>>;
    remove: (id: string, params: Params) => Promise<Stripe.Response<Stripe.DeletedCustomer>>;
}
