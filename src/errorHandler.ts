import errors, { FeathersError } from '@feathersjs/errors'
import Stripe from 'stripe'

type Error = FeathersError | Stripe.StripeError

const isStripeError = (error: Error): error is Stripe.StripeError =>
	error.hasOwnProperty('type')

export default (error: FeathersError | Stripe.StripeError) => {
	let feathersError = error

	if (isStripeError(error)) {
		switch (error.type) {
			case 'StripeCardError':
				// A declined card error
				feathersError = new errors.PaymentError(error, error)
				break
			case 'StripeInvalidRequestError':
				// Invalid parameters were supplied to Stripe's API
				feathersError = new errors.BadRequest(error, error)
				break
			case 'StripeAPIError':
				// An error occurred internally with Stripe's API
				feathersError = new errors.Unavailable(error, error)
				break
			case 'StripeConnectionError':
				// Some kind of error occurred during the HTTPS communication
				feathersError = new errors.Unavailable(error, error)
				break
			case 'StripeAuthenticationError':
				// You probably used an incorrect API key
				feathersError = new errors.NotAuthenticated(error, error)
				break
			default:
				feathersError = new errors.GeneralError(
					'Unknown Payment Gateway Error',
					error
				)
		}
	}

	return Promise.reject(feathersError)
}
