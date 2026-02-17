import { DataTableTranslations } from './data-table-translations.type';

export const defaultTranslations: DataTableTranslations = {
  headerReload: 'reload {title} table',
  headerColumnSelector: 'column selector - adds or removes columns from {title} table',
  headerColumnSelectorAdded: '{column_name} added to {title} table',
  headerColumnSelectorRemoved: '{column_name} removed from {title} table',
  indexColumn: 'index',
  selectColumn: 'select',
  selectRow: 'select {cell_content}',
  selectAllRows: 'select all rows',
  expandColumn: 'expand',
  expandRow: 'expand {cell_content}',
  sortedAscending: 'sorted by {header} ascending.',
  sortedDescending: 'sorted by {header} descending.',
  paginationLimit: 'Limit',
  paginationText: 'Results: {from} to {to} of {total}.',
  paginationTotalPages: 'of',
  firstPage: 'first page',
  prevPage: 'previous page',
  pageNumberLabel: 'Page',
  pageNumber: 'page number',
  pageNumberNofM: '({N} of {M})',
  nextPage: 'next page',
  lastPage: 'last page',
  loadingText: 'is loading.',
  loadedText: 'loaded.'
};
