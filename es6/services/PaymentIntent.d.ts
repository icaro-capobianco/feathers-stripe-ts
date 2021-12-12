import { Params } from '@feathersjs/feathers';
import { Stripe } from 'stripe';
import Base from './base';
export default class Service extends Base {
    find: (params: Params) => Promise<Stripe.PaymentIntent[]>;
    get: (id: string) => Promise<Stripe.Response<Stripe.PaymentIntent>>;
    create: (data: Stripe.PaymentIntentCreateParams) => Promise<Stripe.Response<Stripe.PaymentIntent>>;
    patch: (args_0: any, args_1: any) => Promise<Stripe.Response<Stripe.PaymentIntent>>;
    update: (id: string, data: any) => Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
