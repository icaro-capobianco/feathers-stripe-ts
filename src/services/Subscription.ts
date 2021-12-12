import { Params } from '@feathersjs/feathers'
import { Stripe } from 'stripe'
import errorHandler from '../errorHandler'
import normalizeQuery from '../normalizeQuery'
import Base from './base'

export default class Service extends Base {
	find = (params: Params) =>
		this.stripe.subscriptions
			.list(normalizeQuery(params))
			.then(res => res.data)
			.catch(errorHandler)

	get = (id: string) =>
		this.stripe.subscriptions.retrieve(id).catch(errorHandler)

	create = (data: Stripe.SubscriptionCreateParams) =>
		this.stripe.subscriptions.create(data).catch(errorHandler)

	patch = (...args: [any, any]) => this.update(...args)

	update = (id: string, data: any) =>
		this.stripe.subscriptions.update(id, data).catch(errorHandler)

	remove = (id: string, params: Params) =>
		this.stripe.subscriptions.del(id, params.stripe).catch(errorHandler)
}
