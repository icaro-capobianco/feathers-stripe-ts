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
            return _this.stripe.customers.list((0, normalizeQuery_1.default)(params)).catch(errorHandler_1.default);
        };
        _this.get = function (id) { return _this.stripe.customers.retrieve(id).catch(errorHandler_1.default); };
        _this.create = function (data) {
            return _this.stripe.customers.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.customers.update(id, data).catch(errorHandler_1.default);
        };
        _this.remove = function (id, params) {
            return _this.stripe.customers.del(id, params.stripe).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvQ3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpRUFBMEM7QUFDMUMscUVBQThDO0FBQzlDLGdEQUF5QjtBQUV6QjtJQUFxQywyQkFBSTtJQUF6QztRQUFBLHFFQWdCQztRQWZBLFVBQUksR0FBRyxVQUFDLE1BQWM7WUFDckIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBQSx3QkFBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQTtRQUV2RSxTQUFHLEdBQUcsVUFBQyxFQUFVLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQTtRQUU1RSxZQUFNLEdBQUcsVUFBQyxJQUFpQztZQUMxQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUF0RCxDQUFzRCxDQUFBO1FBRXZELFdBQUssR0FBRztZQUFDLGNBQW1CO2lCQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7Z0JBQW5CLHlCQUFtQjs7WUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLE9BQVgsS0FBSSxFQUFXLElBQUk7UUFBbkIsQ0FBb0IsQ0FBQTtRQUVyRCxZQUFNLEdBQUcsVUFBQyxFQUFVLEVBQUUsSUFBUztZQUM5QixPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBMUQsQ0FBMEQsQ0FBQTtRQUUzRCxZQUFNLEdBQUcsVUFBQyxFQUFVLEVBQUUsTUFBYztZQUNuQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQWhFLENBQWdFLENBQUE7O0lBQ2xFLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFxQyxjQUFJLEdBZ0J4QyJ9