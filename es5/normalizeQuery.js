"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (params) {
    var query = Object.assign({}, params.query);
    if (query.$limit) {
        query.limit = query.$limit;
        delete query.$limit;
    }
    return query;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbm9ybWFsaXplUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQkFBZSxVQUFDLE1BQWM7SUFDN0IsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTdDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNqQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFBO0tBQ25CO0lBRUQsT0FBTyxLQUFLLENBQUE7QUFDYixDQUFDLEVBQUEifQ==