import errorHandler from '../errorHandler';
import normalizeQuery from '../normalizeQuery';
import Base from './base';
export default class Service extends Base {
    constructor() {
        super(...arguments);
        this.find = (params) => this.stripe.paymentIntents
            .list(normalizeQuery(params))
            .then(res => res.data)
            .catch(errorHandler);
        this.get = (id) => this.stripe.paymentIntents.retrieve(id).catch(errorHandler);
        this.create = (data) => this.stripe.paymentIntents.create(data).catch(errorHandler);
        this.patch = (...args) => this.update(...args);
        this.update = (id, data) => this.stripe.paymentIntents.update(id, data).catch(errorHandler);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9QYXltZW50SW50ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sY0FBYyxNQUFNLG1CQUFtQixDQUFBO0FBQzlDLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQTtBQUV6QixNQUFNLENBQUMsT0FBTyxPQUFPLE9BQVEsU0FBUSxJQUFJO0lBQXpDOztRQUNDLFNBQUksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYzthQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXRCLFFBQUcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVqRixXQUFNLEdBQUcsQ0FBQyxJQUFzQyxFQUFFLEVBQUUsQ0FDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU1RCxVQUFLLEdBQUcsQ0FBQyxHQUFHLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUVyRCxXQUFNLEdBQUcsQ0FBQyxFQUFVLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakUsQ0FBQztDQUFBIn0=