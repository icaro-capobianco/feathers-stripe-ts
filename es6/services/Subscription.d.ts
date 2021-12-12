import { Params } from '@feathersjs/feathers';
import { Stripe } from 'stripe';
import Base from './base';
export default class Service extends Base {
    find: (params: Params) => Promise<Stripe.Subscription[]>;
    get: (id: string) => Promise<Stripe.Response<Stripe.Subscription>>;
    create: (data: Stripe.SubscriptionCreateParams) => Promise<Stripe.Response<Stripe.Subscription>>;
    patch: (args_0: any, args_1: any) => Promise<Stripe.Response<Stripe.Subscription>>;
    update: (id: string, data: any) => Promise<Stripe.Response<Stripe.Subscription>>;
    remove: (id: string, params: Params) => Promise<Stripe.Response<Stripe.Subscription>>;
}
