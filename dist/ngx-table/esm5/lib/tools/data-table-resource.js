/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            result.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
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
        function (resolve, reject) {
            setTimeout((/**
             * @return {?}
             */
            function () { return resolve(result); }));
        }));
    };
    /**
     * @return {?}
     */
    DataTableResource.prototype.count = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            setTimeout((/**
             * @return {?}
             */
            function () { return resolve(_this.items.length); }));
        }));
    };
    return DataTableResource;
}());
/**
 * @template T
 */
export { DataTableResource };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataTableResource.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb3BldGVjaC9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJsaWIvdG9vbHMvZGF0YS10YWJsZS1yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7SUFFRSwyQkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsaUNBQUs7Ozs7O0lBQUwsVUFBTSxNQUF1QixFQUFFLE1BQXdEOztZQUVqRixNQUFNLEdBQVEsRUFBRTtRQUNwQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtRUFBbUU7U0FDakc7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFrQixFQUFFLENBQWtCO2dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Y7UUFFRCxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxFQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsaUNBQUs7OztJQUFMO1FBQUEsaUJBS0M7UUFKQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQzs7Ozs7Ozs7OztJQTNDYSxrQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFUYWJsZVBhcmFtc30gZnJvbSAnLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJlc291cmNlPFQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBUW10pIHtcbiAgfVxuXG4gIHF1ZXJ5KHBhcmFtczogRGF0YVRhYmxlUGFyYW1zLCBmaWx0ZXI/OiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IFRbXSkgPT4gYm9vbGVhbik6IFByb21pc2U8VFtdPiB7XG5cbiAgICBsZXQgcmVzdWx0OiBUW10gPSBbXTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLmZpbHRlcihmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLnNsaWNlKCk7IC8vIHNoYWxsb3cgY29weSB0byB1c2UgZm9yIHNvcnRpbmcgaW5zdGVhZCBvZiBjaGFuZ2luZyB0aGUgb3JpZ2luYWxcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNvcnRCeSkge1xuICAgICAgcmVzdWx0LnNvcnQoKGE6IERhdGFUYWJsZVBhcmFtcywgYjogRGF0YVRhYmxlUGFyYW1zKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYVtwYXJhbXMuc29ydEJ5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XS5sb2NhbGVDb21wYXJlKGJbcGFyYW1zLnNvcnRCeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldIC0gYltwYXJhbXMuc29ydEJ5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFyYW1zLnNvcnRBc2MgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJhbXMubGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcGFyYW1zLm9mZnNldCArIHBhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShyZXN1bHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0aGlzLml0ZW1zLmxlbmd0aCkpO1xuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==