import Stripe from 'stripe';
export default class BaseService {
    stripe: Stripe;
    constructor(stripe: Stripe);
}
