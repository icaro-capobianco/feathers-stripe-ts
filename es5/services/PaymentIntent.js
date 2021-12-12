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
            return _this.stripe.paymentIntents
                .list((0, normalizeQuery_1.default)(params))
                .then(function (res) { return res.data; })
                .catch(errorHandler_1.default);
        };
        _this.get = function (id) { return _this.stripe.paymentIntents.retrieve(id).catch(errorHandler_1.default); };
        _this.create = function (data) {
            return _this.stripe.paymentIntents.create(data).catch(errorHandler_1.default);
        };
        _this.patch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.update.apply(_this, args);
        };
        _this.update = function (id, data) {
            return _this.stripe.paymentIntents.update(id, data).catch(errorHandler_1.default);
        };
        return _this;
    }
    return Service;
}(base_1.default));
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9QYXltZW50SW50ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTBDO0FBQzFDLHFFQUE4QztBQUM5QyxnREFBeUI7QUFFekI7SUFBcUMsMkJBQUk7SUFBekM7UUFBQSxxRUFnQkM7UUFmQSxVQUFJLEdBQUcsVUFBQyxNQUFjO1lBQ3JCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjO2lCQUN4QixJQUFJLENBQUMsSUFBQSx3QkFBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QixJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQztpQkFDckIsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFIckIsQ0FHcUIsQ0FBQTtRQUV0QixTQUFHLEdBQUcsVUFBQyxFQUFVLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUMsRUFBM0QsQ0FBMkQsQ0FBQTtRQUVqRixZQUFNLEdBQUcsVUFBQyxJQUFzQztZQUMvQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQVksQ0FBQztRQUEzRCxDQUEyRCxDQUFBO1FBRTVELFdBQUssR0FBRztZQUFDLGNBQW1CO2lCQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7Z0JBQW5CLHlCQUFtQjs7WUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLE9BQVgsS0FBSSxFQUFXLElBQUk7UUFBbkIsQ0FBb0IsQ0FBQTtRQUVyRCxZQUFNLEdBQUcsVUFBQyxFQUFVLEVBQUUsSUFBUztZQUM5QixPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHNCQUFZLENBQUM7UUFBL0QsQ0FBK0QsQ0FBQTs7SUFDakUsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBaEJELENBQXFDLGNBQUksR0FnQnhDIn0=