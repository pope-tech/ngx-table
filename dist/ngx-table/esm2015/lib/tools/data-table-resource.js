/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class DataTableResource {
    /**
     * @param {?} items
     */
    constructor(items) {
        this.items = items;
    }
    /**
     * @param {?} params
     * @param {?=} filter
     * @return {?}
     */
    query(params, filter) {
        /** @type {?} */
        let result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            setTimeout((/**
             * @return {?}
             */
            () => resolve(result)));
        }));
    }
    /**
     * @return {?}
     */
    count() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            setTimeout((/**
             * @return {?}
             */
            () => resolve(this.items.length)));
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableResource.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUM5QixDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsTUFBdUIsRUFBRSxNQUF3RDs7WUFFakYsTUFBTSxHQUFRLEVBQUU7UUFDcEIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsbUVBQW1FO1NBQ2pHO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJOzs7OztZQUFDLENBQUMsQ0FBa0IsRUFBRSxDQUFrQixFQUFFLEVBQUU7Z0JBQ3JELElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDeEMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QztZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDNUIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQy9CLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEU7U0FDRjtRQUVELE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLFVBQVU7OztZQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQztDQUNGOzs7Ozs7SUEzQ2Esa0NBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhVGFibGVQYXJhbXN9IGZyb20gJy4uL3R5cGVzL2RhdGEtdGFibGUtcGFyYW1zLnR5cGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVSZXNvdXJjZTxUPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogVFtdKSB7XG4gIH1cblxuICBxdWVyeShwYXJhbXM6IERhdGFUYWJsZVBhcmFtcywgZmlsdGVyPzogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBUW10pID0+IGJvb2xlYW4pOiBQcm9taXNlPFRbXT4ge1xuXG4gICAgbGV0IHJlc3VsdDogVFtdID0gW107XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5maWx0ZXIoZmlsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pdGVtcy5zbGljZSgpOyAvLyBzaGFsbG93IGNvcHkgdG8gdXNlIGZvciBzb3J0aW5nIGluc3RlYWQgb2YgY2hhbmdpbmcgdGhlIG9yaWdpbmFsXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zb3J0QnkpIHtcbiAgICAgIHJlc3VsdC5zb3J0KChhOiBEYXRhVGFibGVQYXJhbXMsIGI6IERhdGFUYWJsZVBhcmFtcykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGFbcGFyYW1zLnNvcnRCeV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGFbcGFyYW1zLnNvcnRCeV0ubG9jYWxlQ29tcGFyZShiW3BhcmFtcy5zb3J0QnldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XSAtIGJbcGFyYW1zLnNvcnRCeV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBhcmFtcy5zb3J0QXNjID09PSBmYWxzZSkge1xuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFyYW1zLmxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5vZmZzZXQgKyBwYXJhbXMubGltaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUocmVzdWx0KSk7XG4gICAgfSk7XG4gIH1cblxuICBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodGhpcy5pdGVtcy5sZW5ndGgpKTtcbiAgICB9KTtcblxuICB9XG59XG4iXX0=