/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            result.sort((a, b) => {
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
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result));
        });
    }
    /**
     * @return {?}
     */
    count() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });
    }
}
if (false) {
    /** @type {?} */
    DataTableResource.prototype.items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi90b29scy9kYXRhLXRhYmxlLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNOzs7O0lBRUosWUFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7S0FDN0I7Ozs7OztJQUVELEtBQUssQ0FBQyxNQUF1QixFQUFFLE1BQXdEOztRQUVyRixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBa0IsRUFBRSxDQUFrQixFQUFFLEVBQUU7Z0JBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QzthQUNGLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEU7U0FDRjtRQUVELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxLQUFLO1FBQ0gsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlDLENBQUMsQ0FBQztLQUVKO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFUYWJsZVBhcmFtc30gZnJvbSAnLi4vdHlwZXMvZGF0YS10YWJsZS1wYXJhbXMudHlwZSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZVJlc291cmNlPFQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBUW10pIHtcbiAgfVxuXG4gIHF1ZXJ5KHBhcmFtczogRGF0YVRhYmxlUGFyYW1zLCBmaWx0ZXI/OiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgaXRlbXM6IFRbXSkgPT4gYm9vbGVhbik6IFByb21pc2U8VFtdPiB7XG5cbiAgICBsZXQgcmVzdWx0OiBUW10gPSBbXTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLmZpbHRlcihmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLml0ZW1zLnNsaWNlKCk7IC8vIHNoYWxsb3cgY29weSB0byB1c2UgZm9yIHNvcnRpbmcgaW5zdGVhZCBvZiBjaGFuZ2luZyB0aGUgb3JpZ2luYWxcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNvcnRCeSkge1xuICAgICAgcmVzdWx0LnNvcnQoKGE6IERhdGFUYWJsZVBhcmFtcywgYjogRGF0YVRhYmxlUGFyYW1zKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYVtwYXJhbXMuc29ydEJ5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gYVtwYXJhbXMuc29ydEJ5XS5sb2NhbGVDb21wYXJlKGJbcGFyYW1zLnNvcnRCeV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBhW3BhcmFtcy5zb3J0QnldIC0gYltwYXJhbXMuc29ydEJ5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocGFyYW1zLnNvcnRBc2MgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJhbXMubGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocGFyYW1zLm9mZnNldCwgcGFyYW1zLm9mZnNldCArIHBhcmFtcy5saW1pdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShyZXN1bHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh0aGlzLml0ZW1zLmxlbmd0aCkpO1xuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==