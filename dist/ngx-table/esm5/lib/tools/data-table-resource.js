/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
DataTableResource = /** @class */ (function () {
    function DataTableResource(items) {
        this.items = items;
    }
    /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    DataTableResource.prototype.query = /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    function (params, filter) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    DataTableResource.prototype.count = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.items.length); });
        });
    };
    return DataTableResource;
}());
/**
 * @template T
 */
export { DataTableResource };
if (false) {
    /** @type {?} */
    DataTableResource.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7O0FBQUE7SUFFRSwyQkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7S0FDN0I7Ozs7OztJQUVELGlDQUFLOzs7OztJQUFMLFVBQU0sTUFBdUIsRUFBRSxNQUF3RDs7UUFFckYsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQWtCLEVBQUUsQ0FBa0I7Z0JBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QzthQUNGLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEU7U0FDRjtRQUVELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1NBQ25DLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsaUNBQUs7OztJQUFMO1FBQUEsaUJBS0M7UUFKQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxVQUFVLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0tBRUo7NEJBL0NIO0lBZ0RDLENBQUE7Ozs7QUE3Q0QsNkJBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhVGFibGVQYXJhbXN9IGZyb20gJy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSZXNvdXJjZTxUPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogVFtdKSB7XG4gIH1cblxuICBxdWVyeShwYXJhbXM6IERhdGFUYWJsZVBhcmFtcywgZmlsdGVyPzogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBUW10pID0+IGJvb2xlYW4pOiBQcm9taXNlPFRbXT4ge1xuXG4gICAgbGV0IHJlc3VsdDogVFtdID0gW107XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5maWx0ZXIoZmlsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5zbGljZSgpOyAvLyBzaGFsbG93IGNvcHkgdG8gdXNlIGZvciBzb3J0aW5nIGluc3RlYWQgb2YgY2hhbmdpbmcgdGhlIG9yaWdpbmFsXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zb3J0QnkpIHtcbiAgICAgIHJlc3VsdC5zb3J0KChhOiBEYXRhVGFibGVQYXJhbXMsIGI6IERhdGFUYWJsZVBhcmFtcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFbcGFyYW1zLnNvcnRCeV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0ubG9jYWxlQ29tcGFyZShiW3BhcmFtcy5zb3J0QnldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XSAtIGJbcGFyYW1zLnNvcnRCeV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcmFtcy5zb3J0QXNjID09PSBmYWxzZSkge1xuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFyYW1zLmxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5vZmZzZXQgKyBwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUocmVzdWx0KSk7XG4gICAgfSk7XG4gIH1cblxuICBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGhpcy5pdGVtcy5sZW5ndGgpKTtcbiAgICB9KTtcblxuICB9XG59XG4iXX0=