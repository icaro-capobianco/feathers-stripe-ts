import errors from '@feathersjs/errors';
const isStripeError = (error) => error.hasOwnProperty('type');
export default (error) => {
    let feathersError = error;
    if (isStripeError(error)) {
        switch (error.type) {
            case 'StripeCardError':
                // A declined card error
                feathersError = new errors.PaymentError(error, error);
                break;
            case 'StripeInvalidRequestError':
                // Invalid parameters were supplied to Stripe's API
                feathersError = new errors.BadRequest(error, error);
                break;
            case 'StripeAPIError':
                // An error occurred internally with Stripe's API
                feathersError = new errors.Unavailable(error, error);
                break;
            case 'StripeConnectionError':
                // Some kind of error occurred during the HTTPS communication
                feathersError = new errors.Unavailable(error, error);
                break;
            case 'StripeAuthenticationError':
                // You probably used an incorrect API key
                feathersError = new errors.NotAuthenticated(error, error);
                break;
            default:
                feathersError = new errors.GeneralError('Unknown Payment Gateway Error', error);
        }
    }
    return Promise.reject(feathersError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQXlCLE1BQU0sb0JBQW9CLENBQUE7QUFLMUQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQStCLEVBQUUsQ0FDbkUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUU3QixlQUFlLENBQUMsS0FBeUMsRUFBRSxFQUFFO0lBQzVELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQTtJQUV6QixJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDbkIsS0FBSyxpQkFBaUI7Z0JBQ3JCLHdCQUF3QjtnQkFDeEIsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3JELE1BQUs7WUFDTixLQUFLLDJCQUEyQjtnQkFDL0IsbURBQW1EO2dCQUNuRCxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDbkQsTUFBSztZQUNOLEtBQUssZ0JBQWdCO2dCQUNwQixpREFBaUQ7Z0JBQ2pELGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUNwRCxNQUFLO1lBQ04sS0FBSyx1QkFBdUI7Z0JBQzNCLDZEQUE2RDtnQkFDN0QsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3BELE1BQUs7WUFDTixLQUFLLDJCQUEyQjtnQkFDL0IseUNBQXlDO2dCQUN6QyxhQUFhLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN6RCxNQUFLO1lBQ047Z0JBQ0MsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FDdEMsK0JBQStCLEVBQy9CLEtBQUssQ0FDTCxDQUFBO1NBQ0Y7S0FDRDtJQUVELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUEifQ==