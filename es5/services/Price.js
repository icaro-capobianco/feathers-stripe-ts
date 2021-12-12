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
            return _this.stripe.prices
                .list((0, normalizeQuery_1.default)(params))
                .then(function (res) { return res.data; })
                .catch(errorHandler_1.default);
        };
        _this.get = function (id) { return _this.stripe.prices.retrieve(id).catch(errorHandler_1.default); };
        _this.create = function (data) {
            return _this.stripe.prices.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.prices.update(id, data).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvUHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpRUFBMEM7QUFDMUMscUVBQThDO0FBQzlDLGdEQUF5QjtBQUV6QjtJQUFxQywyQkFBSTtJQUF6QztRQUFBLHFFQWdCQztRQWZBLFVBQUksR0FBRyxVQUFDLE1BQWM7WUFDckIsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07aUJBQ2hCLElBQUksQ0FBQyxJQUFBLHdCQUFjLEVBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQVIsQ0FBUSxDQUFDO2lCQUNyQixLQUFLLENBQUMsc0JBQVksQ0FBQztRQUhyQixDQUdxQixDQUFBO1FBRXRCLFNBQUcsR0FBRyxVQUFDLEVBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQyxFQUFuRCxDQUFtRCxDQUFBO1FBRXpFLFlBQU0sR0FBRyxVQUFDLElBQThCO1lBQ3ZDLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBWSxDQUFDO1FBQW5ELENBQW1ELENBQUE7UUFFcEQsV0FBSyxHQUFHO1lBQUMsY0FBbUI7aUJBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtnQkFBbkIseUJBQW1COztZQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sT0FBWCxLQUFJLEVBQVcsSUFBSTtRQUFuQixDQUFvQixDQUFBO1FBRXJELFlBQU0sR0FBRyxVQUFDLEVBQVUsRUFBRSxJQUFTO1lBQzlCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUF2RCxDQUF1RCxDQUFBOztJQUN6RCxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFoQkQsQ0FBcUMsY0FBSSxHQWdCeEMifQ==