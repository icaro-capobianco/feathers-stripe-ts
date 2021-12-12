import { Params } from '@feathersjs/feathers'
import { Stripe } from 'stripe'
import errorHandler from '../errorHandler'
import normalizeQuery from '../normalizeQuery'
import Base from './base'

export default class Service extends Base {
	find = (params: Params) =>
		this.stripe.paymentIntents
			.list(normalizeQuery(params))
			.then(res => res.data)
			.catch(errorHandler)

	get = (id: string) => this.stripe.paymentIntents.retrieve(id).catch(errorHandler)

	create = (data: Stripe.PaymentIntentCreateParams) =>
		this.stripe.paymentIntents.create(data).catch(errorHandler)

	patch = (...args: [any, any]) => this.update(...args)

	update = (id: string, data: any) =>
		this.stripe.paymentIntents.update(id, data).catch(errorHandler)
}
