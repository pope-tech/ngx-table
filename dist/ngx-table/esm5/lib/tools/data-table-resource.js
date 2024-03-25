var DataTableResource = /** @class */ (function () {
    function DataTableResource(items) {
        this.items = items;
    }
    DataTableResource.prototype.query = function (params, filter) {
        var result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort(function (a, b) {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            }
            else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(result); });
        });
    };
    DataTableResource.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.items.length); });
        });
    };
    return DataTableResource;
}());
export { DataTableResource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUVFLDJCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUM5QixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLE1BQXVCLEVBQUUsTUFBd0Q7UUFFckYsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLG1FQUFtRTtTQUNqRztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBa0IsRUFBRSxDQUFrQjtnQkFDakQsSUFBSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN4QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDRjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRTtTQUNGO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxVQUFVLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhVGFibGVQYXJhbXN9IGZyb20gJy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSZXNvdXJjZTxUPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogVFtdKSB7XG4gIH1cblxuICBxdWVyeShwYXJhbXM6IERhdGFUYWJsZVBhcmFtcywgZmlsdGVyPzogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBUW10pID0+IGJvb2xlYW4pOiBQcm9taXNlPFRbXT4ge1xuXG4gICAgbGV0IHJlc3VsdDogVFtdID0gW107XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5maWx0ZXIoZmlsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5zbGljZSgpOyAvLyBzaGFsbG93IGNvcHkgdG8gdXNlIGZvciBzb3J0aW5nIGluc3RlYWQgb2YgY2hhbmdpbmcgdGhlIG9yaWdpbmFsXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zb3J0QnkpIHtcbiAgICAgIHJlc3VsdC5zb3J0KChhOiBEYXRhVGFibGVQYXJhbXMsIGI6IERhdGFUYWJsZVBhcmFtcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFbcGFyYW1zLnNvcnRCeV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0ubG9jYWxlQ29tcGFyZShiW3BhcmFtcy5zb3J0QnldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XSAtIGJbcGFyYW1zLnNvcnRCeV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcmFtcy5zb3J0QXNjID09PSBmYWxzZSkge1xuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFyYW1zLmxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5vZmZzZXQgKyBwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUocmVzdWx0KSk7XG4gICAgfSk7XG4gIH1cblxuICBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGhpcy5pdGVtcy5sZW5ndGgpKTtcbiAgICB9KTtcblxuICB9XG59XG4iXX0=