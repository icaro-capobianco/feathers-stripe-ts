import { Params } from '@feathersjs/feathers'
export default (params: Params) => {
	const query = Object.assign({}, params.query)

	if (query.$limit) {
		query.limit = query.$limit
		delete query.$limit
	}

	return query
}
