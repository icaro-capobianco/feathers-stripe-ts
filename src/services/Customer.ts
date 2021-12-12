import { Params } from '@feathersjs/feathers'
import { Stripe } from 'stripe'
import errorHandler from '../errorHandler'
import normalizeQuery from '../normalizeQuery'
import Base from './base'

export default class Service extends Base {
	find = (params: Params) =>
		this.stripe.customers.list(normalizeQuery(params)).catch(errorHandler)

	get = (id: string) => this.stripe.customers.retrieve(id).catch(errorHandler)

	create = (data: Stripe.CustomerCreateParams) =>
		this.stripe.customers.create(data).catch(errorHandler)

	patch = (...args: [any, any]) => this.update(...args)

	update = (id: string, data: any) =>
		this.stripe.customers.update(id, data).catch(errorHandler)

	remove = (id: string, params: Params) =>
		this.stripe.customers.del(id, params.stripe).catch(errorHandler)
}
