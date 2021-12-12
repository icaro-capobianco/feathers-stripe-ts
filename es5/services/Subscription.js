"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler_1 = __importDefault(require("../errorHandler"));
var normalizeQuery_1 = __importDefault(require("../normalizeQuery"));
var base_1 = __importDefault(require("./base"));
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.find = function (params) {
            return _this.stripe.subscriptions
                .list((0, normalizeQuery_1.default)(params))
                .then(function (res) { return res.data; })
                .catch(errorHandler_1.default);
        };
        _this.get = function (id) {
            return _this.stripe.subscriptions.retrieve(id).catch(errorHandler_1.default);
        };
        _this.create = function (data) {
            return _this.stripe.subscriptions.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.subscriptions.update(id, data).catch(errorHandler_1.default);
        };
        _this.remove = function (id, params) {
            return _this.stripe.subscriptions.del(id, params.stripe).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL1N1YnNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlFQUEwQztBQUMxQyxxRUFBOEM7QUFDOUMsZ0RBQXlCO0FBRXpCO0lBQXFDLDJCQUFJO0lBQXpDO1FBQUEscUVBb0JDO1FBbkJBLFVBQUksR0FBRyxVQUFDLE1BQWM7WUFDckIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7aUJBQ3ZCLElBQUksQ0FBQyxJQUFBLHdCQUFjLEVBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxDQUFDO2lCQUNyQixLQUFLLENBQUMsc0JBQVksQ0FBQztRQUhyQixDQUdxQixDQUFBO1FBRXRCLFNBQUcsR0FBRyxVQUFDLEVBQVU7WUFDaEIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBMUQsQ0FBMEQsQ0FBQTtRQUUzRCxZQUFNLEdBQUcsVUFBQyxJQUFxQztZQUM5QyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUExRCxDQUEwRCxDQUFBO1FBRTNELFdBQUssR0FBRztZQUFDLGNBQW1CO2lCQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7Z0JBQW5CLHlCQUFtQjs7WUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLE9BQVgsS0FBSSxFQUFXLElBQUk7UUFBbkIsQ0FBb0IsQ0FBQTtRQUVyRCxZQUFNLEdBQUcsVUFBQyxFQUFVLEVBQUUsSUFBUztZQUM5QixPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBOUQsQ0FBOEQsQ0FBQTtRQUUvRCxZQUFNLEdBQUcsVUFBQyxFQUFVLEVBQUUsTUFBYztZQUNuQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQXBFLENBQW9FLENBQUE7O0lBQ3RFLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFxQyxjQUFJLEdBb0J4QyJ9