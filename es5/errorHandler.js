"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __importDefault(require("@feathersjs/errors"));
var isStripeError = function (error) {
    return error.hasOwnProperty('type');
};
exports.default = (function (error) {
    var feathersError = error;
    if (isStripeError(error)) {
        switch (error.type) {
            case 'StripeCardError':
                // A declined card error
                feathersError = new errors_1.default.PaymentError(error, error);
                break;
            case 'StripeInvalidRequestError':
                // Invalid parameters were supplied to Stripe's API
                feathersError = new errors_1.default.BadRequest(error, error);
                break;
            case 'StripeAPIError':
                // An error occurred internally with Stripe's API
                feathersError = new errors_1.default.Unavailable(error, error);
                break;
            case 'StripeConnectionError':
                // Some kind of error occurred during the HTTPS communication
                feathersError = new errors_1.default.Unavailable(error, error);
                break;
            case 'StripeAuthenticationError':
                // You probably used an incorrect API key
                feathersError = new errors_1.default.NotAuthenticated(error, error);
                break;
            default:
                feathersError = new errors_1.default.GeneralError('Unknown Payment Gateway Error', error);
        }
    }
    return Promise.reject(feathersError);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUEwRDtBQUsxRCxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQVk7SUFDbEMsT0FBQSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUE1QixDQUE0QixDQUFBO0FBRTdCLG1CQUFlLFVBQUMsS0FBeUM7SUFDeEQsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBRXpCLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLGlCQUFpQjtnQkFDckIsd0JBQXdCO2dCQUN4QixhQUFhLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3JELE1BQUs7WUFDTixLQUFLLDJCQUEyQjtnQkFDL0IsbURBQW1EO2dCQUNuRCxhQUFhLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ25ELE1BQUs7WUFDTixLQUFLLGdCQUFnQjtnQkFDcEIsaURBQWlEO2dCQUNqRCxhQUFhLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3BELE1BQUs7WUFDTixLQUFLLHVCQUF1QjtnQkFDM0IsNkRBQTZEO2dCQUM3RCxhQUFhLEdBQUcsSUFBSSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBQ3BELE1BQUs7WUFDTixLQUFLLDJCQUEyQjtnQkFDL0IseUNBQXlDO2dCQUN6QyxhQUFhLEdBQUcsSUFBSSxnQkFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDekQsTUFBSztZQUNOO2dCQUNDLGFBQWEsR0FBRyxJQUFJLGdCQUFNLENBQUMsWUFBWSxDQUN0QywrQkFBK0IsRUFDL0IsS0FBSyxDQUNMLENBQUE7U0FDRjtLQUNEO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsRUFBQSJ9