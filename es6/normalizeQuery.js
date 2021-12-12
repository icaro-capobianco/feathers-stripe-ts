export default (params) => {
    const query = Object.assign({}, params.query);
    if (query.$limit) {
        query.limit = query.$limit;
        delete query.$limit;
    }
    return query;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbm9ybWFsaXplUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsZUFBZSxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQTtLQUNuQjtJQUVELE9BQU8sS0FBSyxDQUFBO0FBQ2IsQ0FBQyxDQUFBIn0=